function* generateSequence() {
    yield 'Первое значение';
    yield 'Второе значение';
    yield 'Третье значение';
}

let generator = generateSequence();
for (let value of generator) {
    alert(value);
}

let str = 'Планета';
for(let char of str) {
    alert(char);
}

let mixin_Info =  {
    info() {
        alert(`${this.nameUn} ${this.address}`);
    }
};

class HigherEducational {
    constructor(nameUn, address) {
        this.nameUn = nameUn;
        this.address = address;
    }
}

for(let key in mixin_Info) {
    HigherEducational.prototype[key] = mixin_Info[key];
}

class University extends HigherEducational {
    constructor(name, address) {
        super(name, address);
    }
}

let univ = new University('БГУИР','Гикало 9 ');
univ.info();

var data = new Date();
alert(data.toLocaleString("en-US"));

