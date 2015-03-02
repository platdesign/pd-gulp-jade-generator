'use strict';

var createGenerator = require('pd-gulp-task-generator-generator');
var jade = require('gulp-jade');

module.exports = createGenerator('Jade', function() {



	this.compile(function(job, cb) {

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
