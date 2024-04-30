function parseSQLQuery(query) {
    const selectRegex = /SELECT (.+) FROM (.+)/i;
    
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table] = match;
        
        const fieldNames = fields.split(',').map(field => field.trim());
        
        return {
            fields: fieldNames,
            table: table.trim()
        };
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = parseSQLQuery;
