function LogInstance<T extends new (...args: any[]) => any>(constructor: T): T {
  return class extends constructor {
    constructor(...args: any[]) {
      const className = (constructor as any).name;
      console.log("Instance created for:", className);
      console.log("Arguments:", args);
      super(...args);
    }
  };
}

@LogInstance
class Product {
  constructor(public name: string, public price: number) {}

  print(): void {
    console.log("Product:", this.name, "| Price: $" + this.price);
  }
}

const pen = new Product("Pen", 2.5);
pen.print();

const notebook = new Product("Notebook", 5.99);
notebook.print();
