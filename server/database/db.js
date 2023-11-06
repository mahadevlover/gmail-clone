import mongoose from "mongoose";




const Connection = () => {
    const DB_URI = `mongodb://user:<Hansraj$123>@ac-r42jdyt-shard-00-00.artnwos.mongodb.net:27017,ac-r42jdyt-shard-00-01.artnwos.mongodb.net:27017,ac-r42jdyt-shard-00-02.artnwos.mongodb.net:27017/?ssl=true&replicaSet=atlas-13nz4n-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{

        mongoose.connect(DB_URI, {useNewUrlParser : true});
        console.log('DataBase connected successfully');  
    } catch (error) {
        console.log('Error while connecting with the database', error.message)
    }
}

export default Connection;