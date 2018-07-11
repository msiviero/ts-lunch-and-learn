
function memoized(times: number = 9999) {

    let cache: any | undefined;

    return (target: any, _: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        function wrapped(...args: any[]) {
            if (!cache || (times < 1 && times !== -1)) {
                cache = originalMethod(args);
            }
            times--;
            return cache;
        }
        descriptor.value = wrapped.bind(target);
    };
}

class MyClass {

    @memoized(3)
    public getValue() {
        console.log("Called real method");
        return Math.ceil(Math.random() * 10);
    }
}

const myClass = new MyClass();

console.log(myClass.getValue());
console.log(myClass.getValue());
console.log(myClass.getValue());
console.log(myClass.getValue());
