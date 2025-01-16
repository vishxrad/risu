const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'risu',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

