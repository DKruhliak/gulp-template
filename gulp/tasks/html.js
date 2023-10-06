import fileInclude from "gulp-file-include"; //збираємо html

//import webpHtmlNosvg from "gulp-webp-html-nosvg";


export const html = () => {//отримали файли
   return app.gulp.src(app.path.src.html)
   .pipe(fileInclude())
   
   .pipe(app.plugins.replace(/@img\//g, 'img/')) //замінюємо "/@img\//" до збірки на "'img/'" після збірки

   // .pipe(webpHtmlNosvg())
   
   .pipe(app.gulp.dest(app.path.build.html))   //перенесли файли
   .pipe(app.plugins.browsersync.stream()) //оновлення сторінки після зберігання
}