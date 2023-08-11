describe("Static", () => {

    class Configuration {
        static NAME: string = "Belajar Typescript OOP";
        static VERSION: number = 1.0;
        static AUTHOR: string = "Tio Dwi Satrio"
    }

    class MathUtil {
        static sum(...numbers: number[]): number {
            return numbers.reduce((previous, current) => previous + current);
        }
    }

    it("Should support static properties", () => {
        console.log(Configuration.NAME);
        console.log(Configuration.VERSION);
        console.log(Configuration.AUTHOR);
    })

    it("Should support static method", () => {
        console.log(MathUtil.sum(1, 2, 3));
        expect(MathUtil.sum(1, 2, 3)).toBe(6);

    })  
})