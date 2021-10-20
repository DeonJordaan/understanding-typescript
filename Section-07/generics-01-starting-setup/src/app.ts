// Built-in Generics
// const names = ['Deon', 'Nadia'];

// const otherNames: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is done');
// 	}, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

console.log(merge({ name: 'Deon' }, { age: 45 }));

const mergedObj = merge({ name: 'Nadia', hobbies: ['Yoga'] }, { age: 40 });
console.log(mergedObj.age);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value';
	if (element.length === 1) {
		descriptionText = 'Got 1 element';
	} else if (element.length > 1) {
		descriptionText = `Got ${element.length} elements`;
	}
	return [element, descriptionText];
}

console.log(countAndDescribe('Hoe lyk dit nou'));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Frikkie' }, 'name');

class DataStorage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Heksie');

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
