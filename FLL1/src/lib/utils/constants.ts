export type NavItem = {
    id: string
    labelEn: string
    labelZh: string
    href: string
}

export const TOP_NAV_ITEMS: NavItem[] = [
    { id: 'home', labelEn: 'HOME', labelZh: '首页', href: '/home' },
    { id: 'relation', labelEn: 'RELATION', labelZh: '关系', href: '/relation' },
    { id: 'chat', labelEn: 'CHAT', labelZh: '对话', href: '/chat' },
    { id: 'album', labelEn: 'ALBUM', labelZh: '相册', href: '/album' },
    { id: 'board', labelEn: 'BOARD', labelZh: '留言', href: '/board' },
    { id: 'memory', labelEn: 'MEMORY', labelZh: '记忆', href: '/memory' },
    { id: 'play', labelEn: 'PLAY', labelZh: '玩法', href: '/play' },
    { id: 'guardian', labelEn: 'GUARDIAN', labelZh: '守护', href: '/guardian' },
] as const

export type HomeNavItem = {
    num: string
    name: string
    en: string
    ex: string
    more: string
}

export const HOME_NAV_ITEM: HomeNavItem[] = [
    {
        num: "01", name: "关系", en: "RELATION",
        ex: "把她最重要的关系、回声和彼岸线索单独整理成一份可以反复回来的档案。",
        more: "进入关系页，沿着失约、组织、镜像与彼岸继续往下看。"
    },
    {
        num: "02", name: "对话", en: "CHAT",
        ex: "寻一个雨天,坐下来把那些事情好好聊聊。",
        more: "支持和角色聊天，适合在安静的时候停留更久。"
    },
    {
        num: "03", name: "相册", en: "ALBUM",
        ex: "往日云烟。",
        more: "适合浏览、放大和保存每一个值得留下的瞬间。"
    },
    {
        num: "04", name: "留言", en: "BOARD",
        ex: "把想说的话留在这里，让每一次来访都有一点回应。",
        more: "可以写下留言、心情，或者一句短短的问候。"
    },
    {
        num: "05", name: "记忆", en: "MEMORY",
        ex: "和我分享你的记忆。",
        more: "用碎片、誓言与回声把那个不愿醒来的空间展开。"
    },
] as const

export type FacadeConfig = {
    name: string
    nameEn: string
    tagline: string
    characterName: string
    characterNameEn: string
    quote: string
    primaryButton: string
    secondaryButton: string
}

export const FACADE: FacadeConfig = {
    name: "彼岸终曲",
    nameEn: "BORDER OF DEATH",
    tagline: "非官方同人站",
    characterName: "弗洛洛",
    characterNameEn: "PHROLOVA · 挽歌 永不落幕",
    quote: "我或曾梦见，与你亲密无间。醒来时发现，你我形同陌路。",
    primaryButton: "总站入口",
    secondaryButton: "投喂站长",
} as const

export const FACADE_LABEL = [
    { label: "声骸共鸣" },
    { label: "可播放曲目" },
    { label: "日活" },
] as const

export const FACADE_LABEL_VALUES: Record<string, number> = {
    "声骸共鸣": 1,
    "可播放曲目": 3,
    "日活": 5,
}

type RelationCharacter = {
    name: string
    title: string
    description: string
}

import type { ToneKey } from '@/components/ui/MuCard'

export type FeatureCardEntry = {
  name: string
  href: string
  title: string
  badge: string
  index: string
  tone: ToneKey
  summary: string
  detail: string
  linkLabel: string
  consoleState: string
}

export const FEATURE_CARDS: FeatureCardEntry[] = [
  {
    name: 'relation', href: '/relation', title: 'RELATION', badge: '关系',
    index: '01', tone: 'sienna',
    summary: '把她最重要的关系、回声和彼岸线索单独整理成一份可以反复回来的档案。',
    detail: '进入关系页，沿着失约、组织、镜像与彼岸继续往下看。',
    linkLabel: '进入关系', consoleState: 'RELATION NET',
  },
  {
    name: 'chat', href: '/chat', title: 'CHAT', badge: '对话',
    index: '02', tone: 'indigo',
    summary: '打开对话窗口，用更私人的方式慢慢聊下去。',
    detail: '支持和角色聊天，适合在安静的时候停留更久。',
    linkLabel: '进入对话', consoleState: 'DIALOG',
  },
  {
    name: 'album', href: '/album', title: 'ALBUM', badge: '相册',
    index: '03', tone: 'copper',
    summary: '把收集到的图片整理成一面可以慢慢翻看的画廊。',
    detail: '适合浏览、放大和保存每一个值得留下的瞬间。',
    linkLabel: '进入相册', consoleState: 'GALLERY',
  },
  {
    name: 'board', href: '/board', title: 'BOARD', badge: '留言',
    index: '04', tone: 'slate',
    summary: '把想说的话留在这里，让每一次来访都有一点回应。',
    detail: '可以写下留言、心情，或者一句短短的问候。',
    linkLabel: '进入留言', consoleState: 'MESSAGE BOARD',
  },
  {
    name: 'memory', href: '/memory', title: 'BORDER', badge: '记忆',
    index: '05', tone: 'onyx',
    summary: '沿着回响继续下沉，走进她亲手创造的失亡彼岸。',
    detail: '用碎片、誓言与回声把那个不愿醒来的空间展开。',
    linkLabel: '进入记忆', consoleState: 'MEMORY TRACE',
  },
  {
    name: 'play', href: '/play', title: 'PLAY', badge: '玩法',
    index: '06', tone: 'ember',
    summary: '进入她的专属玩法页，在调律台上重新牵动频率、残响与彼岸回声。',
    detail: '这是一页交互式角色玩法，在这里保留自己的调律特色。',
    linkLabel: '进入玩法', consoleState: 'TUNING',
  },
]

