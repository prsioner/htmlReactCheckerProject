https://www.html.cn/create-react-app/docs/getting-started/

https://www.runoob.com/react/react-tutorial.html

####1.JS和JSX的区别
1.js，是一种直译式脚本语言
2.jsx，JavaScript XML是一种在React组件内部构建标签的类XML语 法
浏览器只能识别不同的JS和CSS，不能识别SCSS或者JSX，所以webpack的作用就是把SCSS转换成CSS，把JSX转换成JS，然后在浏览器正常使用


####2.Less 和CSS 
CSS（层叠样式表）是一门历史悠久的标记性语言，HTML 主要负责文档结构的定义，CSS 负责文档表现形式或样式的定义

LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性
程序運行時 LESS 文件会编译成为 CSS 文件



####3.React 元素渲染
React通过 ReactDOM.render() 的方法将数据渲染到DOM节点元素中

    
    const element = <h1>Hello, world!</h1>;
    ReactDOM.render(
        element,
        document.getElementById('example')
    );

React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分


####4.React 组件
1、我们可以使用函数定义了一个组件

    function HelloMessage(props) {
        return <h1>Hello World!</h1>;
    }

2.你也可以使用 ES6 class 来定义一个组件:

    class Welcome extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
    }

如果需要传递参数,可以采用这种复合的方式:

    
    function HelloMessage(props) {
        return <h1>Hello {props.name}!</h1>;
    }
    
    const element = <HelloMessage name="Runoob"/>;
    
    ReactDOM.render(
        element,
        document.getElementById('example')
    );
    

####5.使用AJAX请求获取数据
AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
AJAX = 异步 JavaScript 和 XML
使用像 axios 这样的库或浏览器提供的fetch() API ，全局 fetch 函数允许你轻松发起 AJAX 请求。 它将 URL 作为输入并返回一个解析为 Response 对象的 Promise
当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI


####6.React State(状态)

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）
数据自顶向下流动
父组件或子组件都不能知道某个组件是有状态还是无状态，并且它们不应该关心某组件是被定义为一个函数还是一个类。

这就是为什么状态通常被称为局部或封装。 除了拥有并设置它的组件外，其它组件不可访问


####7.React Props
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据
   
        function HelloMessage(props) {
            return <h1>Hello {props.name}!</h1>;
        }
        
        const element = <HelloMessage name="Runoob"/>;
        
        ReactDOM.render(
            element,
            document.getElementById('example')
        );

####8.React 事件处理

    React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:

    React 事件绑定属性的命名采用驼峰式写法，而不是小写。
    如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法) 
HTML 通常写法是：
<button onclick="activateLasers()">激活按钮</button>

React 中写法为：
<button onClick={activateLasers}>激活按钮</button>


####9.React 列表 & Keys
JSX 允许在大括号中嵌入任何表达式
    
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
    <li key={number.toString()}>{numbers}</li>
    );
    
    ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('example')
    );


####10.React API
分析以下7个方法:
1.设置状态:setState
setState()总是会触发一次组件重绘, 不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染


2.替换状态：replaceState
replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。

3.设置属性：setProps
设置组件属性，并重新渲染组件。
props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染

4.替换属性：replaceProps
replaceProps()方法与setProps类似，但它会删除原有 props



5.强制更新：forceUpdate
forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用
render() 


6.获取DOM节点：findDOMNode
返回值：DOM元素DOMElement


7.判断组件挂载状态：isMounted
返回值：true或false，表示组件是否已挂载到DOM中



####11.React 组件生命周期

componentWillMount 在渲染前调用,
componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问
componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

componentWillUnmount在组件从 DOM 中移除之前立刻被调用



####12.React Refs
React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。

这个特殊的属性允许你引用 render() 返回的相应的支撑实例
使用方法：

    <input ref="myInput" />

    var input = this.refs.myInput;
    var inputValue = input.value;
















