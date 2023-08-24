import product7 from "../../../../assets/images/products/7.jpg";
import product1 from "../../../../assets/images/products/1.jpg";
import product9 from "../../../../assets/images/products/9.jpg";
import product2 from "../../../../assets/images/products/2.jpg";
import product4 from "../../../../assets/images/products/4.jpg";
import product8 from "../../../../assets/images/products/8.jpg";
import product3 from "../../../../assets/images/products/3.jpg";
import product5 from "../../../../assets/images/products/5.jpg";

export interface productDatastate {
    id: string | Number
    subprice?: string
    pic: string
    item: string,
    title: string
    discount: string
    price: string
    items: string
    prisubce?: string
    prsubice?: string
}

export const PODUCTDATA: productDatastate[] = [
  {
    id:"1",
    subprice: "$974",
    pic: product7,
    item: "48",
    title: "Flower Pot",
    discount: "$750",
    price: "$974",
    items:"1"
  },
  {
    id:"2",
    subprice: "$986",
    pic: product1,
    item: "32",
    title: "Flower Pot",
    discount: "$1,457",
    price: "$986",
    items:"1",
  },
  {
    id:"3",
    prisubce: "$12,724",
    pic: product9,
    item: "64",
    items:"1",
    title: "Bracelet",
    discount: "$18,967",
    price: "$12,724",
  },
  {
    id:"4",
    subprice: "$538",
    pic: product2,
    item: "14",
    items:"1",
    title: "Office Chair",
    discount: "$720",
    price: "$538",
  },
  {
    id:"5",
    subprice: "$938",
    pic: product4,
    item: "22",
    title: "cup",
    items:"1",
    discount: "$1,285",
    price: "$938",
  },
  {
    id:"6",
    prsubice: "$1,346",
    pic: product8,
    item: "25",
    items:"1",
    title: "Headset",
    discount: "$1,678",
    price: "$1,346",
  },
  {
    id:"7",
    prsubice: "$1,967",
    pic: product3,
    item: "23",
    items:"1",
    title: "Earphones",
    discount: "$2,498",
    price: "$1,967",
  },
  {
    id:"8",
    prsubice: "$1,489",
    pic: product5,
    item: "26",
    title: "Stool",
    items:"1",
    discount: "$2,678",
    price: "$1,489",
  },
];
