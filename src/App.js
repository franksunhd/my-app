// 引入React
import React from 'react';
// 引入全局的css
import './App.css';

// 格式化函数
function formatUser(user) {
    return user.name + ',你今年' + user.age + '岁了';
}

function getGreeting(user) {
    if (user) {
        return formatUser(user);
    }

    return <h1>hello, frank sun</h1>
}

class Clock extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // 挂载
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    // 销毁
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    // 设置时间
    tick() {
        this.setState({
            date: new Date()
        })
    }

    // 点击函数
    handleClick() {
        console.log(this.state.date.getTime());
    }

    clickBtn() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>Hello World!</div>
                <h1>现在时间: {this.state.date.toLocaleTimeString()}</h1>
                <h1>现在时间: <span>{this.state.date.getTime()}</span></h1>

                <button onClick={this.handleClick}>点击打印</button>
                <br/><br/>
                <button onClick={() => this.clickBtn()}>打印this</button>
            </div>
        )
    }
}

function App() {
    const name = '孙思研';
    const user = {
        name: '孙思研',
        age: '18',
        head: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    };

    return (
        <div className="App">
            <p>在JSX中嵌入表达式</p>
            <h1>我的名字叫 {name}</h1>

            <h1>Hello, {formatUser(user)}</h1>

            <hr/>

            <p>{getGreeting(user)}</p>
            <div tabIndex="0">{getGreeting()}</div>

            <img className="headImg" src={user.head} alt=""/>

            <Clock/>
        </div>
    );
}

export default App;
