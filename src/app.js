import {version as dndVersion} from 'bcx-aurelia-dnd/package.json';
import {version as rrVersion} from 'bcx-aurelia-reorderable-repeat/package.json';

export class App {
  dndVersion = dndVersion;
  rrVersion = rrVersion;

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
        route: 'customise-preview-and-source-handler', name: 'customise-preview-and-source-handler',
        title: 'Customise preview, optional source handler',
        nav: true,
        settings: {section: 'Tutorial'},
        moduleId: 'tutorial/customise-preview-and-source-handler.html'
      },
      {
        route: 'reorderable-repeat', name: 'reorderable-repeat',
        title: 'Basics',
        nav: true,
        settings: {section: 'Tutorial of reorderable-repeat'},
        moduleId: 'tutorial/reorderable-repeat.html'
      },
      {
        route: 'multi-lists', name: 'multi-lists',
        title: 'Reordering across multiple lists',
        nav: true,
        settings: {section: 'Tutorial of reorderable-repeat'},
        moduleId: 'tutorial/reorderable-repeat-multi-lists.html'
      },
      {
        route: 'reorderable-repeat-limitation', name: 'reorderable-repeat-limitation',
        title: 'Limitation',
        nav: true,
        settings: {section: 'Tutorial of reorderable-repeat'},
        moduleId: 'tutorial/reorderable-repeat-limitation.html'
      },
      {
        route: 'api', name: 'api',
        title: 'API',
        nav: true,
        settings: {section: 'Reference'},
        moduleId: 'tutorial/api.html'
      },
      {
        route: 'faq', name: 'faq',
        title: 'FAQ',
        nav: true,
        settings: {section: 'Reference'},
        moduleId: 'tutorial/faq.html'
      },
      {
        route: 'testing', name: 'testing',
        title: 'Testing',
        nav: true,
        settings: {section: 'Reference'},
        moduleId: 'tutorial/testing.html'
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
      },
      {
        route: 'e3-customise-preview', name: 'e3-customise-preview',
        title: '3. customise preview',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e3-customise-preview/index'
      },
      {
        route: 'e4-handler-move', name: 'e4-handler-move',
        title: '4. source handler and bcx-dnd-preview-hide',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e4-handler-move/index'
      },
      {
        route: 'e5-draw', name: 'e5-draw',
        title: '5. use DnD to draw',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e5-draw/index'
      },
      {
        route: 'e6-reorder-list', name: 'e6-reorder-list',
        title: '6. underneath algorithm of reorderable-repeat',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e6-reorder-list/index'
      },
      {
        route: 'e7-move-and-resize', name: 'e7-move-and-resize',
        title: '7. move and resize',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e7-move-and-resize/index'
      },
      {
        route: 'e8-move-and-resize-plus-snap', name: 'e8-move-and-resize-plus-snap',
        title: '8. move and resize, plus snap',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e8-move-and-resize-plus-snap/index'
      },
      {
        route: 'e9-auto-scroll', name: 'e9-auto-scroll',
        title: '9. auto-scrolling on reordering',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'examples/e9-auto-scroll/index'
      },
      {
        route: 'more-examples', name: 'more-examples',
        title: '9. want more examples?',
        nav: true,
        settings: {section: 'Examples'},
        moduleId: 'more-examples.html'
      },
      {
        route: 'er1-reorderable-repeat', name: 'er1-reorderable-repeat',
        title: '1. reorder list',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er1-reorderable-repeat/index'
      },
      {
        route: 'er2-reorderable-repeat-customise-style', name: 'er2-reorderable-repeat-customise-style',
        title: '2. reorder list with customised style',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er2-reorderable-repeat-customise-style/index'
      },
      {
        route: 'er3-reorderable-repeat-with-handler', name: 'er3-reorderable-repeat-with-handler',
        title: '3. reorder list with handler',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er3-reorderable-repeat-with-handler/index'
      },
      {
        route: 'er4-reorderable-repeat-customise-preview', name: 'er4-reorderable-repeat-customise-preview',
        title: '4. reorder list with customised preview',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er4-reorderable-repeat-customise-preview/index'
      },
      {
        route: 'er5-reorderable-repeat-direction', name: 'er5-reorderable-repeat-direction',
        title: '5. flow direction',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er5-reorderable-repeat-direction/index'
      },
      {
        route: 'er6-multi-lists', name: 'er6-multi-lists',
        title: '6. multi-lists reordering',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er6-multi-lists/index'
      },
      {
        route: 'er7-multi-lists', name: 'er7-multi-lists',
        title: '7. multi-lists with reorderable-group-for',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er7-multi-lists-with-group-for/index'
      },
      {
        route: 'er8-multi-lists-mix-with-aurelia-dnd', name: 'er8-multi-lists-mix-with-aurelia-dnd',
        title: '8. multi-lists mix with aurelia-dnd',
        nav: true,
        settings: {section: 'Examples of reorderable-repeat'},
        moduleId: 'examples/er8-multi-lists-mix-with-aurelia-dnd/index'
      }

    ]);
  }
}
