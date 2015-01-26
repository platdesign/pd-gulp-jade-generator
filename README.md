#pd-gulp-jade-task

##Install

	npm install --save platdesign/pd-gulp-jade-task
	
##Example

	var gulp = require('gulp');
	var jade = require('pd-gulp-jade-task')(gulp);

	// Register default tasks (default, watch, build, etc.)
	jade.register({
		myLib:{
			src: './src/jade/*.jade',
			dest: './dist/html'
		}
	});

	// Create custom gulp-task
	gulp.task('customJade', jade({
		customJade: {
			src: './src/jade/*.jade',
			dest: './dist/html'
		}
	}));


##Options

- `jade` Configuration object for [gulp-jade](https://github.com/phated/gulp-jade).
- `watch` True or path which will be observed.
