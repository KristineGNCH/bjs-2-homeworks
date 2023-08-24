﻿// Задача 1. Форматтер чисел

function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}


function validateCount(value) {
    try {
        return parseCount(value)
    } catch (error) {
        return error;
    }
}

// Задача 2. Треугольник 

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.validateTriangle();
    }

    validateTriangle() {
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        };
    }
}


