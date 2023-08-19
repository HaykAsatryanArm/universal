import productImg from "./../Assets/Img/Home/Product.png"
import productBlueImg from "./../Assets/Img/Home/ProductBlue.png"
import productRoll from "./../Assets/Img/Home/ProductRoll.png"

const products = [

    // bint

    {
        id: 1,
        img: productImg,
        name: "բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)",
        sizes: [
            {
                width: "16սմ",
                height: "10մ",
            },
            {
                width: "14սմ",
                height: "7մ",
            },
            {
                width: "10սմ",
                height: "5մ",
            },
        ],
        text: "Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
        category: "bint",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 2,
        img: productImg,
        name: "բժշկական ԲԻՆՏ ոչ ՍՏԵՐԻԼ",
        sizes: [
            {
                width: "16սմ",
                height: "10մ",
            },
            {
                width: "14սմ",
                height: "7մ",
            },
            {
                width: "10սմ",
                height: "5մ",
            },
        ],
        category: "bint",
    },

    // tanziff

    {
        id: 3,
        img: productBlueImg,
        name: "բժշկական թանզիֆ ոչ ՍՏԵՐԻԼ",
        sizes: [
            {
                width: "90սմ",
                height: "3մ",
            },
            {
                width: "90սմ",
                height: "5մ",
            },
            {
                width: "90սմ",
                height: "10մ",
            },
        ],
        category: "tanziff",
    },

    // napkins

    {
        id: 4,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ ",
        size: {
            width: "10սմ",
            height: "10սմ",
        },
        layers: "12շերտ",
        category: "napkin",
        count: "100հատ",
    },

    {
        id: 5,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ ",
        size: {
            width: "10սմ",
            height: "10սմ",
        },
        layers: "8շերտ",
        category: "napkin",
        count: "100հատ",
    },
    {
        id: 6,
        img: productImg,
        name: "բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ) ",
        size: {
            width: "10սմ",
            height: "10սմ",
        },
        layers: "12շերտ",
        count: "5հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 7,
        img: productImg,
        name: "բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ) ",
        size: {
            width: "10սմ",
            height: "10սմ",
        },
        layers: "8շերտ",
        count: "5հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 8,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ",
        size: {
            width: "7.5սմ",
            height: "7.5սմ",
        },
        layers: "12շերտ",
        category: "napkin",
        count: "100հատ",
    },
    {
        id: 9,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ",
        size: {
            width: "7.5սմ",
            height: "7.5սմ",
        },
        layers: "8շերտ",
        category: "napkin",
        count: "100հատ",
    },
    {
        id: 10,
        img: productImg,
        name: "բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "7.5սմ",
            height: "7.5սմ",
        },
        layers: "12շերտ",
        count: "10հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 11,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "7.5սմ",
            height: "7.5սմ",
        },
        layers: "8շերտ",
        category: "napkin",
        count: "10հատ",
    },
    {
        id: 12,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ",
        size: {
            width: "5սմ",
            height: "5սմ",
        },
        layers: "12շերտ",
        category: "napkin",
        count: "100հատ",
    },
    {
        id: 13,
        img: productImg,
        name: "բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ ",
        size: {
            width: "5սմ",
            height: "5սմ",
        },
        layers: "8շերտ",
        category: "napkin",
        count: "100հատ",
    },
    {
        id: 14,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "5սմ",
            height: "5սմ",
        },
        layers: "12շերտ",
        count: "10հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 15,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "5սմ",
            height: "5սմ",
        },
        layers: "8շերտ",
        count: "10հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 16,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ",
        size: {
            width: "16սմ",
            height: "14սմ",
        },
        layers: "2շերտ",
        count: "10հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 17,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "16սմ",
            height: "14սմ",
        },
        layers: "2շերտ",
        count: "10հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 18,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ ",
        size: {
            width: "45սմ",
            height: "29սմ",
        },
        layers: "2շերտ",
        count: "5հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },
    {
        id: 19,
        img: productImg,
        name: "բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)",
        size: {
            width: "45սմ",
            height: "29սմ",
        },
        layers: "2շերտ",
        count: "5հատ",
        category: "napkin",
        type: "ՍՏԵՐԻԼ"
    },

    // rolls

    {
        id: 20,
        img: productRoll,
        name: "բժշկական թանզիֆ ոչ ՍՏԵՐԻԼ",
        sizes: [
            {
                width: "90սմ",
                height: "1000մ",
            },
            {
                width: "90սմ",
                height: "2000մ",
            },
            {
                width: "120սմ",
                height: "2000մ",
            },
        ],
        category: "roll",
    },

]

export default products