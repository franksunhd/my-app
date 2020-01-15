const menuList = [
    {
        id: 'menu_1',
        label: '首页',
        url: '/index/home'
    },
    {
        id: 'menu_2',
        label: '基础版',
        url: '/index/basic',
        children: [
            {
                id: 'menu_2_1',
                label: '核心概念 上',
                url: '/index/basic/core_1',
            },
            {
                id: 'menu_2_2',
                label: '核心概念 下',
                url: '/index/basic/core_2',
            },
            {
                id: 'menu_2_3',
                label: '高级指引',
                url: '/index/basic/senior_1',
            },
            {
                id: 'menu_2_4',
                label: 'Hook',
                url: '/index/basic/hook',
            }
        ]
    },
    {
        id: 'menu_3',
        label: '进阶版',
        url: '/index/advance'
    },
    {
        id: 'menu_4',
        label: '高级版',
        url: '/index/senior'
    },
];

export default menuList;
