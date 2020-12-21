import { Model, DataTypes } from 'sequelize';
export default class Providers extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        tradingName: DataTypes.STRING,
        responsibleName: DataTypes.STRING,
        responsibleEmail: DataTypes.STRING,
        responsiblePosition: DataTypes.STRING,
        responsiblePhone: DataTypes.STRING,
        responsibleMobile: DataTypes.STRING,
        website: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        address: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        bank: DataTypes.STRING,
        bankAgency: DataTypes.STRING,
        account: DataTypes.STRING,
        documents: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        situation: DataTypes.STRING,
        situationDate: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cnpjId: DataTypes.TINYINT,
        email: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'providers',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
    this.hasMany(models.Orders);
  }
}
