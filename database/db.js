import Sequelize from 'sequelize';

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_URL,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: process.env.NODE_ENV === "production" ? false : true // change to true for local dev / self-signed certs
    },
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true
    }
});