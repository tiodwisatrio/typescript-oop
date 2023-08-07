describe('Parameter Properties', () => { 

    class Person {
        constructor(public name: string) {

        }
    }

    class Customer {
        constructor(public idCustomer: string) {

        }
    }

    it("Support parameter properties", () => {
        const person = new Person("Tio");
        console.log(person.name)
        expect(person.name).toBe("Tio");

        person.name = "Joko";
        console.log(person.name)
        expect(person.name).toBe("Joko")
    })

    it("Support parameter properties", () => {
        const customer = new Customer("C001");
        console.log(customer.idCustomer)
        expect(customer.idCustomer).toBe("C001");
    })
 })