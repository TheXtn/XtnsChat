import {ConnectToDb} from '../../../../lib/db'
import {getSession} from "next-auth/client";

export default async function handler(req,res){
    const id=req.query.id
    const {name,email}=req.body
     if (req.method!=='POST'){
        res.status(301).json({
            message:'method not allowed'
        })
        return}



       const client=await ConnectToDb();

       const db=client.db()

        const room={link:id}
      const  roomarray= await db.collection("privaterooms").findOne(room)
    if (roomarray.users[name]==email){
        res.status(200).json({
            message:true
        })
        return
    }
    else {
        res.status(400).json({
            message:false
        })
        return
    }

    }

