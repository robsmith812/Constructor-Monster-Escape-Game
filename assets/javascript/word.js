function Shape (Name, sides){
    this.Name = Name;
    this.Sides = sides;
}

function Rectangle (Name, height, width){
    this.height = height;
    this.width = width;
    Shape.call(this, Name, 4);
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(){
    var height = parseInt(this.height);
    var width = parseInt(this.width);
    var area = height*width;
    return area;
};

Rectangle.prototype.perim = function(){
    var height = parseInt(this.height);
    var width = parseInt(this.width);
    var perim = 2*(this.height+this.width);
    return perim;
};

function Square (Name, h){
    Rectangle.call(this, Name, h, h);
}

Square.prototype = Object.create(Rectangle.prototype);

var shapeOne = new Shape ('Shape', 4);
console.log(shapeOne);

var shapeTwo = new Rectangle ('Rectangle', 3, 4);
console.log(shapeTwo);
console.log(shapeTwo.area());
console.log(shapeTwo.perim());

var shapeThree = new Square ('Square', 3, 4);
console.log(shapeThree);
console.log(shapeThree.area());
console.log(shapeThree.perim());