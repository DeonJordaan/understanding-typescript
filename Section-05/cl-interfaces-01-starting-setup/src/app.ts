interface Named {
	readonly name?: string;
	outputName?: string;
}

//Interface Greetable inheriting from Named
interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age = 45;

	constructor(n?: string) {
		if (n) {
			this.name = n;
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(`${phrase} ${this.name}`);
		} else {
			console.log('Hi!');
		}
	}
}

let user1: Greetable;

user1 = new Person('Nadia');

user1.greet('Hi there - I am');

//Using interfaces to declare a Function Type
interface AddFn {
	(a: number, b: number): number;
}

//Mark methods as optional with>>>
//optional! => mymethod?(){}
