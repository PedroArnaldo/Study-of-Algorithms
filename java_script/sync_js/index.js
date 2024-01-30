/* 
0 - obter um usuario
1 - obter o numero de telefone de um usuario a partir de seu Id
2 - obter o endereço do usuario pelo Id

*/

const util = require("util");

const getUser = () => {
  //quando der algum problema -> reject(Error)
  //quando sucess -> resolve
  return new Promise(function solvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
};

const getPhone = (idUser) => {
  return new Promise((resolve, reject) => {
    if (!idUser) return reject();
    setTimeout(() => {
      return resolve({
        telefone: "983123121",
        ddd: "12",
      });
    }, 1000);
  });
};

const getAddress = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
    });
  });
};

const getAddressAsync = util.promisify(getAddress);
//no then usa o conceito de pipe
// const userPromise = getUser();
// userPromise
//   .then((user) => {
//     return getPhone(user.id).then((phone) => {
//       return {
//         user,
//         phone,
//       };
//     });
//   })
//   .then((userWithPhone) => {
//     return getAddressAsync(userWithPhone.user.id).then((address) => {
//       return {
//         data: userWithPhone.user,
//         phone: userWithPhone.phone,
//         address: address,
//       };
//     });
//   })
//   .then((user) => {
//     console.log("user: ", user);
//   })
//   .catch((error) => {
//     console.error("Error :", error);
//   });

// const user = getUser((erro, user) => {
//   if (erro) {
//     console.error("Error in user", erro);
//   }
//   getPhone(user.id, (erro1, phone) => {
//     if (erro1) {
//       console.error("Error in phone", erro1);
//     }
//     console.log("phone: ", phone);
//     return phone;
//   });
//   getAddress(user.id, (erro2, address) => {
//     if (erro2) {
//       console.error("Error in address", erro2);
//     }
//     console.log("address: ", address);
//     return address;
//   });
//   console.log("user: ", user);
//   return user;
// });
// const phone = getPhone(user.id);
// const address = getAddress(user.id);

// console.log("phone: ", phone);
// console.log("address", address);
