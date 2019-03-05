var npm = require('npm');
var c = require('child_process');
npm.load(function(){
    npm.commands.cache(['clean'], function(){
        npm.commands.run(['serve'])
    });
})
