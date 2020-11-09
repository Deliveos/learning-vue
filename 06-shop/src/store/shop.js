export default {
    state: {
        shopList: [
            {
                id: 1, 
                title: 'Nike Red', 
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: require('../assets/img/1.png'),
                galery: [
                    {
                        name: 'Nike boots 1',
                        img: require('../assets/img/1.png'),
                    },
                    {
                        name: 'Nike boots 2',
                        img: require('../assets/img/2.png'),
                    },
                    {
                        name: 'Nike boots 3',
                        img: require('../assets/img/3.png'),
                    }
                ]
            },
            {
                id: 2, 
                title: 'Nike Default', 
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: require('../assets/img/4.png'),
                galery: [
                    {
                        name: 'Nike boots 1',
                        img: require('../assets/img/4.png'),
                    },
                    {
                        name: 'Nike boots 2',
                        img: require('../assets/img/5.png'),
                    },
                    {
                        name: 'Nike boots 3',
                        img: require('../assets/img/6.png'),
                    }
                ]
            },
            {
                id: 3, 
                title: 'Nike Green', 
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: require('../assets/img/7.png'),
                galery: [
                    {
                        name: 'Nike boots 1',
                        img: require('../assets/img/7.png'),
                    },
                    {
                        name: 'Nike boots 2',
                        img: require('../assets/img/8.png'),
                    },
                    {
                        name: 'Nike boots 3',
                        img: require('../assets/img/9.png'),
                    }
                ]
            },
            {
                id: 4, 
                title: 'Nike Street', 
                descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                img: require('../assets/img/10.png')
                ,
                galery: [
                    {
                        name: 'Nike boots 1',
                        img: require('../assets/img/11.png'),
                    },
                    {
                        name: 'Nike boots 2',
                        img: require('../assets/img/12.png'),
                    }
                ]
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) => (id) => { return state.shopList.find(product => product.id == id) }
        
    }
}