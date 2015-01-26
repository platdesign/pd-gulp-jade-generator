'use strict';

var gulp = require('gulp');



var jade = require('../../')(gulp);


// Register default Tasks
jade.register({
	options:{
		banner: '<!-- <%=pkg.name %> HUHU --> \n',
	},
	qwe: {
		src: './src/qwe.jade',
		dest: './dist/html'
	},
	lib: {
		src: './src/index.jade',
		dest: './dist/html'
	}
});


// Create custom task
gulp.task('custom', jade({
	testingJade: {
		src: './src/*.jade',
		dest: './dist/custom'
	}
}));


gulp.task('test', ['default', 'build', 'watch', 'custom']);
