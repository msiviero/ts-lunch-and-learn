enum Color {
    Red,
    Green,
    Blue,
}

const color: Color = Color.Blue;

/* Implmentation with literal types */

type TriState = "Ok" | "Ko" | "Undefined";

function printState(state: TriState) {
    console.log(state);
}

printState("Ok");
