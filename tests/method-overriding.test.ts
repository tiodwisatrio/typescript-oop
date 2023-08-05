describe("Method Overriding", () => {
    // Mendeklarasikan ulang method yang ada di parent class

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {

        sayHello(name: string): void {
            // console.log(`Hello ${name}, my name is ${this.name} and I'm a manager`)
            super.sayHello(name);
            console.log(`I'm a manager`)
        }
    }


    it("Should support method overriding", () => {
        const employee = new Employee("Tio");
        employee.sayHello("Budi");

        const manager = new Manager("Tio");
        manager.sayHello("Budi");
    })
})