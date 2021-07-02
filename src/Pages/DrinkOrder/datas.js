export const menu = {
    KEBUKE: {
        name: '可不可熟成紅茶',
        menu: [
            { key: 'oldred', itemName: '熟成紅茶', price: 30, description: '' },
            { key: 'springred', itemName: '麗春紅茶', price: 30, description: '' },
            { key: 'springgreen', itemName: '春芽綠茶', price: 30, description: '' },
            { key: 'saltedplum', itemName: '春梅冰茶', price: 45, description: '' },
            { key: 'dodo', itemName: '胭脂多多', price: 50, description: '' },
            { key: 'wintermelonred', itemName: '熟成冷露', price: 30, description: '' },
            { key: 'wintermelongreen', itemName: '春芽冷露', price: 30, description: '' },
            { key: 'redmilk', itemName: '熟成歐蕾', price: 50, description: '' },
            { key: 'pearlmilk', itemName: '白玉歐蕾', price: 60, description: '' },
            { key: 'lemon', itemName: '熟成檸果', price: 50, description: '' },
        ],
    },
    CHUNYANG: {
        name: '春陽茶事',
        menu: [
            { key: 'Oolong', itemName: '春陽烏龍', price: 40, description: '' },
            { key: 'dark', itemName: '包種青茶', price: 40, description: '' },
            { key: 'sugarcane', itemName: '甘蔗鮮奶', price: 65, description: '' },
            { key: 'pearlmilk', itemName: '黑糖珍珠鮮奶', price: 65, description: '' },
            { key: 'pudding', itemName: '布丁烏龍鮮奶', price: 70, description: '' },
            { key: 'lemon', itemName: '翡翠凍檸檬', price: 55, description: '' },
        ],
    },
};

export const orderList = [
    {
        id: '20210606001',
        key: 'KEBUKE',
        date: '2021-07-16',
        list: [
            {
                member: 'A001',
                memberName: '小丹尼',
                item: 'oldred',
                price: 35,
                unit: 1,
                ice: 0,
                sugar: 7,
                other: ['pearl'],
            },
            {
                member: 'C001',
                memberName: '阿土伯',
                item: 'redmilk',
                price: 110,
                unit: 2,
                ice: 2,
                sugar: 0,
                other: [],
            },
        ],
    },
    {
        id: '20210607001',
        key: 'CHUNYANG',
        date: '2021-07-17',
        list: [
            {
                member: 'A002',
                memberName: '錢夫人',
                item: 'Oolong',
                price: 80,
                unit: 2,
                ice: 1,
                sugar: 3,
                other: ['pearl', 'pudding'],
            },
            {
                member: 'B001',
                memberName: '沙隆巴斯',
                item: 'pudding',
                price: 70,
                unit: 1,
                ice: 0,
                sugar: 0,
                other: [],
            },
        ],
    },
];

export const memberList = [
    {
        no: 'A001',
        name: '小丹尼',
        depart: '',
    },
    {
        no: 'A002',
        name: '錢夫人',
        depart: '',
    },
    {
        no: 'B001',
        name: '沙隆巴斯',
        depart: '',
    },
    {
        no: 'B002',
        name: '孫小美',
        depart: '',
    },
    {
        no: 'C001',
        name: '阿土伯',
        depart: '',
    },
];

export const iceOptions = [
    {
        key: 0,
        text: '去冰',
    },
    {
        key: 1,
        text: '正常',
    },
    {
        key: 2,
        text: '熱',
    },
];

export const sugarOptions = [
    {
        key: 0,
        text: '無糖',
    },
    {
        key: 3,
        text: '少糖',
    },
    {
        key: 5,
        text: '半糖',
    },
    {
        key: 7,
        text: '七分糖',
    },
    {
        key: 10,
        text: '全糖',
    },
];

export const otherOptions = [
    {
        key: 'pearl',
        text: '加珍珠',
        price: 5,
    },
    {
        key: 'pudding',
        text: '加布丁',
        price: 10,
    },
];

export const datas = [
    {
        title: '今天月亮暫時停止轉動',
        author: '米莎(Misa)',
        isSecret: true,
        password: '123456',
        content:
            '每一個到達不了的明天，都是為了讓我在今天，喜歡上你。──也許我們能夠相遇，才是一場最絢爛的奇蹟。「我來教妳彈鋼琴，這樣某天我們就能四手聯彈了。」「好啊，但等我真的學會，就表示我們已經重複同一天很久很久了喔。」「那也沒什麼不好。」',
    },
    {
        title: '刺蝟先生的擁抱',
        author: '馮湘婷/Mandie Kuo',
        isSecret: false,
        password: '',
        content:
            '「討厭！為什麼我想什麼你都不懂？」「我只是想要一個擁抱啊！你們怎麼不知道呢？」「我對你們好，為什麼你們不對我好？」心地善良但沒有交過朋友的刺蝟先生，想知道擁抱是什麼感覺，他聽說有一個「擁抱小鎮」，小鎮的居民都會給彼此大大的擁抱，於是決定去看看。在小鎮上，他看見老鼠媽媽擁抱小老鼠、羊爸爸擁抱羊媽媽，以及黑貓女士擁抱花貓小姐……「哇！在這裡我一定可以得到擁抱吧！」他開始跟小鎮居民交朋友、努力幫他們的忙，以為會輕易得到擁抱，但身上的刺，卻讓大家都害怕得不敢抱抱他，失望的刺蝟先生好傷心啊……但是，當遇到兔爺爺時，事情卻有了轉機。究竟，刺蝟先生用什麼聰明的方法得到擁抱呢？',
    },
    {
        title: '獅子補習班(Lion lessons)',
        author: '強‧艾吉/(譯：柯倩華)',
        isSecret: false,
        password: '',
        content:
            '小男孩漫步在掛滿招牌的街道上，這是一條補習街，不論空手道、西班牙語、手工編織和烹飪課…各式課程應有盡有。不過，小男孩對這些都不感興趣，他只想上──獅子補習班！小男孩穿上獅子服裝，在獅子教練的悉心教導下，完成七堂訓練課程。課程設計很有趣，首先，得先學會做出凶猛的樣子，接下來要選擇食物，還要能悄悄偵察，並且具備獅子吼的技能，而最重要的一堂課是…',
    },
];
