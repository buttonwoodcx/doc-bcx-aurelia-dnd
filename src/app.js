export class App {
  configureRouter(config, router) {
    this.router = router;

    config.title = 'bcx-aurelia-dnd examples';
    config.mapUnknownRoutes('not-found');
    config.map([
      {
        route: '',
        redirect: 'overview'
      },
      {
        route: 'overview', name: 'overview',
        title: 'Overview',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/overview.html'
      },
      {
        route: 'drag-source', name: 'drag-source',
        title: 'Drag Source',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/drag-source.html'
      },
      {
        route: 'faq', name: 'faq',
        title: 'FAQ',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/faq.html'
      },
      {
        route: 'typescript-support', name: 'typescript-support',
        title: 'TypeScript Support',
        nav: true,
        settings: {section: 'Reference'},
        moduleId: 'tutorial/typescript-support.html'
      },
    ]);
  }
}
