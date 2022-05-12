const {Model, DataTypes} = require('sequelize');
class Cnpj extends Model{
    static init(sequelize){
        super.init({
            id: DataTypes.INTEGER,
            cnpj: DataTypes.STRING,
            companyType:DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}
module.exports = Cnpj