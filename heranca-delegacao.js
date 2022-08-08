function Produto(name, price) {
    this.name = name;
    this.price = price;
}

Produto.prototype.descount = function(value) {
    this.price -= value;
}

function Camisa(name, price, model) {
    Produto.call(this, name, price);
    this.model = model;
}
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa;

Camisa.prototype.descount = function(porcent) {
this.price = this.price - (this.price * (porcent / 100))
}

function Caneca(name, price, material, stoque) {
    Produto.call(this, name, price);
    this.material = material;
    Object.defineProperty(this, 'stoque', {
        enumerable: true,
        configurable: false, 
        get: function() {
            return stoque;
        },
        set: function(value) {
            if(typeof value === 'number') return; 
            stoque = value;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camisa = new Camisa('bleble', 52, 'Social');
const caneco = new Caneca('bilou', 17.50, 'vrido', 7)
caneco.descount(2)
console.log(caneco)