import message_borad from 'image/home_portfolios_message_board.jpg';
import form from 'image/home_portfolios_form.jpg';
import KittyGallery from 'image/home_portfolios_kittyGarelly.jpg';
import animation from 'image/home_protfolios_animation_2.jpg';
import thef2e from 'image/home_protfolios_animation.jpg';
import games from 'image/home_games.jpeg';
import totoro from 'image/home_ghibli_totoro.jpg';
import totoro_busStation from 'image/home_ghibli_totoro_busStation.jpg';
import totoro_face from 'image/home_ghibli_totoro_face.jpg';
import totoro_father from 'image/home_ghibli_totoro_father.jpg';
import totoro_cry from 'image/home_ghibli_totoro_cry.jpg';
import totoro_bus from 'image/home_ghibli_totoro_bus.jpg';

export const portfolios = [
    { id: 'thef2e', title: 'The F2E 4th', description: '前端 修練(爆)精神(肝)時光屋', image: thef2e },
    { id: 'animation', title: 'animation 金促咪', description: 'HAHOW 動畫互動網頁特效入門 課程練習', image: animation },
    { id: 'excel', title: '親愛的，show出你的口袋書單！', description: 'excel檔案讀取/下載', image: form },
    { id: 'games', title: '小遊戲樂無窮', description: '', image: games },
    {
        id: 'drinkorder',
        title: '夥伴們，飲料訂起來！',
        description: '表單處理',
        image: message_borad,
    },
    { id: 'kittyGallery', title: '奴才們，快來吸貓吧！', description: 'The Cat Api 串接', image: KittyGallery },
];

export const slideData = [
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '小月和小梅再也沒見過龍貓了？！',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '在片尾插畫中，展現了小月與小梅的轉變，姊妹們的媽媽從醫院康復回家後，小月褪去母職與朋友們一同嬉鬧，而小梅也不再只是跟在姊姊屁股後面哭鼻子的小小孩，然而卻不見她們與龍貓的同框畫面？根劇宮崎駿(Hayao Miyazaki)本人透露，只要她們相信龍貓，她們就不會孤單，但若一直停留在那兒，她們將永遠無法回到現實世界。小月和小梅因為遇到龍貓，在找尋彼此的路上慢慢找到勇氣和希望，他表示：「從那時我們就決定不再拍續集，因為一生中只要遇過一次龍貓就夠了。」。',
        image: totoro,
    },
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '龍貓的胖虎精神？！把小月爸爸的傘據為己有？',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '片中姊妹小月與小梅在公車站遇見龍貓的經典鏡頭，小月將爸爸的雨傘給了淋雨的龍貓，後來爸爸的傘卻被龍貓據為己有，成為許多粉絲的疑惑之處，宮崎駿笑說：「龍貓是森林的守護神，其實並不討厭淋雨，因為雨水是滋養森林的重要養分，不過龍貓很喜歡雨水滴到傘上的滴答聲，祂其實是把雨傘當成了樂器。」而最初的故事後續是龍貓偷偷到草壁家還雨傘並贈送了一包橡樹果子，但宮崎駿表示：「後來想想，其實龍貓應該不太懂得借出與歸還的道理，祂很單純地認為對方送了有趣的樂器，因此回送了一包橡樹果子答謝，於是我們就把還傘的戲份刪掉了，之後龍貓的身邊也多了一個『樂器』。」',
        image: totoro_busStation,
    },
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '與脆弱共處，才是真正的堅強',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '劇中，妹妹小梅因為想念住院中的母親獨自一人前往醫院，身兼母職的姊姊小月因為找不到失蹤的小梅，最後忍不住放聲大哭。這一幕強烈震撼著還是小小孩的我，從沒想過"姊姊"這種厲害的生物也會大哭(印象中只有破口大罵(笑))；其實，最初宮崎駿並沒有安排姊姊小月因為找不到妹妹緊張到放聲大哭的橋段。但到了製作後期，宮崎駿想到自己小時候也有相同的回憶，母親臥病在床，由小孩負責煮飯的事情，其實那是很辛苦的，所以對小月來說，唯有承認自己有些地方確實做不來，心情才會比較輕鬆。宮崎駿的用心讓小月這個人物更加立體，脆弱與堅強並存，才能成為小梅的好姊姊。導演宮崎駿說，「我希望大家看了我的電影，都能明白這世界充滿困難，有時能解決問題，有時得學著與問題共處，這都需要勇氣，但這就是成長，這就是人生。」。',
        image: totoro_cry,
    },
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '2D世界裡的第一名爸爸--草壁達郎',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '動畫中小月與小梅和爸爸草壁達郎為了就近照顧罹患結核病的媽媽，一起搬到森林附近的舊房子，這棟舊房子一開始不僅骯髒無比，還散發著「鬼屋」的氣氛。而當小月和小梅看到「灰塵精靈」，驚慌失措地告訴爸爸這是一棟鬼屋時，他呵呵笑著回應：「原來是鬼屋啊，那很好呢！」而且雖然因為在森林裡造成生活上有些不方便，草壁達郎也總是開朗的看待一切，感恩房子、感恩神木。當小梅和爸爸說遇到了龍貓，雖然到最後沒有親眼看到，但他絲毫沒有不相信，還真誠的和女兒說：「小梅剛剛一定是遇到了森林的主人。」。信任並尊重孩子，有時比直接告訴答案，更能成為長大的養份。',
        image: totoro_father,
    },
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '天然呆的森林守護者',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '為什麼龍貓看起來總是呆呆的呢？宮崎駿表示，這是因為當初在做角色設定的時候，他故意讓龍貓的眼神不對焦，讓牠的兩顆圓圓眼睛，一直呆呆地望著一個方向，看起來總是茫茫然。「龍貓」呆萌的表情和舉止實際上代表著祂身為森林守護神的「大智若愚」，宮崎駿表示：「有時候我進入山林間，都會隱約覺得有誰也在山林裡，那是森林裡的動靜，感覺像在跟我說『今天可別假裝不知道喔』，我覺得這種看不見的存在很有趣。」',
        image: totoro_face,
    },
    {
        title: '龍貓(となりのトトロ)',
        subTitle: '神奇的龍貓專屬坐騎--龍貓公車',
        director: '宮崎駿(Hayao Miyazaki)',
        performers: ['坂本千夏', '島本須美'],
        description:
            '龍貓公車是龍貓的交通工具，有12隻腳，額頭上有像公車的提示牌，會按龍貓公車的意志更動及顯示目的地，並從身體拉出門的形狀，讓人乘坐，裡面的坐墊就像貓身體上的毛一樣柔軟，與龍貓一樣，一般人看不見牠。宮崎駿對貓公車的解讀為：「可以將牠視為古代的一隻貓妖（化貓、化け猫），因覺得人類世界的公車很有趣，而將自己變成那樣的形狀」。',
        image: totoro_bus,
    },
];
