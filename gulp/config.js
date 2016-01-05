var dest = './dist',
    src = './src';
var enviroment='';
//var enviroment='test';
if(enviroment=='test'){
    dest='./release';
}
module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        open: false,
        port: 3000,
        files: [
            dest + '/**'
        ]
    },
    images: {
        src: src+'/images/**/*',
        dest: dest+'/images/'
    },
    fonts:{
        src: [src+'/fonts/**/*'],
        dest: dest+'/fonts/'
    },
    watchList: {
        //css: [src + '/styles/*.less', src + '/styles/less/*.less'],
        //js: [src + '/scripts/*.jsx', src + '/scripts/*.js', src + '/scripts/**/*.js'],
        //html: [src + '/*.html', dest + '/manifest.json'],
        //hbs:[src+'/templates/*.hbs']
        css: [src + '/styles/*.less', src + '/styles/less/*.less'],
        js: [src + '/scripts/*.jsx', src + '/scripts/*.js', src + '/scripts/**/*.js'],
        html: [src + '/*.html', dest + '/manifest.json'],
        hbs:[src+'/templates/*.hbs']
    },
    static: {
        src: [src + "/styles/vendor/*"],
        dest: dest+"/styles/vendor/"
    },
    browserify: {
        // Enable source maps
        //debug: true,
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: [src + '/scripts/main.js'],
            dest: dest + '/scripts/',
            outputName: 'app.js'
        }]
    },
    rev: {
        //entires: ['./dist/scripts/app.js'],
        entires: [src+'/scripts/main.js'],
        dest: dest+'/scripts/',
        jsonDest: dest,
        revFileName: 'manifest.json',
        revPath: dest+'/manifest.json'
    },
    revCollector: {
        entires: [dest + '/manifest.json', src + '/*.html'],
        dest: dest
    },
    css: {
        entires: [src + '/styles/main.less', src + '/styles/less/bootstrap.less'],
        src: src + '/styles/**/*.css',
        dest: dest + '/styles/'
    },
    server: {
        serverIndexPage: 'index.html'
    },
    scripts:{
        src:src+'/scripts/**/*.js',
        dest:dest+'/scripts/'
    }
};
