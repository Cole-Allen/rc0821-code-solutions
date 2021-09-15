function ExampleConstructor() {

}

console.log('Example Constructor prototype: ', ExampleConstructor.prototype);
console.log('type of Example Constructor prototype: ', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();

console.log('newExampleConstructor', newExampleConstructor);

var instanceCheck = newExampleConstructor instanceof ExampleConstructor;

console.log('instance of newExampleConstructor', instanceCheck);
