##### 1.React 元素渲染

Html文件的 DOM 的根节点内的所有内容都由 React DOM 管理
如果想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()
 React 应用只会调用一次 ReactDOM.render()

 ##### 2.有状态的组件
 2.1 函数组件
 函数组件：也就是 JavaScript 函数 
 
 function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

2.2 ES6 的 class 来定义组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。


##### 3. state
示例：
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );


setState() 调用的时候，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。
 React 也会相应的更新 DOM


注意：
1.不要直接修改 State, 而是应该使用 setState(),构造函数是唯一可以给 this.state 赋值的地方

2.出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
 

 ##### 4.事件处理

 import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// ========================================

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.startClock = this.startClock.bind(this);
    }
  
    componentDidMount() {
      
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    
    tick() {
      this.setState({
        date: new Date()
      });
    }

     startClock() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    render() {
      return (
        <div>
          <h1 onClick={this.startClock}>点我开始显示当前时间</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  也可以直接在onClick中把this.startClock替换成 this.startClock.bind(this)



  ##### 5.条件渲染
  根据不同状态值组件展示不同效果
  三目运算
  render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}

##### 6.列表
  render() {

        const dataList = ['a','b','c','d','e','f','g','h'];
        
        return (
          <div>
            <h1 onClick={this.startClock.bind(this)}>点我开始显示当前时间</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <ul>
              {
                  dataList.map((object) => 
              <li key ={object.toString()}>{object}</li>
                  )
              }
            </ul>
          </div>
        );
      }



##### 7.表单
在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state

select 标签：在 HTML 中创建下拉列表标签

  class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}


##### 8.组合
React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用
Props 和组合提供了清晰而安全地定制组件外观和行为的灵活方式。
注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}


##### 9.React难点
 ###### 9.1 确定 state 放置的位置 
 找到根据这个 state 进行渲染的所有组件，找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）
 该共同所有者组件或者比它层级更高的组件应该拥有该 state