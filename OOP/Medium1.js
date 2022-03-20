class Fraction {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
    }

    get getNumerator() { return this._numeratorp; }
    set setNumerator(value) { this._numerator = value; }

    get getDenominator() { return this._denominatorp; }
    set setDenominator(value) { this._denominator = value; }

    scan(x, y) {
        this._numerator = x;
        this._denominator = y;
    }

    print() {
        console.log("(" + this._numerator + "/" + this._denominator + ")");
    }

    reduce() {
        let GCD = function (a, b) {
            if (!b) { return a; }
            return GCD(b, a % b);
        }
        let temp = GCD(this._numerator, this._denominator);
        this._numerator /= temp;
        this._denominator /= temp;
    }

    normalize() {
        if (this._denominator < 0) {
            this._numerator *= -1;
            this._denominator *= -1;
        }
        if (this._numerator === 0) {
            this._denominator = 1;
        }
    }

    fractionPlus(B) {
        let numerator = this._numerator * B._denominator + B._numerator * this._denominator;
        let denominator = this._denominator * B._denominator;
        return new Fraction(numerator, denominator);
    }

    fractionMultiply(B) {
        let numerator = this._numerator * B._numerator;
        let denominator = this._denominator * B._denominator;
        return new Fraction(numerator, denominator);
    }

    boolEqual(B) {
        let result;
        if (this._numerator === B._numerator && this._denominator === B._denominator){
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }

    boolLessThan(B) {
        let numerator = this._numerator * B._denominator - B._numerator * this._denominator;
        let denominator = this._denominator * B._denominator;
        let result;
        if (numerator * denominator < 0){
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }
}
// TEST CODE
let A = new Fraction(1, 2);
let B = new Fraction(4, 7);
let C = A.fractionPlus(B);
C.print();
let D = A.fractionMultiply(B);
D.print();
let E = new Fraction(4,7);
console.log(B.boolEqual(E));
console.log(B.boolLessThan(A));