import mongoose from "mongoose";


export async function connectDB(mongoURL) {
    if (!mongoURL) {
        throw new Error('MONGO_URL no esta definida. Es obligatoria');
    }

    try {
        await mongoose.connect(mongoURL);
        console.log('Conexion a mongoDB establecida');
    } catch (error) {
        console.log('No se pudo conectar a MongoDb', error.message);
        throw error;
    }
}