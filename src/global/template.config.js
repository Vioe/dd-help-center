/**
 * 模板信息
 * key 模板ID
 * value 模板列表
 */
const baseUrl = 'http://dingfile.babybus.com/DingFile/DingBusFile';
export const templateConfig = {
  1: { // 快乐时光 (key为3的模板是双图)
    // 封面
    0: {
      background: `${baseUrl}/20200423/f42e39cab62d484b9e2fc35eb22ac271.png`,
      textAnimationName: ['fadeInUp delay-0.5s', 'fadeInUp', 'fadeInUp'],
      iconList: [
        {
          iconName: 'giraffe delay-0.5s',
          animationName: 'slideInRight',
          picUrl: `${baseUrl}/20200423/ccc7465da61348f8ab228c40276000a8.png`,
        },
        {
          iconName: 'cat',
          animationName: 'slideInUp delay-0.5s',
          picUrl: `${baseUrl}/20200423/2bdb202ebc2c4a8b89e61361e88aa563.png`,
        },
        {
          iconName: 'panda',
          animationName: 'slideInUp delay-0.5s',
          picUrl: `${baseUrl}/20200423/bb1b075888f24f49ab44356d431bcf3b.png`,
        },
        {
          iconName: 'bush-left',
          animationName: 'slideInLeft',
          picUrl: `${baseUrl}/20200423/4ea006fa74e04f21811d0e80b5dbf1fa.png`,
        },
        {
          iconName: 'bush-right',
          animationName: 'slideInRight',
          picUrl: `${baseUrl}/20200423/1720ff15db9c4d95bada1ce9ef737493.png`,
        }
      ],
    },
    1: {
      background: `${baseUrl}/20200423/74ef6dbb692f4207acc6b5973b15baee.png`,
      textAnimationName: ['fadeInUp delay-0.5s', 'fadeInUp', 'fadeInUp'],
      iconList: [
        {
          iconName: 'chick',
          picUrl: `${baseUrl}/20200423/8d097876a17e45bb8fd3d2b138813a4c.png`,
        }
      ]
    },
    // 内容
    2: {
      background: `${baseUrl}/20200423/9bc1f0108f9f4e8dbb67233ae2d4b917.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'leaves',
          animationName: 'fadeInLeft',
          picUrl: `${baseUrl}/20200423/854bfe6b5ef54b04b7da590195945eb0.png`,
        },
        {
          iconName: 'bush-left',
          animationName: 'fadeInLeft',
          picUrl: `${baseUrl}/20200507/145b9ac9d2834c668ed3e445ad97d70f.png`,
        },
        {
          iconName: 'bush-right',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200507/bbe111155c9f405c9b632c69ed98999d.png`,
        },
        {
          iconName: 'grass',
          animationName: 'slideInUp',
          picUrl: `${baseUrl}/20200507/1325c264bcae4d42a9c8cb2acfebb41e.png`,
        },
        {
          iconName: 'panda',
          animationName: 'slideInRight',
          picUrl: `${baseUrl}/20200423/9d307d3cf0f0454dba3aeac8422b4967.png`,
        },
      ]
    },
    3: {
      background: `${baseUrl}/20200507/93cd5bf7bf4e4b3b81cd49318cdd286a.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'fish-right',
          animationName: 'slideInRight',
          picUrl: `${baseUrl}/20200507/87ba1cfd4d9d4a5da1968366ae4513aa.png`,
        },
        {
          iconName: 'fish-left',
          animationName: 'slideInLeft',
          picUrl: `${baseUrl}/20200507/c302e9fdf60d4e57a77a5a7f1d7e109e.png`,
        },
        {
          iconName: 'penguin',
          animationName: 'zoomIn',
          picUrl: `${baseUrl}/20200423/5401ba2855b845d1b135a20ed1952e65.png`,
        },
        {
          iconName: 'seaweed',
          animationName: 'slideInUp',
          picUrl: `${baseUrl}/20200424/3f1383833f764786aea9757cbe3195f9.png`,
        }
      ]
    },
    4: {
      background: `${baseUrl}/20200423/f663b5b140c447ceabe2f38a6f5e9209.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'leaves',
          animationName: 'fadeInDown',
          picUrl: `${baseUrl}/20200423/c31e8e536da14965a9ba23038224a54f.png`,
        },
        {
          iconName: 'bush',
          animationName: 'fadeIn',
          picUrl: `${baseUrl}/20200423/32d88b8de9884c2993654b89bd50c8d2.png`,
        },
        {
          iconName: 'panda',
          animationName: 'slideInRight',
          picUrl: `${baseUrl}/20200423/63cb9c54581c4065bf528bedd9dc5126.png`,
        },
      ]
    },
    5: {
      background: `${baseUrl}/20200423/22a1619d87a845239aeb413767123d08.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'cloud1',
          animationName: 'delay-0.5s fadeInRight',
          picUrl: `${baseUrl}/20200423/68f74f594aa544049dc35f07bb36c776.png`,
        },
        {
          iconName: 'cloud2',
          animationName: 'fadeInLeft',
          picUrl: `${baseUrl}/20200423/68f74f594aa544049dc35f07bb36c776.png`,
        },
        {
          iconName: 'cloud3',
          animationName: 'delay-1s fadeInRight',
          picUrl: `${baseUrl}/20200423/68f74f594aa544049dc35f07bb36c776.png`,
        },
        {
          iconName: 'fadeInRight start1',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200423/b5cd3b20eb2749689791eabe451dcbc5.png`,
        },
        {
          iconName: 'start2',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200423/f2542e16c1b94813b8e396cb1cbb6dff.png`,
        },
        {
          iconName: 'crayons',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200423/ba276b2dca2f432180ffd789fc195692.png`,
        },
        {
          iconName: 'rabbit',
          animationName: 'rotateInDownRight delay-0.5s',
          picUrl: `${baseUrl}/20200423/5b4e9f54e9564f47bd53b0d4a80b1b33.png`,
        },
      ]
    },
    6: {
      background: `${baseUrl}/20200423/cfcefeb3342c47ddac390c8dd9069cb6.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'fish',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200423/8e26c76398f5422995113a181a7bc589.png`,
        },
        {
          iconName: 'coral',
          animationName: 'fadeInUp',
          picUrl: `${baseUrl}/20200423/6bc1825df4fe4b2fadcebfd9d4907fb4.png`,
        },
      ]
    },
    7: {
      background: `${baseUrl}/20200423/df4782b8a42f495ab5e1dd0bdf440034.png`,
      picAnimationName: 'fadeIn',
      iconList: [
        {
          iconName: 'ballon',
          animationName: 'fadeInLeft',
          picUrl: `${baseUrl}/20200423/7b7c8a726f824a7187a442671d209e5d.png`,
        },
        {
          iconName: 'drops1',
          animationName: 'fadeInRight delay-1s',
          picUrl: `${baseUrl}/20200507/bbb6a5ac99544231bab8cbd705eb826c.png`,
        },
        {
          iconName: 'drops2',
          animationName: 'fadeInRight delay-1s',
          picUrl: `${baseUrl}/20200507/95432eafe1cd45f8a7c03882d97a1777.png`,
        },
        {
          iconName: 'rabbit',
          animationName: 'fadeInRight',
          picUrl: `${baseUrl}/20200423/919bef45fea44364a63cd3d211b95f6c.png`,
        },
        {
          iconName: 'wave',
          animationName: 'fadeInUp',
          picUrl: `${baseUrl}/20200423/cc1cbe3070d1482d82d7783751bb1dc5.png`,
        },
      ]
    },
  }
}
