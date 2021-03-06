import React, {Component} from "react";
import {Button, Icon, Menu, Dropdown, Typography, Row, Col, Layout} from "antd";
import TitleText from "../common/titleText";

const menuList = [
    {id: 1, label: '苹果'},
    {id: 2, label: '橘子'},
    {id: 3, label: '梨'},
    {id: 4, label: '香蕉'},
];

// 按钮的加载态
class ButtonLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            loading: true
        });
    }

    render() {
        return (
            <Button
                type="primary"
                loading={this.state.loading}
                disabled={this.state.loading}
                onClick={this.handleClick}>Click Me!</Button>
        )
    }
}

// 1. 按钮的使用
class ButtonBox extends Component {
    // 菜单的点击事件
    handleMenuClick(e) {
        console.log('click', e);
    }

    render() {
        return (
            <div>
                <TitleText title="1. 按钮的使用"/>
                <div>
                    <h3>按钮类型</h3>
                    <Button type="primary" className="marginRight10" ghost>primary</Button>
                    <Button type="default" className="marginRight10">default</Button>
                    <Button type="dashed" className="marginRight10">dashed</Button>
                    <Button type="danger" className="marginRight10">danger</Button>
                    <Button type="link" className="marginRight10">Link</Button>
                    <Button type="primary" shape="round">圆角按钮</Button>
                </div>
                <div>
                    <h3>图标按钮</h3>
                    <Button type="primary" className="marginRight10" shape="circle">圆</Button>
                    <Button type="primary" className="marginRight10" shape="circle" icon="search"/>
                    <Button type="primary" className="marginRight10" icon="search">Search</Button>
                </div>
                <div>
                    <h3>按钮尺寸</h3>
                    <Button type="primary" className="marginRight10" size="small">small</Button>
                    <Button type="primary" className="marginRight10">normal</Button>
                    <Button type="primary" className="marginRight10" size="large">large</Button>
                </div>
                <div>
                    <h3>按钮组合</h3>
                    <Button.Group className="marginRight10">
                        <Button type="primary">
                            <Icon type="left"/>
                            Left
                        </Button>
                        <Button type="primary">
                            Right
                            <Icon type="right"/>
                        </Button>
                    </Button.Group>
                    <Button.Group className="marginRight10">
                        <Button type="primary">L</Button>
                        <Button type="default">C</Button>
                        <Button type="primary">R</Button>
                        <Button type="default">E</Button>
                    </Button.Group>
                </div>
                <div>
                    <h3>多个按钮组合</h3>
                    <Dropdown overlay={(
                        <Menu onClick={this.handleMenuClick}>
                            {menuList.map(item => {
                                return (
                                    <Menu.Item key={item.id}>{item.label}</Menu.Item>
                                )
                            })}
                        </Menu>
                    )}>
                        <Button type="primary">
                            水果
                            <Icon type="down"/>
                        </Button>
                    </Dropdown>
                </div>
                <div className="bgGray">
                    <h3>幽灵按钮</h3>
                    <Button type="primary" ghost>primary</Button>
                    <Button type="default" ghost>default</Button>
                    <Button type="dashed" ghost>dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                    <Button type="link" ghost>link</Button>
                </div>
                <div>
                    <h3>block按钮</h3>
                    <Button type="primary" className="marginBottom10" block>primary</Button>
                    <Button type="default" className="marginBottom10" block>default</Button>
                    <Button type="dashed" className="marginBottom10" block>dashed</Button>
                    <Button type="danger" className="marginBottom10" block>danger</Button>
                    <Button type="link" className="marginBottom10" block>link</Button>
                </div>
                <div>
                    <h3>加载中状态</h3>
                    <ButtonLoading/>
                </div>
            </div>
        )
    }
}

// 2. Icon图标
class IconBox extends Component {
    render() {
        return (
            <div>
                <TitleText title="2. Icon 图标"/>
                <div>
                    <h3>基础用法</h3>
                    <Icon type="home" style={{fontSize: "18px", marginRight: "10px"}} theme="filled"/>
                    <Icon type="home" style={{fontSize: "18px", marginRight: "10px"}} theme="outlined"/>
                    <Icon type="home" style={{fontSize: "18px", marginRight: "10px"}} theme="twoTone"/>
                </div>
                <div>
                    <h3>多色图标</h3>
                    {/* 支持自定义颜色 */}
                    <Icon type="smile" style={{fontSize: "18px", marginRight: "10px"}} theme="twoTone"/>
                    <Icon type="heart" style={{fontSize: "18px", marginRight: "10px"}} theme="twoTone"
                          twoToneColor="#eb2f96"/>
                    <Icon type="check-circle" style={{fontSize: "18px", marginRight: "10px"}} theme="twoTone"
                          twoToneColor="#52c41a"/>
                </div>
            </div>
        )
    }
}

