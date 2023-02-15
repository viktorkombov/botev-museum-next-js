import db from './db';

export function post(database, record) {
    const keys = Object.keys(record);
    const values = Object.values(record);
    const length = keys.length;

    return db.execute(`INSERT INTO ${database} (${keys}) VALUES (${Array(length).fill('?')})`, values);
}

export function put(database, record, id) {
    const keys = Object.keys(record).map(key => `${key} = ?`);
    const values = Object.values(record);

    return db.execute(`UPDATE ${database} SET ${keys} WHERE ID = ?`, [...values, id]);
}

export function getAll(database, columns = '*', orderBy, limit, dir = 'ASC', notEqualTo) {
    if (Array.isArray(columns)) {
        columns = columns.toString();
    }
    let mysqlRequest = `SELECT ${columns} FROM ${database}`;

    if (notEqualTo) {
        mysqlRequest = mysqlRequest.concat(` WHERE ID <> "${notEqualTo}"`);
    }

    if (orderBy) {
        mysqlRequest = mysqlRequest.concat(` ORDER BY ${orderBy} ${dir} LIMIT ${limit}`)
    }

    return db.execute(mysqlRequest);
}

export function findByColumn(database, id, columnName) {
    return db.execute(`SELECT * FROM ${database} WHERE ${columnName} = ?`, [id]);
}

export function DELETE(database, id) {
    return db.execute(`DELETE FROM ${database} WHERE ID = ?`, [id]);
}
