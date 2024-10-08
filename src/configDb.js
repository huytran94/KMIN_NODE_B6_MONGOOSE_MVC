import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const uri =
      "mongodb+srv://kuum94:huy123@cluster0.0amgo.mongodb.net/admin?retryWrites=true&loadBalanced=false&replicaSet=atlas-aawsak-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&w=majority&authSource=admin&authMechanism=SCRAM-SHA-1";
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1000 });
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Can't connect to db", error);
  }
}

export default connectToDatabase;
