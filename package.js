Package.describe({
  name: 'donaldaverill:tedious',
  summary: 'tedious npm module wrapped for Meteor.',
  version: '1.7.0_1',
  git: 'https://github.com/donaldaverill/meteor-package-tedious'
});

Npm.depends({
  'tedious': '1.7.0'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Tedious', ['server']);
  api.addFiles('donaldaverill:tedious.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('donaldaverill:tedious', ['server']);
  api.addFiles('donaldaverill:tedious-tests.js', ['client', 'server']);
});
