import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import payload from 'payload'
dotenv.config()
const app = express()
app.use(
 cors({
   origin: process.env.CORS_ORIGIN?.split(',') ?? '*',
   credentials: true,
 })
)
const start = async () => {
 await payload.init({
   secret: process.env.PAYLOAD_SECRET as string,
   mongoURL: process.env.MONGODB_URI as string,
   express: app,
 })
 app.get('/health', (_req, res) => res.json({ ok: true }))
 app.listen(process.env.PORT || 5050, () => {
   payload.logger.info(`Payload admin: ${process.env.PUBLIC_SERVER_URL}/admin`)
 })
}
start()