import { Model, DataTypes } from 'sequelize';
export default class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        orderNfid: DataTypes.STRING,
        orderNumber: DataTypes.STRING,
        orderPath: DataTypes.STRING,
        orderFileName: DataTypes.STRING,
        orderOriginalName: DataTypes.STRING,
        emissionDate: DataTypes.STRING,
        pdfFile: DataTypes.STRING,
        emitedTo: DataTypes.STRING,
        nNF: DataTypes.STRING,
        CTE: DataTypes.STRING,
        value: DataTypes.STRING,
        createdAt: DataTypes.STRING,
        updatedAt: DataTypes.STRING,
        cnpjId: DataTypes.STRING,
        userId: DataTypes.STRING,
        buyerId:DataTypes.STRING,
        providerId: DataTypes.TINYINT,
        orderStatusBuyer: DataTypes.STRING,
        orderStatusProvider: DataTypes.STRING,
        deliveryReceipt: DataTypes.STRING,
        cargoPackingList: DataTypes.STRING,
        deliveryCtrc: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'orders',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    this.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
    this.belongsTo(models.Buyers, { foreignKey: 'buyerId', as: 'buyer' });
    this.belongsTo(models.Providers, {
      foreignKey: 'providerId',
      as: 'provider',
    });
    this.hasOne(models.Offers);
    this.hasOne(models.Orderportions);
  }
}
