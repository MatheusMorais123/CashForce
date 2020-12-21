//const Orders = require('../models/Orders');
import Orders from '../models/Orders'
module.exports = {
  async index(req, res) {
    const order = await Orders.findAll({
      include: [{association: 'provider'}, {association: 'buyer'}]
    });  
   return res.json(order);
  },  
};
