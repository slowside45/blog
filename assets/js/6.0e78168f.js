(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v("[TOC]")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("包含用户界面的组件，用于与用户交互")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("ul",[a("li",[t._v("在 AndroidManifest.xml下，Android Studio会自动在 "),a("strong",[a("application")],1),t._v(" 标签内创建 "),a("strong",[a("activity")],1),t._v(" 标签")]),t._v(" "),a("li",[t._v("和Java程序一样，活动也有Main活动，在 "),a("strong",[a("activity")],1),t._v(" 标签内的  "),a("strong",[a("intent-filter")],1),t._v(" 标签中为主活动设置MAIN action和LAUNCHER category：")])]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("Intent(Context packageContext, Class<?> cls)")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("Active类提供了一个 ==startActivity()== 方法，这个方法专门用于启动活动。")]),t._v(" "),t._m(16),a("p",[t._v("这样就完成了Intent的使用。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("在Intent中指定action和category，凡是可以响应这个action与category（缺一不可）的活动，都会被启动。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("存数据到intent中：")]),t._v(" "),t._m(28),a("p",[t._v("从intent中把数据取出：")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),a("p",[t._v("其中intent是已构建完成的intent对象，requestCode是一个自己设定的具有唯一性的请求码。这里假设它是1\n2. 在被启动的活动中添加返回数据的逻辑")]),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("活动在被创建后入栈，后进先出")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),a("p",[t._v("在Activity中修改onCreate()方法：")]),t._v(" "),t._m(53),t._m(54),t._v(" "),a("p",[t._v("如果涉及多个Activity的传值：")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._m(58),t._v(" "),t._m(59),a("p",[t._v("把User对象存入Bundle对象中：")]),t._v(" "),t._m(60),t._m(61),t._v(" "),a("p",[t._v("启动模式分为四种：")]),t._v(" "),t._m(62),t._v(" "),t._m(63)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一、活动是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、活动是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、活动是什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("graph LR\nA[自定义活动] --\x3e|继承| B[AppCompatActivity]\nB[AppCompatActivity] --\x3e|继承| C[Activity]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("项目中任何活动都应该重写Activity的 "),e("strong",[this._v("onCreate()")]),this._v(" 方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"二、布局的设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、布局的设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、布局的设计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("一个活动 对应一个布局")]),this._v(" "),e("li",[this._v("布局中的元素都应该有唯一标识符（id），在xml中引用一个id，语法是：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("@id/id_name\n\n//和引用一个string之类的元素类似： \n//例如想引用res下某个string的引用，就是@string/{string_name}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在xml定义一个引用，语法是：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("android:id = @+id/{id_name}\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"三、活动注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、活动注册","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、活动注册")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"四、-intent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、-intent","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、 Intent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Intent用于在不同组件之间传递数据。")]),this._v(" "),e("li",[this._v("Intent有多个构造函数的重载")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（一）显式intent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）显式intent","aria-hidden":"true"}},[this._v("#")]),this._v(" （一）显式Intent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（1）intent对象的构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（1）intent对象的构建","aria-hidden":"true"}},[this._v("#")]),this._v(" （1）Intent对象的构建")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("strong",[this._v("Context：")]),this._v(" 第一个参数要求提供启动活动的上下文（当前活动类名.this）")]),this._v(" "),e("li",[e("strong",[this._v("Class:")]),this._v(" 第二个参数Class指定想要启动的目标活动 （要启动的的活动类名.class）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"（2）调用startactivity-，intent入参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（2）调用startactivity-，intent入参","aria-hidden":"true"}},[this._v("#")]),this._v(" （2）调用startActivity()，intent入参")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Intent intent = new Intent(<当前活动的类名>.this, <准备要启动的活动的类名>.Class);\nstartActivity(intent);\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（二）隐式intent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）隐式intent","aria-hidden":"true"}},[this._v("#")]),this._v(" （二）隐式Intent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-启动自己程序内的活动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动自己程序内的活动","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 启动自己程序内的活动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("每个Intent只能指定一个action,但是可以指定多个category")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Intent intent = new Intent(<action的值>);\nintent.addCategory(<category的值>);\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("==android.intent.category.DEFAULT==是一种默认的category，在调用startActivity()方法的时候会自动将这个category添加到Intent中")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("graph LR\nA[包含action和category的Intent对象] --\x3e B[在Mainfest中被定义了响应的action与category的活动]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-启动外部程序的活动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动外部程序的活动","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 启动外部程序的活动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("调用外部活动时，需要用系统内置动作作为intent的初始化参数。")]),this._v(" "),e("li",[this._v("intent.setData(Uri.parse())： parse中的数据有不同的种类，只有在manifest中响应了该种类数据的活动会被启动，否则就直接启动外部程序的活动。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Intent intent = new Intent(Intent.Action_DIAL); //系统内置动作\nintent.setData(Uri.parse("tel:10086"));  //setData\nstartActivity(intent);\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"五、活动间的数据传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、活动间的数据传递","aria-hidden":"true"}},[this._v("#")]),this._v(" 五、活动间的数据传递")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（一）向下一个活动传递数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）向下一个活动传递数据","aria-hidden":"true"}},[this._v("#")]),this._v(" （一）向下一个活动传递数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('intent.putExtra("<key>",<value>);\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Intent intent = getIntent();\nintent.getStringExtra("<key>");\n//对于不同类型的数据，取数据的方法也不一样\n//getIntExtra()\n//getBooleanExtra()\n//......\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（二）向上一个活动返回数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）向上一个活动返回数据","aria-hidden":"true"}},[this._v("#")]),this._v(" （二）向上一个活动返回数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("使用startActivityForResult()启动活动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("startActivityForResult(intent, <requestCode>);\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Intent intent = new Intent();\nintent.putExtra("data_return", "Hello FirstActivity");\nsetResult(RESULT_OK, intent);\nfinishi();\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("setResult()方法中的第一个参数是resultCode,一般用来给上一个活动的onResultActivity() 方法提供参数")]),this._v(" "),e("li",[this._v("在finish（）方法执行完毕后会销毁当前活动，然后回调上一个活动的onAcivityResult()方法。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("在上一个活动中编写onActivityResult()方法，get返回的数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('public void onActivityResult(int requestCode, int resultCode, Intent data){\n    switch(requestCode) {\n        case 1: //根据之前设定的requestCode的值来调用不同的逻辑\n            if (resultCode == RESULT_OK) {\n                String returnedData = data.getStringExtra("data_return");\n                Log.d("FirstActivity", returnedData);\n            }\n            break;\n        default:\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("graph LR\nA[startActivityForResult开启一个活动] --\x3e|传递requestCode与intent对象| B[被开启的活动]\nB --\x3e|添加返回数据逻辑| C[上一个活动]\nC --\x3e |接收返回的数据| D[完毕]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"六、生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 六、生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（一）返回栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）返回栈","aria-hidden":"true"}},[this._v("#")]),this._v(" （一）返回栈")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（二）活动状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）活动状态","aria-hidden":"true"}},[this._v("#")]),this._v(" （二）活动状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("运行状态： 位于栈顶")]),this._v(" "),e("li",[this._v("暂停状态： 不再位于栈顶但仍然可见")]),this._v(" "),e("li",[this._v("停止状态： 不再处于栈顶并且完全不可见")]),this._v(" "),e("li",[this._v("销毁状态： 从返回栈中移除")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（三）活动的生存期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（三）活动的生存期","aria-hidden":"true"}},[this._v("#")]),this._v(" （三）活动的生存期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/68d6a573fe6b5c8fadb12ade71079ab8/xmlnote/55111D3FD4564A408E70A4748EF9918A/6536",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"（四）恢复被回收的活动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（四）恢复被回收的活动","aria-hidden":"true"}},[this._v("#")]),this._v(" （四）恢复被回收的活动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"数据保存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据保存","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据保存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("onSaveInstanceState()")]),this._v(" 这个回调方法保证活动在被回收之前被调用：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("在父类AppCompatActivity中有这么两个方法：\nprotected void onSaveInstanceState(Bundle outState) {\n        super.onSaveInstanceState(outState);\n        this.getDelegate().onSaveInstanceState(outState);\n    }\n\n    @NonNull\n    public AppCompatDelegate getDelegate() {\n        if (this.mDelegate == null) {\n            this.mDelegate = AppCompatDelegate.create(this, this);\n        }\n\n        return this.mDelegate;\n    }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"onsaveinstancestate-bundle-outstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onsaveinstancestate-bundle-outstate","aria-hidden":"true"}},[this._v("#")]),this._v(" onSaveInstanceState(Bundle outState)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Bundle携带一系列方法用来保存数据：putString(), putInt() ....")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("outState.putString( key, value );\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在Activity中重写 onSaveInstanceState(Bundle outState)方法来进行数据保存")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"数据读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据读取","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据读取")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('============old==========\nprotected void onSaveInstanceState(Bundle outState){\nsuper.onCreate(savedInstanceState);\n...\n=========================\n\n=============new=========\nif(savedInstanceState != null){\n    String tempData = savedInstanceState.getString("<key>");\n//tempData是取到的数据，可以自由对它进行处理\n=========================\n}\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"七、使用intent或bundle进行数据传递的差异分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、使用intent或bundle进行数据传递的差异分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 七、使用Intent或Bundle进行数据传递的差异分析")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用Intent：\n每跨一次Activity，就要进行一次get & set")]),this._v(" "),e("li",[this._v("使用Bundle：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("把值存到Bundle中，然后把Bundle存到Intent中，不用在中途取出bundle中的值，只需要依次往后传bundle对象。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("存：intent.putExtras(bundles);\n取：Bundle bundle = this.getIntent.getExtras();\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Bundle对象中可以存放对象，存放的对象需要实现Serializable接口\nUser类：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("public class User implements Serializable {\n    //...\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Bundle bundle = new Bundle();\nUser user = new User();\nbundle.putSerializable("user", user); //<key-value>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"八、活动的启动模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、活动的启动模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 八、活动的启动模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("standard（默认模式）：创建一个新的实例，入栈顶")]),this._v(" "),e("li",[this._v("singleTop：如果当前栈顶有相同活动，则不创建新实例")]),this._v(" "),e("li",[this._v("singleTask：如果当前栈堆有相同活动，则不创建新实例")]),this._v(" "),e("li",[this._v("singleInstance：创建一个新栈堆，并创建新活动实例入栈（活动关闭后若栈堆中已无任何活动，则关闭栈堆）\n在AndroidManifest.xml中进行配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<activity android:launchMode: {launchmode}>\n")])])])}],!1,null,null,null);s.options.__file="Android开发学习笔记（三）活动（Activity）.md";e.default=s.exports}}]);