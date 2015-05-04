var fs = require ('fs'); 
var chalk = require('chalk');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data) {

if (err) throw err;

var obj = JSON.parse(data.toString());


obj.wolkenkratzer.sort(function(a, b){
return b.hoehe-a.hoehe});

fs.writeFile('wolkenkratzer_sortiert.json', JSON.stringify(obj),function(err){

if (err) throw err; 


obj.wolkenkratzer.forEach(function(wk) {

console.log(chalk.blue('Name: '+wk.name));
console.log(chalk.red('Name: '+wk.stadt));
console.log(chalk.yellow('Name: '+wk.hoehe));
console.log('------------------');

			});

  });
    });