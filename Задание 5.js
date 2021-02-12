/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
 */


class ElectricalAppliance {
    constructor() {
        this.nomination = "Электроприбор";
    }

    plugIn() {
        console.log(`${this.brand} включен в розетку`);
    }

    unPlug() {
        console.log(`${this.brand} выключен из розетки`);
    }
}


class Mixer extends ElectricalAppliance {
    constructor(brand, speed, color, price, voltage, power) {
        super();
        this.voltage = voltage,
            this.color = color,
            this.price = price,
            this.brand = brand,
            this.speed = speed,
            this.power = power
    }


    mixFood(){
        console.log("Mixing done");
    }
    display(){
        this.energyConsumption = this.voltage * this.power;
        console.log(`${this.nomination} - миксер ${this.brand}: скорость вращения ${this.speed} об/мин, потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}р.`);
    }
}

class WashingMachine extends ElectricalAppliance {
    constructor(brand, volume, color, price, voltage, power) {
        super();
        this.power = power,
            this.color = color,
            this.price = price,
            this.brand = brand,
            this.volume = volume,
            this.voltage = voltage
    }

    washClothes() {
        console.log("Washing done")
    }

    display() {
        this.energyConsumption = this.voltage * this.power;
        console.log(`${this.nomination} - стиральная машина ${this.brand}: Объём ${this.volume} литров, потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}р.`);
    }
}

const mixerBosh = new Mixer("Bosh", 1600, "Green", 5000, 100, 2);
const mixerLg = new Mixer("LG", 1600, "Black", 4800, 120, 1.5);

const washerBosh = new WashingMachine("Bosh", 60, "Green", 15000, 100, 5);
const washerLg = new WashingMachine("LG", 55, "Black", 14000, 120, 5);

console.log(mixerBosh.display())
console.log(mixerLg.display())
console.log(washerBosh.display())
console.log(washerLg.display())
