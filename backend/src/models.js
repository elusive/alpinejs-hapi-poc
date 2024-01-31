/*
const mongoose = require('mongoose');

module.export = function mongoConnect() {
    mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected....'))
        .catch(err => console.log(err));
}
*/

require('dotenv').config();

import Sequelize from 'sequelize';


const sql = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: (...msg) => console.log(msg),
    });

// test the connection
sql.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// model definitions
class WorkOrder extends Sequelize.Model {};
WorkOrder.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_no: Sequelize.INTEGER,
    personnel: Sequelize.STRING,
    created: Sequelize.DATE,
    modified: Sequelize.DATE,
    modified_by: Sequelize.STRING,
}, { sequelize: sql, modelName: 'WorkOrder' });

console.log(WorkOrder === sql.models.WorkOrder);