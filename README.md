#pd-gulp-jade

[pd-gulp](https://github.com/platdesign/pd-gulp) task generator for jade tasks.


##Install

	npm install --save pd-gulp-jade
	
##Example

```javascript
var gulp = require('gulp');
var jade = require('pd-gulp-jade')(gulp);

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
```

##Options

- `jade` Configuration object for [gulp-jade](https://github.com/phated/gulp-jade).
- `watch` True or path which will be observed.
