import { UsersRespository } from  '../repositories/users.repository.js';

import { createHash } from '../utils/hash.js';

const createServiceError = (message, statusCode) => {
    const  error = new Error(message);
           error.statusCode = statusCode;
    return error;
};

export class SessionService {
    static register = async (userData) => {
        // todo menos el rol
        const {first_name, last_name, email, password } = userData;

        // validación
        if ( typeof first_name !== "string" || 
            !first_name.trim() || 
            typeof last_name !== "string" || 
            !last_name.trim() || 
            typeof email !== "string" || 
            !email.trim() || 
            typeof password !== "string" || 
            !password.trim() ) 
        {
            throw createServiceError(
                "Faltan campos obligatorios o son invalidos",
                400,
            );
        }

        // normalizamos en email recibido
        const normalazedEmail = email.trim().toLowerCase();

        // Verficamos formato basico
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailRegex.test(normalazedEmail)) {
            throw createServiceError(
                "Formato de email invalido",
                400,
            );
        }

        const existingUser = await UsersRespository.findeByEmail(normalazedEmail);
        if (existingUser) {
            throw new Error(
                "El email ya es registrado", 
                409
            );
        }

        const hashedPassword = await createHash(password);
        
        const newUser = await UsersRespository.create({
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email: normalazedEmail,
            password: hashedPassword,
            role: "user",
        });

        // respuesta al usuario
        return {
            id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role
        }

    };

}
