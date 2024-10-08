import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const uri = "";
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1000 });
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Can't connect to db", error);
  }
}

export default connectToDatabase;
