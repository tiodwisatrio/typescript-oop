describe("Polymorphism", () => {
    class Employee {
        constructor(public name: string) {
            
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    const sayHello = (employee: Employee) => {
        // console.log(`Hello ${employee.name}`)
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.log(`Hello Vice President ${employee.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.log(`Hello Manager ${employee.name}`)
        } else {
            console.log(`Hello ${employee.name}`)
        }
    }

    it("Should support polymorphism", () => {

        let employee: Employee = new Employee("Joko");
        console.log(employee);

        employee = new Manager("Budi");
        console.log(employee);

        employee = new VicePresident("Tio");
        console.log(employee);
        
        expect(employee instanceof VicePresident).toBe(true);
    })

    it("Support method polymorphism", () => {
        sayHello(new Employee("Joko"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Tio"));

    })


})