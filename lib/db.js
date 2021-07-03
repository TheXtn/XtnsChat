import {MongoClient} from 'mongodb'
export async function ConnectToDb(){
 const client=await MongoClient.connect(process.env.MONGOURL)
    return client
}