abstract class Department {
	// private id: string;
	// private name: string;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.name = n;
		// this.id: id;
	}

	abstract describe(this: Department): void;
	// describe(this: Department) {
	// 	console.log(`Department (${this.id}): ${this.name}`);
	// }

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

// const accounting = new Department('d1', 'Accounting');

// accounting.addEmployee('Deon');
// accounting.addEmployee('Nadia');

// accounting.employees[2] = 'Etienne'; //Throws an error because 'employees' is private and cannot be accessed from outside the Department class

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

//NOTE Longer version to show that super() MUST be called FIRST
// class ITDepartment extends Department {
// 	admins: string[];
// 	constructor(id: string, admins: string[]) {
// 		super(id, 'IT');
// 		this.admins = admins;
// 	}
// }

//NOTE Max did not complete this exampe of extending a class with the shorthand syntax. Need to look into this.
class ITDepartment extends Department {
	constructor(id: string, private admins: string[]) {
		super(id, 'IT');
		this.admins;
	}

	describe() {
		console.log('ITDepartment - ID: ' + this.id);
	}
}

const ITDept = new ITDepartment('it1', ['Etienne']);

// console.log(ITDept);

// ITDept.addEmployee('Deon');
// ITDept.addEmployee('Nadia');
// ITDept.describe();
// ITDept.printEmployeeInformation();

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('Nothing to see here');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('What is this nonsense?!');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('d2', []);
		return this.instance;
	}

	describe() {
		console.log('Accounting Department - ID: ' + this.id);
	}

	addEmployee(name: string) {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}
}

// const accounting = new AccountingDepartment('ac1', []); //Cannot call this anymore, as it is now a Singleton
const accounting = AccountingDepartment.getInstance();

// accounting.addReport('Accounting SUCKS!');
// accounting.mostRecentReport = '';
// accounting.mostRecentReport = 'Lots of nonsense!';
// console.log(accounting.mostRecentReport);

// accounting.printReports();

// console.log(accounting);

// accounting.addEmployee('Max');
// accounting.addEmployee('Frikkie');
// accounting.addReport('Max');

// accounting.printEmployeeInformation();

accounting.describe();
ITDept.describe();
