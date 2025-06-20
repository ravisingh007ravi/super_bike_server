const userModel = require('../Model/userModel');
const UserModel = require('../Model/userModel');

exports.CreateUser = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: 'Data is empty' })
     

        const validationRules = {
            name: { required: true, regex: /^[A-Za-z ]+$/, errorMsg: 'Invalid Name!' },
            email: { required: true, regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errorMsg: 'Invalid Email!' },
            password: { required: true, regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, errorMsg: 'Invalid Password!' }
        };


        for (const [key, value] of Object.entries(data)) {
            if (validationRules[key].required && !value) {
                return res.status(400).send({ status: false, msg: validationRules[key].errorMsg });
            }
            if (validationRules[key].regex && !validationRules[key].regex.test(value)) {
                return res.status(400).send({ status: false, msg: validationRules[key].errorMsg });
            }
        }



        const CheckUser = await userModel.findOne({ email: email })
        if (CheckUser) return res.status(400).send({ status: false, msg: 'Email Already Exists!' })

        const DB = await UserModel.create(data)

        res.status(201).send({ status: true, msg: 'successfull Create User', data: DB })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}


exports.getAllData = async (_, res) => {
    try {

        const DB = await UserModel.find().select({ email: 1, name: 1, password: 1, _id: 0 }).sort({ createdAt: -1 })

        if (!DB) return res.status(400).send({ status: false, msg: 'Data Not Found' })

        return res.status(200).send({ status: true, data: DB })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}


exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const DB = await UserModel.findById(id)
        if (!DB) return res.status(400).send({ status: false, msg: 'Data Not Found' })
        return res.status(200).send({ status: true, data: DB })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}