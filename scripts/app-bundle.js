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
      config.mapUnknownRoutes('not-found');
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
        route: 'drag-source', name: 'drag-source',
        title: 'Drag Source',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/drag-source.html'
      }, {
        route: 'faq', name: 'faq',
        title: 'FAQ',
        nav: true,
        settings: { section: 'Tutorial' },
        moduleId: 'tutorial/faq.html'
      }, {
        route: 'typescript-support', name: 'typescript-support',
        title: 'TypeScript Support',
        nav: true,
        settings: { section: 'Reference' },
        moduleId: 'tutorial/typescript-support.html'
      }]);
    };

    return App;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bcx-doc-base/css/doc.css\"></require>\n\n  <bcx-doc-nav router.bind=\"router\">\n    <div slot=\"top\">\n      <h5><em>Github Repos</em></h5>\n      <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-dnd\" class=\"link remote-link\">bcx-aurelia-dnd v0.4.3</a>\n      <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-reorderable-repeat\" class=\"link remote-link\">bcx-aurelia-reorderable-repeat v0.4.0</a>\n    </div>\n  </bcx-doc-nav>\n\n  <div class=\"bcx-doc-main\" as-element=\"router-view\"></div>\n</template>\n"; });
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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!tutorial/drag-source.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!tutorial/faq.html', ['module'], function(module) { module.exports = "<template><h1 id=\"faq\">FAQ</h1>\n<h2 id=\"how-was-bcx-aurelia-dnd-created\">How was <code>bcx-aurelia-dnd</code> created</h2>\n<p>In 2016, when we were converting our <a href=\"http://www.buttonwood.com.au/products/cloud-broker/cloud-broker/\">Buttonwood Cloud Broker</a> front-end from React to Aurelia, one obstacle of the re-write is missing drag-and-drop library for our blueprint composer. Previously we were using <a href=\"http://react-dnd.github.io/react-dnd/\">React DnD</a>, but there is no equivalent in Aurelia. There are plenty DOM based DnD libraries in JavaScript world, <a href=\"https://bevacqua.github.io/dragula/\"><code>dragula</code></a> is the best in our eyes.</p>\n<p>We copied <code>dragula</code> code, removed all its DOM mutation code (we don&#39;t need that in Aurelia), made a working DnD library in one day. <code>bcx-aurelia-dnd</code> source code is largely unchanged since that first implementation.</p>\n<p>Thanks for Aurelia, <code>bcx-aurelia-dnd</code> implementation is very simple. The source code is about 700 lines of JavaScript, even most of it were copied from dragula to handle events and styling. As always, similar to most libraries, the <a href=\"https://github.com/buttonwoodcx/bcx-aurelia-dnd\">source code</a> is way shorter than documentation.</p>\n<h2 id=\"why-based-on-dragula-not-native-html5-dnd-api\">Why based on <code>dragula</code>, not native HTML5 DnD API</h2>\n<p><a href=\"https://bevacqua.github.io/dragula/\">dragula</a> implements DnD in plain mouse/touch events, not in native HTML5 DnD API. <a href=\"https://www.danyow.net/drag-and-drop-with-aurelia/\">Here</a> is the place where we were introduced to dragula, it has some links for issues around native HTML5 DnD API. It resonated with our experience on React DnD which uses native HTML5 DnD API. We had issues on nested source/target and some annoying browser behavior (cursor in IE) in native HTML5 DnD API. None of that affected our dragula based DnD.</p>\n<p>Another bonus of dragula, it supports mobile devices! All examples here works on iPad and phones.</p>\n<h2 id=\"why-bcx-aurelia-dnd-is-not-an-aurelia-plugin\">Why bcx-aurelia-dnd is not an Aurelia plugin</h2>\n<p>Technically, <code>bcx-aurelia-dnd</code> doesn&#39;t depend on Aurelia, it only uses <code>aurelia-event-aggregator</code> to provide better integration with Aurelia. There is nothing preventing you from using it with other front-end frameworks or even vanilla JavaScript. But it&#39;s easier to use it inside Aurelia app, because of Aurelia&#39;s ability to observe changes on plain JavaScript properties.</p>\n</template>"; });
define('text!tutorial/overview.html', ['module'], function(module) { module.exports = "<template><h1 id=\"bcx-aurelia-dnd\">bcx-aurelia-dnd</h1>\n<p>A generic drag-and-drop lib for <a href=\"https://aurelia.io\">Aurelia</a>, works on both desktop and mobile, provides APIs fit in MVC/MVVM natively. The design is similar to <a href=\"http://react-dnd.github.io/react-dnd/\">React DnD</a>.</p>\n<p>If you want to play with the source code of included examples.</p>\n<pre><code>git clone git@github.com:buttonwoodcx/doc-bcx-aurelia-dnd.git\ncd doc-bcx-aurelia-dnd\nnpm i -g aurelia-cli # if you have not installed aurelia-cli\nnpm i # or yarn\nau run --watch\n</code></pre><h2 id=\"bcx-aurelia-dnd-is-not-a-dragula-wrapper\">bcx-aurelia-dnd is not a <a href=\"https://bevacqua.github.io/dragula/\"><code>dragula</code></a>  wrapper</h2>\n<p>We use <code>dragula</code>&#39;s algorithm to avoid native HTML5 DnD API (see <a href=\"/#/faq\">FAQ</a>), we don&#39;t inherit or expose any <code>dragula</code> API (they don&#39;t even exist in the code). We provide APIs fit in MVC/MVVM natively.</p>\n<h2 id=\"alternative-projects\">Alternative projects</h2>\n<p>There are few alternative projects in Aurelia community. List them here for reference.</p>\n<ol>\n<li><p><strong><a href=\"https://github.com/michaelmalonenz/aurelia-dragula\"><code>aurelia-dragula</code></a></strong> a <code>dragula</code> wrapper to provide convenient interface to Aurelia. Handy to existing <code>dragula</code> users.</p>\n</li>\n<li><p><strong><a href=\"https://github.com/oribella/aurelia-sortable\"><code>oribella-aurelia-sortable</code></a></strong> based on very interesting <a href=\"https://github.com/oribella/oribella\"><code>oribella</code></a>, can sort list or multiple lists.</p>\n</li>\n<li><p><strong><a href=\"https://github.com/eriklieben/aurelia-sortablejs\"><code>aurelia-sortablejs</code></a></strong> based on <a href=\"https://github.com/rubaxa/Sortable\"><code>Sortablejs</code></a>, can sort list or multiple lists, visually appealing.</p>\n</li>\n</ol>\n<h2 id=\"use-inside-aurelia-app\">Use inside Aurelia app</h2>\n<p>To start with your Aurelia app.</p>\n<blockquote>\n<p>with aurelia-cli, just do <code>au install bcx-aurelia-dnd</code>.</p>\n</blockquote>\n<blockquote>\n<p>with jspm, do <code>jspm install npm:bcx-aurelia-dnd</code>.</p>\n</blockquote>\n<blockquote>\n<p>with webpack, do <code>npm i bcx-aurelia-dnd</code>.</p>\n</blockquote>\n<p>There is a single class <code>DndService</code> provided by <code>bcx-aurelia-dnd</code>. Inject it to your component.</p>\n<pre><code class=\"lang-js\">import {inject} from &#39;aurelia-framework&#39;;\nimport {DndService} from &#39;bcx-aurelia-dnd&#39;;\n\n@inject(DndService)\nexport class YourComponent {\n  constructor(dndService) {\n    this.dndService = dndService;\n  }\n}\n</code></pre>\n<blockquote>\n<p>Here we rely on default behavior of Aurelia DI (dependency injection). Aurelia DI creates a singleton <code>dndService</code> instance for all components to share.</p>\n</blockquote>\n<blockquote>\n<p>For TypeScript user, have a look at <a href=\"#/typescript-support\">TypeScript Support</a>.</p>\n</blockquote>\n<p>Let&#39;s get started to add a <a href=\"#/drag-source\">drag source</a>.</p>\n</template>"; });
define('text!tutorial/source-and-target.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!tutorial/source.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!tutorial/typescript-support.html', ['module'], function(module) { module.exports = "<template><h1 id=\"typescript-support\">TypeScript Support</h1>\n<p><code>bcx-aurelia-dnd</code> includes a type declaration file for basic TypeScript support.</p>\n<p><code>bcx-aurelia-reorderable-repeat</code> has no JavaScript interface exposed to end user, hence no type declaration file is provided.</p>\n<h2 id=\"additional-type-for-bcx-aurelia-dnd\">Additional type for bcx-aurelia-dnd</h2>\n<p>In TypeScript project, on top of normal import, you can import additional interface declarations:</p>\n<ul>\n<li><code>SourceDelegate</code> for dnd source.</li>\n<li><code>TargetDelegate</code>, <code>TargetDelegateInjectedDnd</code>, <code>DndLocation</code> for dnd target:</li>\n</ul>\n<blockquote>\n<p>This is for TypeScript to know better about the types. It&#39;s optional but recommended, you don&#39;t need to import them for TypeScript to work.</p>\n</blockquote>\n<p>Here is an example.</p>\n<pre><code class=\"lang-js\">import {DndService,\n        TargetDelegate,\n        TargetDelegateInjectedDnd,\n        DndLocation} from &#39;bcx-aurelia-dnd&#39;;\nimport {autoinject, computedFrom} from &#39;aurelia-framework&#39;;\n\n@autoinject\nexport class App implements TargetDelegate {\n  dndService: DndService;\n\n  // need to declare &quot;dnd&quot; before using it,\n  // otherwise TypeScript compiler will complain.\n  // &quot;dnd?: any;&quot; also works, but has no typing information.\n  dnd?: TargetDelegateInjectedDnd;\n\n  constructor(dndService: DndService) {\n    this.dndService = dndService;\n  }\n\n  attached() {\n    this.dndService.addTarget(this);\n  }\n\n  detached() {\n    this.dndService.removeTarget(this);\n  }\n\n  dndCanDrop(model: any): boolean {\n    //...\n  }\n\n  dndDrop(location: DndLocation): void {\n    //...\n  }\n\n  @computedFrom(&#39;dnd&#39;, &#39;dnd.isProcessing&#39;, &#39;dnd.canDrop&#39;, &#39;dnd.isHoveringShallowly&#39;)\n  get overMe(): Boolean {\n    const {dnd} = this;\n    if (!dnd) return false;\n\n    // with TargetDelegateInjectedDnd, TypeScript knows that\n    // isProcessing, canDrop, isHoveringShallowly are all boolean.\n\n    const {isProcessing, canDrop, isHoveringShallowly} = dnd;\n    return isProcessing &amp;&amp; canDrop &amp;&amp; isHoveringShallowly;\n  }\n}\n</code></pre>\n</template>"; });
define('app.js',['app'],function(m){return m;});
define('environment.js',['environment'],function(m){return m;});
define('main.js',['main'],function(m){return m;});
define('resources',['resources/index'],function(m){return m;});
define('resources.js',['resources'],function(m){return m;});
define('resources/index.js',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map