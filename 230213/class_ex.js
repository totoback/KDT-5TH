//class ex 대문자시작
//Shape
class Shape{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

//Rectangle
//extends 상속 선언
class Rectangle extends Shape{
  constructor(width, height){
    super(width, height); //super로 그대로 받는다.
  }
  //메소드 오버라이딩
  // getArea() {
  //   return sper.getArea();
  // }
}

//Triangle
class Triangle extends Shape{
  constructor(width, height){
    super(width, height);
  }
  getArea(){
    return this.width * this.height / 2;
  }
}

//Circle
//상속 안함
 class Circle extends Shape{
  constructor(radius){
    super(); //super반드시 넣어줘야 한다.
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * 3.14;
  }
 }

 const rec = new Rectangle(10,10);
 const tri = new Triangle(10, 10);
 const cir = new Circle(3);

 console.log(rec.getArea());
 console.log(tri.getArea());
 console.log(cir.getArea());