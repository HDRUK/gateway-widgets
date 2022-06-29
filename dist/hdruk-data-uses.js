import{css,html,LitElement}from"https://unpkg.com/lit-element/lit-element.js?module";import GAnalytics from"https://unpkg.com/ganalytics?module";function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var i={},t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,a,i,c,e=e&&e.prototype instanceof u?e:u,e=Object.create(e.prototype),r=new w(r||[]);return e._invoke=(o=t,a=n,i=r,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return O()}for(i.method=t,i.arg=e;;){var n=i.delegate;if(n){n=function t(e,n){var r=e.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,t(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}r=l(r,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;r=r.arg;return r?r.done?(n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}(n,i);if(n){if(n===f)continue;return n}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c="executing";n=l(o,a,i);if("normal"===n.type){if(c=i.done?"completed":"suspendedYield",n.arg===f)continue;return{value:n.arg,done:i.done}}"throw"===n.type&&(c="completed",i.method="throw",i.arg=n.arg)}}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var f={};function u(){}function p(){}function d(){}var e={},h=(a(e,r,function(){return this}),Object.getPrototypeOf),h=h&&h(h(_([]))),b=(h&&h!==t&&s.call(h,r)&&(e=h),d.prototype=u.prototype=Object.create(e));function y(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function m(i,c){var e;this._invoke=function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){var a,t=l(i[t],i,n);if("throw"!==t.type)return(n=(a=t.arg).value)&&"object"==typeof n&&s.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){a.value=t,r(a)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function v(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function _(e){if(e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(s.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:O}}function O(){return{value:void 0,done:!0}}return a(b,"constructor",p.prototype=d),a(d,"constructor",p),p.displayName=a(d,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},i.awrap=function(t){return{__await:t}},y(m.prototype),a(m.prototype,n,function(){return this}),i.AsyncIterator=m,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new m(c(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},y(b),a(b,o,"Generator"),a(b,r,function(){return this}),a(b,"toString",function(){return"[object Generator]"}),i.keys=function(n){var t,r=[];for(t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=_,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(v),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),v(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,v(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},i}function asyncGeneratorStep(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){asyncGeneratorStep(r,e,n,o,a,"next",t)}function a(t){asyncGeneratorStep(r,e,n,o,a,"throw",t)}o(void 0)})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=_superPropBase(t,e);if(r)return r=Object.getOwnPropertyDescriptor(r,e),r.get?r.get.call(arguments.length<3?t:n):r.value}).apply(this,arguments)}function _taggedTemplateLiteral(t,e){return e=e||t.slice(0),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _templateObject$1,_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,commonStyles=css(_templateObject$1=_templateObject$1||_taggedTemplateLiteral(['\n  * {\n    font-family: "museo-sans-rounded";\n  }\n\n  .btn-hdr {\n    border-width: 2px;\n    border-style: solid;\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-align-items: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    background: #475da7;\n    border-color: #475da7;\n    color: #fff;\n    fill: #fff;\n    font-size: 13px;\n    padding: 10px 16px;\n    border-radius: 4px;\n    gap: 6px;\n    font-weight: 400;\n  }\n\n  .btn-primary-hdr {\n    background: #475da7;\n    color: #fff;\n  }\n\n  .btn-primary-hdr:hover {\n    border-color: #384b91;\n    background: #384b91;\n  }\n\n  .btn-primary-hdr:disabled {\n    border-color: #c6cee5;\n    background: #c6cee5;\n    color: #a2aed3;\n  }\n'])),HDR_LOGO="https://storage.googleapis.com/hdruk-gateway_prod-cms/web-assets/colour.svg",FONT_FACES='@font-face {\n  font-family:"museo-sans-rounded";\n  src:url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");\n  font-display:auto;font-style:normal;font-weight:300;\n  }\n  \n  @font-face {\n  font-family:"museo-sans-rounded";\n  src:url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");\n  font-display:auto;font-style:normal;font-weight:700;\n  }\n  \n  @font-face {\n  font-family:"museo-sans-rounded";\n  src:url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");\n  font-display:auto;font-style:normal;font-weight:500;\n  }',HDRUKDataUses=function(){_inherits(r,LitElement);var t,e,n=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=n.call(this)).ga=GAnalytics("UA-62201190-1"),t.WEB_URL=t.getAttribute("baseURL"),t.API_URL=t.getAttribute("apiURL"),t.custodianName=t.getAttribute("publisher"),console.log("this.custodianName",t.custodianName),t}return _createClass(r,[{key:"connectedCallback",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(_get(_getPrototypeOf(r.prototype),"connectedCallback",this).call(this),t.t0=this.custodianName,t.t0)return t.next=5,this.fetchData();t.next=6;break;case 5:t.t0=t.sent;case 6:this.data=t.t0;case 7:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"fetchData",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(this.API_URL);case 3:return e=t.sent,t.next=6,e.json();case 6:return e=t.sent,n=e.dataUseRegisterResults,t.abrupt("return",n.data);case 11:t.prev=11,t.t0=t.catch(0),console.error("Error:",t.t0),this.renderErrorMessageHTML("Oops somethingwent wrong");case 15:case"end":return t.stop()}},t,this,[[0,11]])})),function(){return t.apply(this,arguments)})},{key:"renderLogo",value:function(){return html(_templateObject=_templateObject||_taggedTemplateLiteral(['<div class="logo">\n      <div class="sponsor">Powered by:</div>\n      <div>\n        <img src="','" width="127" height="53" alt="" />\n      </div>\n    </div>']),HDR_LOGO)}},{key:"renderErrorMessageHTML",value:function(t){return html(_templateObject2=_templateObject2||_taggedTemplateLiteral(['<div class="error">',"</div>"]),t)}},{key:"setupFontFaces",value:function(){var t;document.querySelector('style[data-description="hdruk-font-faces"]')||((t=document.createElement("style")).dataset.description="hdruk-font-faces",t.appendChild(document.createTextNode(FONT_FACES)),document.head.appendChild(t))}},{key:"handleOnclick",value:function(){this.ga.send("event",{ec:"DataUseWidget",ea:"Clicked",el:window.location}),window.open("".concat(this.WEB_URL,"/search?search=&datausedatacustodian=").concat(this.custodianName,"&tab=Datauses"),"_blank")}},{key:"render",value:function(){this.setupFontFaces();var t=this.custodianName?decodeURIComponent(this.custodianName):"",e=this.data&&html(_templateObject3=_templateObject3||_taggedTemplateLiteral([""," Data uses available to view on the Health Data\n      Research Innovation Gateway"]),this.data.length),n=this.data&&this.data.length?"":"disabled",n=html(_templateObject4=_templateObject4||_taggedTemplateLiteral(['\n      <button\n        type="button"\n        target="_blank"\n        class="btn-hdr btn-primary-hdr"\n        @click="','"\n        title="View all data uses"\n        ',"\n      >\n        View data uses\n      </button>\n    "]),this.handleOnclick,n);return html(_templateObject5=_templateObject5||_taggedTemplateLiteral(['\n      <link\n        rel="stylesheet"\n        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"\n        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"\n        crossorigin="anonymous"\n      />\n      <div class="container-body">\n        <div class="row">\n          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">\n            <div class="mb-1">\n              <span class="heading"\n                >',' Data Use Register</span\n              >\n            </div>\n            <div class="mb-3">\n              <span class="sub-heading">',"</span>\n            </div>\n            ",'\n          </div>\n          <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 logo-wrapper">\n            ',"\n          </div>\n        </div>\n      </div>\n    "]),t,e,n,this.renderLogo())}}],[{key:"styles",get:function(){return[commonStyles,css(_templateObject6=_templateObject6||_taggedTemplateLiteral(["\n        .logo-wrapper {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        .logo {\n          width: 127px;\n        }\n\n        .heading {\n          font-size: 24px;\n          line-height: 20px;\n          color: #29235c;\n        }\n\n        .sub-heading {\n          font-size: 18px;\n          line-height: 30px;\n          color: #29235c;\n          font-weight: 400;\n        }\n\n        .sponsor {\n          font-style: normal;\n          font-weight: normal;\n          font-size: 11px;\n          color: #29235c;\n        }\n\n        .container-body {\n          padding: 40px;\n          background-color: #f6f7f8;\n        }\n\n        .error {\n          margin-top: 30px;\n          margin-left: 20px;\n          margin-bottom: 20px;\n        }\n      "]))]}},{key:"properties",get:function(){return{data:{type:Array},custodianName:{type:String}}}}]),r}();customElements.define("hdruk-data-uses",HDRUKDataUses);