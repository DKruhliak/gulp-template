import webp from "gulp-webp";
import imagemin from "gulp-imagemin"


export const images = () => {
   
   return app.gulp.src(app.path.src.images)

   .pipe(app.plugins.newer(app.path.build.images)) //перевірка на оновлення 

   .pipe(webp())  //конвертуємо зображення в вебп
   .pipe(app.gulp.dest(app.path.build.images))  //вигружаємо в папку з результатом

   .pipe(app.gulp.src(app.path.src.images))  //отримуємо доступ до зображень
   .pipe(app.plugins.newer(app.path.build.images))  //перевірка на оновлення

   //розкоментувати коли потрібне стичнення файлівб для локалної роботи це не потрібно!!!!!!!!!!!!!!

   // .pipe(imagemin({  //зжимаємо картинку
   //    progressive: true,
   //    svgoPlugins: [{removeViewBox: false}],
   //    interlaced: true,
   //    optimizationLevel: 3,    //0 до 7
   // }))

   
   .pipe(app.gulp.dest(app.path.build.images))

   // .pipe(app.gulp.src(app.path.src.svg))  //отримуємо доступ до зображень
   // .pipe(app.gulp.dest(app.path.build.images))  //вигружаємо в папку з результатом

   .pipe(app.plugins.browsersync.stream())
}