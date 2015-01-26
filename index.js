'use strict';

var baseTask = require('pd-gulp-base-task');
var jade = require('gulp-jade');
var watch = require('gulp-watch');

module.exports = baseTask('Jade', function() {



	this.worker(function(job, cb) {

		this.gulp.src(job.config.src)
			.pipe( jade( job.config.jade ) )
			.on('error', cb)
			.pipe( this.plugin('banner', job.options) )
			.on('error', cb)
			.pipe( this.gulp.dest( job.config.dest ) )
			.on('end', cb);

	});

	this.appendTask('default', {
		jade:{
			pretty: true
		}
	});

	this.appendTask('build', {
		jade:{
			pretty: false
		}
	});

	this.appendTask('watch', {
		jade:{
			pretty: false
		},
		watch:true
	});

});
