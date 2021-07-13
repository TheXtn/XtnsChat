import {ConnectToDb} from '../../../lib/db'
export default  async function handle(req, res) {
    const client = await ConnectToDb()
    const roomsId= await client.db().collection('privaterooms').find({}).toArray()
    const IDS=[]

    roomsId.map((room)=>{
        IDS.push(room.link)
    })
    res.status(200).json({
        message:IDS,
    })
}


