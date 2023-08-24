import product1 from "../../../../assets/images/products/1.jpg"
import product2 from "../../../../assets/images/products/2.jpg"
import product9 from "../../../../assets/images/products/9.jpg"
import product4 from "../../../../assets/images/products/4.jpg"
import product6 from "../../../../assets/images/products/6.jpg"

export interface CartDataItem {
    pic: string,
    title: string
    items: string
    price: string
    subprice: string
}

export const cartData: CartDataItem[] = [
    {
        pic: product1,
        title: "Flower Pot",
        items: "1",
        price: "$ 122.21",
        subprice: "$ 122.21"
    },
    {
        pic: product2,
        title: "Office Chair",
        items: "2",
        price: "$ 20.63",
        subprice: "$ 41.26"
    },
    {
        pic: product9,
        title: "Bracelet",
        items: "1",
        price: "$ 40.63",
        subprice: "$ 40.63"
    },
    {
        pic: product4,
        title: "Cup",
        items: "1",
        price: "$ 60.63",
        subprice: "$ 60.63"
    },
    {
        pic: product6,
        title: "Headset",
        items: "1",
        price: "$ 63,830.43",
        subprice: "$45,530.43"
    },

]