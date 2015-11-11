Package.describe({
  name: 'fourquet:tedious',
  summary: 'tedious npm module wrapped for Meteor.',
  version: '1.13.1_1',
  git: 'https://github.com/fourquet/meteor-package-tedious'
});
Npm.depends({
  'tedious': '1.13.1'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Tedious', ['server']);
  api.addFiles('tedious.js', ['server']);
});
Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('fourquet:tedious', ['server']);
  api.addFiles('tedious-tests.js', ['client', 'server']);
});
