const { Client } = require('pg');
const connectionString = 'postgres://default:TH0iExPDJC8n@ep-long-snow-a4nm6blz.us-east-1.aws.neon.tech:5432/nobin?sslmode=require';

exports.getFromDB = async function() {
 
    const client = new Client({
        connectionString
    });
    await client.connect();

    try {
        const res = await client.query('SELECT * from dishes');
        console.log(res.rows);
        return res.rows; 
    } catch (err) {
        console.error(err);
        throw err; 
    } finally {
        await client.end();
    }
};
