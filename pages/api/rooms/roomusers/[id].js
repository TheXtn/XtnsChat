import {ConnectToDb} from '../../../../lib/db'
export default  async function handle(req, res) {
     const id=req.query.id
    const client = await ConnectToDb()

    const room = await client.db().collection('privaterooms').findOne({link:id})
    res.status(200).json({
        message:[room.users]
    })
}