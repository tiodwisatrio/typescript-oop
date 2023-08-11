export namespace MathUtil {
    export const PHI: number = 3.14;   
    
    export const sum = (...numbers: number[]): number => {
        return numbers.reduce((previous, current) => previous + current);
    }
}

export namespace Messages {
    export const HELLO: string = "Hello";
    export const GOODBYE: string = "Goodbye";
}

