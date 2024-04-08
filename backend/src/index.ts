import express from "express"
import cors from "cors";
import { router } from "./routes/router";
import "./connection/conn"
import env from "dotenv"
env.config();

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`))