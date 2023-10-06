import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';//стиснення 
// import webpcss from 'gulp-webpcss'; //вивід зображень
import autoprefixer from 'gulp-autoprefixer'; //автопрефіксер для кросбраузерності
// import groupCssMediaQuwries from 'gulp-group-css-media-queries'; //грування медіазапитів


const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp.src(app.path.src.scss)
   
   // .pipe(app.plugins.replace(/@img\//g, '..img/')) //замінюємо "/@img\//" до збірки на "'img/'" після збірки
   .pipe(sass({
      outputStyle: 'expanded',
   }))
   .pipe(app.plugins.replace(/@img\//g, '../img/')) //замінюємо "/@img\//" до збірки на "'img/'" після збірки

   // .pipe(groupCssMediaQuwries())
   // .pipe(webpcss(
   //    {
   //       webpClass: ".webp",
   //       noWebpClass: ".no-webp",
   // }
   // ))

   .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true,
   }))
   //розкоментувати якщо потрібен не стиснений файл
   .pipe(app.gulp.dest(app.path.build.css))
   .pipe(cleanCss())
   .pipe(rename ({
      extname: '.min.css',
   }))
   .pipe(app.gulp.dest(app.path.build.css))
   .pipe(app.plugins.browsersync.stream())
}