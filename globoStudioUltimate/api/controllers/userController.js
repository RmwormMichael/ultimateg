import { getUserId, newUser, UserModel } from '../models/User.js';

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  UserModel.getAllUsers() // Asumiendo que getAllUsers está definido en UserModel.js
    .then((results) => {
      res.status(200).json(results); // Enviar los resultados como respuesta JSON
    })
    .catch((error) => {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener los usuarios', error: error });
    });
};

const getUser = (req,res) => {
  try {
    getUserId(req.params.id)
    .then((results)=>{
      res.status(200).json(results);
    })
    .catch((error)=>{
      res.status(500).json({message:'Error al obtener el usuario'})
    })  
  } catch (error) {
    console.log(error)
  }
  
}

const createUser = async (req, res) => {
  console.log(req);  // Para ver todo el cuerpo de la solicitud

  // Verifica si el nombre, email y password están presentes
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Faltan datos en la solicitud' });
  }

  try {
    // Aquí puedes hacer la inserción en la base de datos
    // Supón que tienes la función `newUser` que crea al usuario
    // await newUser(name, email, password); // Llama a la función de creación de usuario

    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};



export {
  getAllUsers,
  getUser,
  createUser
};
