class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {
    }

    work() {
        return `${this.name} do ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'Do some programming'
    }
}


class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'Do some tests'
    }
}

const dev = new Developer("Vaska", 600)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Tedo', 600)
console.log(tester.getPaid())
console.log(tester.work())