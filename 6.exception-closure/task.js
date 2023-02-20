// задача 1

function parseCount(num) {
    if (isNaN(Number.parseFloat(num))) {
      throw new Error("Невалидное значение");
    }
    return Number.parseFloat(num);
  }
  
  function validateCount(num) {
    try {
      return parseCount(num);
    } catch (error) {
      return error;
    }
  }

  // задача 2

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    get perimeter() {
      return this.a + this.b + this.c;
    }
    get area() {
      let p = 0.5 * this.perimeter;
      return +((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  
  }