import cream from "../assets/cream.jpeg";
import roller from "../assets/abstract.jpeg";
import faceMask from "../assets/faceMask.jpeg";

const productsArr = [
    {
        src: cream,
        name: "Natural acne control oil balm",
        skinType: "All skin types",
        price: "NGN7,500",
    },
    {
        src: roller,
        name: "Original skin sculpting roller",
        skinType: "All skin types",
        price: "NGN7,500",
    },
    {
        src: faceMask,
        name: "Vitamin C brightening face mask",
        skinType: "All skin types",
        price: "NGN7,500",
    },
];

function repeatArr(arr: any[], times: number) {
    let newArr = arr;
    for (let i = 0; i < times - 1; i++) {
        newArr = newArr.concat(arr);
    }
    return newArr;
}

export const repeatedProductsArr = repeatArr(productsArr, 3);

export default productsArr;
