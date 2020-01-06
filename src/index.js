import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// ========================================

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),
        value: 'grapefruit'
      };
    
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
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

    handleSubmit(event) {
      alert('你喜欢的风味是: ' + this.state.value);
      event.preventDefault();
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }
  
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

        </div>
      );
    }
  }

  

  
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  
  



