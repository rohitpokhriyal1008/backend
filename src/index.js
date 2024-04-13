import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {

    app.on("error", (error) => {
         console.log("err : " ,error)
         throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : 4 ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed", error)
})
