// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	// const person = {
// 	name: 'Deon',
// 	age: 45,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: 'Deon',
	age: 45,
	hobbies: ['Sports', 'Cooking'],
	role: ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
