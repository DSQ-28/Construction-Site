let market = [
    {
        name : 'Galaxy Bar',
        price : 1.25,
        description : 'A delicious and indulgent treat that can be enjoyed as part of a balanced diet and healthy lifestyle, lovingly created to melt in your mouth.',
        inStock : false,
        idOf : 1,
    },
    {
        name : 'Cotton Candy Grapes',
        price : 3.00,
        description : 'A fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis',
        inStock : true,
        idOf : 2,
    },
    {
        name : 'Granny Smith Apples',
        price : 2.49,
        description : 'A round fruit with red or green skin and a whitish inside.',
        inStock : false,
        idOf : 3,
    },
    {
        name : 'Free Range Eggs',
        price : 2.25,
        description : 'A food product produced from poultry that is used as both an ingredient and a main dish for baked foods.',
        inStock : false,
        idOf : 4,
    },
    {
        name : 'Bird\'s Custard',
        price : 0.80,
        description : 'A rich, creamy culinary preparation made with cream and eggs, or other ingredients with similar properties.',
        inStock : true,
        idOf : 5,
    },
    {
        name : 'KTC Vegetable Oil',
        price : 2.65,
        description : 'A mild, odorless, flavorless, light-colored cooking oil that is good for cooking, frying and for making salad dressings. ',
        inStock : true,
        idOf : 6,
    },
    {
        name : 'John West Tuna',
        price : 1.75,
        description : 'A saltwater fish related to mackerel which can be eaten fresh - either raw or cooked',
        inStock : true,
        idOf: 7,
    }
];

let aCart = [];

function addItemToCart(itmID, x=1) {
    let product = market.find((itm) => itm.idOf === itmID);
    if (product == undefined) {
        console.log('Error enter valid product ID')
    }; 

    let copy = {
        name: product.name,
        price: product.price,
        quantity: x,
    };

    if (aCart.find((itm) => itm.name === product.name)) {
        let cartId = aCart.findIndex((itm) => itm.name === product.name);
        aCart[cartId].quantity += x;
    } else {
        aCart.push(copy);
    };
};

function removeItemFromCart(itmID, x=1) {
    let product = market.find((itm) => itm.idOf === itmID);
    if (product == undefined) {
        console.log('Error: Enter valid product ID')
    }else if (aCart.find((itm) => itm.name === product.name)) {
        let cartId = aCart.findIndex((itm) => itm.name === product.name);
        aCart[cartId].quantity -= x;
        if (aCart[cartId].quantity <= 0) {
            aCart.splice(cartId,1);
        }
    } else {
        console.log('This item is not in your cart.')
    } 
    
}

function basketSum() {
    aCart.forEach(element => {
        console.log(`${element.name},
        ${element.price},
        ${element.quantity},
        ${(element.quantity * element.price).toFixed(2)}`)
    });
    let totalPrice = aCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log('Your total is £' + totalPrice.toFixed(2)); //toFixed(2) ensures two decimal places
}

addItemToCart(3, 2);
addItemToCart(1, 5);
addItemToCart(6, 2);
addItemToCart(2, 4);

addItemToCart(6, 1);

basketSum();


console.log(aCart);

