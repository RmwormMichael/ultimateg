import { connection } from '../config/db.js';

const UserModel = {
  // Método para obtener todos los usuarios
  getAllUsers: () => {
    const query = 'SELECT * FROM user'; // Consulta SQL para obtener todos los usuarios
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

const getUserId = (id)=>{
  const query = `SELECT * FROM user WHERE id_user = ${id}`; // Consulta SQL para obtener todos los usuarios
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

const newUser = (name,email,password) =>{
  console.log(name)
  const query = `
    INSERT INTO user (name, email, password) 
    VALUES ('${name}', '${email}', '${password}')
  `;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err); // Si hay un error, lo rechazamos
      } else {
        resolve(results); // Si no hay error, resolvemos con los resultados
      }
    });
  });
};

export { UserModel, getUserId, newUser };
