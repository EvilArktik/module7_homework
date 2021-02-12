/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/


const obj1 = {
    prop1: "1",
    prop2: "2",
    prop5: "5"
};

const obj2 = Object.create(obj1);

obj2.prop3 = "3";
obj2.prop4 = "4";

// Вот сама функция

function getOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key], key);
        }
    }
}

getOwnProp(obj2);

