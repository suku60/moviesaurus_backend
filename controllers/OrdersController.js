const { Order } = require('../models/index');
const { Op } = require('sequelize');

const OrdersController = {};


// (Create) Create an order

OrdersController.newOrder = (req,res) => {
    
    let body = req.body;

    Order.create({
        userId: body.userId,
    movieId: body.movieId,
    date: body.date,
    price: body.price,
    })
    .then(request => {
        if(request){
            res.send(request)
        }else{
            res.send("Error: Order could not be completed");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

// (Read) Show all orders

OrdersController.showOrders = (req,res) => {

    Order.findAll()
    .then(data => {

        res.send(data)
    });
};

// - Show only active:

OrdersController.showActiveOrders = (req,res) => {

    Order.findAll({
        where : {
            [Op.not] : [
                {
                    active : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(activeOrders => {
        if(activeOrders != 0){
            res.send(activeOrders);
        }else {
            res.send("There are no active orders");
        }
    }).catch(error =>{
        res.send(error)
    })

};

// (Update) Modify order

OrdersController.updateOrder = async (req, res) => {

    let data = req.body;

    let id = req.params.id;

    try {

        Order.update(data, {
            where: {id : id}
        })
        .then(updated => {
            res.send(updated);
        });

    } catch (error) {
        res.send(error);
    }

};

// (Delete) Orders

// - All

OrdersController.deleteAllOrders = async(req, res) => {

    try {

        Order.destroy({
            where : {},
            truncate : false
        })
        .then(deletedOrder => {
            res.send(`${deletedOrder} have been deleted`);
        })

    } catch (error) {
        res.send(error);
    }

};

// - Filtered by Id

OrdersController.deleteOrder = async (req, res) => {

    let id = req.params.id;

    try {

        Order.destroy({
            where : { id : id },
            truncate : false
        })
        .then(deletedOrder => { 

            res.send(`Order with id: ${id} has been deleted`);
        })

    } catch (error) {
        res.send(error);
    }

};


module.exports = OrdersController;


