const circle1 = {
    radius: 5,
    getArea() {
        // Исправлено: добавлен this
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        // Исправлено: добавлен this
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        // Исправлено: добавлен this
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        // Здесь this уже был, все верно
        return 2 * Math.PI * this.radius;
    }
};

// Пример вывода:
console.log(`circle1 площадь: ${circle1.getArea().toFixed(2)}`);
console.log(`circle1 периметр: ${circle1.getPerimeter().toFixed(2)}`);

console.log(`circle2 площадь: ${circle2.getArea().toFixed(2)}`);
console.log(`circle2 периметр: ${circle2.getPerimeter().toFixed(2)}`);