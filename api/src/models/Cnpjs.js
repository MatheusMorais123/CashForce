import { Model, DataTypes } from 'sequelize';
export default class Cnpjs extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: DataTypes.STRING,
        companyType: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: 'cnpjs',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Buyers);
    this.hasMany(models.Orders);
    this.hasMany(models.Providers);
    this.hasMany(models.Sponsors);
  }
}
