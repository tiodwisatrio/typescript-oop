describe('Super Constructor', () => { 

    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        departement: string;

        constructor(name: string, departement: string) {
            super(name);
            this.departement = departement;
        }
    }

    it("Should support super constructor", () => {
        const employee = new Employee("Tio", "Tech")
        console.log(employee.name)
        console.log(employee.departement)

        
        expect(employee.name).toBe("Tio");
        expect(employee.departement).toBe("Tech");
    })

 })