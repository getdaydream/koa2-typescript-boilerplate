const gulp = require('gulp');
const gulp_tslint = require('gulp-tslint');
const tslint = require("tslint");

gulp.task('default', ['tslint']);

gulp.task('tslint', () => {
  const program = tslint.Linter.createProgram('./tsconfig.json');
  return gulp
    .src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
    .pipe(
      gulp_tslint({
        formatter: 'verbose',
        program
      })
    )
    .pipe(gulp_tslint.report());
});
