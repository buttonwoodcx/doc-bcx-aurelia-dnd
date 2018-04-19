import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import gulpif from 'gulp-if';
import marked from 'gulp-marked';
import insert from 'gulp-insert';
import lazypipe from 'lazypipe';

const isMarkdownFile = f => f.extname === '.md';

// process markdown in GitHub Flavored Markdown
// wrap the result in <template> tag
const processMarkdown = lazypipe()
  .pipe(marked, {gfm: true})
  .pipe(insert.wrap, '<template>', '</template>');

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(gulpif(isMarkdownFile, processMarkdown()))
    .pipe(build.bundle());
}
