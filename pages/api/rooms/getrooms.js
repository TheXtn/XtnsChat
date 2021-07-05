import {ConnectToDb} from '../../../lib/db'
export default  async function handle(req, res) {
    const client = await ConnectToDb()

    const rooms = await client.db().collection('privaterooms').find({}).toArray()
    if (rooms) {
        res.status(200).json({
            data: rooms
        })
    } else {
        res.status(400).json({
            data: [{
                message: 'error'
            }]
        })
    }
}


