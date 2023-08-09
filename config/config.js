module.exports = {
development: {
    username: 'ahsan',
    password: 'hhillr1234',
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 8889,
    dialect: 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    }
},
test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    }
},
production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        bigNumberStrings: true,
        // ssl: {
        //     require: true,
        //     rejectUnauthorized: false
        // }
    }
}
};