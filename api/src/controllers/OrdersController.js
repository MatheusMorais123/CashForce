
import Orders from '../models/Orders'
module.exports = {
  async index(req, res) {
    try{
      const order = await Orders.findAll({
        include: [{association: 'provider'}, {association: 'buyer'}]
      });
      return res.json(order);  
    }
    catch(err){
      return res.status(401).send("request has not been applied because");
    }
  },  
};
