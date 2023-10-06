//Шляхи

//Отримуємо імя папки нашого проекту
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

//шлях до папки з результатом
const buildFolder = `./dist`;

//шлях до папки з вихідними
const srcFolder = `./src`

//вся інформація про шляхи
export const path = {

   build: {      
      js:`${buildFolder}/js/`,
      images: `${buildFolder}/img/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,//корінь папки з результатом
      files: `${buildFolder}/files/`,
      fonts: `${buildFolder}/fonts/`,
      json: `${buildFolder}/json/`,


   },

   src: {
      js:`${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
      // svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,  //шукаємо scss файл
      html: `${srcFolder}/*.html`, //будь-яка назва файлу певного формату
      files: `${srcFolder}/files/**/*.*`, //в усіх вкладених папках папки files, файли усіх назв, усіх форматів
      json: `${srcFolder}/json/*.*`,



   },

   watch: {
      js: `${srcFolder}/js/**/*.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      json: `${srcFolder}/json/*.*`,

   },

   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``,
}

