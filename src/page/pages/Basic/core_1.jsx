import React from "react";

// 1. 在JSX中使用表达式
function JsxFun(props) {
    return (
        <div>
            <div className="titleText">1. 在JSX中嵌入表达式</div>
            <h1>我的名字叫 {props.name}</h1>
        </div>
    )
}

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

// 2. 使用函数表达式
// eslint-disable-next-line no-unused-vars
function JsxFun2(props) {
    return (
        <div>
            <div className="titleText">2. 使用函数表达式</div>
            <h1>Hello, {formatUser(props.user)}</h1>
            <div className="titleText">2.1 传参</div>
            <h1>{getGreeting(props.user)}</h1>
            <div className="titleText">2.2 不传参</div>
            <div tabIndex="0">{getGreeting()}</div>
        </div>
    )
}

// 3. 使用表达式
function HeadImg(props) {
    return (
        <div>
            <div className="titleText">3. 使用表达式</div>
            <img className="headImg" src={props.src} alt=""/>
        </div>
    )
}

// 4. 向 class 组件中添加局部的state
class Clock extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
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
        alert(this.state.date.getTime());
    }

    // 打印this指针
    clickBtn() {
        console.log(this)
    }

    // 渲染函数
    render() {
        return (
            <div>
                <div className="titleText">4. 向 class 组件中添加局部的state</div>
                <h1>现在时间: {this.state.date.toLocaleTimeString()}</h1>
                <h1>现在时间: <span>{this.state.date.getTime()}</span></h1>
                <button onClick={this.handleClick}>点击打印</button>
                <hr/>
                <button onClick={() => this.clickBtn()}>打印this</button>
            </div>
        )
    }
}

// 5. 实现自增
class ReactDOM extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {num: 0}
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
            </div>
        )
    }
}

// 实现自增组件
function ReactDomFun() {
    return (
        <div>
            <div className="titleText">5. 实现自增</div>
            <ReactDOM/>
            <ReactDOM/>
            <ReactDOM/>
        </div>
    )
}

// 6. 实现开关灯
class Toggle extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {isOpen: false}; // 默认关灯
        this.handleClick = this.handleClick.bind(this); // 绑定this
    }

    // 函数改变状态
    handleClick() {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    render() {
        return (
            <div>
                <div className="titleText">6. 实现开关灯</div>
                <button onClick={this.handleClick}>开/关</button>
                <div className={this.state.isOpen ? 'a' : 'b'}>{this.state.isOpen ? '开启模式' : '关闭模式'}</div>
            </div>
        )
    }
}

// 7. 条件渲染 --- 点击切换组件
class Greeting extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {isTrue: false}; // 默认加载组件
        this.handleClick = this.handleClick.bind(this); // 绑定this
    }

    handleClick() {
        this.setState(state => ({
            isTrue: !state.isTrue
        }));
    }

    // 渲染函数
    render() {
        return (
            <div>
                <div className="titleText">7. 条件渲染 --- 点击切换组件</div>
                <button onClick={this.handleClick}>点击切换组件</button>
                <div>{getGreeting(this.state.isTrue ? {name: '张三', age: '20'} : null)}</div>
            </div>
        )
    }
}

// 登录按钮
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

// 退出登录
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

// 8. 条件渲染 --- 元素变量
class LoginControl extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        // 函数绑定this
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
                <div className="titleText">8. 条件渲染 --- 元素变量</div>
                <div>{this.state.isLoggedIn ? 'true' : 'false'}</div>
                {button}
            </div>
        )
    }
}

// 9. 与运算符
function Mailbox(props) {
    // 接收数组
    const unread = props.unread;
    return (
        <div>
            <div className="titleText">9. 与运算符</div>
            {/*
                在 JavaScript 中，true && expression 总是会返回 expression,
                而 false && expression 总是会返回 false
            */}
            <h1>Hello!</h1>
            {
                unread.length > 0 && <h2>
                    You have {unread.length} unread message!
                </h2>
            }
        </div>
    )
}

// 10. 阻止组件渲染 ---- 使用render函数返回null
function WarningProps(props) {
    // warn 为 false 返回null 否则返回 标签
    if (!props.warn) {
        return null;
    }
    return (
        <h1 className="warnName">
            warning!
        </h1>
    )
}

// 10. 阻止组件渲染
class Pages extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleClick = this.handleClick.bind(this);
    }

    // 点击改变状态
    handleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <div className="titleText">10. 阻止组件渲染</div>
                <WarningProps warn={this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

// 11. 渲染列表
function List(props) {
    const list = props.list;
    const listItem = list.map((item, index) => {
        // key 只是在兄弟节点之间必须唯一
        return <li key={item.toString()}>{item}</li>
    });
    return (
        <div>
            <div className="titleText">11. 渲染列表</div>
            <ul>{listItem}</ul>
        </div>
    )
}

// 12. 表单
class NameForm extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {value: '', fruit: 'pear'};
        // 绑定this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeFruit = this.changeFruit.bind(this);
    }

    // input change事件
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // select change事件
    changeFruit(event) {
        this.setState({fruit: event.target.value});
    }

    // 点击提交按钮
    handleSubmit(event) {
        // 阻止默认事件
        event.preventDefault();
        alert('value:' + this.state.value);
        console.log('选中的水果是:', this.state.fruit);
    }

    render() {
        return (
            <div>
                <div className="titleText">12. 表单</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        姓名：
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <label>
                        地址：
                        <textarea value={this.state.value} onChange={this.handleChange} cols="30" rows="10"/>
                    </label>
                    <select value={this.state.fruit} onChange={this.changeFruit}>
                        <option value="orange">橘子</option>
                        <option value="apple">苹果</option>
                        <option value="pear">梨</option>
                    </select>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
}

// 导出
function Core_1() {
    const name = '孙思研';
    const user = {
        name: '孙思研',
        age: '18',
        head: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    };
    const messages = ['React', 'Re: React', 'Re:Re: React', 'Angular'];
    // 渲染列表
    const num = [1, 2, 3, 4, 5];
    const doubles = num.map(num => num * 2);
    console.log(doubles);

    return (
        <div className="padding20">
            {/* 1. 在JSX中嵌入表达式 */}
            <JsxFun name={name}/>

            {/* 2. 使用函数表达式 */}
            <JsxFun2 user={user}/>

            {/* 3. 使用表达式 */}
            <HeadImg src={user.head}/>

            {/* 4. 点击按钮 */}
            <Clock/>

            {/* 5. 使用类的方式构建组件 */}
            <ReactDomFun/>

            {/* 6. 实现开关灯 */}
            <Toggle/>

            {/* 7. 条件渲染 --- 点击切换组件 */}
            <Greeting/>

            {/* 8. 条件渲染 --- 元素变量 */}
            <LoginControl/>

            {/* 9. 与运算符 */}
            <Mailbox unread={messages}/>

            {/* 10. 组织组件渲染 */}
            <Pages/>

            {/* 11. 渲染列表 */}
            <List list={doubles}/>

            {/* 12. 表单 */}
            <NameForm/>
        </div>
    )
}

export default Core_1;