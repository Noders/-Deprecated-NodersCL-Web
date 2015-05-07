'use strict';

module.exports = {
	app: {
		title: 'noders',
		description: 'NodeJS LoopBack Mean.js Teaching Platform',
		keywords: 'NodeJS, LoopBack, Mean.js, Teaching PLatform'
	},
	port: process.env.PORT || 3001,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions', 
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/bootstrapExtensions/*.css',
				'public/lib/Brushed/css/*.css',
				'public/lib/Brushed/font/*.css',
				'public/lib/font-awesome-4.3.0/css/font-awesome.min.css',
				'public/lib/angular-blink/blink.css',
				'public/lib/animate.css/animate.css',
			],
			js: [
				'public/lib/custom/angular-loopback/dev-config.js', 

				'public/lib/Brushed/js/modernizr.js',
				'public/lib/lodash/dist/lodash.min.js',
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'http://maps.google.com/maps/api/js?sensor=false',
				'public/lib/angular-google-maps/dist/angular-google-maps.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js', 
				'public/lib/angular-inview/angular-inview.js', 
				'public/lib/custom/angular-scroll/angular-scroll.js', 
				'public/lib/custom/angular-loopback/lb-services.js', 
				'public/lib/Brushed/js/waypoints.js',
				'public/lib/Brushed/js/waypoints-sticky.js',
				'public/lib/Brushed/js/jquery.isotope.js',
				'public/lib/Brushed/js/jquery.fancybox.pack.js',
				'public/lib/Brushed/js/jquery.fancybox-media.js',
				'public/lib/Brushed/js/jquery.tweet.js',
				'public/lib/Brushed/js/plugins.js',
				'public/lib/Brushed/js/main.js',

			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};