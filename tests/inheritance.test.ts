describe("Inheritance", () => {
    
    // Parent Class
    class Employee {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
        
    }

    class Director extends Employee {
        
    }



    it("should support inheritance", () => {
        const employee = new Employee("Tio")
        console.log(employee.name)

        const manager = new Manager("Joko")
        console.log(manager.name)

        const director = new Director("Budi")
        console.log(director.name)
    })

})