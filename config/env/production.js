'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/noders',
    assets: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.min.css',
                'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
                'public/lib/bootstrapExtensions/*.css',
                'public/lib/Brushed/css/*.css',
                'public/lib/Brushed/font/*.css',
                'public/lib/font-awesome-4.3.0/css/font-awesome.min.css',
                'public/lib/angular-blink/blink.css',
                'public/lib/animate.css/animate.css',
                'public/modules/**/css/*.css'

            ],
            js: [
                'public/lib/custom/angular-loopback/prod-config.js',
                'public/lib/jquery/dist/jquery.min.js',
                'public/lib/angular/angular.min.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-touch/angular-touch.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                'public/lib/angular-ui-utils/ui-utils.min.js',
                'public/lib/bootstrap/dist/js/bootstrap.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/Brushed/js/modernizr.js',
                'public/lib/lodash/dist/lodash.min.js',
                'public/lib/angular/angular.js',
                'http://maps.google.com/maps/api/js?sensor=false',
                'public/lib/angular-google-maps/dist/angular-google-maps.min.js',
                'public/lib/angular-inview/angular-inview.js',
                'public/lib/custom/angular-scroll/angular-scroll.js',
                'public/lib/Brushed/js/waypoints.js',
                'public/lib/custom/angular-loopback/lb-services.js',
                'public/lib/Brushed/js/waypoints-sticky.js',
                'public/lib/Brushed/js/jquery.isotope.js',
                'public/lib/Brushed/js/jquery.fancybox.pack.js',
                'public/lib/Brushed/js/jquery.fancybox-media.js',
                'public/lib/Brushed/js/jquery.tweet.js',
                'public/lib/Brushed/js/plugins.js',
                'public/lib/Brushed/js/main.js',
            ]
        },
        css: 'public/dist/application.min.css',
        js: 'public/dist/application.min.js'
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID || 'APP_ID',
        clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
        callbackURL: '/auth/facebook/callback'
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
        clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
        callbackURL: '/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL: '/auth/google/callback'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || 'APP_ID',
        clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
        callbackURL: '/auth/linkedin/callback'
    },
    github: {
        clientID: process.env.GITHUB_ID || 'APP_ID',
        clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
        callbackURL: '/auth/github/callback'
    },
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    }
};
