import { Model, DataTypes } from 'sequelize';
export default class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        mobile: DataTypes.STRING,
        departament: DataTypes.STRING,
        verificationCode: DataTypes.STRING,
        emailChecked: DataTypes.TINYINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        cashforceAdm: DataTypes.TINYINT,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Orders);
  }
}
