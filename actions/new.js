const fs = require('fs');
const path = require('path');
const gittar = require('gittar');

module.exports = (app_name) => {
  try {
    gittar
      .fetch('ngasemjs/server-starter')
      .then((result) => {
        gittar.extract(result, path.join(process.cwd(), app_name));
      })
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};
