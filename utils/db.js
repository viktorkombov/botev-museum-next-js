const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'posts',
    password: 'admin'
})

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