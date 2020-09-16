class Foo {
    protected bar: any;
    constructor(bar: any) {
        this.bar = bar;
    }

    getBar() {
        return this.bar
    }

    handleBar() {
        this.bar = [1,2,3];
        this.bar.map((el: number) => el**2);
    }

    setBar(bar: any) {
        this.bar = bar
    }
}

describe("FooBarTest", () => {
    test('simple instance', () => {
        const initialValue = "my string";
        const foo = new Foo(initialValue);
        foo.setBar("anoter value");
        console.log(initialValue)
        expect("my string").toEqual(initialValue)
    })
    test('change value', () => {
        const initialValue = "my string";
        const foo = new Foo(initialValue);
        foo.setBar("anoter value");
        foo.handleBar()
        expect("my string").toEqual(initialValue)
    })
    test('change value array of objects', () => {
        const initialValue =[{teste: 1}, {ok: "teste"}];
        const foo = new Foo(initialValue);
        foo.setBar("anoter value");
        foo.handleBar()
        expect([{teste: 1}, {ok: "teste"}]).toEqual(initialValue)
    })
})