describe('ValidationError', () => { 

   class ValidationError extends Error {
       constructor(message: string) {
           super(message);
       }

    }

    const doubleIt = (value: number): number => {
        if (value < 0) throw new ValidationError("Value must be positive number");
        return value * 2;
    }
  

    it("Should support Error Handling", () => {
        try {
            const result = doubleIt(-1);
            console.log(result)
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(error.message)
            }
        }
    })

 })