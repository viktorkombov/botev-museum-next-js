export const navigationItems = {
    museum: {
        name: 'Музей',
        items: [{ name: 'Национален музей "Христо Ботев"', link: '/bg/muzei/muzei-hristo-botev' }, { name: 'Даскал Ботевото училище', link: '/bg/muzei/uchilishte' }]
    },
    botev: {
        name: 'Христо Ботев',
        items: [{ name: 'Родословие', link: '/bg/hristo-botev/rodoslovie' }, { name: 'Летопис', link: '/bg/hristo-botev/letopis' }, { name: 'Снимки на Ботев', link: '/bg/hristo-botev/snimki' }, { name: 'Лични вещи', link: '/bg/hristo-botev/lichni-vesthi' }, { name: 'Документи', link: '/bg/hristo-botev/dokumenti' }, { name: 'Ботев в изобразителното изкуство', link: '/bg/hristo-botev/botev-v-izobrazitelnoto-izkustvo' }],
    },
    kalofer: {
        name: 'Калофер',
        items: [{ name: 'История', link: '/bg/kalofer/istoria' }, { name: 'Паметници на културата', link: '/bg/kalofer/pametnitsi' }, { name: 'Калоферската дантела', link: '/bg/kalofer/dantela' }, { name: 'Природа и туризъм', link: '/bg/kalofer/priroda-i-turizam' }]
    },
    aboutUs: {
        name: 'За нас',
        items: [{ name: 'Работно време', link: '/bg/za-nas/rabotno-vreme' }, { name: 'Профил на купувача', link: '/bg/za-nas/profil-na-kupuvacha' }, { name: 'Дейности и услуги', link: '/bg/za-nas/za-posetiteli' }, { name: 'Издания', link: '/bg/za-nas/izdania' }, { name: 'Партньори', link: '/bg/za-nas/partnyori' }, { name: 'Контакти', link: '/bg/za-nas/kontakti' }]
    }
}

export const baseUrl = 'https://muzeibotev.com';

export const apiUrl = baseUrl + '/api';

export const uploadsUrl = baseUrl + '/uploads';


export const navigationItemsWitoutDropdowns = {
    botevaCheta: {
        botevaCheta: { title: 'Ботева чета', link: '/bg/boteva-cheta' }, boteviChetnitsi: { title: 'Ботеви четници', link: '/bg/boteva-cheta/botevi-chetnitsi' }, history: { title: 'История и боен път', link: '/bg/boteva-cheta/istoria' }
    },
    botevPoetJournalist: {
        botevPoetJournalist: { title: 'Ботев - поет и публицист', link: '/bg/botev-poet-zhurnalist' }, poems: { title: 'Ботеви четници', link: '/bg/botev-poet-zhurnalist/stihotvorenia' }, publications: { title: 'История и боен път', link: '/bg/botev-poet-zhurnalist/publitsistika' }
    }
}

export const socialMediaLinks = {
    facebook: 'https://www.facebook.com/pages/%D0%9A%D1%8A%D1%89%D0%B0-%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%BE-%D0%91%D0%BE%D1%82%D0%B5%D0%B2/322046881214543',
    instagram: 'https://www.facebook.com/pages/%D0%9A%D1%8A%D1%89%D0%B0-%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%BE-%D0%91%D0%BE%D1%82%D0%B5%D0%B2/322046881214543',
    youtube: 'https://www.facebook.com/pages/%D0%9A%D1%8A%D1%89%D0%B0-%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%BE-%D0%91%D0%BE%D1%82%D0%B5%D0%B2/322046881214543',
    phone: 'tel:0035931 335 271'
}

export const museumCardsContent = [
    {
        id: 1,
        title: 'Национален музей "Христо Ботев"',
        content: 'Национален музей „Христо Ботев” е държавен културен институт с национално значение. В него се съхраняват, опазват и експонират лични вещи, документи',
        link: '/bg/muzei/muzei-hristo-botev'
    },
    {
        id: 2,
        title: 'Даскал Ботево училище',
        content: 'Училището е изградено по инициатива на Ботьо Петков – бащата на Христо Ботев, изцяло с дарения и доброволната помощ на калоферци. Добре подготвените учители, някои от тях и изтъкнати книжовници',
        link: '/bg/muzei/uchilishte'
    },
];

