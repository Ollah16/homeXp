import mongoose from 'mongoose'
const { connect } = mongoose

const connection: any = {}

export const connectToDb = async () => {
    try {
        if (!process.env.MONGO_URI || connection.isConnected) return
        let db = await connect(process.env.MONGO_URI)
        connection.isConnected = db.connections[0].readyState
    } catch (err) {
        console.error(err)
    }
}