describe('Parameter Properties', () => { 

    class Person {
        constructor(public name: string) {

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
 })