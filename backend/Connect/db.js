import mongoose from "mongoose";

const connectToDB = async(DB_URL) => {
    try{
        await mongoose.connect(DB_URL);
        console.log("Established Link WIth Database")
    }catch(error){
        console.error(error);
    }
}

export default connectToDB;