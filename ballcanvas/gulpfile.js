// var gulp = require('gulp'),
//     browserSync = require('browser-sync').create(),
// //创建一个新的gulp任务
// // 静态服务器
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: './'
//     });
//     //监听html文件的变化，自动重新载入
//     gulp.watch('./*.html').on('change', browserSync.reload);
//     gulp.watch('./*.css').on('change', browserSync.reload);
//     gulp.watch('./*.js').on('change', browserSync.reload);
// });

// // gulp.task('serve',function(){
// //     //初始化项目跟目录为'./'（也可以使用代理proxy: "yourlocal.dev"）
// //     browserSync.init({
// //         server: './'
// //     });
// //     //监听html文件的变化，自动重新载入
// //     gulp.watch('./*.html').on('change', browserSync.reload);
// //     gulp.watch('./*.css').on('change', browserSync.reload);
// //     gulp.watch('./*.js').on('change', browserSync.reload);
// // });

// //默认启动的gulp任务数组['serve']
// gulp.task('default', ['serve']);
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html'], reload);
});