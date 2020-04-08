
const host = 'http://39.108.56.15:6099'

const phone = [ 
  { id: 1,
    title: '小米10 Pro',
    desc: '晓龙865 | 50倍变焦',
    picUrl: host+'/images/phone1.jpg',
    symbol: '￥',
    price: '4999',
    span: '起'
  },
  { id: 2,
    title: '小米10',
    desc: '骁龙865/1亿像素相机',
    picUrl: host+'/images/phone2.jpg',
    symbol: '￥',
    price: '3999',
    span: '起'
  },
  { id: 3,
    title: 'Redmi K30',
    desc: '120Hz流遠屏，全速热爱',
    picUrl: host+'/images/phone3.jpg',
    symbol: '￥',
    price: '1699',
    span: '起'
  },
  { id: 4,
    title: 'Redmi K30 5G',
    desc: '双模5G，120Hz流遠屏',
    picUrl: host+'/images/phone4.jpg',
    symbol: '￥',
    price: '1999',
    span: '起'
  },
  { id: 5,
    title: 'Redmi Note 8 Pro',
    desc: '6400万全场景四振',
    picUrl: host+'/images/phone5.jpg',
    symbol: '￥',
    price: '1299',
    span: '起',
    before: '1399'
  },
  { id: 6,
    title: 'Redmi Note 8',
    desc: '干元4800万四摄',
    picUrl: host+'/images/phone6.jpg',
    symbol: '￥',
    price: '999',
    span: '起'
  },
];

var tv = [
  { id: 7,
    title: '小米电视4A 65英寸',
    desc: '4K HDR，人工智能语音系统',
    picUrl: host+'/images/tv1.webp',
    symbol: '￥',
    price: '2599',
    before: '2999'
  },
  { id: 8,
    title: '小米电视4X 43英寸',
    desc: 'FHD全高清屏，人工智能语音',
    picUrl: host+'/images/tv2.jpg',
    symbol: '￥',
    price: '1099',
    before: '1399'
  },
  { id: 9,
    title: '小米电视4C 50英寸',
    desc: '4K HDR，钢琴烤漆',
    picUrl: host+'/images/tv3.jpg',
    symbol: '￥',
    price: '1599',
    before: '1699'
  },
  { id: 10,
    title: '小米电视4C 55英寸',
    desc: '4K HDR，人工智能系统',
    picUrl: host+'/images/tv4.jpg',
    symbol: '￥',
    price: '1699',
    before: '1999'
  },
  { id: 11,
    title: '小米电视4A 32英寸',
    desc: '人工智能系统，高清液晶屏',
    picUrl: host+'/images/tv5.jpg',
    symbol: '￥',
    price: '699',
    before: '799'
  },
  { id: 12,
    title: '小米电视4A 50英寸',
    desc: '4K HDR，人工智能语音系统',
    picUrl: host+'/images/tv6.png',
    symbol: '￥',
    price: '1499',
    before: '1699'
  },
];

const laptop = [
  { id: 13,
    title: 'Air 13.3" 2019款',
    desc: '新一代独立显卡',
    picUrl: host+'/images/laptop1.jpg',
    symbol: '￥',
    price: '4999',
    before: '5699'
  },
  { id: 14,
    title: '小米笔记本15.6" MX110 独显版',
    desc: '全面均衡的国民轻薄本',
    picUrl: host+'/images/laptop2.jpg',
    symbol: '￥',
    price: '3899',
    before: '4299'
  },
  { id: 15,
    title: '小米游戏本',
    desc: '冷酷的性能怪兽',
    picUrl: host+'/images/laptop3.webp',
    symbol: '￥',
    price: '8999'
  },
  { id: 16,
    title: 'Pro 15.6" GTX显卡',
    desc: '更强悍的专业笔记本',
    picUrl: host+'/images/laptop4.jpg',
    symbol: '￥',
    price: '6799',
    span: '起'
  },
]

exports.host = host
exports.phone = phone
exports.tv = tv
exports.laptop = laptop
exports.data = {
  phone,
  tv,
  laptop
};