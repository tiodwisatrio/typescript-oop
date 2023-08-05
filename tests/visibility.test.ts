describe("Visibility", () => {

    class Counter {
        protected counter: number = 0;

        public increment(): void {
            this.counter++
        }

        public getCounter(): number {
            return this.counter;
        }
        
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }

    it("Should support private", () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.log(counter.getCounter());

        expect(counter.getCounter()).toBe(3);
    })

    it("Should support protected", () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();
        console.log(doubleCounter.getCounter());

        expect(doubleCounter.getCounter()).toBe(6);
    })


})