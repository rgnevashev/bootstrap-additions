Package.describe({
  name: 'mgcrea:bootstrap-additions',
  version: '0.3.1',
  summary: 'BootstrapAdditions - CSS extension kit for Twitter Bootstrap 3.0+',
  git: 'https://github.com/mgcrea/bootstrap-additions',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/bootstrap-additions.css"
  ], 'client');
});
