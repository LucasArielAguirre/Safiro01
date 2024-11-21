export interface Agente {
  id: number;
  name: string;
  img: string;
  speedrun: boolean;
  stats?: [
    {
      id: number;
      nameaccount: string;
      img_agent: string;
      winandloss: string;
      kd: number;
      hs: number;
      winrate: number;
      hours: number;
      link: string;
    }
  ];
}

export const agentes: Agente[] = [
  {
    id: 1,
    name: "clove",
    img: "/clove.webp",
    speedrun: true,
    stats: [
      {
        id: 1,
        nameaccount: "Clove",
        img_agent: "/clove-select.webp",
        winandloss: "82W/100L",
        kd: 10,
        hs: 10,
        winrate: 10,
        hours: 10,
        link: "https://www.youtube.com/watch?v=jf_tCPfiAj4&list=PLr5KJK8LrPy7-ggIz-etDSNGum56axm2q"
      },
    ],
  },
  {
    id: 2,
    name: "Vyze",
    img: "/vyze.webp",
    speedrun: true,
    stats: [
      {
        id: 2,
        nameaccount: "vyze",
        img_agent: "/vyze-select.webp",
        winandloss: "82W/100L",
        kd: 10,
        hs: 10,
        winrate: 10,
        hours: 10,
        link: "https://www.youtube.com/watch?v=cS9CbZwZHw8&list=PLr5KJK8LrPy6B4k5ecak9Whe3P6C6nHBK&pp=iAQB"
      },
    ],
  },
  {
    id: 3,
    name: "Yoru",
    img: "/yoru.webp",
    speedrun: true,
    stats: [
      {
        id: 3,
        nameaccount: "yoru",
        img_agent: "/yoru-select.webp",
        winandloss: "82W/100L",
        kd: 10,
        hs: 10,
        winrate: 10,
        hours: 10,
        link: "https://www.youtube.com/watch?v=Qqe91a-GMpM&list=PLr5KJK8LrPy6GN0n6SCL4QRlcfd8_v1CW&pp=iAQB"
      },
    ],
  },
  {
    id: 4,
    name: "Iso",
    img: "/iso.webp",
    speedrun: true,
    stats: [
      {
        id: 4,
        nameaccount: "iso",
        img_agent: "/iso-select.webp",
        winandloss: "82W/100L",
        kd: 10,
        hs: 10,
        winrate: 10,
        hours: 10,
        link: "https://www.youtube.com/watch?v=OW6f4EvLSsc&list=PLr5KJK8LrPy6RZ50F9XzAserOwyoKcVdO"
      },
    ],
  },
  {
    id: 5,
    name: "Deadlock",
    img: "/deadlock.webp",
    speedrun: true,
    stats: [
      {
        id: 5,
        nameaccount: "deadlock",
        img_agent: "/deadlock-select.webp",
        winandloss: "82W/100L",
        kd: 10,
        hs: 10,
        winrate: 10,
        hours: 10,
        link: "https://www.youtube.com/watch?v=vQKf2fpdvt4&list=PLr5KJK8LrPy73In3F5ulaEIKRPyfXAeXf"
      },
    ],
  },
  {
    id: 6,
    name: "Jett",
    img:"/jett.webp",
    speedrun: false,
},
{
    id: 7,
    name: "Brimstone",
    img:"/brimstone.webp",
    speedrun: false,
},
{
    id: 8,
    name: "Breach",
    img:"/breach.webp",
    speedrun: false,
},
{
    id: 9,
    name: "Omen",
    img:"/omen.webp",
    speedrun: false,
},
{
    id: 10,
    name: "Sova",
    img:"/sova.webp",
    speedrun: false,
},

{
    id: 11,
    name: "Skye",
    img:"/skye.webp",
    speedrun: false,
},
{
    id: 12,
    name: "Fade",
    img:"/fade.webp",
    speedrun: false,
},{
    id: 13,
    name: "Cypher",
    img:"/cypher.webp",
    speedrun: false,
},
{
    id: 14,
    name: "Killjoy",
    img:"/brimstone.webp",
    speedrun: false,
},
{
    id: 15,
    name: "Gekko",
    img:"/gekko.webp",
    speedrun: false,
},
{
    id: 16,
    name: "Phoenix",
    img:"/phoenix.webp",
    speedrun: false,
},
{
    id: 17,
    name: "Sage",
    img:"/sage.webp",
    speedrun: false,
},
{
    id: 18,
    name: "Viper",
    img:"/viper.webp",
    speedrun: false,
},
{
    id: 19,
    name: "Raze",
    img:"/raze.webp",
    speedrun: false,
},
{
    id: 20,
    name: "Kayo",
    img:"/kayo.webp",
    speedrun: false,
},
{
    id: 21,
    name: "Astra",
    img:"/astra.webp",
    speedrun: false,
},
{
    id: 22,
    name: "Chamber",
    img:"/chamber.webp",
    speedrun: false,
},
{
    id: 23,
    name: "Harbor",
    img:"/harbor.webp",
    speedrun: false,
},
{
    id: 24,
    name: "Neon",
    img:"/neon.webp",
    speedrun: false,
},
{
    id: 25,
    name: "Reyna",
    img:"/reyna.webp",
    speedrun: false,
},
];
