import {ConnectToDb} from '../../../lib/db'
import {hashpassword} from "../../../lib/auth";
export default async function handler(req,res){
    if (req.method==='GET'){
        res.status(301).json({
            message:'method not allowed'
        })
        return}
    else {
            const data=req.body
        const {email,password,name}=data;
    if (!email || !password || !name){
        res.status(400).json({
            'message':'Invalid data'
        })
        return
    }
   const client=await ConnectToDb();

   const db=client.db()
        const finduer= await db.collection('users').findOne({email:email})
        if (finduer){
            res.status(402).json({
                'message':'User Exist'
            })
            client.close()
            return
        }
    const hashedpass= await hashpassword(password)
    db.collection('users').insertOne({
        email:email,
        name:name,
        password:hashedpass
    })
    res.status(200).json({
        message:'User created'
    })
        client.close()
        return
    }
    }

