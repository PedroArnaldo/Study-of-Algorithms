/* 
0 - obter um usuario
1 - obter o numero de telefone de um usuario a partir de seu Id
2 - obter o endereço do usuario pelo Id

*/

const getUser = (callback) => {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    });
  }, 1000);
};

const getPhone = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      telefone: "983123121",
      ddd: "12",
    });
  }, 1000);
};

const getAddress = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
    });
  }, 2000);
};

const user = getUser((erro, user) => {
  if (erro) {
    console.error("Error in user", erro);
  }
  getPhone(user.id, (erro1, phone) => {
    if (erro1) {
      console.error("Error in phone", erro1);
    }
    console.log("phone: ", phone);
    return phone;
  });
  getAddress(user.id, (erro2, address) => {
    if (erro2) {
      console.error("Error in address", erro2);
    }
    console.log("address: ", address);
    return address;
  });
  console.log("user: ", user);
  return user;
});
// const phone = getPhone(user.id);
// const address = getAddress(user.id);

// console.log("phone: ", phone);
// console.log("address", address);
