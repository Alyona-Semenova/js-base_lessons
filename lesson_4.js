// Задание 1.1
// Сделайте в стиле es5, а затем в стиле es6 конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

//в стиле es5

"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100) * 25; // уменьшаем цену на 25%
    }
}


const product1 = new Product("product1", 100);
product1.make25PercentDiscount();

console.log(product1); // {name: 'product1', price: 75}

//в стиле es6

("use strict");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100) * 25; // уменьшаем цену на 25%
    }
}

const product2 = new Product("product2", 100);
product2.make25PercentDiscount();

console.log(product2); // {name: 'product2', price: 75}


// Задание 1.2
// Сделайте в стиле es5, а затем в стиле es6 
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.


//в стиле es5

"use strict"

function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date); // инициализируем свойства с помощью конструктора Post, чтобы не дублировать код
    this.highlighted = false;

}

AttachedPost.prototype = Object.create(Post.prototype); //Наследуем методы из Post

AttachedPost.prototype.makeTextHighlighted = function () { // Добавляем новый метод в AttachedPost
    this.highlighted = true;
}


//в стиле es6

"use strict"

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}


class AttachedPost {
    constructor(author, text, date) {
        Post.call(this, author, text, date); // инициализируем свойства с помощью конструктора Post, чтобы не дублировать код
        this.highlighted = false;

    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

AttachedPost.prototype = Object.create(Post.prototype); //Наследуем методы из Post
