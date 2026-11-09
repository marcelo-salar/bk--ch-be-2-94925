# ch-be-2-94925

# step
- npm init
- estructura de carpetas
- npm i express mongoose dotenv

# Endpoint
http://localhost:3000/api/sessions/register


# Apellido o nombre  requrido 
{
  "first_name": "",
  "last_name": "",
  "email": "marcelo1.salar@gmail.com",
  "password": "clave12345"
}
## Respuesta Email repetido
{
  "status": "error",
  "message": "Faltan campos obligatorios o son invalidos"
}

# Email repetido
{
  "first_name": "Marcelo",
  "last_name": "Salar",
  "email": "marcelo.salar@gmail.com",
  "password": "clave12345"
}
## Respuesta Email repetido
{
  "status": "error",
  "message": "El email ya se encuentra registrado"
}

# Contraseña Requerida
{
  "first_name": "Marcelo",
  "last_name": "Salar",
  "email": "marcelo1.salar@gmail.com",
  "password": ""
}
## Respuesta Contraseña Requerida
{
  "status": "error",
  "message": "Faltan campos obligatorios o son invalidos"
}

## Formato de email incorrecto
{
  "status": "error",
  "message": "Formato de email invalido"
}



## Respuesta endpoint 
{
  "status": "success",
  "payload": {
    "id": "6af11bcb2b59b2a57a794f9b",
    "first_name": "Marcelo",
    "last_name": "Salar",
    "email": "marcelo1.salar@gmail.com",
    "password": "$2b$10$lD/OcJ1oxt9nJOKDzbxTFuQhejkaPd2BFZr08l/J3mfNtlYu57ix6",
    "role": "user"
  }
}