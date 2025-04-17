"use strict";
// It is also like a blue-print of an object with type definition but it is more than Type-Alias.
// Interface is also called a "Contract". Every object should follow its rules.
const bankAccount1 = {
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
};
// We can also create an object of Transaction type.
const Transaction1 = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981101
};
const Transaction2 = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981102
};
const Transaction3 = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981103
};
const Transaction4 = {
    payerAccountNumber: 918252764932,
    payeeAccountNumber: 919508981104
};
const bankAccount2 = {
    accountNumber: 918252764932,
    accountHolder: "Laxman Krishnamurti",
    balance: 4000,
    isActive: true,
    transactions: [Transaction1, Transaction2, Transaction3, Transaction4]
};
const book = {
    name: 'Vedanta',
    price: 300
};
const ebook = {
    name: "Likhni hai nai kahani, Acharya Prashant",
    price: 250,
    fileSize: 300,
    format: "Hard Copy"
};
const audioBook = {
    name: "Shreemad Bhagwat Geeta, Acharya Prashant",
    price: 250,
    fileSize: 300,
    format: "mp3",
    duration: 400
};
const lenovo = {
    name: "Lenovo ideapad slim-3",
    price: 24500,
    processor: "Intel",
    architecture: "x86_64"
};
// interface SenetizedString extends string {
// }
// Limitation with interfaces :- Interfaces are only for objects. It cannot create primitive-types like Type-Alias.
//Error :- An interface cannot extend a primitive type like "string". It can only extend other named onject types.
