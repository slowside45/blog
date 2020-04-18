(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{337:function(a,e,t){"use strict";t.r(e);var n=t(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("p",[a._v("[TOC]")]),a._v(" "),t("h2",{attrs:{id:"一、js中实现异步的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、js中实现异步的方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、JS中实现异步的方法")]),a._v(" "),t("ol",[t("li",[a._v("回调函数")]),a._v(" "),t("li",[a._v("Promise对象")]),a._v(" "),t("li",[a._v("Thunk函数")]),a._v(" "),t("li",[a._v("co模块")])]),a._v(" "),t("h2",{attrs:{id:"二、generator函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、generator函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、Generator函数")]),a._v(" "),t("h3",{attrs:{id:"_1-运行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 运行流程")]),a._v(" "),t("p",[a._v("Generator是一个封装的异步任务，或者说是异步任务的容器。\n它的执行通过两个方法控制：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1. field\n2. next\nyield语句表示暂停，next表示下一步。\n")])])]),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function* gen(x){\n    var y =  yield x + 2;\n    return y;\n}\n//调用该Generator函数\nvar g = gen(1);\ng.next();\ng.next();\n")])])]),t("p",[a._v("调用Generator函数，不会返回return值，而是会返回一个指针对象。使用next方法可以让指针向后移动到第一个遇到的yield语句。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("graph TD\nA[开始] --\x3e B[Generator函数执行]\nB --\x3e P[返回指针对象g]\nP --\x3e C[使用指针对象g的next方法]\nC --\x3e|指针向后移动| D[到达第一个yield语句 x+2]\nD --\x3e E[返回包含当前阶段信息的对象]\nE --\x3e F[暂停]\n")])])]),t("p",[a._v("==包含当前阶段信息的对象==")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("g.next();\n//返回一个包含当前阶段信息的对象，包括value属性和done属性\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("graph TD\nA[对象] --\x3e B[value]\nA --\x3e C[done]\nB --\x3e E[yield后面表达式的值]\nC --\x3e F[是否执行完毕]\n")])])]),t("h3",{attrs:{id:"_2-执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行器","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 执行器")]),a._v(" "),t("p",[a._v("Generator函数是异步方法的封装，它们如果需要被应用到实际情况中，就需要满足在特定条件下能够自动运行。执行器能实现这样的功能。")]),a._v(" "),t("h4",{attrs:{id:"_1-thunk-函数的自动流程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-thunk-函数的自动流程管理","aria-hidden":"true"}},[a._v("#")]),a._v(" (1). Thunk 函数的自动流程管理")]),a._v(" "),t("p",[a._v("Thunk 函数真正的威力，在于可以自动执行 Generator 函数。下面就是一个基于 Thunk 函数的 Generator 执行器。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function run(fn) {\n  var gen = fn();\n\n  function next(err, data) {\n    var result = gen.next(data);\n    if (result.done) return;\n    result.value(next);\n  }\n\n  next();\n}\n\nfunction* g() {\n  // ...\n}\n\nrun(g);\n")])])]),t("p",[a._v("上面代码的run函数，就是一个 Generator 函数的自动执行器。内部的next函数就是 Thunk 的回调函数。next函数先将指针移到 Generator 函数的下一步（gen.next方法），然后判断 Generator 函数是否结束（result.done属性），如果没结束，就将next函数再传入 Thunk 函数（result.value属性），否则就直接退出。")]),a._v(" "),t("p",[a._v("有了这个执行器，执行 Generator 函数方便多了。不管内部有多少个异步操作，直接把 Generator 函数传入run函数即可。当然，前提是每一个异步操作，都要是 Thunk 函数，也就是说，跟在yield命令后面的必须是 Thunk 函数。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var g = function* (){\n  var f1 = yield readFileThunk('fileA');\n  var f2 = yield readFileThunk('fileB');\n  // ...\n  var fn = yield readFileThunk('fileN');\n};\n\nrun(g);\n")])])]),t("p",[a._v("上面代码中，函数g封装了n个异步的读取文件操作，只要执行run函数，这些操作就会自动完成。这样一来，异步操作不仅可以写得像同步操作，而且一行代码就可以执行。")]),a._v(" "),t("p",[a._v("Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。")]),a._v(" "),t("h4",{attrs:{id:"_2-co模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-co模块","aria-hidden":"true"}},[a._v("#")]),a._v(" (2). co模块")]),a._v(" "),t("p",[a._v("co模块规定，yield后面的语句必须是thunk函数或者promise对象")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//Generator函数\nvar gen = function* () {\n  var f1 = yield readFile('/etc/fstab');\n  var f2 = yield readFile('/etc/shells');\n  console.log(f1.toString());\n  console.log(f2.toString());\n};\n//引入co模块\nvar co = require('co');\nco(gen);\n")])])]),t("p",[a._v("上面代码中，Generator 函数只要传入co函数，就会自动执行。")]),a._v(" "),t("p",[a._v("co函数返回一个Promise对象，因此可以用then方法添加回调函数。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("co(gen).then(function (){\n  console.log('Generator 函数执行完成');\n});\n")])])]),t("p",[a._v("上面代码中，等到 Generator 函数执行结束，就会输出一行提示。")]),a._v(" "),t("h2",{attrs:{id:"三、-async函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-async函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、 async函数")]),a._v(" "),t("p",[a._v("async函数，是Generator函数的语法糖，它的实现原理，就是将Generator函数和它的自动执行器打包在同一个函数里。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function f(args){\n    // ...\n}\n")])])]),t("p",[a._v("等同于")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function f(args){\n    return spawn(function* (){\n        // ...\n    });\n}\n")])])]),t("p",[a._v("其中spawn函数就可以看作Generetor函数的自动执行器。")]),a._v(" "),t("h3",{attrs:{id:"_1-对generetor的改进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-对generetor的改进","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 对Generetor的改进")]),a._v(" "),t("h5",{attrs:{id:"_1-内置执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-内置执行器","aria-hidden":"true"}},[a._v("#")]),a._v(" (1) 内置执行器")]),a._v(" "),t("h5",{attrs:{id:"_2-更好的语义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-更好的语义","aria-hidden":"true"}},[a._v("#")]),a._v(" (2) 更好的语义")]),a._v(" "),t("h5",{attrs:{id:"_3-await命令后面可以跟promise对象，也可以跟原始类型对象-这时为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-await命令后面可以跟promise对象，也可以跟原始类型对象-这时为","aria-hidden":"true"}},[a._v("#")]),a._v(" (3) await命令后面可以跟Promise对象，也可以跟原始类型对象(这时为)")]),a._v(" "),t("h5",{attrs:{id:"_4-返回值是promise对象，可以用then-方法指定下一步的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-返回值是promise对象，可以用then-方法指定下一步的操作","aria-hidden":"true"}},[a._v("#")]),a._v(" (4) 返回值是Promise对象，可以用then()方法指定下一步的操作")]),a._v(" "),t("h3",{attrs:{id:"_2-使用注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用注意点","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 使用注意点")]),a._v(" "),t("h5",{attrs:{id:"_1-最好把await命令放在-try-catch语句块中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-最好把await命令放在-try-catch语句块中","aria-hidden":"true"}},[a._v("#")]),a._v(" (1) 最好把await命令放在 try-catch语句块中")]),a._v(" "),t("h5",{attrs:{id:"_2-多个await命令后面的异步操作，如果不存在继发关系，最好让它们同步触发。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-多个await命令后面的异步操作，如果不存在继发关系，最好让它们同步触发。","aria-hidden":"true"}},[a._v("#")]),a._v(" (2) 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同步触发。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let foo = await function getFoo();\nlet bar = await function getBar();\n")])])]),t("p",[a._v("这两个方法互不影响，完全可以同时触发：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("///方法一\nlet [foo,bar] = await Promise.all([getFoo()],[getBar()]);\n\n//方法二\nlet fooPromise =  getFoo();\nlet barPromise =  getBar();\nlet foo = await fooPromise;\nlet bar = await barPromise;\n")])])]),t("p",[a._v("方法二让getFoo()和getBar()同时触发，然后异步保存了它们的返回值(Promise对象)")]),a._v(" "),t("h5",{attrs:{id:"_3-await命令只能用在async函数中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-await命令只能用在async函数中","aria-hidden":"true"}},[a._v("#")]),a._v(" (3)await命令只能用在async函数中")]),a._v(" "),t("h3",{attrs:{id:"_3-异步遍历器-asynciterat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-异步遍历器-asynciterat","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 异步遍历器(asynciterat)")]),a._v(" "),t("h5",{attrs:{id:"_1-异步遍历器的创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-异步遍历器的创建","aria-hidden":"true"}},[a._v("#")]),a._v(" (1) 异步遍历器的创建")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//创建一个可以被异步遍历的对象\nconst asyncIterable = createAsyncIterable(['a','b']);\n\n//创建一个异步遍历器\nconst asyncIterator = asyncIterator = asyncIterable[Symbol.asyncIterator]();\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("graph LR \nA[asynciterator] --\x3e|调用next方法| B[Promise对象]\nB --\x3e C[调用then方法]\nC --\x3e|返回value和result| D[处理返回值]\n")])])]),t("h5",{attrs:{id:"_2-使用异步遍历器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用异步遍历器","aria-hidden":"true"}},[a._v("#")]),a._v(" (2) 使用异步遍历器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("asynvIterator.next().then(iterResult1 => {\n    console.log(iterResult1);\n    return asyncIterator.next();//返回一个Promise对象 \n    \n}).then(iterResult2 => {\n    .....\n})........\n")])])]),t("p",[a._v("因为异步遍历器的next方法返回的是一个Promise对象，所以可以把它们放在await语句后")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function f() {\n  const asyncIterable = createAsyncIterable(['a', 'b']);\n  const asyncIterator = asyncIterable[Symbol.asyncIterator]();\n  console.log(await asyncIterator.next());\n  // { value: 'a', done: false }\n  console.log(await asyncIterator.next());\n  // { value: 'b', done: false }\n  console.log(await asyncIterator.next());\n  // { value: undefined, done: true }\n}   \n")])])]),t("p",[a._v("注意，异步遍历器的next方法是可以连续调用的，不必等到上一步产生的 Promise 对象resolve以后再调用。这种情况下，next方法会累积起来，自动按照每一步的顺序运行下去。下面是一个例子，把所有的next方法放在Promise.all方法里面。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const asyncGenObj = createAsyncIterable(['a', 'b']);\nconst [{value: v1}, {value: v2}] = await Promise.all([\n  asyncGenObj.next(), asyncGenObj.next()\n]);\n\nconsole.log(v1, v2); // a b\n")])])]),t("p",[a._v("另一种用法是一次性调用所有的next方法，然后await最后一步操作。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function runner() {\n  const writer = openFile('someFile.txt');\n  writer.next('hello');\n  writer.next('world');\n  await writer.return();\n}\n\nrunner();\n")])])]),t("h5",{attrs:{id:"_3-for-await-of"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-for-await-of","aria-hidden":"true"}},[a._v("#")]),a._v(" (3)for await... of")]),a._v(" "),t("ul",[t("li",[a._v("新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function f() {\n  for await (const x of createAsyncIterable(['a', 'b'])) {\n    console.log(x);\n  }\n}\n// a\n// b\n")])])]),t("ul",[t("li",[a._v("for await...of循环的一个用途，是部署了 asyncIterable 操作的异步接口，可以直接放入这个循环")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let body = '';\n\nasync function f() {\n  for await(const data of req) body += data;\n  const parsed = JSON.parse(body);\n  console.log('got', parsed);\n}\n")])])]),t("p",[a._v("上面代码中，req是一个 asyncIterable 对象，用来异步读取数据。可以看到，使用for await...of循环以后，代码会非常简洁。")]),a._v(" "),t("ul",[t("li",[a._v("如果next方法返回的 Promise 对象被reject，for await...of就会报错，要用try...catch捕捉。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function () {\n  try {\n    for await (const x of createRejectingIterable()) {\n      console.log(x);\n    }\n  } catch (e) {\n    console.error(e);\n  }\n}\n")])])]),t("ul",[t("li",[a._v("注意，for await...of循环也可以用于同步遍历器。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(async function () {\n  for await (const x of ['a', 'b']) {\n    console.log(x);\n  }\n})();\n// a\n// b\n")])])])])}],!1,null,null,null);r.options.__file="ES6学习笔记（六） 异步编程.md";e.default=r.exports}}]);