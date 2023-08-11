describe('Class Relationship', () => { 
    class Person {
        constructor(name: string) {
        }
    }

    class Customer {
        constructor(public name: string) {
            
        }
    }

    it("Should support class relationship", () => {
        const person: Person = new Customer("Tio");
        console.log(person)
   })
 })