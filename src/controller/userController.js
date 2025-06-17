exports.CreateUser = (req, res) => {
    try {
        const data = req.body;
        
        res.status(200).send({status:true,msg:`hello ${data.name}`})
    }
    catch (e) { 
        res.status(500).send({ status: false, msg: e.message }) }
}