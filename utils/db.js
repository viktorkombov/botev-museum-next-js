// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'posts',
//     password: 'admin'
// })


const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'lb9tf0kl_muzei_botev',
    database: 'lb9tf0kl_novini',
    password: 'wsj@l9d@TZ@j'
});

// module.exports = () => {
//     return mongoose.connect(dbString, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//     console.log(rdyString))
// };

module.exports = pool.promise();

// module.exports = pool.promise();