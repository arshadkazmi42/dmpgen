const SQL = require('@arshadkazmi42/my-no-sql');
const Random = require('./random');


const generate = async (config) => {

  // Create sql client
  const sqlClient = new SQL(config.db);

  // Open connection
  sqlClient.connect();

  for (let i=0;i<config.limit;i++) {

    const values = [
      lat(),
      lng(),
      price(),
      rooms(),
      rooms()
    ];
    await create(sqlClient, config.tableName, values);
  }
}

const lat = () => {
  return Random.float(23.63936, 28.20453);
}

const lng = () => {
  return Random.float(68.14712, 97.34466);
}

const price = () => {
  return Random.int(5000, 500000);
}

const rooms = () => {
  return Random.int(0, 10);
}

const create = async (sqlClient, tableName, values) => {
  const query = `INSERT INTO ${tableName} (lat, lng, price, bathrooms, bedrooms) VALUES (?, ?, ?, ?, ?)`;
  console.log(`Adding ${values}`);
  return await sqlClient.queryAsync(query, values);
}



module.exports = generate;
