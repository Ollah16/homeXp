'use server'
import { connectToDb } from "../model/connectdb"
import bcrypt, { genSalt } from 'bcrypt'
import { getUserModel } from "../model/schema";

interface Message {
    [key: string]: string
}

const User = getUserModel();

export const getFormData = async (formData: any) => {
    connectToDb()

    const { unit, password, email } = Object.fromEntries(formData)
    try {
        if (unit && email && password) {
            const userVer = await User.findOne({ email })
            if (userVer?.unit || userVer?.email) return { error: 'user exists' }
            const geNSalt = await genSalt(10)
            const hashedPass = await bcrypt.hash(password, geNSalt)
            const newUser = new User({ unit, email, password: hashedPass })
            await newUser.save()
            return { message: 'user successfully registered' }
        }

        if (unit && password && !email) {
            const userUnit = await User.findOne({ unit })
            if (!userUnit) return { error: 'no profile found' }
            const passwordCompare = await bcrypt.compare(password, userUnit.password)
            if (!passwordCompare) return { error: 'incorrect password' }
            return { message: 'login successful' }
        }

    } catch (err) {
        console.error(err)
    }

}