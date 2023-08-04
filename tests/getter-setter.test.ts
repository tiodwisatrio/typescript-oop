describe('Getter & Setter', () => { 

    class Category {
        _name?: string;

        get name(): string {
            if (this._name) {
                return this._name
            } else {
                return "empty"
            }
        }

        set name(value: string) {
            if (value !== "") {
                this._name = value;
            }
        }
    }


    it("Should can create getter and setter", () => {
        const category = new Category();
        console.log(category.name)

        category.name = "Handphone";
        console.log(category.name)

        category.name = "";
        console.log(category.name)
    })


 })