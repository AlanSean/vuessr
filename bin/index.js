var npm = require('npm');
npm.load(function(){
    npm.commands.cache(['clean'], function(){
        npm.commands.run(['serve'])
    });
})
