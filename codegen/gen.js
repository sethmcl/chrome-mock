var fs          = require('fs');
var path        = require('path');
var rfile       = require('rfile');
var helpers     = require('./helpers');
var ejs         = require('ejs');
var apiName     = process.argv[2];
var apiMetaSrc  = rfile('./json/' + apiName + '.json');
var apiTemplate = rfile('./tl/api.ejs');
var apiMeta     = JSON.parse(helpers.cleanJSON(apiMetaSrc))[0];

apiMeta.namespaceCap = helpers.capitalize(apiMeta.namespace);

var out      = ejs.render(apiTemplate, apiMeta);
var code     = out.replace(/(\n)+/g, '\n').replace(/\n\s*\*\s*\n/g, '\n').replace(/\n\s*\*\s*\n/g, '\n');
var codePath = path.resolve(__dirname, 'build', apiMeta.namespaceCap + '.js');

if (process.argv[3] === '--save') {
  fs.writeFileSync(codePath, code);
  console.log('Saved', codePath);
} else {
  console.log(code);
}
