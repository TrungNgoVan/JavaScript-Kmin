class Point{
    constructor(_x,_y){
        this._x = _x;
        this._y = _y;
    }

    get getX(){ return this._x; }
    set setX(value){ this._x = value; }

    get getY(){ return this._y; }
    set setY(value){ this._y = value;}

    scan(x,y){
        this._x = x;
        this._y = y;
    }

    print(){
        console.log("(" + this._x + ", " + this._y + ")");
    }

    move(dx,dy){
        this._x = this._x + dx;
        this._y = this._y + dy;
    }

    getDistance(x){ 
        let result = Math.sqrt(Math.pow(this._x - x.getX,2) + Math.pow(this._y - x.getY,2));
        return result;
    } 
}

class Circle{
    constructor(x,y,r){
        this._i = new Point(x,y);
        this._r = r;
    }

    get getI(){ return this._i; }
    set setI(value){ this._i = value; }

    get getR(){ return this._r; }
    set setR(value){ this._r = value;}

    scan(x,y,r){
        this._i = new Point(x,y);
        this._r = r;
    }

    print(){
        console.log('('+this._i._x+', '+this._i._y+')');
        console.log(this._r);
    }

    move(dx,dy){
        this._i._x = this._i._x + dx;
        this._i._y = this._i._y + dy;
    }

    getArea(){
        let result = Math.pow(this._r,2) * Math.PI;
        return result;
    }
}

class Rectangle{
    constructor(x,y,vertical,width){
        this._i = new Point(x,y);
        this._vertical = vertical;
        this._width = width;
    }

    get getI(){ return this._i; }
    set setI(value){ this._i = value; }

    get getVertical(){ return this._vertical; }
    set setVertical(value){ this._vertical = value;}

    get getWidth(){ return this._width; }
    set setWidth(value){ this._width = value;}

    scan(x,y,vertical,width){
        this._i = new Point(x,y);
        this._vertical = vertical;
        this._width = width;
    }

    print(){
        console.log('('+this._i._x+', '+this._i._y+')');
        console.log(this._vertical + '; ' + this._width);
    }

    move(dx,dy){
        this._i._x = this._i._x + dx;
        this._i._y = this._i._y + dy;
    }

    getArea(){
        let result = this._vertical * this._width;
        return result;
    }
}

class Square{
    constructor(x,y,edge){
        this._i = new Point(x,y);
        this._edge = edge;
    }

    get getI(){ return this._i; }
    set setI(value){ this._i = value; }

    get getEdge(){ return this._edge; }
    set setEdge(value){ this._edge = value;}


    scan(x,y,edge){
        this._i = new Point(x,y);
        this._edge = edge;
    }

    print(){
        console.log('('+this._i._x+', '+this._i._y+')');
        console.log(this._edge);
    }

    move(dx,dy){
        this._i._x = this._i._x + dx;
        this._i._y = this._i._y + dy;
    }

    getArea(){
        let result = Math.pow(this._edge,2);
        return result;
    }
}

// TEST CODE

let A = new Point(1,3);
let B = new Point(4,7);
console.log(A.getDistance(B));

let C = new Circle(1,1,5);
console.log(C.getArea());

let D = new Rectangle(1,1,4,5);
console.log(D.getArea());

let E = new Square(1,4,5);
console.log(E.getArea());