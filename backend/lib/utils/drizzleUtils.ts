import { sql, asc, desc } from 'drizzle-orm';
import graphqlFields from 'graphql-fields'


function fieldsProjection(info, fieldPath = null) {
    return Object.keys(graphqlFields(info));
}

function createProjectionObject(columns: string[], tableName = '') {
    const projection = {};
    if (tableName) {
        columns.forEach((column) => {
            projection[`${tableName}.${column}`] = sql.join([sql.identifier(tableName), sql.identifier(column)], sql`.`);
        });
    } else {
        columns.forEach((column) => {
            projection[column] = sql`${sql.identifier(column)}`
        });
    }
    return projection;
};

interface SortField {
    field: string;
    direction: 'ASC' | 'DESC';
};

function sortAlias(sortObject: SortField) {
    return sortObject.direction === 'ASC' ? asc(sql.identifier(sortObject.field)) : desc(sql.identifier(sortObject.field));
}

export { fieldsProjection, createProjectionObject, sortAlias, SortField }