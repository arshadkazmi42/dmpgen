const { Generate } = require('./lib');
const config = require('./config.json');


(async () => {
  await Generate(config);
})();