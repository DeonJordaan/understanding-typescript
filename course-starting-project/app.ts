let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
	userName = userInput;
}

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('The shit has hit the fan!', 5000000);
