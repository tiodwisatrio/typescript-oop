describe("Properties", () => {
    class Customer {
        readonly id: number;
        // Default Value
        name: string = "User";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    it("Should can have properties", () => {
        const customer = new Customer(1, "Jhon");
        customer.age = 20;
        console.log(customer)

        expect(customer.id).toBe(1);
        expect(customer.name).toBe("Jhon");
    })

    
})