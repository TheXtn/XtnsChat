import {getSession} from "next-auth/client";
import {ConnectToDb} from '../../../lib/db'
import {hashpassword, verif} from "../../../lib/auth";

export default async function handler(req,res){
    try{
        if (req.method !== 'PATCH'){
        res.status(301).json({
            message:'Method Not Allowed'
        })
        return
    }
    const session=await getSession({req:req})
    if (!session){
        res.status(401).json({
            message:'Not Authentificated !'
        })
        return
    }
    const userEmail= await session.user.email
    const oldpass=req.body.oldPassword
    const newpass=req.body.newPassword
    if (!oldpass || !newpass || newpass===oldpass){
        res.status(400).json({
            message:'New password musnt be the old one'
        })
        res.end()
    }
    const client=await ConnectToDb()
    const users=client.db().collection('users')
    const user= await users.findOne({email:userEmail})
    if (!user){
        res.status(404).json({
            message:'user not found'
        })
        return
    }
    const currentPassword=user.password
    const passwordtest= await verif(oldpass,currentPassword)

    if (passwordtest==false){
        res.status(403).json({
            message:'Old password is wrong'
        })
        return
    }

    const hashed=await hashpassword(newpass)
    const result= await users.updateOne({
        email:userEmail
    },{
        $set:{password:hashed}
    })
    if (result){
        res.status(200).json({
            message:'Password changed .'
        })
    }
    }
    catch(error) {
        console.log(error)
    }


}