// 3. 排版
class TypographyBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strText: '这是默认文本...'
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(str) {
        this.setState({strText: str});
    };

    render() {
        const {Title, Paragraph} = Typography;

        return (
            <div>
                <TitleText title="3. 排版"/>
                <div>
                    <h3>标题组件</h3>
                    <Title level={1}>标题1</Title>
                    <Title level={2}>标题2</Title>
                    <Title level={3}>标题3</Title>
                    <Title level={4}>标题4</Title>
                </div>
                <div>
                    <h3>可交互</h3>
                    {/* 可编辑 */}
                    <Paragraph editable={{onChange: this.onChange}}>{this.state.strText}</Paragraph>
                    {/* 可复制 */}
                    <Paragraph copyable>复制这段文本</Paragraph>
                    {/* 支持自定义复制内容 */}
                    <Paragraph copyable={{text: 'Hello, Ant Design!'}}>您可复制这段文本</Paragraph>
                    {/* 设置缩略行数 设置是否可展开 */}
                    <Paragraph ellipsis={{rows: 2, expandable: true}}>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                </div>
            </div>
        )
    }
}

// 4. 栅格
class GridBox extends Component {
    render() {
        return (
            <div>
                <TitleText title="4. 栅格"/>
                <div>
                    <h3>基础栅格</h3>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={12}>
                            <div className="light_blue">col-12</div>
                        </Col>
                        <Col span={12}>
                            <div className="blueColor">col-12</div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={8}>
                            <div className="light_blue">col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className="blueColor">col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className="light_blue">col-8</div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={6}>
                            <div className="light_blue">col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className="blueColor">col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className="light_blue">col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className="blueColor">col-6</div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3>区块间隔</h3>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={8}>
                            <div className="light_blue">col-8</div>
                        </Col>
                        <Col span={8} offset={8}>
                            <div className="blueColor">col-8</div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={6} offset={6}>
                            <div className="light_blue">col-6 col-offset-6</div>
                        </Col>
                        <Col span={6} offset={6}>
                            <div className="blueColor">col-6 col-offset-6</div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={12} offset={6}>
                            <div className="light_blue">col-12 col-offset-6</div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3>左右偏移 -- 列偏移</h3>
                    <Row gutter={16} className="marginBottom10">
                        <Col span={8}>
                            <div className="blueColor">col-8</div>
                        </Col>
                        <Col span={8} push={3}>
                            <div className="light_blue">col-8 col-push-3</div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

// 5. 布局
class LayoutBox extends Component {

    render() {
        const {Header, Footer, Sider, Content} = Layout;
        return (
            <div>
                <TitleText title="5. 布局"/>
                <div>
                    <h3>基础布局</h3>
                    <Layout className="LayoutBox">
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                    <h3>上-左右-下</h3>
                    <Layout className="LayoutBox">
                        <Header>Header</Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>Content</Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>
                    <h3>左-上中下</h3>
                    <Layout className="LayoutBox">
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>
        )
    }
}

// 6. 菜单布局
class SiDerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        const {Header, Sider, Content} = Layout;
        return (
            <div>
                <TitleText title="6. 菜单布局"/>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon className="trigger"
                                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                  onClick={this.toggle}/>
                        </Header>
                        <Content style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

function ANT_1() {
    return (
        <div className="padding20">
            {/* 1. 按钮的使用 */}
            <ButtonBox/>

            {/* 2. Icon图标 */}
            <IconBox/>

            {/* 3. 排版 */}
            <TypographyBox/>

            {/* 4. 栅格 */}
            <GridBox/>

            {/* 5. 布局 */}
            <LayoutBox/>

            {/* 6. 菜单布局 */}
            <SiDerDemo/>
        </div>
    )
}

export default ANT_1;
