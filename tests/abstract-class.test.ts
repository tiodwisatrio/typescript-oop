describe('Abstact Class', () => { 
    
    abstract class Customer 
    {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        hello() {
            console.log(`Hello`)
        }

        abstract sayHello(name: string): void;

    }
    
    class RegularCustomer extends Customer {
        name: string;
        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, My name is ${this.name}`)
        }
    }

    it("Should support abstract class", () => {
        const customer1 = new RegularCustomer(1, "Joko");
        customer1.sayHello("Budi");
        customer1.hello();

        expect(customer1 instanceof RegularCustomer).toBe(true);
        expect(customer1 instanceof Customer).toBe(true);
        
    })
 })