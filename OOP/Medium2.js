class intArray {
    constructor(name, array) {
        this._name = name;
        this._array = array;
    }

    get getName() { return this._name; }
    set setName(value) { this._name = value; }

    get getArray() { return this._array; }
    set setArray(value) { this._array = value; }

    input(name, array) {
        this._name = name;
        this._array = array;
    }

    print() {
        console.log('Name: ' + this._name + ' = [' + this._array + ']');
    }

    getElement(index) {
        return this._array[index - 1];
    }

    getSize() { return this._array.length }

    getSum() {
        let sumResult = 0;
        this._array.forEach(function (value) {
            sumResult += value;
        });
        return sumResult;
    }

    getMax() {
        return Math.max.apply(Math, this._array);
    }

    getEven() {
        let result = [];
        this._array.forEach(function (value) {
            if (value % 2 == 0) {
                result.push(value);
            }
        });
        return result;
    }

    addHead(value) {
        // this._array.unshift(value);
        for (let i = this._array.length - 1; i >= 0; i--) {
            this._array[i + 1] = this._array[i];
        }
        this._array[0] = value;
    }

    insert(value, index) {
        for (let i = this._array.length - 1; i >= index - 1; i--) {
            this._array[i + 1] = this._array[i];
        }
        this._array[index - 1] = value;
    }

    addElements(value) {
        this._array[this._array.length] = value;
    }

    erase(index) {
        if (index === undefined){
            this._array.splice(0,this._array.length);
        }
        else {
            let result = this._array[index - 1];
            for (let i = index - 1; i < this._array.length; i++) {
                this._array[i] = this._array[i+1];
            }
            this._array.pop();
        }
    }

    clone(start, end) {
        let result = [];
        for (let i = start - 1; i < end; i++) {
            result.push(this._array[i]);
        }
        return result;
    }

}
// TEST CODE
let A = new intArray("A", [1, 6, 9, 4]);
console.log(typeof A._name);
console.log(typeof A._array);
A.print();
console.log(A.getElement(2));
console.log(A.getSize());
console.log(A.getSum());
console.log(A.getMax());
console.log(A.getEven());
A.addHead(10);
A.print();
A.insert(13, 2);
A.print();
A.addElements(8);
A.print();
console.log(A.clone(1, 3));
A.erase(2);
A.print();