export const RELATIONS: RelationCharacter[] = [
    {
        name: '漂泊者',
        title: '旧识之线',
        description: '旧识、失约者、未断牵引与宿敌感，全都压在这一条线里',
    },
    {
        name: '赫卡忒',
        title: '镜像之线',
        description: '最特殊的一条关系，因为那几乎不是别人，而是彼岸之我',
    },
    {
        name: '克里斯托弗',
        title: '异路同僚',
        description: '暂时合作，难言默契。一个让她警惕而部分欣赏的人',
    },
] as const

export type RcDetails = {
    id: string
    name: string     
    title: string     
    tags: string[]    
    description: string
}


export type MemoryChapter = {
  id: string
  index: string
  title: string
  subtitle: string
  tone: import('@/components/ui/MuCard').ToneKey
  abstract: string
  content: string
}

export const MEMORY_CHAPTERS: MemoryChapter[] = [
  {
    id: 'overture',
    index: '00',
    title: '序曲',
    subtitle: 'OVERTURE',
    tone: 'onyx',
    abstract: '一切开始之前，她站在彼岸的边缘，听见了第一声回响。',
    content: '她不记得自己从何处来，只记得那段旋律。像雨滴落入深潭，一圈圈荡开——那是她第一次感知到"彼岸"的存在。没有光，没有温度，只有声音。她伸出手，指尖触及的虚空中，有某种东西在回应。',
  },
  {
    id: 'first-meet',
    index: '01',
    title: '失约',
    subtitle: 'THE BROKEN PROMISE',
    tone: 'sienna',
    abstract: '那个曾答应会回来的人，终究没有赴约。自此之后，她便不再等了。',
    content: '漂泊者离开的那天，天空下着细密而沉默的雨。她说她会等。他说他会回来。两个诺言，一个也没能兑现。此后漫长的岁月里，弗洛洛学会了一件事：等待是彼岸最残酷的温柔。她不再等了，但她也没有忘记。',
  },
  {
    id: 'mirror',
    index: '02',
    title: '镜像',
    subtitle: 'THE MIRROR SELF',
    tone: 'indigo',
    abstract: '赫卡忒不是别人，她是彼岸之我——她们之间没有距离，因为本来就是一体的两面。',
    content: '第一次在彼岸的倒影中看见赫卡忒时，弗洛洛以为是幻觉。那张脸太熟悉了——熟悉到令人恐惧。赫卡忒微笑，那笑容像裂开的冰面："你以为你是一个人吗？"原来从一开始，她就不曾真正独行。另一个自己，一直在彼岸等着她回来。',
  },
  {
    id: 'organization',
    index: '03',
    title: '残星',
    subtitle: 'REMNANT STAR',
    tone: 'slate',
    abstract: '残星会是她的落脚处，不是她的归宿。她会停留，也会利用，但从来没把自己真正交出去。',
    content: '加入残星会的那天，克里斯托弗问她："你打算在这里待多久？"她想了想，回答："待到我知道该去哪为止。"残星会给了她资源、情报，和一个暂时不用漂泊的理由。但彼岸的召唤从未停止。总有一天，她会离开。',
  },
  {
    id: 'beyond',
    index: '04',
    title: '彼岸',
    subtitle: 'BORDER OF DEATH',
    tone: 'onyx',
    abstract: '她亲手创造的失亡彼岸，是一个不愿醒来的空间——用碎片、誓言与回声砌成的永恒。',
    content: '彼岸并非一开始就存在。是她一点一点、用收集来的回忆碎片搭建起来的。每一段旋律、每一个诺言、每一滴未曾落下的眼泪——都是彼岸的砖石。她不知道这是创造还是逃避，但站在彼岸中央时，她终于感到了短暂的安宁。那里没有离别，因为一切都在回响。',
  },
  {
    id: 'wake',
    index: '05',
    title: '终曲',
    subtitle: 'THE FINAL MOVEMENT',
    tone: 'ember',
    abstract: '彼岸终曲响起之时，她是选择醒来——还是选择永远留在彼岸？',
    content: '曲终之时，天地俱寂。她站在彼岸的边界，一只脚踩在真实的土壤上，另一只脚还浸在虚无的旋律中。漂泊者的声音从很远的地方传来，像隔了一层水。是醒来的时候了吗？还是……这里才是真正的"醒"？她没有答案，但她终于愿意开始寻找。',
  },
] as const

export const RELATION_CHARACTERS: RcDetails[] = [
    {
        id: 'piaobo',
        name: '漂泊者',
        title: '旧识 / 失约者 / 未断牵引',
        tags: ['失约', '回返', '旧识', '执念'],
        description: '旧识、失约者、未断牵引与宿敌感，全都压在这一条线里。她见过漂泊者最真实的样子，也见过他最决绝的转身。那条线细得像蛛丝，却始终没断。',
    },
    {
        id: 'canxing',
        name: '残星会',
        title: '组织之线',
        tags: ['利用', '疏离', '归属'],
        description:
            '她会停留，也会利用，但从来没把自己真正交出去。残星会是她的落脚处，不是她的归宿。',
    },
    {
        id: 'keli',
        name: '克里斯托弗',
        title: '异路同僚',
        tags: ['警惕', '欣赏', '合作'],
        description:
            '一个让她警惕而部分欣赏的人，暂时合作，难言默契。他们都不是能同行到最后的人，但此刻的交集足够真实。',
    },
    {
        id: 'hekate',
        name: '赫卡忒',
        title: '镜像之线',
        tags: ['镜像', '彼岸之我', '特殊'],
        description: '最特殊的一条关系，因为那几乎不是别人，而是彼岸之我。她们之间没有距离，因为本来就是一体的两面。',
    },
] as const

