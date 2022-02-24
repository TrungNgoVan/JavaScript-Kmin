//Begin Min Shop version 1:
function Book(name, code, price) {
    this.nameBook = name,
        this.codeBook = code,
        this.priceBook = price;
    return { nameBook, codeBook, priceBook };
}
let listBooks = [
    Book('Clean Code', 'AA2', 140000),
    Book('The Clean Coder', 'AB1', 180000),
    Book('Code Complete', 'AC4', 130000),
    Book('The Mythical Man-month', 'AA1', 270000),
    Book('The Pragmatic Programmer', 'AD3', 90000)
];
// idea a
function checkPrice(a, b) {
    let resultListBook = [];
    for (let i = 0; i < listBooks.length; i++) {
        if (listBooks[i].priceBook >= a && listBooks[i].priceBook <= b) {
            resultListBook.push(listBooks[i]);
        }
    }
    return resultListBook;
}
console.log('Check Price')
let a = 120000, b = 200000; // Set price check
console.log(checkPrice(a, b));
// idea b
function checkName(val) {
    let resultListBook = [];
    for (let i = 0; i < listBooks.length; i++) {
        if (listBooks[i].nameBook.indexOf(val) != -1) {
            resultListBook.push(listBooks[i]);
        }
    }
    return resultListBook;
}
console.log('Check Name = "Code" ')
console.log(checkName('Code'))
// idea c
function sortListBook() {
    for (let i = 0; i < listBooks.length; i++) {
        for (let j = i; j < listBooks.length; j++) {
            let temp;
            if (listBooks[i].priceBook > listBooks[j].priceBook) {
                temp = listBooks[i];
                listBooks[i] = listBooks[j];
                listBooks[j] = temp;
            }
        }
    }
}
sortListBook();
console.log('Check Sort')
console.log(listBooks);

// idea d
console.log('Check max')
console.log(listBooks[listBooks.length - 1]);

// End Min Shop version 1
// Begin Min Shop version 2
function Address(commune, district, province) {
    this.communeClient = commune,
        this.districtClient = district,
        this.provinceClient = province;
    return { communeClient, districtClient, provinceClient }
}
function Order(code, name, address, listBook) {
    this.codeOrder = code,
        this.nameClient = name,
        this.addressClient = address,
        this.Books = listBook;
    return { codeOrder, nameClient, addressClient, Books }
}
let listOrder = [
    Order('123', 'Trung Ngo', Address('Eatoh', 'Krong Nang', 'Dak Lak'), [listBooks[0], listBooks[1]]),
    Order('124', 'Le Dat', Address('Eatan', 'Krong Nang', 'Dak Lak'), [listBooks[2]]),
    Order('125', 'Minh Vu', Address('Tan Phuon', 'Quan 5', 'ho Chi Minh'), [listBooks[1], listBooks[2], listBooks[3]])
]
console.log('Check list order')
console.log(listOrder);

let x = 2; // set amount x order
//idea a
function checkQuantity(x) {
    let result = [];
    for (let i = 0; i < listOrder.length; i++) {
        if (listOrder[i].Books.length >= x) {
            result.push(listOrder[i]);
        }
    }
    return result;
}
console.log('Check quantity')
console.log(checkQuantity(x))
// idea b

function totalSold() {
    let resultSum = 0;
    for (let i = 0; i < listOrder.length; i++) {
        resultSum += listOrder[i].Books.length;
    }
    return resultSum;
}
console.log('Check total sold')
console.log(totalSold())
// idea c
function totalRevenue() {
    let resultSum = 0;
    for (let i = 0; i < listOrder.length; i++) {
        for (let j = 0; j < listOrder[i].Books.length; j++) {
            resultSum += listOrder[i].Books[j].priceBook;
        }
    }
    return resultSum;
}
console.log('Check total revenue');
console.log(totalRevenue())
// End Min Shop version 2
