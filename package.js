Package.describe({
  name: 'projik:bigtext',
  summary: 'BigText.js - a jQuery plugin for making text big',
  version: '1.0',
  git: 'https://github.com/projik/meteor-bigtext.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles('lib/bigtext.js', 'client');
});
