const kad_utils = require('@kadenceproject/kadence/lib/utils');


// For network testing:
exports.SEED_NODE = ['a678ed17938527be1383388004dbf84246505dbd', { hostname: '167.99.2.1', port: 80 }];
exports.CLI_SERVER = {host: 'localhost', port: 1800};
exports.BATNODE_SERVER_PORT = 1900;
exports.KADNODE_PORT = 80;

// For local testing
//exports.SEED_NODE = ['a678ed17938527be1383388004dbf84246505dbd', { hostname: 'localhost', port: 1338 }]