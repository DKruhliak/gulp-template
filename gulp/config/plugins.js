//Інформація про загальні плагіни

import replace from "gulp-replace"; //пошук та заміна
import browsersync from "browser-sync"; //
import newer from "gulp-newer"; //перевірка оновлення картинок

export const plugins = {
   replace: replace,
   browsersync: browsersync,
   newer : newer,
}