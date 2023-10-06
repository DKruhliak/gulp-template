export const json = () => {
   //отримали файли
   return app.gulp.src(app.path.src.json)
   //перенесли файли
   .pipe(app.gulp.dest(app.path.build.json))
}