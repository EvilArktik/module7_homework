/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался выше. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)

Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
 */

function ElectricalAppliance() {
    this.nomination = "Электроприбор";
}

ElectricalAppliance.prototype.plugIn = function () {
    console.log(`Прибор включен в розетку`);
}

ElectricalAppliance.prototype.unPlug = function () {
    console.log(`Прибор выключен из розетки`);
}


function Mixer(brand, speed, color, price, voltage, power) {
    this.voltage = voltage,
        this.color = color,
        this.price = price,
        this.brand = brand,
        this.speed = speed,
        this.power = power
}

Mixer.prototype = new ElectricalAppliance();

Mixer.prototype.mixFood = function () {
    console.log("Mixing done")
}

Mixer.prototype.display = function () {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - миксер ${this.brand}: скорость вращения ${this.speed} об/мин, потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}р.`);
}


function WashingMachine(brand, volume, color, price, voltage, power) {
    this.power = power,
        this.color = color,
        this.price = price,
        this.brand = brand,
        this.volume = volume,
        this.voltage = voltage
}

WashingMachine.prototype = new ElectricalAppliance();

WashingMachine.prototype.washClothes = function () {
    console.log("Washing done")
}

WashingMachine.prototype.display = function () {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - стиральная машина ${this.brand}: Объём ${this.volume} литров, потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}р.`);
}


const mixerBosh = new Mixer("Bosh", 1600, "Green", 5000, 100, 2);
const mixerLg = new Mixer("LG", 1600, "Black", 4800, 120, 1.5);

const washerBosh = new WashingMachine("Bosh", 60, "Green", 15000, 100, 5);
const washerLg = new WashingMachine("LG", 55, "Black", 14000, 120, 5);

console.log(mixerBosh.display())
console.log(mixerLg.display())
console.log(washerBosh.display())
console.log(washerLg.display())
