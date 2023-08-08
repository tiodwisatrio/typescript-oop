describe('Instance Of', () => { 

    it("Should support instanceof", () => {
        class Employee { }
        class Manager {

        }

        const budi = new Employee();
        const tio = new Manager();

        expect(tio instanceof Manager).toBe(true);
        expect(tio instanceof Employee).toBe(false);

        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);

    })

})