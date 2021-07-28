import express from 'express'
import dotenv from 'dotenv'
import { router } from './src/resources/routes.js'
// import userModel from './src/resources/User/schema.js'
import dbOptions from './src/utils/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'teste'

const run = async () => {
    try {
        console.log(`\nStarting project server in ${NODE_ENV}`)
        app.listen(PORT, () => {
            const date = new Date()
            console.log(`${date} - Server running in port: [${PORT}]`)
        })
        await dbOptions.sync()

        app.use(router)
    } catch (e) {
        console.error(e)
    }
}

run()
