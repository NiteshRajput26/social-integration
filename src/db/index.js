import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB =  async () =>{
    try {
        // mongoose hme ek retuen object deta h to hum connection ko ek variable me bhi le skte h
      const connectInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}`);
    } catch (error) {
        console.error("DB Connetion Failed ", error);
        process.exit(1) 
    }
}

export default connectDB