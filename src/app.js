export class App {
  configureRouter(config, router) {
    this.router = router;

    config.title = 'bcx-aurelia-dnd examples';
    config.mapUnknownRoutes('not-found.html');
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
        route: 'dnd-source', name: 'dnd-source',
        title: 'DnD Source',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/dnd-source.html'
      },
      {
        route: 'dnd-preview', name: 'dnd-preview',
        title: 'DnD Preview',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/dnd-preview.html'
      },
      {
        route: 'dnd-target', name: 'dnd-target',
        title: 'DnD Target',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/dnd-target.html'
      },
      {
        route: 'turn-off-preview-use-hover', name: 'turn-off-preview-use-hover',
        title: 'Turn off preview, use dndHover',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/turn-off-preview-use-hover.html'
      },
      {
        route: 'customise-preview', name: 'customise-preview',
        title: 'Customise Preview',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/customise-preview.html'
      },
      {
        route: 'reorderable-repeat', name: 'reorderable-repeat',
        title: 'bcx-aurelia-reorderable-repeat',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/reorderable-repeat.html'
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
      {
        route: 'e1-simple-move', name: 'e1-simple-move',
        title: '1. move object',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e1-simple-move/index'
      },
      {
        route: 'e2-simple-move-hover', name: 'e2-simple-move-hover',
        title: '2. move object, preview off, use dndHover',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e2-simple-move-hover/index'
      }
    ]);
  }
}
