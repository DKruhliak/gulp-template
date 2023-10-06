//Підключаємо основний модуль
import gulp from "gulp";

//Імпорт шляхів
import {path} from "./gulp/config/path.js"

import {plugins} from "./gulp/config/plugins.js";

//Голобальна змінна
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins,
}

//Імпорт задач
import {copy} from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {server} from "./gulp/tasks/server.js"
import {scss} from "./gulp/tasks/scss.js"
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import { otfToTtf , ttfToWoff, fonstStyle} from "./gulp/tasks/fonts.js";
import {json} from "./gulp/tasks/json.js"




//Функція яка контролює зміни в файлах
function watcher () {
   gulp.watch(path.watch.files, copy)
   gulp.watch(path.watch.html, html)
   gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.js, js)
   gulp.watch(path.watch.images, images)
   gulp.watch(path.watch.json, json)
}

// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

//Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, json, images, fonts)) 

//Побудова сценарію виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))


//Виконання сценарію по замовчуванню
gulp.task('default', dev)
