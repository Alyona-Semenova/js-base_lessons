//! ЗАДАНИЕ 1

for (let number = 0; number < 101; number++) {
  let even = number % 2;

  if (number === 0) {
    console.log(number + " Это ноль");
  } else {
    switch (even) {
      case 0:
        console.log(number + " Четное число");
        break;
      case 1:
        console.log(number + " Нетное число");
        break;
      default:
        console.log(number + " - Не число");
    }
  }
}

//! ЗАДАНИЕ 2

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//! ЗАДАНИЕ 3

const products1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products1.forEach((product) => {
  console.log(product.price - (product.price / 100) * 15);
});

//! ЗАДАНИЕ 4

const products2 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];
//Товары, у которых есть фотографии
const result = products2.filter(
  (product) => product.photos && product.photos != 0
);
console.log(result);

// Сортировка товаров от низкой цены до высокой
products2.sort((a, b) => a.price - b.price);
console.log(products2);

//! ЗАДАНИЕ 5

// Вывести с помощью цикла for числа от 0 до 9,
// НЕ используя тело цикла

for (let i = 0; console.log(i), i++ < 9; ) {}

//! ЗАДАНИЕ 6

// Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i <= 20; i++) {
  let str = "x";
  console.log(str.repeat(i));
}
