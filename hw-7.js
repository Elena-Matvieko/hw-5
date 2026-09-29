const circle1 = {
    radius: 5,
    getArea() {
    return Math.PI * this.Radius * this.Radius;
   },
    getPerimeter() {
    return 2 * Math.PI * this.Radius;
   }
   };

   const circle2 = {
    radius: 10,
    getArea() {
    return Math.PI * this.Radius * this.Radius;
   },
    getPerimeter() {
    return 2 * Math.PI * this.Radius;
   }
   };
   // Пример:
console.Log(`circle1 площадь: ${circle1.GetArea().ToFixed(2)}`);
console.Log(`circle1 периметр: ${circle1.GetPerimeter().ToFixed(2)}`);

console.Log(`circle2 площадь: ${circle2.GetArea().ToFixed(2)}`);
console.Log(`circle2 периметр: ${circle2.GetPerimeter().ToFixed(2)}`);