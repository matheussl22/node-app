const { Transaction } = require("../models/transaction");
const queue = require("../queue");

const createTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
    });

	const transactionDTO = {
		type: transaction.type,
		value: transaction.value,
		userId: transaction.userId,
	  }
    queue.sendToQueue("user-transaction", transactionDTO);
    return res.json(transactionDTO);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error on creating Transaction, check the params" });
  }
};

module.exports.createTransaction = createTransaction;
