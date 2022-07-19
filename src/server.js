const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user-router");
const { transactionRouter } = require("./routes/transaction-router");

// Constants
const PORT = 3000;
const DB = 'mongodb://root:example@host.minikube.internal:27017/?authMechanism=DEFAULT';

const server = express();

server.use(express.json());
server.use("/api/user", userRouter);
server.use("/api/transaction", transactionRouter);

async function main() {
  await mongoose.connect(DB);
  server.listen(PORT, () => console.log("Server running!"));
}

main().catch((err) => console.log(err));
