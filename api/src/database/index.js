import Sequelize from 'sequelize';

import Buyers from '../models/Buyers';
import Cnpjs from '../models/Cnpjs';
import Offers from '../models/Offers';
import Orderportions from '../models/Orderportions';
import Orders from '../models/Orders';
import Providers from '../models/Providers';
import Sponsors from '../models/Sponsors';
import Users from '../models/Users';

const connection = new Sequelize('cashforce', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

Buyers.init(connection);
Cnpjs.init(connection);
Offers.init(connection);
Orderportions.init(connection);
Orders.init(connection);
Providers.init(connection);
Sponsors.init(connection);
Users.init(connection);

Buyers.associate(connection.models);
Cnpjs.associate(connection.models);
Offers.associate(connection.models);
Orderportions.associate(connection.models);
Orders.associate(connection.models);
Providers.associate(connection.models);
Sponsors.associate(connection.models);
Users.associate(connection.models);

export default connection;
