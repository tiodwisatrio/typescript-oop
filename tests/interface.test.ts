describe("Interface", () => {

    interface HasName{
        name: string;
    }

    interface CanSayHello {
        sayHello(name: string): void;
    }

    class Person implements HasName, CanSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`)
        }

    }


    it("Should support inheritance", () => {
        const person = new Person("John");
        person.sayHello("Budi");
        console.log(person.name)
    })

})