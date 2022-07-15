let firstId = 0;
const getID = () => {
    firstId += 1;
    return `${firstId}`
}
/*
* ITEM
* {
*
* name: t-shirt | string,
* price: 50 | init,
* type: accessories | string,
* gender: man
* id: id
* mainFoto : link to your image
* fotos: [ link to your image , link to your image , link to your image, ] whithout main image
*
* }
*
* */


const initialState = {
    products : {
        accessories : {
            man: [
                {
                ID: getID(),
                color: "Gold",
                size: "XL",
                name: "chain",
                price: 200,
                gender: "man",
                type: "accessories",
                description : "",
                    mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                    fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
                },
                {
                    ID: getID(),
                    gender: "man",
                    type: "accessories",
                    name: "bracelet",
                    description: "",
                    price: 25,
                    mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                    fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"] },

            ],
            woman : [
                {
                    ID: getID(),
                    gender: "woman",
                    type: "accessories",
                    name: "bracelet (woman)",
                    price: 30,
                    description : "",
                    mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                    fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
                },
              {
                ID: getID(),
                gender: "woman",
                type: "accessories",
                name: "bracelet (woman)",
                price: 30,
                description : "",
                mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
            },
                {
                    ID: getID(),
                    gender: "woman",
                    type: "accessories",
                    name: "bracelet (woman) - 2",
                    price: 30,
                    description : "",
                    mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                    fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]  },
                {
                    ID: getID(),
                    gender: "woman",
                    type: "accessories",
                    name: "bracelet (woman) - 3",
                    price: 30,
                    description : "",
                    mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                    fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]    },],
            kids: [],
        },
        bags : {
            man: [{
                ID: getID(),
                gender: "man",
                type: "bags",
                name: "Bag",
                price: 30,
                description : "",
                mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
            },],
            woman : [],
            kids: [],
        },
        denim : {
            man: [{
                ID: getID(),
                gender: "man",
                type: "denim",
                name: "denim",
                price: 30,
                description : "",
                mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
            },],
            woman : [],
            kids: [],
        },
        "t-shirts" : {
            man: [{
                ID: getID(),
                gender: "man",
                type: "t-shirts",
                name: "T-shirt",
                price: 30,
                description : "",
                mainFoto: "https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/main.webp",
                fotos: ["https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView2.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/2.5mmFranco_5mmCubanGoldView3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold3.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGold5.webp","https://raw.githubusercontent.com/Tony-Milukov/React-Shop/main/my-app/src/productImages/%231/CubanFrancoGoldBoxed.webp"]
            },],
            woman : [],
            kids: [],
        }
    }


}
export const productsReducer = (state = initialState, action) => {
    // let item
    // Object.keys(state).map(type => Object.keys(state[type]).map(gender => Object.keys(state[type][gender]).map(item => state[type][gender][item].map(i => {
    //    let index =  state[type][gender][item].findIndex(imtes => imtes == i);
    //     state[type][gender][item][index].name.toLowerCase();
    // }))))
    switch (action.type) {
        default:
            return state
    }
}