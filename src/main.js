import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .developmentLogging(environment.debug ? 'info' : 'warn')
    .plugin('bcx-doc-base')
    .plugin('bcx-aurelia-reorderable-repeat');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
