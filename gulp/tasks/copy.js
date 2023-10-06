export const copy = () => {
   //отримали файли
   return app.gulp.src(app.path.src.files)
   //перенесли файли
   .pipe(app.gulp.dest(app.path.build.files))
}