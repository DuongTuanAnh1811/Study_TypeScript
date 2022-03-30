interface IProduct {
  name: string;
  color: string;
  price: number;
  tax: number;
  caculatePrice(): number;
}
class Product implements IProduct {
  name: string;
  color: string;
  price: number;
  tax: number;
  constructor(name: string, color: string, price: number, tax: number) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.tax = tax;
  }
  getProduct(): void {
    console.log(`name: ${this.name} color: ${this.color} price: ${this.caculatePrice()}VNĐ`);
  }
  caculatePrice(): number {
    return this.price + (this.price * this.tax) / 100;
  }
}

let product = new Product('T-shirt', 'Red', 100000, 20);
product.getProduct();
