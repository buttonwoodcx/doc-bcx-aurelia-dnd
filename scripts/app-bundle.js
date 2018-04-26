define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;

      config.title = 'bcx-aurelia-dnd examples';
      config.mapUnknownRoutes('not-found.html');
      config.map([{
        route: '',
        redirect: 'overview'
      }, {
        route: 'overview', name: 'overview',
        title: 'Overview',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/overview.html'
      }, {
        route: 'dnd-source', name: 'dnd-source',
        title: 'DnD Source',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/dnd-source.html'
      }, {
        route: 'dnd-preview', name: 'dnd-preview',
        title: 'DnD Preview',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/dnd-preview.html'
      }, {
        route: 'dnd-target', name: 'dnd-target',
        title: 'DnD Target',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/dnd-target.html'
      }, {
        route: 'turn-off-preview-use-hover', name: 'turn-off-preview-use-hover',
        title: 'Turn off preview, use dndHover',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/turn-off-preview-use-hover.html'
      }, {
        route: 'customise-preview-and-source-handler', name: 'customise-preview-and-source-handler',
        title: 'Customise Preview, Optional Source Handler',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/customise-preview-and-source-handler.html'
      }, {
        route: 'reorderable-repeat', name: 'reorderable-repeat',
        title: 'bcx-aurelia-reorderable-repeat',
        nav: true,
        settings: { section: 'Tutorial of reorderable-repeat' },
        moduleId: 'tutorial/reorderable-repeat.html'
      }, {
        route: 'api', name: 'api',
        title: 'API',
        nav: true,
        settings: { section: 'Reference' },
        moduleId: 'tutorial/api.html'
      }, {
        route: 'faq', name: 'faq',
        title: 'FAQ',
        nav: true,
        settings: { section: 'Reference' },
        moduleId: 'tutorial/faq.html'
      }, {
        route: 'testing', name: 'testing',
        title: 'Testing',
        nav: true,
        settings: { section: 'Reference' },
        moduleId: 'tutorial/testing.html'
      }, {
        route: 'typescript-support', name: 'typescript-support',
        title: 'TypeScript Support',
        nav: true,
        settings: { section: 'Reference' },
        moduleId: 'tutorial/typescript-support.html'
      }, {
        route: 'e1-simple-move', name: 'e1-simple-move',
        title: '1. move object',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e1-simple-move/index'
      }, {
        route: 'e2-simple-move-hover', name: 'e2-simple-move-hover',
        title: '2. move object, preview off, use dndHover',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e2-simple-move-hover/index'
      }, {
        route: 'e3-customise-preview', name: 'e3-customise-preview',
        title: '3. customise preview',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e3-customise-preview/index'
      }, {
        route: 'e4-handler-move', name: 'e4-handler-move',
        title: '4. source handler and bcx-dnd-preview-hide',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e4-handler-move/index'
      }, {
        route: 'e5-draw', name: 'e5-draw',
        title: '5. use DnD to draw',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e5-draw/index'
      }, {
        route: 'e6-reorder-list', name: 'e6-reorder-list',
        title: '6. underneath algorithm of reorderable-repeat',
        nav: true,
        settings: { section: 'Examples' },
        moduleId: 'examples/e6-reorder-list/index'
      }, {
        route: 'er1-reorderable-repeat', name: 'er1-reorderable-repeat',
        title: '1. reorder list',
        nav: true,
        settings: { section: 'Examples of reorderable-repeat' },
        moduleId: 'examples/er1-reorderable-repeat/index'
      }, {
        route: 'er2-reorderable-repeat-customise-style', name: 'er2-reorderable-repeat-customise-style',
        title: '2. reorder list with customised style',
        nav: true,
        settings: { section: 'Examples of reorderable-repeat' },
        moduleId: 'examples/er2-reorderable-repeat-customise-style/index'
      }, {
        route: 'er3-reorderable-repeat-with-handler', name: 'er3-reorderable-repeat-with-handler',
        title: '3. reorder list with handler',
        nav: true,
        settings: { section: 'Examples of reorderable-repeat' },
        moduleId: 'examples/er3-reorderable-repeat-with-handler/index'
      }, {
        route: 'er4-reorderable-repeat-customise-preview', name: 'er4-reorderable-repeat-customise-preview',
        title: '4. reorder list with customised preview',
        nav: true,
        settings: { section: 'Examples of reorderable-repeat' },
        moduleId: 'examples/er4-reorderable-repeat-customise-preview/index'
      }, {
        route: 'er5-reorderable-repeat-direction', name: 'er5-reorderable-repeat-direction',
        title: '6. flow direction',
        nav: true,
        settings: { section: 'Examples of reorderable-repeat' },
        moduleId: 'examples/er5-reorderable-repeat-direction/index'
      }]);
    };

    return App;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bcx-doc-base/css/doc.css\"></require>\n\n  <bcx-doc-nav router.bind=\"router\">\n    <div slot=\"top\">\n      <h5><em>Github Repos</em></h5>\n      <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-dnd\" class=\"link remote-link\">bcx-aurelia-dnd v0.4.5</a>\n      <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-reorderable-repeat\" class=\"link remote-link\">bcx-aurelia-reorderable-repeat v0.4.0</a>\n    </div>\n  </bcx-doc-nav>\n\n  <div class=\"bcx-doc-main\" as-element=\"router-view\"></div>\n</template>\n"; });
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('examples/e1-simple-move-step-1/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this);
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        item: this.item
      };
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e1-simple-move-step-1/box.css', ['module'], function(module) { module.exports = ".e1-example-box-step-1 {\n  position: absolute;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n}"; });
define('text!examples/e1-simple-move-step-1/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e1-example-box-step-1\"\n    style.bind=\"positionCss\"\n    show.bind=\"!draggingMe\"\n  >\n    ${item.name}\n  </div>\n</template>"; });
define('examples/e1-simple-move-step-1/container',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Container = exports.Container = function Container() {
    _classCallCheck(this, Container);

    this.items = [{ name: 'A', x: 20, y: 20 }, { name: 'B', x: 50, y: 200 }, { name: 'C', x: 200, y: 100 }];
  };
});
define('text!examples/e1-simple-move-step-1/container.css', ['module'], function(module) { module.exports = ".e1-example-container-step-1 {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e1-simple-move-step-1/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./box\"></require>\n\n  <div ref=\"dndElement\" class=\"e1-example-container-step-1\">\n    <box repeat.for=\"item of items\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e1-simple-move-step-1/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e1-simple-move-step-1/box.js', 'src/examples/e1-simple-move-step-1/box.html', 'src/examples/e1-simple-move-step-1/box.css', 'src/examples/e1-simple-move-step-1/container.js', 'src/examples/e1-simple-move-step-1/container.html', 'src/examples/e1-simple-move-step-1/container.css'];
  };
});
define('text!examples/e1-simple-move-step-1/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e1-simple-move-step-2/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this);
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        item: this.item
      };
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e1-simple-move-step-2/box.css', ['module'], function(module) { module.exports = ".e1-example-box-step-2 {\n  position: absolute;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n}"; });
define('text!examples/e1-simple-move-step-2/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e1-example-box-step-2\"\n    style.bind=\"positionCss\"\n  >\n    ${item.name}\n  </div>\n</template>"; });
define('examples/e1-simple-move-step-2/container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Container = exports.Container = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec(_class = function () {
    function Container(dndService) {
      _classCallCheck(this, Container);

      this.items = [{ name: 'A', x: 20, y: 20 }, { name: 'B', x: 50, y: 200 }, { name: 'C', x: 200, y: 100 }];

      this.dndService = dndService;
    }

    Container.prototype.attached = function attached() {
      this.dndService.addTarget(this);
    };

    Container.prototype.detached = function detached() {
      this.dndService.removeTarget(this);
    };

    Container.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'moveItem';
    };

    Container.prototype.dndDrop = function dndDrop(location) {
      var item = this.dnd.model.item;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };
      item.x = newLoc.x;
      item.y = newLoc.y;

      var idx = this.items.indexOf(item);
      if (idx >= 0) {
        this.items.splice(idx, 1);
        this.items.push(item);
      }
    };

    return Container;
  }()) || _class);
});
define('text!examples/e1-simple-move-step-2/container.css', ['module'], function(module) { module.exports = ".e1-example-container-step-2 {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e1-simple-move-step-2/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./box\"></require>\n\n  <div ref=\"dndElement\" class=\"e1-example-container-step-2\">\n    <box repeat.for=\"item of items\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e1-simple-move-step-2/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e1-simple-move-step-2/container.js', 'src/examples/e1-simple-move-step-2/container.html', 'src/examples/e1-simple-move-step-2/container.css', 'src/examples/e1-simple-move-step-2/box.js', 'src/examples/e1-simple-move-step-2/box.html', 'src/examples/e1-simple-move-step-2/box.css'];
  };
});
define('text!examples/e1-simple-move-step-2/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e1-simple-move/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec3 = (0, _aureliaFramework.computedFrom)('dndService.isProcessing', 'dndService.model'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this);
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        item: this.item
      };
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }, {
      key: 'draggingMe',
      get: function get() {
        return this.dndService.isProcessing && this.dndService.model.item === this.item;
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'draggingMe', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'draggingMe'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e1-simple-move/box.css', ['module'], function(module) { module.exports = ".e1-example-box {\n  position: absolute;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n}"; });
define('text!examples/e1-simple-move/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e1-example-box\"\n    style.bind=\"positionCss\"\n    show.bind=\"!draggingMe\"\n  >\n    ${item.name}\n  </div>\n</template>"; });
define('examples/e1-simple-move/container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Container = exports.Container = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec(_class = function () {
    function Container(dndService) {
      _classCallCheck(this, Container);

      this.items = [{ name: 'A', x: 20, y: 20 }, { name: 'B', x: 50, y: 200 }, { name: 'C', x: 200, y: 100 }];

      this.dndService = dndService;
    }

    Container.prototype.attached = function attached() {
      this.dndService.addTarget(this);
    };

    Container.prototype.detached = function detached() {
      this.dndService.removeTarget(this);
    };

    Container.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'moveItem';
    };

    Container.prototype.dndDrop = function dndDrop(location) {
      var item = this.dnd.model.item;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };
      item.x = newLoc.x;
      item.y = newLoc.y;

      var idx = this.items.indexOf(item);
      if (idx >= 0) {
        this.items.splice(idx, 1);
        this.items.push(item);
      }
    };

    return Container;
  }()) || _class);
});
define('text!examples/e1-simple-move/container.css', ['module'], function(module) { module.exports = ".e1-example-container {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e1-simple-move/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./box\"></require>\n\n  <div ref=\"dndElement\" class=\"e1-example-container\">\n    <box repeat.for=\"item of items\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e1-simple-move/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e1-simple-move/box.js', 'src/examples/e1-simple-move/box.html', 'src/examples/e1-simple-move/box.css', 'src/examples/e1-simple-move/container.js', 'src/examples/e1-simple-move/container.html', 'src/examples/e1-simple-move/container.css'];
  };
});
define('text!examples/e1-simple-move/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e2-simple-move-hover/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
      this.updateClock = this.updateClock.bind(this);
      this.updateClock();
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this, { noPreview: true });
      this.clockUpdator = setInterval(this.updateClock, 1000);
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
      if (this.clockUpdator) {
        clearInterval(this.clockUpdator);
        this.clockUpdator = null;
      }
    };

    Box.prototype.updateClock = function updateClock() {
      var t = new Date();
      this.clock = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        id: this.item.id
      };
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e2-simple-move-hover/box.css', ['module'], function(module) { module.exports = ".e2-example-box {\n  position: absolute;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n  line-height: 1;\n}"; });
define('text!examples/e2-simple-move-hover/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e2-example-box\"\n    style.bind=\"positionCss\"\n  >\n    ${item.name}<br>${clock}\n  </div>\n</template>"; });
define('examples/e2-simple-move-hover/container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'aurelia-event-aggregator', 'lodash'], function (exports, _aureliaFramework, _bcxAureliaDnd, _aureliaEventAggregator, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = undefined;

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _class, _desc, _value, _class2;

  var Container = exports.Container = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.computedFrom)('items', 'intention'), _dec(_class = (_class2 = function () {
    function Container(dndService, ea) {
      _classCallCheck(this, Container);

      this.items = [{ id: 'a', name: 'A', x: 20, y: 20 }, { id: 'b', name: 'B', x: 50, y: 200 }, { id: 'c', name: 'C', x: 200, y: 100 }];

      this.dndService = dndService;
      this.ea = ea;
    }

    Container.prototype.attached = function attached() {
      var _this = this;

      this.dndService.addTarget(this);
      this.subscribers = [this.ea.subscribe('dnd:willStart', function () {
        return _this.resetIntention();
      }), this.ea.subscribe('dnd:didEnd', function () {
        return _this.resetIntention();
      })];
    };

    Container.prototype.detached = function detached() {
      this.dndService.removeTarget(this);
      this.subscribers.forEach(function (s) {
        return s.dispose();
      });
    };

    Container.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'moveItem';
    };

    Container.prototype.dndDrop = function dndDrop() {
      var items = this.items,
          intention = this.intention;

      if (!intention) return;

      var idx = _lodash2.default.findIndex(items, { id: intention.id });

      if (idx >= 0) {
        var item = items[idx];
        items.splice(idx, 1);

        items.push(_extends({}, item, { x: intention.x, y: intention.y }));
      }
    };

    Container.prototype.dndHover = function dndHover(location) {
      var id = this.dnd.model.id;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };

      var item = _lodash2.default.find(this.items, { id: id });
      if (!item) return;

      this.intention = { id: id, x: newLoc.x, y: newLoc.y };
    };

    Container.prototype.resetIntention = function resetIntention() {
      this.intention = null;
    };

    _createClass(Container, [{
      key: 'patchedItems',
      get: function get() {
        var items = this.items,
            intention = this.intention;

        if (!intention) return items;

        var patched = _lodash2.default.reject(items, { id: intention.id });
        var item = _lodash2.default.find(this.items, { id: intention.id });

        if (item) {
          patched.push(_extends({}, item, { x: intention.x, y: intention.y }));
        }

        return patched;
      }
    }]);

    return Container;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'patchedItems', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'patchedItems'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e2-simple-move-hover/container.css', ['module'], function(module) { module.exports = ".e2-example-container {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e2-simple-move-hover/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./box\"></require>\n\n  <div ref=\"dndElement\" class=\"e2-example-container\">\n    <box repeat.for=\"item of patchedItems\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e2-simple-move-hover/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e2-simple-move-hover/container.js', 'src/examples/e2-simple-move-hover/container.html', 'src/examples/e2-simple-move-hover/container.css', 'src/examples/e2-simple-move-hover/box.js', 'src/examples/e2-simple-move-hover/box.html', 'src/examples/e2-simple-move-hover/box.css'];
  };
});
define('text!examples/e2-simple-move-hover/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e2-simple-move-hover/test',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['test/unit/e2-simple-move-hover/container.spec.js', 'test/unit/e2-simple-move-hover/box.spec.js'];
  };
});
define('examples/e3-customise-preview/add-box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'jquery'], function (exports, _aureliaFramework, _bcxAureliaDnd, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AddBox = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AddBox = exports.AddBox = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec(_class = function () {
    function AddBox(dndService) {
      _classCallCheck(this, AddBox);

      this.dndService = dndService;
    }

    AddBox.prototype.attached = function attached() {
      this.dndService.addSource(this);
    };

    AddBox.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    AddBox.prototype.dndModel = function dndModel() {
      return {
        type: 'addItem'
      };
    };

    AddBox.prototype.dndPreview = function dndPreview() {
      var jq = (0, _jquery2.default)('<div class="e3-example-box">new box</div>');

      return jq.get(0);
    };

    return AddBox;
  }()) || _class);
});
define('text!examples/e3-customise-preview/add-box.html', ['module'], function(module) { module.exports = "<template>\n  <button ref=\"dndElement\">Box</button>\n</template>"; });
define('examples/e3-customise-preview/add-money',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'jquery'], function (exports, _aureliaFramework, _bcxAureliaDnd, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AddMoney = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AddMoney = exports.AddMoney = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec(_class = function () {
    function AddMoney(dndService) {
      _classCallCheck(this, AddMoney);

      this.dndService = dndService;
    }

    AddMoney.prototype.attached = function attached() {
      this.dndService.addSource(this, { centerPreviewToMousePosition: true, hideCursor: true });
    };

    AddMoney.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    AddMoney.prototype.dndModel = function dndModel() {
      return {
        type: 'addDollar'
      };
    };

    AddMoney.prototype.dndPreview = function dndPreview() {
      var jq = (0, _jquery2.default)('<div class="e3-dollar"></div>');
      return jq.get(0);
    };

    return AddMoney;
  }()) || _class);
});
define('text!examples/e3-customise-preview/add-money.css', ['module'], function(module) { module.exports = ".e3-dollar {\n  display: block;\n  font-size: 2rem;\n  font-weight: bold;\n  width: auto;\n  height: auto;\n}\n\n.e3-dollar:before {\n  content: '$';\n}\n\n/* overwrite default style of dnd preview */\n.bcx-dnd-preview.e3-dollar {\n  opacity: 1;\n  box-shadow: none;\n}\n"; });
define('text!examples/e3-customise-preview/add-money.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./add-money.css\"></require>\n  <button ref=\"dndElement\">Money</button>\n</template>\n"; });
define('examples/e3-customise-preview/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec3 = (0, _aureliaFramework.computedFrom)('dnd', 'dnd.model', 'dnd.isProcessing', 'dnd.canDrop', 'dnd.isHoveringShallowly'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this, { noPreview: true });
      this.dndService.addTarget(this);
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
      this.dndService.removeTarget(this);
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        id: this.item.id
      };
    };

    Box.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'addDollar';
    };

    Box.prototype.dndDrop = function dndDrop() {
      var type = this.dnd.model.type;


      if (type === 'addDollar') {
        this.item.dollars += 1;
      }
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }, {
      key: 'dndCss',
      get: function get() {
        if (!this.dnd) return '';
        var _dnd = this.dnd,
            model = _dnd.model,
            isProcessing = _dnd.isProcessing,
            canDrop = _dnd.canDrop,
            isHoveringShallowly = _dnd.isHoveringShallowly;

        if (!isProcessing) return '';

        if (model.type === 'moveItem') return '';
        var css = '';
        if (canDrop) {
          css += 'can-drop';
        } else {
          css += 'can-not-drop';
        }
        if (isHoveringShallowly) css += ' shallow-hover';
        return css;
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'dndCss', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'dndCss'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e3-customise-preview/box.css', ['module'], function(module) { module.exports = ".e3-example-box {\n  position: absolute;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n}"; });
define('text!examples/e3-customise-preview/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e3-example-box ${dndCss}\"\n    style.bind=\"positionCss\"\n  >\n    $${item.dollars}\n  </div>\n</template>"; });
define('examples/e3-customise-preview/container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'aurelia-event-aggregator', 'lodash'], function (exports, _aureliaFramework, _bcxAureliaDnd, _aureliaEventAggregator, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = undefined;

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

  var Container = exports.Container = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.computedFrom)('items', 'intention'), _dec3 = (0, _aureliaFramework.computedFrom)('dnd', 'dnd.model', 'dnd.isProcessing', 'dnd.canDrop', 'dnd.isHoveringShallowly'), _dec(_class = (_class2 = function () {
    function Container(dndService, ea) {
      _classCallCheck(this, Container);

      this.items = [{ id: '0', dollars: 1, x: 20, y: 20 }, { id: '1', dollars: 1, x: 50, y: 200 }, { id: '2', dollars: 1, x: 200, y: 100 }];

      this.dndService = dndService;
      this.ea = ea;
    }

    Container.prototype.attached = function attached() {
      var _this = this;

      this.dndService.addTarget(this);
      this.subscribers = [this.ea.subscribe('dnd:willStart', function () {
        return _this.resetIntention();
      }), this.ea.subscribe('dnd:didEnd', function () {
        return _this.resetIntention();
      })];
    };

    Container.prototype.detached = function detached() {
      this.dndService.removeTarget(this);
      this.subscribers.forEach(function (s) {
        return s.dispose();
      });
    };

    Container.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'moveItem' || model.type === 'addItem';
    };

    Container.prototype.dndDrop = function dndDrop(location) {
      var _dnd$model = this.dnd.model,
          type = _dnd$model.type,
          id = _dnd$model.id;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };

      if (type === 'moveItem') {
        var idx = _lodash2.default.findIndex(this.items, { id: id });
        if (idx < 0) return;

        var newItem = _extends({}, this.items[idx], newLoc);

        this.items.splice(idx, 1);
        this.items.push(newItem);
      } else if (type === 'addItem') {
        this.items.push(_extends({
          id: '' + this.items.length,
          dollars: 1
        }, newLoc));
      }
    };

    Container.prototype.dndHover = function dndHover(location) {
      var _dnd$model2 = this.dnd.model,
          type = _dnd$model2.type,
          id = _dnd$model2.id;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };

      if (type === 'moveItem') {
        var item = _lodash2.default.find(this.items, { id: id });
        if (!item) return;

        this.intention = { id: id, x: newLoc.x, y: newLoc.y };
      }
    };

    Container.prototype.resetIntention = function resetIntention() {
      this.intention = null;
    };

    _createClass(Container, [{
      key: 'patchedItems',
      get: function get() {
        var items = this.items,
            intention = this.intention;

        if (!intention) return items;

        var patched = _lodash2.default.reject(items, { id: intention.id });
        var item = _lodash2.default.find(this.items, { id: intention.id });

        if (item) {
          patched.push(_extends({}, item, { x: intention.x, y: intention.y }));
        }

        return patched;
      }
    }, {
      key: 'dndCss',
      get: function get() {
        if (!this.dnd) return '';
        var _dnd = this.dnd,
            model = _dnd.model,
            isProcessing = _dnd.isProcessing,
            canDrop = _dnd.canDrop,
            isHoveringShallowly = _dnd.isHoveringShallowly;

        if (!isProcessing) return '';

        if (model.type === 'moveItem') return '';
        var css = '';
        if (canDrop) {
          css += 'can-drop';
        } else {
          css += 'can-not-drop';
        }
        if (isHoveringShallowly) css += ' shallow-hover';
        return css;
      }
    }]);

    return Container;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'patchedItems', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'patchedItems'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'dndCss', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'dndCss'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e3-customise-preview/container.css', ['module'], function(module) { module.exports = ".e3-example-container {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e3-customise-preview/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./target-effect.css\"></require>\n  <require from=\"./box\"></require>\n  <require from=\"./add-box\"></require>\n  <require from=\"./add-money\"></require>\n\n  <p>\n    Drag to canvas\n    <add-box></add-box>\n    <add-money></add-money>\n  </p>\n\n  <div ref=\"dndElement\" class=\"e3-example-container ${dndCss}\">\n    <box repeat.for=\"item of patchedItems\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e3-customise-preview/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e3-customise-preview/add-box.js', 'src/examples/e3-customise-preview/add-box.html', 'src/examples/e3-customise-preview/add-money.js', 'src/examples/e3-customise-preview/add-money.html', 'src/examples/e3-customise-preview/add-money.css', 'src/examples/e3-customise-preview/box.js', 'src/examples/e3-customise-preview/box.html', 'src/examples/e3-customise-preview/box.css', 'src/examples/e3-customise-preview/container.js', 'src/examples/e3-customise-preview/container.html', 'src/examples/e3-customise-preview/container.css', 'src/examples/e3-customise-preview/target-effect.css'];
  };
});
define('text!examples/e3-customise-preview/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('text!examples/e3-customise-preview/target-effect.css', ['module'], function(module) { module.exports = ".e3-example-container.can-drop,\n.e3-example-box.can-drop {\n  background-color: lightgreen;\n}\n\n.e3-example-container.can-drop.shallow-hover,\n.e3-example-box.can-drop.shallow-hover {\n  outline: 3px solid green;\n}\n\n.e3-example-container.can-not-drop,\n.example-box.can-not-drop {\n  background-color: lightgrey;\n}\n"; });
define('examples/e4-handler-move/box',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Box = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var Box = exports.Box = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'item.x', 'item.y'), _dec3 = (0, _aureliaFramework.computedFrom)('dndService.isProcessing', 'dndService.model'), _dec(_class = (_class2 = function () {
    function Box(dndService) {
      _classCallCheck(this, Box);

      _initDefineProp(this, 'item', _descriptor, this);

      this.dndService = dndService;
    }

    Box.prototype.attached = function attached() {
      this.dndService.addSource(this, { handler: this.handler });
    };

    Box.prototype.detached = function detached() {
      this.dndService.removeSource(this);
    };

    Box.prototype.dndModel = function dndModel() {
      return {
        type: 'moveItem',
        item: this.item
      };
    };

    _createClass(Box, [{
      key: 'positionCss',
      get: function get() {
        var x = this.item && this.item.x || 0;
        var y = this.item && this.item.y || 0;

        return {
          left: x + 'px',
          top: y + 'px'
        };
      }
    }, {
      key: 'draggingMe',
      get: function get() {
        return this.dndService.isProcessing && this.dndService.model.item === this.item;
      }
    }]);

    return Box;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'positionCss', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'positionCss'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'draggingMe', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'draggingMe'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e4-handler-move/box.css', ['module'], function(module) { module.exports = ".e4-example-box {\n  position: absolute;\n  box-sizing: border-box;\n  width: 80px;\n  height: 40px;\n  border: 1px solid #555;\n  background: white;\n  padding-left: 40px;\n  padding-top: 5px;\n}\n\n.e4-example-box .e4-pin {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid gray;\n  cursor: pointer;\n}\n"; });
define('text!examples/e4-handler-move/box.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./box.css\"></require>\n\n  <div\n    ref=\"dndElement\"\n    class=\"e4-example-box\"\n    style.bind=\"positionCss\"\n    show.bind=\"!draggingMe\"\n  >\n    <div ref=\"handler\" class=\"e4-pin\"></div>\n\n    <span>${item.name}</span>\n    <i class=\"far fa-edit bcx-dnd-preview-hide\"></i>\n  </div>\n</template>"; });
define('examples/e4-handler-move/container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Container = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Container = exports.Container = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec(_class = function () {
    function Container(dndService) {
      _classCallCheck(this, Container);

      this.items = [{ name: 'A', x: 20, y: 20 }, { name: 'B', x: 50, y: 200 }, { name: 'C', x: 200, y: 100 }];

      this.dndService = dndService;
    }

    Container.prototype.attached = function attached() {
      this.dndService.addTarget(this);
    };

    Container.prototype.detached = function detached() {
      this.dndService.removeTarget(this);
    };

    Container.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'moveItem';
    };

    Container.prototype.dndDrop = function dndDrop(location) {
      var item = this.dnd.model.item;
      var previewElementRect = location.previewElementRect,
          targetElementRect = location.targetElementRect;

      var newLoc = {
        x: previewElementRect.x - targetElementRect.x,
        y: previewElementRect.y - targetElementRect.y
      };
      item.x = newLoc.x;
      item.y = newLoc.y;

      var idx = this.items.indexOf(item);
      if (idx >= 0) {
        this.items.splice(idx, 1);
        this.items.push(item);
      }
    };

    return Container;
  }()) || _class);
});
define('text!examples/e4-handler-move/container.css', ['module'], function(module) { module.exports = ".e4-example-container {\n  position: relative;\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  border: 1px solid #555;\n  overflow: hidden;\n}"; });
define('text!examples/e4-handler-move/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n  <require from=\"./box\"></require>\n\n  <div ref=\"dndElement\" class=\"e4-example-container\">\n    <box repeat.for=\"item of items\" item.bind=\"item\"></box>\n  </div>\n</template>\n"; });
define('examples/e4-handler-move/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e4-handler-move/box.js', 'src/examples/e4-handler-move/box.html', 'src/examples/e4-handler-move/box.css', 'src/examples/e4-handler-move/container.js', 'src/examples/e4-handler-move/container.html', 'src/examples/e4-handler-move/container.css'];
  };
});
define('text!examples/e4-handler-move/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e5-draw/canvas-container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _bcxAureliaDnd, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CanvasContainer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CanvasContainer = exports.CanvasContainer = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function CanvasContainer(dndService, ea) {
      _classCallCheck(this, CanvasContainer);

      this.shapes = [];
      this.selectedType = 'drawLine';
      this.drawingTypes = [{ value: 'drawLine', label: 'Line' }, { value: 'drawRect', label: 'Rectangular' }];

      this.dndService = dndService;
      this.ea = ea;
    }

    CanvasContainer.prototype.attached = function attached() {
      var _this = this;

      this.dndService.addSource(this, { noPreview: true });
      this.dndService.addTarget(this);
      this.subscribers = [this.ea.subscribe('dnd:willStart', function () {
        return _this.resetDrawingShape();
      }), this.ea.subscribe('dnd:didEnd', function () {
        return _this.resetDrawingShape();
      })];
    };

    CanvasContainer.prototype.detached = function detached() {
      this.dndService.removeSource(this);
      this.dndService.removeTarget(this);
      this.subscribers.forEach(function (s) {
        return s.dispose();
      });
    };

    CanvasContainer.prototype.resetDrawingShape = function resetDrawingShape() {
      this.drawingShape = null;
    };

    CanvasContainer.prototype.dndModel = function dndModel() {
      return { type: this.selectedType };
    };

    CanvasContainer.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'drawLine' || model.type === 'drawRect';
    };

    CanvasContainer.prototype.dndHover = function dndHover(location) {
      var mouseStartAt = location.mouseStartAt,
          targetElementRect = location.targetElementRect,
          mouseEndAt = location.mouseEndAt;


      var start = {
        x: mouseStartAt.x - targetElementRect.x,
        y: mouseStartAt.y - targetElementRect.y
      };

      var end = {
        x: mouseEndAt.x - targetElementRect.x,
        y: mouseEndAt.y - targetElementRect.y
      };

      if (this.dnd.model.type === 'drawLine') {
        this.drawingShape = { type: 'line', from: start, to: end };
      } else if (this.dnd.model.type === 'drawRect') {
        var x = Math.min(start.x, end.x);
        var y = Math.min(start.y, end.y);
        var width = Math.abs(start.x - end.x);
        var height = Math.abs(start.y - end.y);
        this.drawingShape = { type: 'rect', x: x, y: y, width: width, height: height };
      }
    };

    CanvasContainer.prototype.dndDrop = function dndDrop() {
      if (this.drawingShape) {
        this.shapes.push(this.drawingShape);
      }
    };

    return CanvasContainer;
  }()) || _class);
});
define('text!examples/e5-draw/canvas-container.html', ['module'], function(module) { module.exports = "<template>\n  <p>Draw\n    <select value.bind=\"selectedType\">\n      <option repeat.for=\"type of drawingTypes\" model.bind=\"type.value\">${type.label}</option>\n    </select>\n  </p>\n\n  <svg ref=\"dndElement\" width=\"300\" height=\"300\">\n    <!-- draw border of svg -->\n    <rect\n      x=\"0\"\n      y=\"0\"\n      width=\"300\"\n      height=\"300\"\n      stroke=\"#555\"\n      stroke-width=\"1\"\n      fill=\"transparent\"\n    ></rect>\n\n    <g repeat.for=\"shape of shapes\">\n      <line\n        if.bind=\"shape.type == 'line'\"\n        x1.bind=\"shape.from.x\"\n        y1.bind=\"shape.from.y\"\n        x2.bind=\"shape.to.x\"\n        y2.bind=\"shape.to.y\"\n        stroke=\"#333\"\n      ></line>\n\n      <rect\n        if.bind=\"shape.type == 'rect'\"\n        x.bind=\"shape.x\"\n        y.bind=\"shape.y\"\n        width.bind=\"shape.width\"\n        height.bind=\"shape.height\"\n        stroke=\"#333\"\n        stroke-width=\"1\"\n        fill=\"transparent\"\n      ></rect>\n    </g>\n\n\n    <line\n      if.bind=\"drawingShape.type == 'line'\"\n      x1.bind=\"drawingShape.from.x\"\n      y1.bind=\"drawingShape.from.y\"\n      x2.bind=\"drawingShape.to.x\"\n      y2.bind=\"drawingShape.to.y\"\n      stroke=\"blue\"\n    ></line>\n\n    <rect\n      if.bind=\"drawingShape.type == 'rect'\"\n      x.bind=\"drawingShape.x\"\n      y.bind=\"drawingShape.y\"\n      width.bind=\"drawingShape.width\"\n      height.bind=\"drawingShape.height\"\n      stroke=\"blue\"\n      stroke-width=\"1\"\n      fill=\"transparent\"\n    ></rect>\n  </svg>\n</template>\n"; });
define('examples/e5-draw/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e5-draw/canvas-container.js', 'src/examples/e5-draw/canvas-container.html'];
  };
});
define('text!examples/e5-draw/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./canvas-container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <canvas-container></canvas-container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e6-reorder-list/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/e6-reorder-list/list-container.js', 'src/examples/e6-reorder-list/list-container.html', 'src/examples/e6-reorder-list/list-container.css', 'src/examples/e6-reorder-list/item.js', 'src/examples/e6-reorder-list/item.html', 'src/examples/e6-reorder-list/item.css'];
  };
});
define('text!examples/e6-reorder-list/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <p>This demo shows the basic algorithm behind <a href=\"#/reorderable-repeat\">reorderable-repeat</a>.</p>\n      <list-container></list-container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/e6-reorder-list/item',['exports', 'aurelia-framework', 'bcx-aurelia-dnd'], function (exports, _aureliaFramework, _bcxAureliaDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Item = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Item = exports.Item = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService), _dec2 = (0, _aureliaFramework.computedFrom)('item', 'dndService.isProcessing', 'dndService.model'), _dec(_class = (_class2 = function () {
    function Item(dndService) {
      _classCallCheck(this, Item);

      _initDefineProp(this, 'item', _descriptor, this);

      _initDefineProp(this, 'updateIntention', _descriptor2, this);

      this.dndService = dndService;
    }

    Item.prototype.attached = function attached() {
      this.dndService.addSource(this);
      this.dndService.addTarget(this);
    };

    Item.prototype.detached = function detached() {
      this.dndService.removeSource(this);
      this.dndService.removeTarget(this);
    };

    Item.prototype.dndModel = function dndModel() {
      return {
        type: 'orderItemFlex',
        id: this.item.id
      };
    };

    Item.prototype.dndCanDrop = function dndCanDrop(model) {
      return model.type === 'orderItemFlex' && model.id !== this.item.id;
    };

    Item.prototype.dndDrop = function dndDrop() {};

    Item.prototype.dndHover = function dndHover(location) {
      var mouseEndAt = location.mouseEndAt,
          targetElementRect = location.targetElementRect;

      var y = mouseEndAt.y - targetElementRect.y;

      if (y < targetElementRect.height / 2) {
        this.updateIntention({ targetId: this.item.id, beforeTarget: true });
      } else {
        this.updateIntention({ targetId: this.item.id, beforeTarget: false });
      }
    };

    _createClass(Item, [{
      key: 'draggingMe',
      get: function get() {
        var item = this.item,
            dndService = this.dndService;

        return dndService.isProcessing && dndService.model.type === 'orderItemFlex' && dndService.model.id === item.id;
      }
    }]);

    return Item;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'updateIntention', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'draggingMe', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'draggingMe'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e6-reorder-list/item.css', ['module'], function(module) { module.exports = ".e6-list-flex-item {\n  position: relative;\n  display: block;\n  background-color: white;\n  border: 1px solid #333;\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.e6-list-flex-item:not(:last-child) {\n  margin-bottom: -1px;\n}\n\n.e6-list-flex-item.dragging {\n  background-color: lightgrey;\n}\n"; });
define('text!examples/e6-reorder-list/item.html', ['module'], function(module) { module.exports = "<template ref=\"dndElement\" class=\"e6-list-flex-item ${draggingMe ? 'dragging' : ''}\">\n  <require from=\"./item.css\"></require>\n\n  <!-- cannot use show.bind here, it changes outer element size-->\n  <!-- use visibility: hidden; to retain size -->\n  <span css=\"visibility: ${draggingMe ? 'hidden': 'inherit'}\">${item.value}</span>\n</template>\n"; });
define('examples/e6-reorder-list/list-container',['exports', 'aurelia-framework', 'bcx-aurelia-dnd', 'aurelia-event-aggregator', 'lodash'], function (exports, _aureliaFramework, _bcxAureliaDnd, _aureliaEventAggregator, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ListContainer = undefined;

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _class, _desc, _value, _class2;

  var ListContainer = exports.ListContainer = (_dec = (0, _aureliaFramework.inject)(_bcxAureliaDnd.DndService, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.computedFrom)('items', 'intention'), _dec(_class = (_class2 = function () {
    function ListContainer(dndService, ea) {
      _classCallCheck(this, ListContainer);

      this.items = [{ id: '0', value: 'lorem' }, { id: '1', value: 'Lorem ipsum dolor sit amet. consectetur adipisicing elit.' }, { id: '2', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tempore.' }, { id: '3', value: 'Lorem ipsum dolor sit amet, consectetur.' }];

      this.dndService = dndService;
      this.ea = ea;
    }

    ListContainer.prototype.attached = function attached() {
      var _this = this;

      this.subscribers = [this.ea.subscribe('dnd:willStart', function () {
        return _this.resetIntention();
      }), this.ea.subscribe('dnd:didEnd', function () {
        return _this.fulfillIntention();
      })];
    };

    ListContainer.prototype.detached = function detached() {
      this.subscribers.forEach(function (s) {
        return s.dispose();
      });
    };

    ListContainer.prototype.resetIntention = function resetIntention() {
      this.intention = null;
    };

    ListContainer.prototype.updateIntention = function updateIntention(targetId, beforeTarget) {
      var _dndService = this.dndService,
          isProcessing = _dndService.isProcessing,
          model = _dndService.model;

      if (!isProcessing) return;
      if (model.type !== 'orderItemFlex') return;

      var patchedItems = this.patchedItems;

      var targetIndex = _lodash2.default.findIndex(patchedItems, { id: targetId });
      if (targetIndex < 0) return;

      var originalIndex = void 0;
      var currentIndex = void 0;
      var nextIndex = void 0;
      if (this.intention) {
        originalIndex = this.intention.fromIndex;
        currentIndex = this.intention.toIndex;
      } else {
        originalIndex = _lodash2.default.findIndex(patchedItems, { id: model.id });
        if (originalIndex < 0) return;
        currentIndex = originalIndex;
      }

      if (currentIndex < targetIndex) {
        if (beforeTarget) {
          nextIndex = targetIndex - 1;
        } else {
          nextIndex = targetIndex;
        }
      } else {
          if (beforeTarget) {
            nextIndex = targetIndex;
          } else {
            nextIndex = targetIndex + 1;
          }
        }

      this.intention = {
        fromIndex: originalIndex,
        toIndex: nextIndex
      };
    };

    ListContainer.prototype.fulfillIntention = function fulfillIntention() {
      if (!this.intention) return;
      var _intention = this.intention,
          fromIndex = _intention.fromIndex,
          toIndex = _intention.toIndex;


      this.resetIntention();
      if (fromIndex === toIndex) return;

      var item = this.items[fromIndex];
      this.items.splice(fromIndex, 1);
      this.items.splice(toIndex, 0, item);
    };

    _createClass(ListContainer, [{
      key: 'patchedItems',
      get: function get() {
        var items = this.items,
            intention = this.intention;

        if (!intention) return items;
        var _intention2 = this.intention,
            fromIndex = _intention2.fromIndex,
            toIndex = _intention2.toIndex;


        var patched = [].concat(items);
        var item = this.items[fromIndex];
        patched.splice(fromIndex, 1);
        patched.splice(toIndex, 0, item);
        return patched;
      }
    }]);

    return ListContainer;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'patchedItems', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'patchedItems'), _class2.prototype)), _class2)) || _class);
});
define('text!examples/e6-reorder-list/list-container.css', ['module'], function(module) { module.exports = ".e6-list-container {\n  width: 200px;\n  margin: 5px;\n  padding: 0;\n}"; });
define('text!examples/e6-reorder-list/list-container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container.css\"></require>\n  <require from=\"./item\"></require>\n\n  <ul ref=\"dndElement\" class=\"e6-list-container\">\n    <li as-element=\"item\" repeat.for=\"item of patchedItems\" item.bind=\"item\" update-intention.call=\"updateIntention(targetId, beforeTarget)\"></li>\n  </ul>\n</template>\n"; });
define('examples/er1-reorderable-repeat/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/er1-reorderable-repeat/list-container.js', 'src/examples/er1-reorderable-repeat/list-container.html', 'src/examples/er1-reorderable-repeat/list-container.css', 'src/examples/er1-reorderable-repeat/list-container2.js', 'src/examples/er1-reorderable-repeat/list-container2.html'];
  };
});
define('text!examples/er1-reorderable-repeat/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container\"></require>\n  <require from=\"./list-container2\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\" style=\"display:flex\">\n      <list-container></list-container>\n      <list-container2></list-container2>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/er1-reorderable-repeat/list-container',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ListContainer = exports.ListContainer = function ListContainer() {
    _classCallCheck(this, ListContainer);

    this.items = ['first', 'second', 'third', 'fourth'];
  };
});
define('text!examples/er1-reorderable-repeat/list-container.css', ['module'], function(module) { module.exports = ".er1-list-container {\n  width: 200px;\n  margin: 5px;\n}\n\n.er1-list-item {\n  display: block;\n  box-sizing: border-box;\n  border: 1px solid #333;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  overflow: hidden;\n  background: white;\n}\n"; });
define('text!examples/er1-reorderable-repeat/list-container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container.css\"></require>\n\n  <p>Array of strings</p>\n\n  <div class=\"er1-list-container\">\n    <div class=\"er1-list-item\" reorderable-repeat.for=\"item of items\">\n      ${item}\n    </div>\n  </div>\n</template>\n"; });
define('examples/er1-reorderable-repeat/list-container2',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ListContainer2 = exports.ListContainer2 = function ListContainer2() {
    _classCallCheck(this, ListContainer2);

    this.items = [{ id: '0', value: 'first' }, { id: '1', value: 'second' }, { id: '2', value: 'third' }, { id: '3', value: 'fourth' }];
  };
});
define('text!examples/er1-reorderable-repeat/list-container2.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container.css\"></require>\n\n  <p>Array of objects</p>\n\n  <div class=\"er1-list-container\">\n    <div class=\"er1-list-item\" reorderable-repeat.for=\"item of items\">\n      #${item.id} ${item.value}\n    </div>\n  </div>\n</template>\n"; });
define('examples/er2-reorderable-repeat-customise-style/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/er2-reorderable-repeat-customise-style/list-container.css', 'src/examples/er2-reorderable-repeat-customise-style/list-container.js', 'src/examples/er2-reorderable-repeat-customise-style/list-container.html', 'src/examples/er2-reorderable-repeat-customise-style/list-container2.js', 'src/examples/er2-reorderable-repeat-customise-style/list-container2.html'];
  };
});
define('text!examples/er2-reorderable-repeat-customise-style/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container\"></require>\n  <require from=\"./list-container2\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\" style=\"display:flex\">\n      <list-container></list-container>\n      <list-container2></list-container2>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/er2-reorderable-repeat-customise-style/list-container',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ListContainer = exports.ListContainer = function ListContainer() {
    _classCallCheck(this, ListContainer);

    this.items = ['first', 'second', 'third', 'fourth'];
  };
});
define('text!examples/er2-reorderable-repeat-customise-style/list-container.css', ['module'], function(module) { module.exports = ".er2-list-container {\n  width: 200px;\n  margin: 5px;\n}\n\n.reorderable-repeat-dragging-me.er2-list-item {\n  visibility: visible; /* unset visibility: hidden */\n  color: transparent; /* hide text */\n  background: linear-gradient(to right, lightgrey, white, lightgrey);\n}\n\n.er2-list-item {\n  display: block;\n  box-sizing: border-box;\n  border: 1px solid #333;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  overflow: hidden;\n  background: white;\n}\n"; });
define('text!examples/er2-reorderable-repeat-customise-style/list-container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container.css\"></require>\n\n  <p>Array of strings</p>\n\n  <div class=\"er2-list-container\">\n    <div class=\"er2-list-item\" reorderable-repeat.for=\"item of items\">\n      ${item}\n    </div>\n  </div>\n</template>\n"; });
define('examples/er2-reorderable-repeat-customise-style/list-container2',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ListContainer2 = exports.ListContainer2 = function ListContainer2() {
    _classCallCheck(this, ListContainer2);

    this.items = [{ id: '0', value: 'first' }, { id: '1', value: 'second' }, { id: '2', value: 'third' }, { id: '3', value: 'fourth' }];
  };
});
define('text!examples/er2-reorderable-repeat-customise-style/list-container2.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./list-container.css\"></require>\n\n  <p>Array of objects</p>\n\n  <div class=\"er2-list-container\">\n    <div class=\"er2-list-item\" reorderable-repeat.for=\"item of items\">\n      #${item.id} ${item.value}\n    </div>\n  </div>\n</template>\n"; });
define('examples/er3-reorderable-repeat-with-handler/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/er3-reorderable-repeat-with-handler/table-container.html', 'src/examples/er3-reorderable-repeat-with-handler/table-container.js', 'src/examples/er3-reorderable-repeat-with-handler/table-container.css'];
  };
});
define('text!examples/er3-reorderable-repeat-with-handler/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./table-container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <table-container></table-container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/er3-reorderable-repeat-with-handler/table-container',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TableContainer = exports.TableContainer = function TableContainer() {
    _classCallCheck(this, TableContainer);

    this.items = [{ name: 'Bob', age: 23 }, { name: 'Ali', age: 37 }, { name: 'Tom', age: 12 }, { name: 'Emma', age: 18 }];
  };
});
define('text!examples/er3-reorderable-repeat-with-handler/table-container.css', ['module'], function(module) { module.exports = "table.table-container {\n  width: 100%;\n  background-color: white;\n  border-spacing: 0;\n}\n\ntable.table-container tr th {\n  border-bottom: 2px solid #555;\n}\n\ntable.table-container tr td {\n  border-bottom: 1px solid #555;\n}\n\ntable.table-container tr th,\ntable.table-container tr td {\n  text-align: left;\n  padding: 0.5rem;\n}\n\ntable.table-container tr.dragging td {\n  background-color: lightgrey;\n  color: lightgrey;\n}\n\ntable.table-container tr td .handler {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  border: 1px solid #333;\n  cursor: pointer;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me {\n  visibility: visible;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me td {\n  background-color: lightgrey;\n  color: transparent;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me td .handler {\n  visibility: hidden;\n}"; });
define('text!examples/er3-reorderable-repeat-with-handler/table-container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./table-container.css\"></require>\n  <table class=\"table-container\">\n    <thead>\n      <tr><th></th><th>Name</th><th>Age</th>\n      </tr>\n    </thead>\n    <tbody ref=\"tableBody\">\n      <tr reorderable-repeat.for=\"item of items\"\n          reorderable-dnd-handler-selector=\".handler\">\n        <td style=\"width:30px;\"><div class=\"handler\"></div></td>\n        <td>${item.name}</td>\n        <td>${item.age}</td>\n      </tr>\n    </tbody>\n  </table>\n</template>\n"; });
define('examples/er4-reorderable-repeat-customise-preview/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/er4-reorderable-repeat-customise-preview/table-container.html', 'src/examples/er4-reorderable-repeat-customise-preview/table-container.js', 'src/examples/er4-reorderable-repeat-customise-preview/table-container.css'];
  };
});
define('text!examples/er4-reorderable-repeat-customise-preview/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./table-container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <table-container></table-container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('examples/er4-reorderable-repeat-customise-preview/table-container',['exports', 'jquery'], function (exports, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TableContainer = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TableContainer = exports.TableContainer = function () {
    function TableContainer() {
      _classCallCheck(this, TableContainer);

      this.items = [{ name: 'Bob', age: 23 }, { name: 'Ali', age: 37 }, { name: 'Tom', age: 12 }, { name: 'Emma', age: 18 }];
    }

    TableContainer.prototype.drawPreview = function drawPreview(person) {
      var jq = (0, _jquery2.default)('<div class="er4-drag-person"></div>');
      jq.text(person.name);
      return jq.get(0);
    };

    TableContainer.prototype.orderChanged = function orderChanged(orderedItems) {
      console.log('Ordered items: ' + JSON.stringify(orderedItems));
    };

    return TableContainer;
  }();
});
define('text!examples/er4-reorderable-repeat-customise-preview/table-container.css', ['module'], function(module) { module.exports = "table.table-container {\n  width: 100%;\n  background-color: white;\n  border-spacing: 0;\n}\n\ntable.table-container tr th {\n  border-bottom: 2px solid #555;\n}\n\ntable.table-container tr td {\n  border-bottom: 1px solid #555;\n}\n\ntable.table-container tr th,\ntable.table-container tr td {\n  text-align: left;\n  padding: 0.5rem;\n}\n\ntable.table-container tr.dragging td {\n  background-color: lightgrey;\n  color: lightgrey;\n}\n\ntable.table-container tr td .handler {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  border: 1px solid #333;\n  cursor: pointer;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me {\n  visibility: visible;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me td {\n  background-color: lightgrey;\n  color: transparent;\n}\n\ntable.table-container tr.reorderable-repeat-dragging-me td .handler {\n  visibility: hidden;\n}\n\n.er4-drag-person {\n  background-color: #5D99BD;\n  color: white;\n  padding: 0.5rem;\n}"; });
define('text!examples/er4-reorderable-repeat-customise-preview/table-container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./table-container.css\"></require>\n  <table class=\"table-container\">\n    <thead>\n      <tr><th></th><th>Name</th><th>Age</th>\n      </tr>\n    </thead>\n    <tbody ref=\"tableBody\">\n      <tr reorderable-repeat.for=\"item of items\"\n          reorderable-dnd-handler-selector=\".handler\"\n          reorderable-dnd-preview=\"drawPreview\"\n          reorderable-after-reordering=\"orderChanged\">\n        <td style=\"width:30px;\"><div class=\"handler\"></div></td>\n        <td>${item.name}</td>\n        <td>${item.age}</td>\n      </tr>\n    </tbody>\n  </table>\n</template>\n"; });
define('examples/er5-reorderable-repeat-direction/container',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Container = exports.Container = function Container() {
    _classCallCheck(this, Container);

    this.leftToRight = ['L0', 'L1', 'L2'];
    this.rightToLeft = ['R0', 'R1', 'R2'];
  };
});
define('text!examples/er5-reorderable-repeat-direction/container.css', ['module'], function(module) { module.exports = ".er5-floats-container {\n  overflow: hidden;\n  width: 100%;\n  max-width: 400px;\n}\n\n.er5-float-left, .er5-float-right {\n  margin: 0.2rem;\n  border: 1px dashed grey;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.er5-float-left {\n  float: left;\n}\n\n.er5-float-right {\n  float: right;\n}"; });
define('text!examples/er5-reorderable-repeat-direction/container.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container.css\"></require>\n\n  <div class=\"er5-floats-container\">\n    <div\n      class=\"er5-float-left\"\n      reorderable-repeat.for=\"unit of leftToRight\"\n      reorderable-direction=\"right\"\n    >\n      ${unit}\n    </div>\n  </div>\n\n  <div class=\"er5-floats-container\">\n   <div\n      class=\"er5-float-right\"\n      reorderable-repeat.for=\"unit of rightToLeft\"\n      reorderable-direction=\"left\"\n    >\n      ${unit}\n    </div>\n  </div>\n</template>\n"; });
define('examples/er5-reorderable-repeat-direction/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.sources = ['src/examples/er5-reorderable-repeat-direction/container.html', 'src/examples/er5-reorderable-repeat-direction/container.js', 'src/examples/er5-reorderable-repeat-direction/container.css'];
  };
});
define('text!examples/er5-reorderable-repeat-direction/index.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./container\"></require>\n\n  <div class=\"bcx-doc-demo\">\n    <div class=\"demo-app\">\n      <container></container>\n    </div>\n    <div class=\"demo-code\" as-element=\"display-sources\" sources.bind=\"sources\"></div>\n  </div>\n</template>\n"; });
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').developmentLogging(_environment2.default.debug ? 'info' : 'warn').plugin('bcx-doc-base').plugin('bcx-aurelia-reorderable-repeat');

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('text!not-found.html', ['module'], function(module) { module.exports = "<template><h2 id=\"page-not-found-\">Page not found :-(</h2>\n</template>"; });
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!tutorial/api.html', ['module'], function(module) { module.exports = "<template><h2 id=\"dndservice-api-reference\">DndService API Reference</h2>\n<p><code>DndService</code> is the single class provided in <code>bcx-aurelia-dnd</code>. Technically, it can work with any front-end framework.</p>\n<blockquote>\n<p>in Aurelia app, use dependency injection to create shared singleton instance.</p>\n</blockquote>\n<blockquote>\n<p>in other kind of app, create a shared instance for the whole app to share.</p>\n</blockquote>\n<h3 id=\"dndservice-constructor\">DndService Constructor</h3>\n<p>You don&#39;t need to use constructor in Aurelia app.</p>\n<div><code-viewer value=\"const dndService = new DndService();\" mode=\"js\"></code-viewer></div>\n\n<blockquote>\n<p>return an instance created without Aurelia Event Aggregator support. Events <code>&#39;dnd:willStart&#39;</code>, <code>&#39;dnd:didStart&#39;</code>, <code>&#39;dnd:willEnd&#39;</code>, <code>&#39;dnd:willEnd&#39;</code> would not fire.</p>\n</blockquote>\n<div><code-viewer value=\"import {EventAggregator} from 'aurelia-event-aggregator';\nconst sharedEa = new EventAggregator();\nconst dndService = new DndService(sharedEa);\" mode=\"js\"></code-viewer></div>\n\n<blockquote>\n<p>return an instance created with Aurelia Event Aggregator support. Use <code>sharedEa</code> to subscribe to events.</p>\n</blockquote>\n<h2 id=\"published-events-through-aurelia-event-aggregator\">Published events through Aurelia Event Aggregator</h2>\n<blockquote>\n<p><code>dnd:willStart</code>, just before starting of DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... are still <code>undefined</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>dnd:didStart</code>, just after starting of DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... have been set. But none of any targets received <code>dndHover()</code> / <code>dndDrop()</code> callback.</p>\n</blockquote>\n<blockquote>\n<p><code>dnd:willEnd</code>, just before end of a DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... are still set. Just before a target (if there is valid one with canDrop:true under the mouse) receives <code>dndDrop()</code> callback.</p>\n</blockquote>\n<blockquote>\n<p><code>dnd:didEnd</code>, after a DnD session finished. all <code>isProcessing</code>, <code>model</code>, ... are set to <code>undefined</code>. Final <code>dndDrop()</code> callback has been fired if there is a valid target.</p>\n</blockquote>\n<h3 id=\"dndservice-isprocessing\">dndService.isProcessing</h3>\n<blockquote>\n<p><code>true</code> during a DnD session. <code>undefined</code> when not in a DnD session.</p>\n</blockquote>\n<h3 id=\"dndservice-model\">dndService.model</h3>\n<blockquote>\n<p>the <code>model</code> object cached from the result of <code>sourceDelegate.dndModel()</code>. <code>undefined</code> when not in a DnD session.</p>\n</blockquote>\n<h3 id=\"dndservice-addsource-delegate-options-\">dndService.addSource(delegate, options)</h3>\n<blockquote>\n<p>typically called inside Aurelia component&#39;s <code>attached()</code> callback.</p>\n</blockquote>\n<h4 id=\"source-delegate\">Source delegate</h4>\n<blockquote>\n<p>if <code>options.element</code> is absent, <code>delegate.dndElement</code> must be a DOM element, used for source element.</p>\n</blockquote>\n<blockquote>\n<p>if <code>options.element</code> is present, <code>delegate.dndElement</code> is ignored, <code>options.element</code> is used as source element.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dndModel()</code>, mandatory. Called once, when DnD session starts. It needs to return a model describing the meaning of a drag. There is no requirement on the shape of returned model.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dndPreview(model)</code>, optional. Called once, when DnD session starts. It needs to return a newly created DOM element, with reasonable size, and not yet attached to DOM tree. Input <code>model</code> is the cached result of <code>sourceDelegate.dndModel()</code>. It could also return null or undefined, in that case, <code>DndService</code> will fall back to use default preview.</p>\n</blockquote>\n<blockquote>\n<p>if <code>options.noPreview</code> is true, <code>delegate.dndPreview(model)</code> is ignored.</p>\n</blockquote>\n<h4 id=\"source-options-optional-\">Source options (optional)</h4>\n<blockquote>\n<p><code>options.element</code>, manually pass a DOM element as source element, instead of default <code>delegate.dndElement</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>options.handler</code>, a DOM element as drag handler. It should be a decedent of source element. It limits where drag can start, doesn&#39;t affect preview.</p>\n</blockquote>\n<blockquote>\n<p><code>options.noPreview</code>, turn off preview.</p>\n</blockquote>\n<blockquote>\n<p><code>options.hideCursor</code>, hide cursor during a DnD session.</p>\n</blockquote>\n<blockquote>\n<p><code>options.centerPreviewToMousePosition</code>, center preview to mouse position. Default preview position is aligned to source element top left corner.</p>\n</blockquote>\n<h3 id=\"dndservice-addtarget-delegate-options-\">dndService.addTarget(delegate, options)</h3>\n<blockquote>\n<p>typically called inside Aurelia component&#39;s <code>attached()</code> callback.</p>\n</blockquote>\n<h4 id=\"target-delegate\">Target delegate</h4>\n<blockquote>\n<p>if <code>options.element</code> is absent, <code>delegate.dndElement</code> must be a DOM element, used for target element.</p>\n</blockquote>\n<blockquote>\n<p>if <code>options.element</code> is present, <code>delegate.dndElement</code> is ignored, <code>options.element</code> is used as target element.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dndCanDrop(model)</code>, mandatory. Called once, when DnD session starts. Input <code>model</code> is the cached result of <code>sourceDelegate.dndModel()</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dndDrop(location)</code>, mandatory. Called once, when DnD session ends (mouse released) on target element and <code>delegate.dnd.canDrop</code> is true.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dndHover(location)</code>, optional. Called every time mouse moves during a DnD session, when <code>delegate.dnd.canDrop</code> is true and either <code>delegate.dnd.isHovering</code> or <code>delegate.dnd.isHoveringShallowly</code> is true.</p>\n</blockquote>\n<blockquote>\n<p>When two (or more) target elements overlap, and both have <code>delegate.dnd.canDrop</code> true, <code>dndHover()</code> could be called on both target delegates at same time, but <code>dndDrop()</code> would be only called on the top target.</p>\n</blockquote>\n<h4 id=\"dnd-property-on-target-delegate\">dnd property on target delegate</h4>\n<blockquote>\n<p><code>dnd</code> property was created for every target delegate by <code>dndService</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dnd.isProcessing</code>, exactly same as <code>dndService.isProcessing</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dnd.model</code>, exactly same as <code>dndService.model</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dnd.canDrop</code>, cached result of <code>delegate.dndCanDrop(model)</code>. <code>undefined</code> when not in a DnD session.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dnd.isHoveringShallowly</code>, <code>true</code> when mouse is hovering directly over target element. <code>undefined</code> when not in a DnD session.</p>\n</blockquote>\n<blockquote>\n<p><code>delegate.dnd.isHovering</code>, <code>true</code> when mouse is hovering within target element region. <code>undefined</code> when not in a DnD session.</p>\n</blockquote>\n<h4 id=\"target-options-optional-\">Target options (optional)</h4>\n<blockquote>\n<p><code>options.element</code>, manually pass a DOM element as target element, instead of default <code>delegate.dndElement</code>.</p>\n</blockquote>\n<h4 id=\"location-payload-for-dndhover-location-and-dnddrop-location-\">Location payload for dndHover(location) and dndDrop(location)</h4>\n<blockquote>\n<p><code>location.mouseStartAt</code>, drag start mouse location {x, y} (not {left, top}).</p>\n</blockquote>\n<blockquote>\n<p><code>location.mouseEndAt</code>, drop end mouse location {x, y} for <code>dndDrop()</code>, or current mouse location for <code>dndHover()</code>.</p>\n</blockquote>\n<blockquote>\n<p><code>location.sourceElementRect</code>, source element location and size {x, y, width, height}.</p>\n</blockquote>\n<blockquote>\n<p><code>location.previewElementRect</code>, preview element location and size {x, y, width, height}.</p>\n</blockquote>\n<blockquote>\n<p><code>location.targetElementRect</code>, target element location and size {x, y, width, height}.</p>\n</blockquote>\n<blockquote>\n<p>All <code>x</code> and <code>y</code>, are page offset (relative to whole HTML body), not client offset (relative to browser current view-port). Page offset is stabler to use than client offset, especially when there is scrolling or browser zooming.</p>\n</blockquote>\n<blockquote>\n<p>For convenience, <code>previewElementRect</code> always presents. Even if you turn off the preview, it still reports location and size as if you were using default preview.</p>\n</blockquote>\n<blockquote>\n<p><code>sourceElementRect</code> is not current location of source element. It is a cached location for the source element when DnD session started.</p>\n</blockquote>\n<h3 id=\"dndservice-removesource-delegateorelement-\">dndService.removeSource(delegateOrElement)</h3>\n<h3 id=\"dndservice-removetarget-delegateorelement-\">dndService.removeTarget(delegateOrElement)</h3>\n<blockquote>\n<p>typically called inside Aurelia component&#39;s <code>detached()</code> callback.</p>\n</blockquote>\n</template>"; });
define('text!tutorial/customise-preview-and-source-handler.html', ['module'], function(module) { module.exports = "<template><h1 id=\"customise-preview\">Customise preview</h1>\n<p>There are two situations you want to use customised preview.</p>\n<ol>\n<li>when the built-in preview drawer doesn&#39;t draw preview to your expectation, either due to css limitation or DOM hierarchy limitation.</li>\n<li>when you want a totally different preview, for instance, customise &quot;cursor&quot; during DnD session.</li>\n</ol>\n<p>DnD source <code>delegate</code> has an optional callback <code>dndPreview(model)</code> to draw customised preview. The input is the model generated by <code>dndModel()</code>, the output needs to be a DOM element (not attached to DOM tree yet).</p>\n<p>In this tutorial, we use jQuery (not required) to create DOM element.</p>\n<compose view-model=\"../examples/e3-customise-preview/index\"></compose>\n\n<p>For &quot;Box&quot; and &quot;Money&quot; buttons, we use <code>dndPreview()</code> to customise preview.</p>\n<blockquote>\n<p>In customised preview mode, <code>DndService</code> only sets <code>left</code> and <code>top</code> on the preview element, not <code>width</code> or <code>height</code>. You need to make sure your element has reasonable size.</p>\n</blockquote>\n<blockquote>\n<p>By default, preview is aligned to source element&#39;s top left corner.</p>\n</blockquote>\n<p>You can center your preview element around mouse position instead of aligning to source element top left corner. <code>dndService.addSource(this, {centerPreviewToMousePosition: true});</code></p>\n<p>This <code>centerPreviewToMousePosition</code> option works on both default preview and customised preview.</p>\n<p>There is one more option you can pass to <code>addSource()</code>, that is <code>hideCursor</code>, which is to hide cursor during a DnD session.</p>\n<blockquote>\n<p>Combine option <code>centerPreviewToMousePosition</code> with <code>hideCursor</code>, you are essentially using <code>dndPreview()</code> to draw a cursor replacement! That&#39;s what happened behind &quot;Money&quot; button.</p>\n</blockquote>\n<blockquote>\n<p>You could do conditional customising. In <code>dndPreview()</code> callback, return a DOM element when you need to customise preview, or return <code>null</code>/<code>undefined</code> when you want to fall back to default preview.</p>\n</blockquote>\n<h2 id=\"style-target-element-based-on-dnd-state\">Style target element based on DnD state</h2>\n<p>In the above example code, both boxes and container are DnD targets. They got some style change during a DnD session.</p>\n<p>Let&#39;s have a look on the implementation of box&#39;s property <code>dndCss</code>.</p>\n<div><code-viewer value=\"@computedFrom('dnd', 'dnd.model', 'dnd.isProcessing', 'dnd.canDrop', 'dnd.isHoveringShallowly')\nget dndCss() {\n  if (!this.dnd) return '';\n  const {model, isProcessing, canDrop, isHoveringShallowly} = this.dnd;\n  if (!isProcessing) return '';\n  // no style if moving item\n  if (model.type === 'moveItem') return '';\n  let css = '';\n  if (canDrop) {\n    css += 'can-drop';\n  } else {\n    css += 'can-not-drop';\n  }\n  if (isHoveringShallowly) css += ' shallow-hover';\n  return css;\n}\" mode=\"js\"></code-viewer></div>\n\n<p>It observes <code>dnd.isProcessing</code>, <code>dnd.model</code>, <code>dnd.canDrop</code> and <code>dnd.isHoveringShallowly</code>, set the right css class for box element. Thanks for Aurelia, all the style changes are updated automatically during a DnD session.</p>\n<h2 id=\"optional-source-handler\">Optional source handler</h2>\n<p>There is one more option for <code>addSource()</code>, you can pass a <code>handler</code> element in options. <code>handler</code> should be an DOM element within source element, it only limits where the drag can start, doesn&#39;t affect how preview was drawn.</p>\n<blockquote>\n<p>Default preview still clones source element, not handler element.</p>\n</blockquote>\n<blockquote>\n<p>Preview still aligns to source element, not handler element.</p>\n</blockquote>\n<h2 id=\"prevent-preview-to-show-some-parts\">Prevent preview to show some parts</h2>\n<p>You can mark parts of the source element with class <code>bcx-dnd-preview-hide</code> to prevent the part showing up in preview. For instance, mark edit button to hide it in preview.</p>\n<blockquote>\n<p>The default style for <code>bcx-dnd-preview-hide</code> is <code>visibility: hidden;</code>, not <code>display: none;</code>, this makes sure the hidden part doesn&#39;t affect the layout geometry.</p>\n</blockquote>\n<div><code-viewer value=\".bcx-dnd-preview .bcx-dnd-preview-hide {\n  visibility: hidden !important;\n}\" mode=\"css\"></code-viewer></div>\n\n<p>Here is an example for both source handler and bcx-dnd-preview-hide.</p>\n<compose view-model=\"../examples/e4-handler-move/index\"></compose>\n\n<p>That concludes all features of <code>bcx-aurelia-dnd</code>.</p>\n</template>"; });
define('text!tutorial/dnd-preview.html', ['module'], function(module) { module.exports = "<template><h1 id=\"dnd-preview\">DnD Preview</h1>\n<p>During a DnD session, the &quot;image&quot; floating with you mouse is called <code>preview</code>. Before we move on to DnD target, let&#39;s have a brief look what happened with the preview when you drag a box.</p>\n<p>It&#39;s important to understand preview in order to understand its limitation.</p>\n<h2 id=\"how-preview-was-drawn\">How preview was drawn</h2>\n<p>If using native HTML5 DnD API, the preview would be provided by browser automatically, you have little control of its appearance. Instead, as copied from dragula, <code>DndService</code> draws the preview &quot;image&quot; by creating a DOM element.</p>\n<ol>\n<li>first, it clones the source element to a preview element.</li>\n<li>add css class &quot;bcx-dnd-preview&quot; to the preview element. Most importantly this class sets <code>position: absolute !important;</code> on the preview.</li>\n<li>get calculated page offset and size of source element, apply them to preview&#39;s <code>left,top,width,height</code> styles. So that preview will appear at the exact same location of source element.</li>\n<li>append preview element directly to HTML body. This imposes limitation on css.</li>\n</ol>\n<div><code-viewer value=\".bcx-dnd-preview {\n  position: absolute !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  box-shadow: 0 0 16px gray;\n}\" mode=\"css\"></code-viewer></div>\n\n<blockquote>\n<p>Be clear, preview element lives outside of Aurelia. It&#39;s a static snapshot of source element.</p>\n</blockquote>\n<h2 id=\"css-limitation\">CSS limitation</h2>\n<p>Because preview is directly under HTML body, you need to make sure source element&#39;s css class works directly under HTML body.</p>\n<p>If the source element&#39;s css is like <code>.example-container .example-box {...}</code>, the preview with class <code>.example-box</code> would not look right when <code>.example-container</code> is absent. If refactoring your css to fit <code>bcx-aurelia-dnd</code> is too much work, you can also <a href=\"#/customise-preview-and-source-handler\">customize preview</a>.</p>\n<blockquote>\n<p><code>bcx-aurelia-dnd</code> style sheet (for <code>.bcx-dnd-preview</code> and others) was injected to the very top of HTML head. You can overwrite them in your style sheet, for instance, overwrite the <code>opacity</code> and <code>box-shadow</code> on <code>.bcx-dnd-preview</code>. You can also apply special style to one type of your preview with <code>.bcx-dnd-preview.example-box {...}</code>. Comparing to native HTML5 DnD API, we have much better control on preview.</p>\n</blockquote>\n<h2 id=\"hierarchy-limitation\">Hierarchy limitation</h2>\n<p>You may wonder how would preview on <code>&lt;tr&gt;</code> ever works. A cloned <code>&lt;tr&gt;</code>would not work out of a table.</p>\n<blockquote>\n<p>Luckily, since v0.4.0, <code>bcx-aurelia-dnd</code> ships with some default preview drawers for <code>&lt;tr&gt;</code> and <code>&lt;li&gt;</code> elements, we copy their <code>&lt;table&gt;</code>/<code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> wrapper and make some adjustment on width and height. You rarely need to go down to <a href=\"#/customise-preview-and-source-handler\">customize preview</a> to deal with <code>&lt;tr&gt;</code> preview anymore.</p>\n</blockquote>\n<p>Let&#39;s move on to <a href=\"#/dnd-target\">DnD Target</a>.</p>\n</template>"; });
define('text!tutorial/dnd-source.html', ['module'], function(module) { module.exports = "<template><h1 id=\"dnd-source\">DnD Source</h1>\n<p>Influenced by <code>react-dnd</code>, we have concept of:</p>\n<ul>\n<li><strong>DnD source</strong>, a DOM element that you can drag, plus associated logic.</li>\n<li><strong>DnD target</strong>, a DOM element that you can drop onto, plus associated logic.</li>\n</ul>\n<p>Since the source and target are bound to DOM element, you need to register and deregister them in the right Aurelia life-cycle callback.</p>\n<blockquote>\n<p>The common practice is to do <code>addSource</code>/<code>addTarget</code> in <code>attached()</code>, and do <code>removeSource</code>/<code>removeTarget</code> in <code>detached()</code>.</p>\n</blockquote>\n<p>Let&#39;s implement our first example <a href=\"#/e1-simple-move\">&quot;1. move object&quot;</a> step by step.</p>\n<p>There is a container of three boxes inside. To implement moving box, we register every box as a source which we want to drag, and register the container as the target which will receive a drop.</p>\n<h3 id=\"implement-source\">Implement source</h3>\n<p>The box component.</p>\n<div><code-viewer value=\"export class Box {\n  //...\n  attached() {\n    this.dndService.addSource(this);\n  }\n\n  detached() {\n    this.dndService.removeSource(this);\n  }\n  //...\n}\" mode=\"js\"></code-viewer></div>\n\n<p><code>dndService.addSource(delegate, options)</code> takes two arguments.</p>\n<ul>\n<li>most of the time <code>delegate</code> object is your Aurelia component <code>addSource(this)</code>.</li>\n<li><code>options</code> is optional, we use it to alter default behaviour.</li>\n</ul>\n<p>The first thing that a source <code>delegate</code> needs to provide, is a reference to the DOM element we want to drag.</p>\n<blockquote>\n<p>By default, <code>DndService</code> get DOM element from <code>delegate.dndElement</code>. The easiest way to set that reference is to use <code>ref=&quot;dndElement&quot;</code> in your view template.</p>\n</blockquote>\n<div><code-viewer value=\"<template>\n  <require from=&quot;./box.css&quot;></require>\n\n  <div\n    ref=&quot;dndElement&quot;\n    class=&quot;example-box&quot;\n    style.bind=&quot;positionCss&quot;\n  >\n    \\${item.name}\n  </div>\n</template>\" mode=\"html\"></code-viewer></div>\n\n<blockquote>\n<p>When you use <code>ref=&quot;dndElement&quot;</code> in view template, Aurelia (not <code>DndService</code>) creates a property <code>dndElement</code> in your component pointing to the DOM element, you can access <code>this.dndElement</code> inside your component code.</p>\n</blockquote>\n<blockquote>\n<p>Note, <code>removeSource()</code> and <code>removeTarget()</code> can be called with either <code>delegate</code> object or element object. So in here, <code>this.dndService.removeSource(this.dndElement)</code> works same as <code>this.dndService.removeSource(this)</code>.</p>\n</blockquote>\n<p>Now DOM is hooked up, source <code>delegate</code> needs to provide <code>dndModel()</code> callback, it should return a model which describes the meaning of the drag.</p>\n<blockquote>\n<p>When <code>DndService</code> detected user started a drag, it asks (only once) the source <code>delegate</code> <code>dndModel()</code> callback to return a model.</p>\n</blockquote>\n<div><code-viewer value=\"export class Box {\n  //...\n  dndModel() {\n    return {\n      type: 'moveItem',\n      item: this.item\n    };\n  }\n  //...\n}\" mode=\"js\"></code-viewer></div>\n\n<blockquote>\n<p><code>DndService</code> has zero requirement on the shape of the model. Even if you return <code>undefined</code>, <code>DndService</code> would not complain, although there is no practical usage of returning <code>undefined</code>.</p>\n</blockquote>\n<blockquote>\n<p>You should make your own convention of the model shape. A common practice is to provide a <code>type</code> in the model, which you can easily check against in other parts of your app.</p>\n</blockquote>\n<h3 id=\"here-is-what-we-got-so-far-movable-boxes\">Here is what we got so far, movable boxes</h3>\n<p>There is no effect on drop, because we have not registered any DnD target yet.</p>\n<compose view-model=\"../examples/e1-simple-move-step-1/index\"></compose>\n\n<p>Let&#39;s move on to understand <a href=\"#/dnd-preview\">DnD Preview</a>.</p>\n</template>"; });
define('text!tutorial/dnd-target.html', ['module'], function(module) { module.exports = "<template><h1 id=\"dnd-target\">DnD Target</h1>\n<h2 id=\"implement-target\">Implement target</h2>\n<p>While source <code>delegate</code> has one mandatory method <code>dndModel()</code>, target <code>delegate</code> has two: <code>dndCanDrop(model)</code> and <code>dndDrop(location)</code>.</p>\n<ul>\n<li><code>dndCanDrop(model)</code> decides whether this target can be dropped onto.</li>\n<li><code>dndDrop(location)</code> is called when drop happened on this target. This is where you should finally mutate the state of your component. This callback will not be called if <code>dndCanDrop(model)</code> returned falsy.</li>\n</ul>\n<blockquote>\n<p>Note <code>dndDrop(location)</code> doesn&#39;t have <code>model</code> in the arguments, you get current DnD model from <code>this.dnd.model</code>. More explanation on <code>this.dnd</code> after following code snippet.</p>\n</blockquote>\n<div><code-viewer value=\"export class Container {\n  // ... add/removeTarget in attached/detached\n  // ... hook up dndElement in container.html\n\n  dndCanDrop(model) {\n    return model.type === 'moveItem';\n  }\n\n  dndDrop(location) {\n    const {item} = this.dnd.model;\n    const {previewElementRect, targetElementRect} = location;\n    const newLoc = {\n      x: previewElementRect.x - targetElementRect.x,\n      y: previewElementRect.y - targetElementRect.y\n    };\n    item.x = newLoc.x;\n    item.y = newLoc.y;\n\n    // move the item to end of array, in order to show it above others\n    const idx = this.items.indexOf(item);\n    if (idx >= 0) {\n      this.items.splice(idx, 1);\n      this.items.push(item);\n    }\n  }\n}\" mode=\"js\"></code-viewer></div>\n\n<h3 id=\"injected-dnd-property\">Injected <code>dnd</code> property</h3>\n<p>When a drag started, <code>DndService</code> got a model from source element (<code>dndModel()</code>), then use the model to ask (only once) every targets&#39; <code>dndCanDrop(model)</code>, it also injects a special property <code>dnd</code> onto target <code>delegate</code>.</p>\n<ul>\n<li><strong>dnd.isProcessing</strong>, <code>true</code> during a DnD session, no matter whether can drop on this target or not.</li>\n<li><strong>dnd.canDrop</strong>, a boolean, it&#39;s the cached result of <code>dndCanDrop(model)</code>.</li>\n<li><strong>dnd.model</strong>, the model of the DnD session, no matter whether can drop on this target or not.</li>\n<li><strong>dnd.isHoveringShallowly</strong>, <code>true</code> when mouse is hovering directly over target element.</li>\n<li><strong>dnd.isHovering</strong>, <code>true</code> when mouse is hovering within target element region.</li>\n<li>all of above have value <code>undefined</code> when not in a DnD session.</li>\n</ul>\n<p>Only when <code>canDrop</code> is true, the target delegate has chance of receiving <code>dndDrop(location)</code> callback.</p>\n<h3 id=\"location-argument\"><code>location</code> argument</h3>\n<p>There are few objects in location argument for <code>dndDrop(location)</code>.</p>\n<ul>\n<li><strong>location.mouseStartAt</strong>, drag start mouse location {x, y} (not {left, top}).</li>\n<li><strong>location.mouseEndAt</strong>, drop end mouse location {x, y} for <code>dndDrop()</code>, or current mouse location for <code>dndHover()</code>.</li>\n<li><strong>location.sourceElementRect</strong>, source element location and size {x, y, width, height}.</li>\n<li><strong>location.previewElementRect</strong>, preview element location and size {x, y, width, height}.</li>\n<li><strong>location.targetElementRect</strong>, target element location and size {x, y, width, height}.</li>\n</ul>\n<blockquote>\n<p>All <code>x</code> and <code>y</code>, are page offset (relative to whole HTML body), not client offset (relative to browser current view-port). Page offset is stabler to use than client offset, especially when there is scrolling or browser zooming.</p>\n</blockquote>\n<blockquote>\n<p>For convenience, <code>previewElementRect</code> always presents. Even if you turn off the preview (you will see that in <a href=\"#/customise-preview-and-source-handler\">customize preview</a>), it still reports location and size as if you were using default preview.</p>\n</blockquote>\n<p>Beware, <code>sourceElementRect</code> is not current location of source element. It is a cached location for the source element at the time when DnD session started.</p>\n<p>The reason behind this, is that <code>DndService</code> doesn&#39;t retain the source delegate/element during a DnD session. Even when the source was removed by <code>removeSource(...)</code> during a DnD session, <code>DndService</code> would not care. <code>DndService</code> gets the model, and caches source element location at start of a DnD session, that&#39;s the only time it ever uses that source delegate/element.</p>\n<blockquote>\n<p>In fact, <code>addSource()</code>, <code>removeSource()</code>, <code>addTarget()</code>, <code>removeTarget()</code> are <strong>all allowed any time</strong>, within or out of a DnD session. <code>DndService</code> thrives on dynamic behaviour. This will likely happen in your app without your notice, we will elaborate on this topic when examining <code>dndHover</code>.</p>\n</blockquote>\n<p>With that much code, we got movable boxes.</p>\n<compose view-model=\"../examples/e1-simple-move-step-2/index\"></compose>\n\n<p>There is one more thing we want to fix. During dragging a box, the original source box still presents. How about hide the original box while dragging.</p>\n<h2 id=\"style-dnd-source-element\">Style DnD Source Element</h2>\n<p>While DnD target <code>delegate</code> got special injected <code>dnd</code> property, DnD source <code>delegate</code> got none. But you can observe two properties directly on <code>dndService</code> instance: <code>isProcessing</code> and <code>model</code>.</p>\n<div><code-viewer value=\"export class Box {\n  //...\n  @computedFrom('dndService.isProcessing', 'dndService.model')\n  get draggingMe() {\n    return this.dndService.isProcessing &&\n           this.dndService.model.item === this.item;\n  }\n}\" mode=\"js\"></code-viewer></div>\n\n<blockquote>\n<p><code>dndService.isProcessing</code> and <code>dndService.model</code> are exactly same as DnD target <code>delegate</code>&#39;s <code>dnd.isProcessing</code> and <code>dnd.model</code>. In fact, you can use them as well in DnD target code.</p>\n</blockquote>\n<blockquote>\n<p>Here we use them to identify this box (DnD source) is being dragged.</p>\n</blockquote>\n<p>Hide the element when dragging, so user only sees the preview element during DnD session.</p>\n<div><code-viewer value=\"<template>\n  <require from=&quot;./box.css&quot;></require>\n\n  <div\n    ref=&quot;dndElement&quot;\n    class=&quot;example-box&quot;\n    style.bind=&quot;positionCss&quot;\n    show.bind=&quot;!draggingMe&quot;\n  >\n    \\${item.name}\n  </div>\n</template>\" mode=\"html\"></code-viewer></div>\n\n<blockquote>\n<p>Note we use <code>show.bind</code>, not <code>if.bind</code>. Aurelia <code>if.bind</code> adds/removes the element from DOM tree, while <code>show.bind</code> simply toggles css <code>visibility</code>. Because we have <code>ref=&quot;dndElement&quot;</code> on this DOM node, we really don&#39;t want <code>if.bind</code> dynamically adds/removes it.</p>\n</blockquote>\n<blockquote>\n<p>In Aurelia, it&#39;s a common practice to not put <code>ref</code> behind <code>if</code> or <code>repeat.for</code>.</p>\n</blockquote>\n<p>Now we got the full version of the first example.</p>\n<compose view-model=\"../examples/e1-simple-move/index\"></compose>\n\n<h2 id=\"cross-talk\">Cross Talk</h2>\n<p>If your computer screen is big enough to show both &quot;e1-simple-move-step-2&quot; and &quot;e1-simple-move&quot; demo apps within same frame (or you can use browser zoom-out to bring them into same screen), you can actually drag box from one app to the other, that generates cross-talk and can mutate the original box you dragged.</p>\n<blockquote>\n<p>This is because both demos has exactly same check in <code>dndCanDrop(model)</code>, <code>model.type === &#39;moveItem&#39;</code>.</p>\n</blockquote>\n<blockquote>\n<p>To avoid cross-talk in your app, design <code>dndModel()</code> and <code>dndCanDrop()</code> defensively for target to only respond to its interested source model. For instance, if we distinguish the <code>type</code> of two demos, set <code>type</code> to <code>moveItem-e1-step-1</code> and <code>moveItem-e1</code> respectively, we can eliminate cross talk.</p>\n</blockquote>\n<p>Let&#39;s move on to <a href=\"#/turn-off-preview-use-hover\">turn off preview, use dndHover</a>.</p>\n</template>"; });
define('text!tutorial/faq.html', ['module'], function(module) { module.exports = "<template><h1 id=\"faq\">FAQ</h1>\n<h2 id=\"how-was-bcx-aurelia-dnd-created\">How was <code>bcx-aurelia-dnd</code> created</h2>\n<p>In 2016, when we were converting our <a href=\"http://www.buttonwood.com.au/products/cloud-broker/cloud-broker/\">Buttonwood Cloud Broker</a> front-end from React to Aurelia, one obstacle of the re-write is missing drag-and-drop library for our blueprint composer. Previously we were using <a href=\"http://react-dnd.github.io/react-dnd/\">React DnD</a>, but there is no equivalent in Aurelia. There are plenty DOM based DnD libraries in JavaScript world, <a href=\"https://bevacqua.github.io/dragula/\"><code>dragula</code></a> is the best in our eyes.</p>\n<p>We copied <code>dragula</code> code, removed all its DOM mutation code (we don&#39;t need that in Aurelia), made a working DnD library in one day. <code>bcx-aurelia-dnd</code> source code is largely unchanged since that first implementation.</p>\n<p>Thanks for Aurelia, <code>bcx-aurelia-dnd</code> implementation is very simple. The source code is about 700 lines of JavaScript, even most of it were copied from dragula to handle events and styling. As always, similar to most libraries, the <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-dnd\">source code</a> is way shorter than documentation.</p>\n<h2 id=\"why-based-on-dragula-not-native-html5-dnd-api\">Why based on <code>dragula</code>, not native HTML5 DnD API</h2>\n<p><a href=\"https://bevacqua.github.io/dragula/\">dragula</a> implements DnD in plain mouse/touch events, not in native HTML5 DnD API. <a href=\"https://www.danyow.net/drag-and-drop-with-aurelia/\">Here</a> is the place where we were introduced to dragula, it has some links for issues around native HTML5 DnD API. It resonated with our experience on React DnD which uses native HTML5 DnD API. We had issues on nested source/target and some annoying browser behavior (cursor in IE) in native HTML5 DnD API. None of that affected our dragula based DnD.</p>\n<p>Another bonus of dragula, it supports mobile devices! All examples here works on iPad and phones.</p>\n<h2 id=\"why-bcx-aurelia-dnd-is-not-an-aurelia-plugin\">Why bcx-aurelia-dnd is not an Aurelia plugin</h2>\n<p>Technically, <code>bcx-aurelia-dnd</code> doesn&#39;t depend on Aurelia, it only uses <code>aurelia-event-aggregator</code> to provide better integration with Aurelia. There is nothing preventing you from using it with other front-end frameworks or even vanilla JavaScript. But it&#39;s easier to use it inside Aurelia app, because of Aurelia&#39;s ability to observe changes on plain JavaScript properties.</p>\n</template>"; });
define('text!tutorial/overview.html', ['module'], function(module) { module.exports = "<template><h1 id=\"bcx-aurelia-dnd\">bcx-aurelia-dnd</h1>\n<blockquote>\n<p>A generic drag-and-drop lib for <a href=\"https://aurelia.io\">Aurelia</a>, works on both desktop and mobile, provides APIs fit in MVC/MVVM natively. The design is similar to <a href=\"http://react-dnd.github.io/react-dnd/\"><code>react-dnd</code></a>.</p>\n</blockquote>\n<p>If you only want something using DnD to reorder a list, <a href=\"#/reorderable-repeat\"><code>bcx-aurelia-reorderable-repeat</code></a> is a deadly simple Aurelia plugin based on bcx-aurelia-dnd.</p>\n<p>If you want to play with the source code of included examples.</p>\n<pre><code>git clone git@github.com:buttonwoodcx/doc-bcx-aurelia-dnd.git\ncd doc-bcx-aurelia-dnd\nnpm i -g aurelia-cli # if you have not installed aurelia-cli\nnpm i # yarn doesn&#39;t work because of https://github.com/yarnpkg/yarn/issues/5235\nau run --watch\n</code></pre><h2 id=\"we-use-dragula-algorithm-but-bcx-aurelia-dnd-is-not-a-dragula-wrapper\">We use <a href=\"https://bevacqua.github.io/dragula/\"><code>dragula</code></a> algorithm, but <code>bcx-aurelia-dnd</code> is not a <code>dragula</code> wrapper</h2>\n<p>We use <code>dragula</code>&#39;s algorithm to avoid native HTML5 DnD API (see <a href=\"#/faq\">FAQ</a>), we don&#39;t inherit or expose any <code>dragula</code> API (they don&#39;t even exist in the code). We provide APIs fit in MVC/MVVM natively.</p>\n<h2 id=\"alternative-projects\">Alternative projects</h2>\n<p>There are few alternative projects in Aurelia community. List them here for reference.</p>\n<ol>\n<li><strong><a href=\"https://github.com/michaelmalonenz/aurelia-dragula\"><code>aurelia-dragula</code></a></strong> a <code>dragula</code> wrapper to provide convenient interface to Aurelia. Handy to existing <code>dragula</code> users.</li>\n<li><strong><a href=\"https://github.com/oribella/aurelia-sortable\"><code>oribella-aurelia-sortable</code></a></strong> based on very interesting <a href=\"https://github.com/oribella/oribella\"><code>oribella</code></a>, can sort list or multiple lists.</li>\n<li><strong><a href=\"https://github.com/eriklieben/aurelia-sortablejs\"><code>aurelia-sortablejs</code></a></strong> based on <a href=\"https://github.com/rubaxa/Sortable\"><code>Sortablejs</code></a>, can sort list or multiple lists, visually appealing.</li>\n</ol>\n<h2 id=\"use-inside-aurelia-app\">Use inside Aurelia app</h2>\n<p>To start with your Aurelia app.</p>\n<blockquote>\n<p>with aurelia-cli <code>au install bcx-aurelia-dnd</code>.</p>\n</blockquote>\n<blockquote>\n<p>with webpack <code>npm i bcx-aurelia-dnd</code>.</p>\n</blockquote>\n<p>There is a single class <code>DndService</code> provided by <code>bcx-aurelia-dnd</code>. Inject it to your component.</p>\n<div><code-viewer value=\"import {inject} from 'aurelia-framework';\nimport {DndService} from 'bcx-aurelia-dnd';\n\n@inject(DndService)\nexport class YourComponent {\n  constructor(dndService) {\n    this.dndService = dndService;\n  }\n}\" mode=\"js\"></code-viewer></div>\n\n<blockquote>\n<p>Here we rely on default behavior of Aurelia DI (dependency injection). Aurelia DI creates a singleton <code>dndService</code> instance for all components to share.</p>\n</blockquote>\n<blockquote>\n<p>For TypeScript user, have a look at <a href=\"#/typescript-support\">TypeScript Support</a>.</p>\n</blockquote>\n<p>Let&#39;s get started to add a <a href=\"#/dnd-source\">DnD source</a>.</p>\n</template>"; });
define('text!tutorial/reorderable-repeat.html', ['module'], function(module) { module.exports = "<template><h1 id=\"bcx-aurelia-reorderable-repeat\">bcx-aurelia-reorderable-repeat</h1>\n<p>A customised Aurelia repeater that supports drag-and-drop reordering automatically.</p>\n<h2 id=\"add-to-your-aurelia-app\">Add to your Aurelia app</h2>\n<h3 id=\"install-package\">Install package</h3>\n<blockquote>\n<p>with aurelia-cli, <code>au install bcx-aurelia-reorderable-repeat</code>.</p>\n</blockquote>\n<blockquote>\n<p>with webpack, <code>npm i bcx-aurelia-reorderable-repeat</code>.</p>\n</blockquote>\n<h3 id=\"load-plugin\">Load plugin</h3>\n<p>In you app main.js file.</p>\n<div><code-viewer value=\"aurelia.use.plugin(PLATFORM.moduleName('bcx-aurelia-reorderable-repeat'));\" mode=\"js\"></code-viewer></div>\n\n<h2 id=\"usage\">Usage</h2>\n<p>Simply use <code>reorderable-repeat.for=&quot;item of items&quot;</code> in your view template. That&#39;s it!</p>\n<compose view-model=\"../examples/er1-reorderable-repeat/index\"></compose>\n\n<h3 id=\"customise-item-style-under-drag\">Customise item style under drag</h3>\n<p>If you have not read <a href=\"#/overview\">tutorial</a> for <code>bcx-aurelia-dnd</code>, we recommend you to read it through. If you have not, here are some key information:</p>\n<ul>\n<li><p>when you drag a item, the &quot;image&quot; floating with you mouse is called <code>preview</code>, it&#39;s a DOM element (<code>bcx-aurelia-dnd</code> cloned from the source element) lives outside of Aurelia&#39;s control.</p>\n</li>\n<li><p><code>bcx-aurelia-reorderable-repeat</code> hides the algorithm showing in example <a href=\"#/e6-reorder-list\">6. underneath algorithm of reorderable-repeat</a>.</p>\n</li>\n<li><p>the original source element (which you started dragging) is still there. <code>bcx-aurelia-reorderable-repeat</code> just added a css class <code>reorderable-repeat-dragging-me</code> to the element.</p>\n</li>\n</ul>\n<blockquote>\n<p>The style defined in class <code>reorderable-repeat-dragging-me</code> is just hiding the source element without affecting layout.</p>\n</blockquote>\n<div><code-viewer value=\".reorderable-repeat-dragging-me {\n  visibility: hidden;\n}\" mode=\"css\"></code-viewer></div>\n\n<p>To customise the DOM under drag, you can overwrite <code>.reorderable-repeat-dragging-me</code> in your style sheet, or use <code>.reorderable-repeat-dragging-me.your-class</code> to localize the customisation.</p>\n<p>Here is a style customised version of previous example.</p>\n<compose view-model=\"../examples/er2-reorderable-repeat-customise-style/index\"></compose>\n\n<p>Note in customisation, you need to unset <code>visibility</code> first.</p>\n<blockquote>\n<p>While the item being dragged receives class <code>.reorderable-repeat-dragging-me</code>, all items involved in reordering receive additional class <code>.reorderable-repeat-reordering</code>. Be default, <code>.reorderable-repeat-reordering</code> has no impact on style.</p>\n</blockquote>\n<h3 id=\"use-handler-to-limit-where-user-can-start-drag\">Use handler to limit where user can start drag</h3>\n<p><code>bcx-aurelia-dnd</code> supports optional <code>handler</code> option on source <code>delegate</code> to limit where drag can start. In <code>bcx-aurelia-reorderable-repeat</code>, you can pass optional attribute <code>reorderable-dnd-handler-selector</code> on the repeated DOM to select a <code>handler</code> for undernearth source elements.</p>\n<blockquote>\n<p><code>reorderable-dnd-handler-selector</code> is used on every source elements with <code>element.querySelector(...)</code> to find out the handler.</p>\n</blockquote>\n<compose view-model=\"../examples/er3-reorderable-repeat-with-handler/index\"></compose>\n\n<h3 id=\"customise-preview\">Customise Preview</h3>\n<p><code>bcx-aurelia-reorderable-repeat</code> does not hide <code>bcx-aurelia-dnd</code>&#39;s limitation on drawing preview.</p>\n<blockquote>\n<p>To understand this topic, please go through full <code>bcx-aurelia-dnd</code> <a href=\"#/overview\">tutorial</a>.</p>\n</blockquote>\n<p>There are two situations you want to use customised preview.</p>\n<ol>\n<li>when the built-in preview drawer doesn&#39;t draw preview to your expectation, either due to css limitation or DOM hierarchy limitation.</li>\n<li>when you want a totally different preview, for instance, customise &quot;cursor&quot; during DnD session.</li>\n</ol>\n<p>To draw a customised preview, use optional attribute <code>reorderable-dnd-preview</code>. The attribute supports 2 forms:</p>\n<ul>\n<li><p><code>reorderable-dnd-preview=&quot;methodName&quot;</code> the string passed in is a method name on your component. The method will receive the current item (model, not DOM) been dragged, it needs to return a DOM element (unattached to DOM tree) with reasonable size.</p>\n</li>\n<li><p><code>reorderable-dnd-preview.call=&quot;methodInScope(smthInScope, smth2InScope)&quot;</code> the evaluated result of the function call must be a DOM element (unattached to DOM tree) with reasonable size.</p>\n</li>\n</ul>\n<compose view-model=\"../examples/er4-reorderable-repeat-customise-preview/index\"></compose>\n\n<p>Here we use <code>reorderable-dnd-preview=&quot;drawPreview&quot;</code>, you can also use <code>reorderable-dnd-preview.call=&quot;drawPreview(item)&quot;</code></p>\n<h3 id=\"callback-after-reordering\">Callback after reordering</h3>\n<p>Use optional attribute <code>reorderable-after-reordering</code> to specify a callback. Like <code>reorderable-dnd-preview</code>, it supports 2 forms.</p>\n<blockquote>\n<p>When using the string form with method name, that method will receive the array model that has been reordered.</p>\n</blockquote>\n<p>The example above shows the usage of <code>reorderable-after-reordering</code>, it prints the list in browser console after reordering.</p>\n<h3 id=\"direction-of-dom-flow\">Direction of DOM flow</h3>\n<p>By default, <code>bcx-aurelia-reorderable-repeat</code> thinks your DOM list flows from top to bottom.</p>\n<p>If your DOM list flows rather from left to right (or from right to left), you can pass attribute <code>reorderable-direction=&quot;right&quot;</code> (for flow from left to right) or <code>reorderable-direction=&quot;left&quot;</code> (for flow from right to left).</p>\n<blockquote>\n<p>The default value of &quot;reorderable-direction&quot; is &quot;down&quot;, means flow from top to bottom.</p>\n</blockquote>\n<blockquote>\n<p>We support <code>reorderable-direction=&quot;up&quot;</code> (for flow from bottom to top). You can achieve this unusual layout with <code>flex-direction: column-reverse;</code>.</p>\n</blockquote>\n<blockquote>\n<p>Even in layout with <code>flex-wrap: wrap;</code>, <code>reorderable-repeat</code> still works fine.</p>\n</blockquote>\n<compose view-model=\"../examples/er5-reorderable-repeat-direction/index\"></compose>\n\n<p>That concludes all features of <code>bcx-aurelia-reorderable-repeat</code>.</p>\n<h2 id=\"limitation\">Limitation</h2>\n<p><code>bcx-aurelia-reorderable-repeat</code> doesn&#39;t support repeat on <code>template</code> element.</p>\n<p>Following html generates an Aurelia error.</p>\n<div><code-viewer value=\"<template reorderable-repeat.for=&quot;obj of array&quot;>\n  <!-- inner html -->\n</template>\" mode=\"html\"></code-viewer></div>\n\n<p><code>bcx-aurelia-reorderable-repeat</code> only supports <code>Array</code> model, not <code>Set</code>, <code>Map</code> or <code>Object</code> (Those 3 are supported by standard Aurelia repeater). We are trying to reorder something, only array makes sense here.</p>\n<p>The DOM performance is theoretically really bad with <code>bcx-aurelia-reorderable-repeat</code>. But you would not feel it, since the array you want to reorder is typically not an array of thousands.</p>\n<p>The performance hit is not due to <code>bcx-aurelia-dnd</code>, it is my understanding on Aurelia&#39;s repeater. In order to support reordering duplicated primitive values (like <code>[&#39;one&#39;, &#39;one&#39;, &#39;two&#39;]</code>), I removed all DOM related optimization code from standard repeater (which skips re-rendering when reordering <code>&#39;one&#39;</code> and <code>&#39;one&#39;</code>). I will definitely revisit the repeater optimization code.</p>\n</template>"; });
define('text!tutorial/testing.html', ['module'], function(module) { module.exports = "<template><h1 id=\"testing\">Testing</h1>\n<h2 id=\"unit-test-without-view-layer-in-either-nodejs-or-browser-environment\">Unit test without view layer in either NodeJS or browser environment</h2>\n<p>If you do unit test on component JS code, mock up <code>DndService</code> is easy because of dependency injection.</p>\n<blockquote>\n<p>We have yet not provided <code>DndServiceTest</code> mock class for you to import in test code. We will definitely provide it in future.</p>\n</blockquote>\n<p>In this repo, there is some sample test code on the second example <a href=\"#/e2-simple-move-hover\">&quot;2. move object, preview off, use dndHover&quot;</a>.</p>\n<compose view-model=\"../examples/e2-simple-move-hover/test\" view=\"../examples/e2-simple-move-hover/index.html\"></compose>\n\n<blockquote>\n<p>There is an example to mock a DnD session in <code>container.spec.js</code>, you can use it as a base to test your DnD target <code>delegate</code>.</p>\n</blockquote>\n<blockquote>\n<p>There is no much mock in <code>box.spec.js</code>, because this source delegate didn&#39;t listen to any session based properties or events. If you need, use the a similar mock like the one in <code>container.spec.js</code>.</p>\n</blockquote>\n<blockquote>\n<p>No mouse events simulation needed to do unit test, as mouse events are hidden in <code>DndService</code>.</p>\n</blockquote>\n<h2 id=\"testing-with-view-layer\">Testing with view layer</h2>\n<p>This is what Aurelia official document demonstrated. When you do DOM based test, you can use the real <code>DndService</code> instance. You need to simulate mouse events to drive a DnD session.</p>\n<p>Read <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-dnd\"><code>bcx-aurelia-dnd</code></a> test code to see some example on how to simulate a mouse event with enough information for <code>DndService</code> to work.</p>\n<p><code>bcx-aurelia-dnd</code> listens mouse/touch events at top HTML document level. For most of your mouse event simulation, it doesn&#39;t matter what&#39;s the <code>event.target</code>. But <code>event.target</code> does matter for your first mouse event simulation, the <code>&#39;mousedown&#39;</code> event that starts a DnD session.</p>\n<p>The first <code>&#39;mousedown&#39;</code> <code>event.target</code> must be your intended source/handler(if defined) element (or its child element), <code>DndService</code> needs this information to find a matching DnD source delegate.</p>\n</template>"; });
define('text!tutorial/turn-off-preview-use-hover.html', ['module'], function(module) { module.exports = "<template><h1 id=\"turn-off-preview-use-dndhover-\">Turn off preview, use <code>dndHover()</code></h1>\n<h2 id=\"turn-off-preview\">Turn off preview</h2>\n<p>The first thing you can do is to turn off preview. Simply pass option <code>{noPreview: true}</code> to <code>this.dndService.addSource(this, {noPreview: true})</code>.</p>\n<h2 id=\"use-dndhover-for-real-time-feedback\">Use dndHover for real-time feedback</h2>\n<p>Preview has its limitation, it is a static snapshot of source element at the time of starting DnD session. That means the preview would never change during a DnD session.</p>\n<p>Instead of using preview, we can turn preview off, and use optional <code>dndHover(location)</code> callback on target delegate for real-time feedback.</p>\n<p>To demonstrate the purpose, we put a real-time clock on every boxes. You can see it keeps updating the clock during a DnD session.</p>\n<compose view-model=\"../examples/e2-simple-move-hover/index\"></compose>\n\n<p>What happened in above code:</p>\n<p>For the source <code>delegate</code> (box), we turned off preview, removed <code>show.bind=&quot;!draggingMe&quot;</code>.</p>\n<blockquote>\n<p>You can bring <code>draggingMe</code> back, then use it to control the style of dragging box, for instance to adjust <code>background-color</code> or <code>box-shadow</code> when dragging.</p>\n</blockquote>\n<p>For the target <code>delegate</code> (container),</p>\n<ul>\n<li>in html template, instead of repeat on original items list, we repeat on patched items list, which is the original items patched by intention.</li>\n<li>we capture user intention in <code>dndHover(location)</code> callback. Beware, don&#39;t mutate the real items list yet. We use temporary property <code>intention</code> to save this information.</li>\n<li>we apply the intention in <code>dndDrop(location)</code> callback, as app user intended.</li>\n<li>we reset temporary property <code>intention</code> before and after a DnD session by subscribing events <code>&#39;dnd:willStart&#39;</code> and <code>&#39;dnd:didEnd&#39;</code>.</li>\n</ul>\n<blockquote>\n<p>When you use <code>dndHover</code> to constantly patch original list, depending on how complex the patch is, aurelia repeater might not be able to reuse existing child component, it might destroy old child components and create new components. That will trigger multiple add/remove Source/Target through <code>attached()</code> and <code>detached()</code> callback. <code>DndService</code> is totally fine with dynamical changing of sources and targets.</p>\n</blockquote>\n<h2 id=\"published-events-through-aurelia-event-aggregator\">Published events through Aurelia Event Aggregator</h2>\n<p>During a DnD session, <code>DndService</code> publishes four events you can subscribe to.</p>\n<ul>\n<li><code>dnd:willStart</code>, just before starting of DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... are still <code>undefined</code>.</li>\n<li><code>dnd:didStart</code>, just after starting of DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... have been set. But none of any targets received <code>dndHover()</code> / <code>dndDrop()</code> callback.</li>\n<li><code>dnd:willEnd</code>, just before end of a DnD session, all <code>isProcessing</code>, <code>model</code>, <code>isHovering</code> ... are still set. Just before a target (if there is valid one with canDrop:true under the mouse) receives <code>dndDrop()</code> callback.</li>\n<li><code>dnd:didEnd</code>, after a DnD session finished. all <code>isProcessing</code>, <code>model</code>, ... are set to <code>undefined</code>. Final <code>dndDrop()</code> callback has been fired if there is a valid target.</li>\n</ul>\n<p>You can use them to prepare or cleanup your environment for a DnD session.</p>\n<blockquote>\n<p>If you want, you can subscribe them in component without a reference of <code>dndService</code> instance.</p>\n</blockquote>\n<blockquote>\n<p>In the example code above, instead of applying intention in <code>dndDrop()</code> callback, you can make empty <code>dndDrop() {/* no-op */}</code>, then apply intention in <code>&#39;dnd:didEnd&#39;</code> event subscriber before reset intention. The difference is this alternative solution can respond to drop outside of the target element (outside drop would not trigger <code>dndDrop()</code>), it can use last known intention when user released mouse button outside of the target element.</p>\n</blockquote>\n<p>Let&#39;s move on to <a href=\"#/customise-preview-and-source-handler\">customise preview, optional source handler</a>.</p>\n</template>"; });
define('text!tutorial/typescript-support.html', ['module'], function(module) { module.exports = "<template><h1 id=\"typescript-support\">TypeScript Support</h1>\n<p><code>bcx-aurelia-dnd</code> includes a type declaration file for basic TypeScript support.</p>\n<p><code>bcx-aurelia-reorderable-repeat</code> has no JavaScript interface exposed to end user, hence no type declaration file is provided.</p>\n<h2 id=\"additional-type-for-bcx-aurelia-dnd\">Additional type for bcx-aurelia-dnd</h2>\n<p>In TypeScript project, on top of normal import, you can import additional interface declarations:</p>\n<ul>\n<li><code>SourceDelegate</code> for dnd source.</li>\n<li><code>TargetDelegate</code>, <code>TargetDelegateInjectedDnd</code>, <code>DndLocation</code> for dnd target:</li>\n</ul>\n<blockquote>\n<p>This is for TypeScript to know better about the types. It&#39;s optional but recommended, you don&#39;t need to import them for TypeScript to work.</p>\n</blockquote>\n<p>Here is an example.</p>\n<div><code-viewer value=\"import {DndService,\n        TargetDelegate,\n        TargetDelegateInjectedDnd,\n        DndLocation} from 'bcx-aurelia-dnd';\nimport {autoinject, computedFrom} from 'aurelia-framework';\n\n@autoinject\nexport class App implements TargetDelegate {\n  dndService: DndService;\n\n  // need to declare 'dnd' before using it,\n  // otherwise TypeScript compiler will complain.\n  // 'dnd?: any;' also works, but has no typing information.\n  dnd?: TargetDelegateInjectedDnd;\n\n  constructor(dndService: DndService) {\n    this.dndService = dndService;\n  }\n\n  attached() {\n    this.dndService.addTarget(this);\n  }\n\n  detached() {\n    this.dndService.removeTarget(this);\n  }\n\n  dndCanDrop(model: any): boolean {\n    //...\n  }\n\n  dndDrop(location: DndLocation): void {\n    //...\n  }\n\n  @computedFrom('dnd', 'dnd.isProcessing', 'dnd.canDrop', 'dnd.isHoveringShallowly')\n  get overMe(): Boolean {\n    const {dnd} = this;\n    if (!dnd) return false;\n\n    // with TargetDelegateInjectedDnd, TypeScript knows that\n    // isProcessing, canDrop, isHoveringShallowly are all boolean.\n\n    const {isProcessing, canDrop, isHoveringShallowly} = dnd;\n    return isProcessing && canDrop && isHoveringShallowly;\n  }\n}\" mode=\"js\"></code-viewer></div>\n</template>"; });
define('app.js',['app'],function(m){return m;});
define('environment.js',['environment'],function(m){return m;});
define('examples/e1-simple-move-step-1/box.js',['examples/e1-simple-move-step-1/box'],function(m){return m;});
define('examples/e1-simple-move-step-1/container.js',['examples/e1-simple-move-step-1/container'],function(m){return m;});
define('examples/e1-simple-move-step-1/index.js',['examples/e1-simple-move-step-1/index'],function(m){return m;});
define('examples/e1-simple-move-step-2/box.js',['examples/e1-simple-move-step-2/box'],function(m){return m;});
define('examples/e1-simple-move-step-2/container.js',['examples/e1-simple-move-step-2/container'],function(m){return m;});
define('examples/e1-simple-move-step-2/index.js',['examples/e1-simple-move-step-2/index'],function(m){return m;});
define('examples/e1-simple-move/box.js',['examples/e1-simple-move/box'],function(m){return m;});
define('examples/e1-simple-move/container.js',['examples/e1-simple-move/container'],function(m){return m;});
define('examples/e1-simple-move/index.js',['examples/e1-simple-move/index'],function(m){return m;});
define('examples/e2-simple-move-hover/box.js',['examples/e2-simple-move-hover/box'],function(m){return m;});
define('examples/e2-simple-move-hover/container.js',['examples/e2-simple-move-hover/container'],function(m){return m;});
define('examples/e2-simple-move-hover/index.js',['examples/e2-simple-move-hover/index'],function(m){return m;});
define('examples/e2-simple-move-hover/test.js',['examples/e2-simple-move-hover/test'],function(m){return m;});
define('examples/e3-customise-preview/add-box.js',['examples/e3-customise-preview/add-box'],function(m){return m;});
define('examples/e3-customise-preview/add-money.js',['examples/e3-customise-preview/add-money'],function(m){return m;});
define('examples/e3-customise-preview/box.js',['examples/e3-customise-preview/box'],function(m){return m;});
define('examples/e3-customise-preview/container.js',['examples/e3-customise-preview/container'],function(m){return m;});
define('examples/e3-customise-preview/index.js',['examples/e3-customise-preview/index'],function(m){return m;});
define('examples/e4-handler-move/box.js',['examples/e4-handler-move/box'],function(m){return m;});
define('examples/e4-handler-move/container.js',['examples/e4-handler-move/container'],function(m){return m;});
define('examples/e4-handler-move/index.js',['examples/e4-handler-move/index'],function(m){return m;});
define('examples/e5-draw/canvas-container.js',['examples/e5-draw/canvas-container'],function(m){return m;});
define('examples/e5-draw/index.js',['examples/e5-draw/index'],function(m){return m;});
define('examples/e6-reorder-list/index.js',['examples/e6-reorder-list/index'],function(m){return m;});
define('examples/e6-reorder-list/item.js',['examples/e6-reorder-list/item'],function(m){return m;});
define('examples/e6-reorder-list/list-container.js',['examples/e6-reorder-list/list-container'],function(m){return m;});
define('examples/er1-reorderable-repeat/index.js',['examples/er1-reorderable-repeat/index'],function(m){return m;});
define('examples/er1-reorderable-repeat/list-container.js',['examples/er1-reorderable-repeat/list-container'],function(m){return m;});
define('examples/er1-reorderable-repeat/list-container2.js',['examples/er1-reorderable-repeat/list-container2'],function(m){return m;});
define('examples/er2-reorderable-repeat-customise-style/index.js',['examples/er2-reorderable-repeat-customise-style/index'],function(m){return m;});
define('examples/er2-reorderable-repeat-customise-style/list-container.js',['examples/er2-reorderable-repeat-customise-style/list-container'],function(m){return m;});
define('examples/er2-reorderable-repeat-customise-style/list-container2.js',['examples/er2-reorderable-repeat-customise-style/list-container2'],function(m){return m;});
define('examples/er3-reorderable-repeat-with-handler/index.js',['examples/er3-reorderable-repeat-with-handler/index'],function(m){return m;});
define('examples/er3-reorderable-repeat-with-handler/table-container.js',['examples/er3-reorderable-repeat-with-handler/table-container'],function(m){return m;});
define('examples/er4-reorderable-repeat-customise-preview/index.js',['examples/er4-reorderable-repeat-customise-preview/index'],function(m){return m;});
define('examples/er4-reorderable-repeat-customise-preview/table-container.js',['examples/er4-reorderable-repeat-customise-preview/table-container'],function(m){return m;});
define('examples/er5-reorderable-repeat-direction/container.js',['examples/er5-reorderable-repeat-direction/container'],function(m){return m;});
define('examples/er5-reorderable-repeat-direction/index.js',['examples/er5-reorderable-repeat-direction/index'],function(m){return m;});
define('main.js',['main'],function(m){return m;});
define('resources',['resources/index'],function(m){return m;});
define('resources.js',['resources'],function(m){return m;});
define('resources/index.js',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map