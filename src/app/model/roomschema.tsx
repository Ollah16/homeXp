import mongoose from "mongoose"
const { Schema } = mongoose

const roomSchema = new Schema({
    washingMachine: {
        type: Array,
        unique: true,
        required: true
    }
})

