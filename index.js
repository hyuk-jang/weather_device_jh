const dotenv = require('dotenv');

const Control = require('./src/Control');
const config = require('./src/config');

module.exports = Control;

// if __main process
if (require !== undefined && require.main === module) {
  console.log('__main__');

  let path;
  switch (process.env.NODE_ENV) {
    case 'development':
      path = `${process.cwd()}/.env`;
      break;
    case 'production':
      path = `${process.cwd()}/.env`;
      break;
    default:
      path = `${process.cwd()}/.env`;
      break;
  }

  dotenv.config({ path });

  const control = new Control(config);
  control.init();

  process.on('uncaughtException', err => {
    // BU.debugConsole();
    console.trace(err);
    console.log('Node NOT Exiting...');
  });

  process.on('unhandledRejection', err => {
    // BU.debugConsole();
    console.trace(err);
    console.log('Node NOT Exiting...');
  });
}
