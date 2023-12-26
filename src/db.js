//PRUEBA DE CONEXION CON MONGOOSE
const mongoose = require('mongoose');

const conexionDB = async () => {
    try { 
        await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1');
        console.log('---> Base de datos conectada');
    } catch(e) {
        console.log('Error: ', e);
    }
};

module.exports = {
    conexionDB
}

// PRUEBA DE CONEXION CON MONGODB
// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

// module.exports = {
//     run
// }


