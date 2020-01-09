// 引入React
import React from 'react';
// 引入全局的css
import './App.css';

// 格式化函数
function formatUser(user) {
    return user.name + ',你今年' + user.age + '岁了';
}

// 调用格式化函数
function getGreeting(user) {
    if (user) {
        return formatUser(user);
    }
    return <h1>hello, frank sun</h1>
}

// 向 class 组件中添加局部的state
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
        // 修改状态
        this.setState({
            date: new Date()
        });
    }

    // 打印函数
    handleClick() {
        console.log(this.state.date.getTime());
    }

    // 打印this指针
    clickBtn() {
        console.log(this)
    }

    // 渲染函数
    render() {
        return (
            <div>
                <div>Hello World!</div>
                <h1>现在时间: {this.state.date.toLocaleTimeString()}</h1>
                <h1>现在时间: <span>{this.state.date.getTime()}</span></h1>

                <button onClick={this.handleClick}>点击打印</button>
                <hr/>
                <button onClick={() => this.clickBtn()}>打印this</button>
            </div>
        )
    }
}

// 实现自增
class ReactDOM extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    // 自增函数
    add() {
        this.setState({
            num: this.state.num + 1
        });
    }

    // 渲染函数
    render() {
        return (
            <div>
                <div className="numBox">{this.state.num}</div>
                <button onClick={() => this.add()}>增加</button>
                <hr/>
            </div>
        )
    }
}

// 实现开关灯
class Toggle extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, // 默认关灯
        };
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }

    // 函数改变状态
    handleClick() {
        this.setState(state => ({
                isOpen: !state.isOpen
            }
        ));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>开/关</button>
                <div className={this.state.isOpen ? 'a' : 'b'}>{this.state.isOpen ? '开启模式' : '关闭模式'}</div>
                <hr/>
            </div>
        )
    }
}

// 条件渲染
class Greeting extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            isTrue: false, // 默认加载组件
        };
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
                isTrue: !state.isTrue
            }
        ));
    }

    // 渲染函数
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击切换组件</button>
                <div>{getGreeting(this.state.isTrue ? {name: '张三', age: '20'} : null)}</div>
                <hr/>
            </div>
        )
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

// 元素变量
class LoginControl extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        // 函数绑定this
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    // 渲染函数
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div>
                <div>{this.state.isLoggedIn ? 'true' : 'false'}</div>
                {button}
            </div>
        )
    }
}

// 根节点渲染函数
function App() {
    const name = '孙思研';
    const user = {
        name: '孙思研',
        age: '18',
        head: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    };

    return (
        <div className="App">
            {/*在JSX中嵌入表达式*/}
            <p>在JSX中嵌入表达式</p>
            <h1>我的名字叫 {name}</h1>

            {/*使用函数表达式*/}
            <h1>Hello, {formatUser(user)}</h1>
            <hr/>

            <p>{getGreeting(user)}</p>
            <div tabIndex="0">{getGreeting()}</div>

            {/*使用表达式*/}
            <img className="headImg" src={user.head} alt=""/>

            {/*点击按钮*/}
            <Clock/>

            {/*使用类的方式构建组件*/}
            <ReactDOM/>
            <ReactDOM/>
            <ReactDOM/>

            {/*实现开关灯*/}
            <Toggle/>

            {/*条件渲染*/}
            <Greeting/>

            {/* 元素变量*/}
            <LoginControl/>
        </div>
    );
}

export default App;
