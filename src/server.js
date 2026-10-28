import app from './app.js';
import { config } from './config/config.js';
import { connectDB } from './config/database.js';

await connectDB(config.mongoURL);

app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto ${config.port}`);
});