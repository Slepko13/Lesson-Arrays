function getShoppingList() {
    let shoppingList = [{
        name: "Apple",
        quantity: 5,
        status: 0
    }, {
        name: "Orange",
        quantity: 5,
        status: 0
    }, {
        name: "Beer",
        quantity: 5,
        status: 0
    }, ];

    shoppingList.sort((a, b) => {
        return b.status - a.status
    });

    console.log(shoppingList);
    displayBoughtNotBought(shoppingList);
    addNewItem(shoppingList);
    displayBoughtNotBought(shoppingList);
    console.log(shoppingList);
    let changeStatusValue;

    while (true) {
        changeStatusValue = prompt(`Input name of product(bought)`);
        if (changeStatusValue == null) break;
        addToBought(changeStatusValue);

    }

    displayBoughtNotBought(shoppingList);
    console.log(shoppingList);

    function displayBoughtNotBought(array) {

        let bought = "";
        let notBought = "";
        for (let i = 0; i < (array.length); i++) {
            if (array[i].status == 1) {
                bought = `${bought}  ${array[i].name}`
            } else {
                notBought = `${notBought} ${array[i].name}`
            }

        }
        alert(` Not bought are : ${notBought}
        Bought are : ${bought}       
       `);
    }

    function addNewItem(array) {

        while (true) {
            let productName = prompt(`Add your product`);
            let productQuantity = +prompt(`Input quantity of product`);
            let count = 0;
            let position;

            for (let i = 0; i < array.length; i++) {

                if (productName == array[i].name) {
                    count++;
                    position = i;
                }
            }
            if (count) {
                array[position].quantity += productQuantity;

            } else {
                array[array.length] = {
                    name: productName,
                    quantity: productQuantity,
                    status: 0
                };
            }



            let addMore = prompt(`Do you want add one more product?`);
            if (addMore == null) {
                return array;
            }

        }

    }

    function addToBought(value) {
        let count = 0;
        for (let i = 0; i < shoppingList.length; i++) {
            if (value == shoppingList[i].name) {
                shoppingList[i].status = 1;
                count = 1
            }
        }
        if (!count) {
            alert(`Your have not such product in your shopping list`);
        }
    }



}


//Shopping check
function shoppingCheck() {

    let shoppingCheck = [{
            name: "Bronze",
            quantity: 5,
            price: 5
        }, {
            name: "Silver",
            quantity: 5,
            price: 7
        },
        {
            name: "Gold",
            quantity: 3,
            price: 9
        }, {
            name: "Diamond",
            quantity: 2,
            price: 21
        }
    ];
    printShoppingCheck(shoppingCheck);
    getTotalPrice(shoppingCheck);
    getMostExpensiveItem(shoppingCheck);
    getMiddleItemPrice(shoppingCheck);

    function printShoppingCheck(array) {
        console.log(array);
    }

    function getTotalPrice(array) {
        let totalPrice = 0;
        for (let i = 0; i < array.length; i++) {
            totalPrice += array[i].price;
        }
        console.log(`Total price is ${totalPrice}`);
    }

    function getMostExpensiveItem(array) {
        let mostExpensiveItem = 0;
        let count;
        for (let i = 0; i < array.length; i++) {
            if (array[i].price > mostExpensiveItem) {
                mostExpensiveItem = array[i].price;
                count = i;
            }
        }
        console.log(`Most expensive item is "${array[count].name}" with price  ${array[count].price}`);
    }

    function getMiddleItemPrice(array) {
        let totalPrice = 0;
        let totalQuantity = 0;
        for (let i = 0; i < array.length; i++) {
            totalPrice += (array[i].price * array[i].quantity);
            totalQuantity += array[i].quantity;
        }
        console.log(`Middle price of item is ${totalPrice / totalQuantity}`);
    }

}


// CSS styles

function getStyledText() {
    let myStyle = [{
        color: "red"
    }, {
        'font-size': "32px"
    }, {
        border: "solid 2px blue"
    }, {
        'text-decoration': "underline"
    }]

    getMessage();

    function getMessage() {
        document.write(`<p  style = "color : ${myStyle[0].color}; font-size : ${myStyle[1]['font-size']};">Hello</p>`);
    }
}

//Auditory 
function getAuditory() {
    let academy = [{
        name: "A",
        capacity: 12,
        faculty: "Geo"
    }, {
        name: "B",
        capacity: 18,
        faculty: "Oil"
    }, {
        name: "E",
        capacity: 12,
        faculty: "Gaz"
    }, {
        name: "D",
        capacity: 16,
        faculty: "Geo"
    }, {
        name: "C",
        capacity: 19,
        faculty: "Gaz"
    }];

    //Unblock function for result

    getAllAuditory(academy);
    //getFacultyAuditory(academy);
    //getGroupAuditory(academy);
    //getSortByCapacity(academy);
    //getSortByName(academy);

    function getAllAuditory(array) {
        console.log(array);
    }

    function getFacultyAuditory(array) {
        let userFaculty = prompt(`Choose faculty: Geo, Oil or Gaz`);
        let faculty = array.filter(item => item.faculty == userFaculty)
        console.log(faculty);
    }

    function getGroupAuditory(array) {
        let group = {};
        group.name = "Students";
        group.capacity = +prompt(`Input group capacity from 10 to 20`);
        group.faculty = prompt(`Input group faculty: Geo, Oil or Gaz`);
        let result = array.filter(item => (item.capacity >= group.capacity && item.faculty == group.faculty));
        console.log(group);
        console.log(result);
    }

    function getSortByCapacity(array) {
        let resultCapacity = array.sort((a, b) => {
            return a.capacity - b.capacity;
        });
        console.log(resultCapacity);
    }

    function getSortByName(array) {
        let resultName = array.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        });
        console.log(resultName);
    }
}