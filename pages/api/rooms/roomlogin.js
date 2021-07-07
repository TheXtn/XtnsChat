import {ConnectToDb} from '../../../lib/db'
import {hashpassword} from "../../../lib/auth";
import {getSession} from "next-auth/client";

export default async function handler(req,res){
    const session= await getSession({req:req})
      const data=req.body
        const {roomid,password}=data;
    if(!session){
        res.status(400).json({
            message:'Not authenticated'
        })
        return
    }
    if (req.method==='GET'){
        res.status(301).json({
            message:'method not allowed'
        })
        return}
    else {

    if (!roomid || !password ){
        res.status(400).json({
            'message':'Invalid data'
        })
        return
    }
   const client=await ConnectToDb();

       const db=client.db()
            const table="users."+session.user.name
        const room={link:roomid}
        const roompwd=await db.collection("privaterooms").findOne(room)

        if (password!==roompwd.pwd){
            res.status(400).json({
                message:"Wrong Password"
            })
            return;
        }
        const newvalues = { $set: {[table]:session.user.email  } };
        const ras=db.collection("privaterooms").updateOne(room,newvalues)
            if (ras){
                res.status(200).json({
                    message:'Successfully joined'
                })
                 return;
            }

    }
    }

