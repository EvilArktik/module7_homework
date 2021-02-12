/*    Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/


let object = {
    key1: "prop1",
    key2: "prop2",
    key3: "prop3"
};

let string = "key1";

//сама функция
function checkKeyInObj(object, string) {
    for (let key in object) {
        if (key == string) {
            return true;
        }
    }
    return false;
}

checkKeyInObj(object, string)
