
class Foo {
    public readonly foo = 123;
    public readonly common = "123";
}

class Bar {
    public readonly bar = 123;
    public readonly common = "123";
}

function doStuff(argument: Foo | Bar) {
    console.log(argument.common);

    if (argument instanceof Foo) {
        console.log(argument.foo);
    } else { // must be Bar!
        console.log(argument.bar);
    }
}

/* User defined type guard */
const isFoo = (arg: any): arg is Foo => "foo" in arg;

function doStuff2(argument: Foo | Bar) {
    console.log(argument.common);

    if (isFoo(argument)) {
        console.log(argument.foo);
    } else { // must be Bar!
        console.log(argument.bar);
    }
}
