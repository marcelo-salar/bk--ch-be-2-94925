import { SessionService } from "../services/sessionsServices.js";

export class SessionController {
    static register = async (req, res) => {

        try {
            const userData = req.body;

            const newUser = await SessionService.register(userData);

            // Respuesta 201
            res.status(201).json({
                status: "succes",
                payload: newUser
            });
            
        } catch (error) {
            // MongoDB cod 11000 violación de indice único
            if (error.code === 11000) {
                return res.status(409).json({
                    status: "error",
                    message: "El email ya se encuentra registrado"
                });
            }
            // Errores
            if (error.statusCode) {
                return res.status(error.statusCode).json({
                    status: "error",
                    message: error.message
                })
            }
        }
      
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Error interno del servidor"
        });
    };
}