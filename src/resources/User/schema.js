import dbOptions from '../../utils/db.js'
import Sequelize from 'sequelize'

const userModel = dbOptions.define('User', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

export default userModel
