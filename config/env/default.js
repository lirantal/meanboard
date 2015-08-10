'use strict';

module.exports = {
  app: {
    title: 'MEAN.JS',
    description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  logo: 'modules/core/img/brand/logo.png',
  favicon: 'modules/core/img/brand/favicon.ico',
  dashboard: {
                'version': 1,
                'allow_edit': true,
                'plugins': [],
                'panes': [
                  {
                    'width': 1,
                    'row': {
                      '3': 1
                    },
                    'col': {
                      '3': 1
                    },
                    'col_width': 1,
                    'widgets': [
                      {
                        'type': 'text_widget',
                        'settings': {
                          'title': 'asda',
                          'size': 'regular',
                          'value': 'asdasda',
                          'animate': true,
                          'units': '2'
                        }
                      },
                      {
                        'type': 'gauge',
                        'settings': {
                          'title': 'gauge',
                          'value': 'datasources[\'test\'][\'log\']',
                          'units': 'offerings',
                          'min_value': 0,
                          'max_value': 100
                        }
                      }
                    ]
                  }
                ],
                'datasources': [
                  {
                    'name': 'test',
                    'type': 'JSON',
                    'settings': {
                      'url': 'http://localhost:3000/api/test',
                      'use_thingproxy': false,
                      'refresh': 5,
                      'method': 'GET'
                    }
                  }
                ],
                'columns': 3
              }
};
