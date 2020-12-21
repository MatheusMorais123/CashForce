import { Model, DataTypes } from 'sequelize';

export default class Offers extends Model {
  static init(sequelize) {
    super.init(
      {
        tax: DataTypes.STRING,
        tariff: DataTypes.STRING,
        adValorem: DataTypes.STRING,
        float: DataTypes.STRING,
        iof: DataTypes.STRING,
        expiresIn: DataTypes.STRING,
        paymentStatusSponsor: DataTypes.TINYINT,
        paymentStatusProvider: DataTypes.TINYINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        orderId: DataTypes.TINYINT,
        sponsorId: DataTypes.TINYINT
      },
      {
        sequelize,
        tableName: 'offers',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Orders, { foreignKey: 'orderId', as: 'order' });
    this.belongsTo(models.Sponsors, { foreignKey: 'sponsorId', as: 'sponsor' });
  }
}
