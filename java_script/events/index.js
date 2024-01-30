const EventEmitter = require("events");

class MyEmmitter extends EventEmitter {}

const myEmmitter = new MyEmmitter();
const nomeEvento = "usuario:click";

myEmmitter.on(nomeEvento, (click) => {
  console.log("um usuario clicou", click);
});

const stdin = process.openStdin();
stdin.addListener("data", (value) => {
  console.log(`Você digitou: ${value.toString().trim()} `);
});

// myEmmitter.emit(nomeEvento, "na barra de rolagem");
// myEmmitter.emit(nomeEvento, "no ok");

// let count = 0;
// setInterval(() => {
//   myEmmitter.emit(nomeEvento, "no ok " + count++);
// }, 1000);
