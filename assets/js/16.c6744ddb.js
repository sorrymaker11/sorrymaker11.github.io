(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{432:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("Boxx",{attrs:{type:"warning"}}),t._v(" "),e("h2",{attrs:{id:"原型和原型对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型对象"}},[t._v("#")]),t._v(" 原型和原型对象")]),t._v(" "),e("ul",[e("li",[t._v("个人认为原型是一个指向其构造函数上的原型对象prototype的东西")]),t._v(" "),e("li",[t._v("每个函数都有一个特殊的属性叫作原型prototype")])]),t._v(" "),e("h2",{attrs:{id:"原型链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),e("p",[t._v("原型对象可能也会有自己的原型会指向其构造函数的原型对象，可以通过原型一层一层向上找过去，这样的关系就叫原型链\n"),e("img",{attrs:{src:"/img/proto.png"}})]),t._v(" "),e("ul",[e("li",[t._v("每个对象的"),e("code",[t._v("__proto__")]),t._v("都是指向它的构造函数的原型对象"),e("code",[t._v("prototype")]),t._v("的"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("person1.__proto__ === Person.prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[t._v("构造函数是一个函数对象，是通过 Function构造器产生的"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Person.__proto__ === Function.prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[t._v("原型对象本身是一个普通对象，而普通对象的构造函数都是Object"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Person.prototype.__proto__ === Object.prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[t._v("刚刚上面说了，所有的构造器都是函数对象，函数对象都是 Function构造产生的"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Object.__proto__ === Function.prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[t._v("Object的原型对象也有__proto__属性指向null，null是原型链的顶端"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Object.prototype.__proto__ === null\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);