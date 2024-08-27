//? 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

//? 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. (Используйте reverse)

// let arr = [1, 2, 3];
// console.log(arr.reverse());

//? 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. (методы push, unshift)

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//? 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//? 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. (методы shift pop)

// let arr = ["js", "css", "jq"];
// let res = arr.shift();
// console.log(res);

//? 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ["js", "css", "jq"];
// let res = arr.pop();
// console.log(res);

//? 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].  (метод splice)

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//? 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(1, 3);
// console.log(res);

//? 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

//? 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);

//? 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. (метод slice)

// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(0, 3);
// console.log(arr);

//? 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr = arr.slice(3);
// console.log(arr);

//? 13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. (Object.keys)

// let obj = {
//   js: "test",
//   jq: "hello",
//   css: "world",
// };

// console.log(Object.keys(obj));

//? 14. У вас есть 5 чисел. Найдите наибольшее и наименьшее из них.

// let arr = [1, 2, 3, 4, 5];
// let res = arr.sort((a, b) => a - b);
// console.log(res[0]);

// let arr1 = [1, 2, 3, 4, 5];
// let res1 = arr.sort((a, b) => a - b);
// console.log(res1[arr.length - 1]);

//? 15. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] одной командой.

// let arr = [1, 2, 3];
// console.log(arr.reverse());

//? 16. Напишите код, который отсортирует массив объектов litmir по значению свойства title.

// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// litmir.sort((a, b) => a.title - b.title);
// console.log(litmir);

// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// litmir.sort((a, b) => {
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// });

// console.log(litmir);
