const fs = require('fs');
const path = require('path');
const gittar = require('gittar');

module.exports = (name, template_url) => {
  try {
    gittar
      .fetch(template_url)
      .then((result) => {
        gittar.extract(result, path.join(process.cwd(), name));
      })
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};