export const botevPoetPublisherCardsContent = [
    {
        id: 1,
        title: 'Ботеви стихотворения',
        content: 'През краткия си житейски път – 28 години - Христо Ботев написва 20 стихотворения',
        link: '/bg/botev-poet-zhurnalist/stihotvorenia'
    },
    {
        id: 2,
        title: 'Ботевите вестници',
        content: 'Христо Ботев издава 4 самостоятелни вестника. Той е съредактор и най-ценен сътрудник на Любен Каравелов при издаването на вестниците „Свобода” и „Независимост”.',
        link: '/bg/botev-poet-zhurnalist/publitsistika'
    },
];

export const aboutUsCardsContent = [
    {
        id: 1,
        title: 'Работно време',
        content: 'Лятно и зимно работно време',
        link: '/bg/za-nas/rabotno-vreme'
    },
    {
        id: 2,
        title: 'Профил на купувача',
        content: 'Годишен отчет за дейността на Музей "Христо Ботев"',
        link: '/bg/za-nas/profil-na-kupuvacha'
    },
    {
        id: 3,
        title: 'Дейности и услуги',
        content: 'Входни такси за музея и други услуги',
        link: '/bg/za-nas/uslugi'
    },
    {
        id: 4,
        title: 'Издания',
        content: 'Музеят е издател на рекламно-информационни брошури, които се разпространяват на щанда на музея.',
        link: '/bg/za-nas/izdania'
    },
    {
        id: 5,
        title: 'Партньори',
        content: 'Музеят си сътрудничи с различни сродни музеи в страната, научни институти, държавни и обществени организации (Общонародна фондация „Христо Ботйов”, Общобългарски комитет и Фондация „Васил Левски” и др.).',
        link: '/bg/za-nas/partnyori'
    },
    {
        id: 6,
        title: 'Контакти',
        content: 'Контактите за връзка с музея на Христо Ботев',
        link: '/bg/za-nas/kontakti'
    }
];

export const kaloferCardsContent = [
    {
        id: 1,
        title: 'История',
        content: 'В скута на хайдушкия Балкан се гуши малко китно градче, прорязано от бистрите води на Тунджа, огласяно от песента на хилядите гайтанджийски чаркове, ухаещо на рози и здравец.',
        link: '/bg/kalofer/istoria'
    },
    {
        id: 2,
        title: 'Паметници и паметни места',
        content: 'Паметници и паметни места в Калофер',
        link: '/bg/kalofer/pametnitsi'
    },
    {
        id: 3,
        title: 'Калоферска дантела',
        content: 'Повече от 100 години са изминали от появата на едно от най-фините женски ръкоделия, наречено с право „бялата магия” – калоферската дантела.',
        link: '/bg/kalofer/dantela'
    },
    {
        id: 4,
        title: 'Природа и туризъм',
        content: 'Калофер е едно от най-живописните Подбалкански градчета с красива природа и гостоприемни жители.',
        link: '/bg/kalofer/priroda-i-turizam'
    }
];

export const hristoBotevCardsContent = [
    {
        id: 1,
        title: 'Родословие',
        content: 'Майката на Ботев, по баща Ивана Стайкова Дрянкова, е родена в Калофер в семейството на Стайко Дрянков и Тота Бурмова. „Хубавата като калоферка” Ивана, през 1846 г. се омъжва за Ботьо Петков.',
        link: '/bg/hristo-botev/rodoslovie'
    },
    {
        id: 2,
        title: 'Летопис',
        content: 'Летопис за живота на Христо Ботев',
        link: '/bg/hristo-botev/letopis'
    },
    {
        id: 3,
        title: 'Снимките на Ботев',
        content: 'Най-известната фотография на Ботев е правена в ателието на фотографа Тома Хитров. От нея са запазени най-много копия.',
        link: '/bg/hristo-botev/snimki'
    },
    {
        id: 4,
        title: 'Лични вещи',
        content: 'Джобният часовник на Христо Ботев. Часовникът е принадлежал на Ботьо Петков. Той го подарява на сина си при заминаването му за втори път за Русия',
        link: '/bg/hristo-botev/lichni-veshti'
    },
    {
        id: 5,
        title: 'Документи',
        content: 'Документалното наследство на Христо Ботев е една от най-съществените части на цялостното му творчество.',
        link: '/bg/hristo-botev/dokumenti'
    },
    {
        id: 6,
        title: 'Ботев в изобразителното изкуство',
        content: 'Образът на Христо Ботев е претворяван от почти всички известни български художници – живописци, графици, скулптури, плакатисти, карикатуристи.',
        link: '/bg/hristo-botev/botev-v-izobrazitelnoto-izkustvo'
    }
];