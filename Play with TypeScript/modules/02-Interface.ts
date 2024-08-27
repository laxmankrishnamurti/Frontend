// It is also like a blue-print of an object with type definition but it is more than Type-Alias.
// Interface is also called a "Contract". Every object should follow its rules.

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[] //Should be an array of transaction type object.
}

const bankAccount1: BankAccount = {
    accountNumber: 918252764932,
    accountHolder: "Laxman Krishnamurti",
    balance: 4000,
    isActive: true,
    transactions: [
        {
            payerAccountNumber: 918252764932,
            payeeAccountNumber: 919508981101
        },
        {
            payerAccountNumber: 918252764932,
            payeeAccountNumber: 919508981102
        },
        {
            payerAccountNumber: 918252764932,
            payeeAccountNumber: 919508981103
        },
        {
            payerAccountNumber: 918252764932,
            payeeAccountNumber: 919508981103
        },
    ]
}

// We can also create an object of Transaction type.

const Transaction1: Transaction = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981101
}

const Transaction2: Transaction = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981102
}

const Transaction3: Transaction = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981103
}

const Transaction4: Transaction = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981104
}

const bankAccount2:BankAccount = {
    accountNumber: 918252764932,
    accountHolder: "Laxman Krishnamurti",
    balance: 4000,
    isActive: true,
    transactions: [Transaction1, Transaction2, Transaction3, Transaction4]
}

/**
 * Extends two interfaces
 */

// interface Book {
//     name: string;
//     price: number;
// }

// interface Ebook {
//     name: string;
//     price: number;
//     fileSize: number;
//     format: string;
// }

// interface AudioBook {
//     name: string;
//     price: number;
//     fileSize: number;
//     format: string;
//     duration: number;
// }

// const book: Book = {
//     name: 'Vedanta',
//     price: 300
// }

// const ebook: Ebook = {
//     name: "Likhni hai nai kahani, Acharya Prashant",
//     price: 250,
//     fileSize: 300,
//     format: "Hard Copy"
// }

// const audioBook: AudioBook = {
//     name: "Shreemad Bhagwat Geeta, Acharya Prashant",
//     price: 250,
//     fileSize: 300,
//     format: "Hard Copy",
//     duration: 400
// }

//Problem :: Property re-dundency problem.

interface Book {
    name: string;
    price: number;
}

interface Ebook extends Book {
    fileSize: number;
    format: string;
}

interface AudioBook extends Ebook {
    duration: number;
}

const book: Book = {
    name: 'Vedanta',
    price: 300
}

const ebook: Ebook = {
    name: "Likhni hai nai kahani, Acharya Prashant",
    price: 250,
    fileSize: 300,
    format: "Hard Copy"
}

const audioBook: AudioBook = {
    name: "Shreemad Bhagwat Geeta, Acharya Prashant",
    price: 250,
    fileSize: 300,
    format: "mp3",
    duration: 400
}

/**
 * Merge two interfaces
 */

// If there are two interfaces with the same name, TypeScript will merge it with all its properties.

interface Computer {
    name: string;
    price: number;
}

interface Computer {
    processor: string
}

interface Computer {
    architecture: string
}

const lenovo: Computer = {
    name: "Lenovo ideapad slim-3",
    price: 24500,
    processor: "Intel",
    architecture: "x86_64"
}

/**
 * Now, the big question is that which one should we use either "Type Alias" or "Interfaces"
 */

// Answer :: With our comfort but there are some limitations that we should keep in our mind. These are :- 

type Monitor = {
    name: string,
    price: number
}

// type Monitor = {
//     size: number
// }

// Limitation with Type-Alias :- It cannot merge two Type-Alias 

type SenetizedString = string;
type EvenNumber = number;

// interface SenetizedString extends string {

// }

// Limitation with interfaces :- Interfaces are only for objects. It cannot create primitive-types like Type-Alias.

//Error :- An interface cannot extend a primitive type like "string". It can only extend other named onject types.