import { Model, DataTypes } from 'sequelize';
export default class Orderportions extends Model {
  static init(sequelize) {
    super.init(
      {
        nDup: DataTypes.STRING,
        dVenc: DataTypes.STRING,
        dDup: DataTypes.STRING,
        availableToMarke: DataTypes.TINYINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.TINYINT
      },
      {
        sequelize,
        tableName: 'orderportions',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Orders, { foreignKey: 'orderId', as: 'order' });
  }
}
