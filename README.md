# Install:
1. Install node.js > tutorial (https://www.youtube.com/watch?v=qYwLOXjAiwM)
2. Download this project
3. Open it with php.storm or other code editor.
4. Open terminal in code editor
5. Write **cd my-app** to go to the my-app directory;
6. Write **npm install** to install the node-modules
7. Write **npm start**
8. Go to browser into localhost:300



# Technologies used in this project:

    1. React native
    2. React redux
    3. React-router-dom
    4. MUI

# Products
    Object with all products located in 
        my-app => src => store => products => reducer.js

## Products structure
    products : {
            accessories : { 
                man: [],
                woman : [],
                kids: [],
            },
            bags : {
                man: [],
                woman : [],
                kids: [],
            },
            denim : {
                man: [],
                woman : [],
                kids: [],
            },
            "t-shirts" : {
                man: [],
                woman : [],
                kids: [],
            }
        }
    }


## Product structure
    {

        name: t-shirt | string,
        price: 50 | init,
        type: accessories | string,
        gender: man / woman | string
        id: id
        mainFoto : link to your image
        fotos: [ link to your image , link to your image]

    }
# Cart
    Object with all products located in 
        my-app => src => store => cart => reducer.js

## Cart structure
    [

        {CartItem},
        {CartItem},
        {CartItem},
        {CartItem},

    ]

## CartItem structure
    {

        ID: string
        name: string
        gender: string
        type: string
        price: string
        count: int
        image: mainImageLink | string

    }


