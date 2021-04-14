exports.create = (req, res) => {
    if(!req.body.num1 || !req.body.num2){ 

        console.log('controller: Request is empty'); 

        res.status(400).send({
            type: 'Error',
            message: 'Content Can not be Empty'
        });
        return
    }
    var total = parseInt(req.body.num1) + parseInt(req.body.num2);
 req.body['total'] = total;

    console.log("exports.create")
    res.send(req.body);
}


exports.getAll = (req, res) => {
    var todo = [
        {
            name: "Tom Cadenas",
            message: "Hello WOrld"
        }
    ];

    console.log('exports.getAll');
    res.send(todo);
}