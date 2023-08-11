import { MathUtil, Messages } from "../src/math-util"

describe('Namespace', () => { 

    it("Should support", () => {
        console.log(MathUtil.PHI)
        console.log(MathUtil.sum(1, 2, 3, 4, 5))

        expect(MathUtil.PHI).toBe(3.14);
        expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15);
    })

    it("Should support", () => {
        console.log(Messages.HELLO)
        console.log(Messages.GOODBYE)

        expect(Messages.HELLO).toBe("Hello");
        expect(Messages.GOODBYE).toBe("Goodbye");
    })
 })