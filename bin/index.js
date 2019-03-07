const npm = require('npm');
const bs = require('browser-sync').create();
const chokidar = require('chokidar');
const child_process = require('child_process')
var num = 0;//计数


function directives(commond,cb){
    npm.load(function(){
        npm.commands.cache(['clean'], function(){
            npm.commands.run([commond],cb);
        })
    })
}
function dev(cb){
    return directives('dev',function(){
        cb && cb();
    })
}
//监听源码函数
 function soundCode(cb){
    console.log(`${num+=1}.chokidar开始监听src&public下的文件`)
    const warcher = chokidar.watch(['src/**/*.*','public/**/*.*'])
    warcher.on('all', (event, path) => {
        if(event ==='change'){
            console.log('\033[40;31m '+path+'源码发生修改，进行编译,请稍后');
            child_process.exec('npm run dev',function(error, stdout, stderr){
                if (error) {
                    console.log(error.stack);
                    console.log('Error code: '+error.code);
                    console.log('Signal received: '+error.signal);
                }
                console.log(stdout);
                console.log('编译完成');
            })
        }
    });
    console.log('\033[40;32m 源码监听完成');
}

//监听distDev下的文件 编译后的代码
 function compileCompleteCode(cb){

    console.log(`${num+=1}.chokidar开始监听distDev下的文件`);
    //该文件产生变化时 说明构建已完成。
    const watcher = chokidar.watch('distDev/**/*.js');
    watcher.on('all', (event, path)  => {
        if(event === 'change'){
            console.log(path+'发生变化，开始进行热更新');
            bs.reload(path);
            console.log('热更新已完成');
        }
    });
    console.log('\033[40;32m 编译后的代码监听完成');
}




console.log(`${num+=1}.进行本地编译`);
dev(function(){
    console.log("\033[40;31m 编译完成")
    soundCode()
    compileCompleteCode()
    console.log(`${num+=1}开启node服务`)
    directives('devServer');
    console.log(`${num+=1}开启browserSync代理服务`);
    bs.init({
        proxy: 'http://localhost:8080',
        open: false
    });
});
