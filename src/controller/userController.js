const UserModel = require('../Model/userModel')

exports.CreateUser = async (req, res) => {
    try {
        const data = req.body;

        const DB = await UserModel.create(data)

        res.status(200).send({ status: true, msg: `hello ${data.name}`, data: DB })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}


exports.getAllData = async (req, res) => {
    try {

        const DB = await UserModel.find()

        res.status(200).send({ status: true, data: DB })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}