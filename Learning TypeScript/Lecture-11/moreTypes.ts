type User = {
  readonly _id: string;
  username: string;
  age: number;
  email: string;
  gender?: string;
};

const user: User = {
  _id: "fh24hdj3de",
  username: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
};

console.log("newUser :: ", user);

type cardHolder = {
  holderName: string;
};

type creditNumber = {
  cardNumber: number;
};

type expiryDate = {
  expiry: string;
};

type cardCVV = {
  cvv: number;
};

type issuer = {
  issuer?: string;
};

type creditCardInfo = cardHolder & creditNumber & expiryDate & cardCVV & issuer;

//let's create an object by using the creditCardInfo multi-type

function issueNewCreditCard(card: creditCardInfo): creditCardInfo {
  const newCardDetails = {
    holderName: card.holderName,
    cardNumber: card.cardNumber,
    expiry: card.expiry,
    cvv: card.cvv,
    issuer: "ICICI BANK",
  };

  return newCardDetails;
}

const myCard = issueNewCreditCard({
  holderName: "Laxman Krishnamurti",
  cardNumber: 1010202030304040,
  expiry: "07/2030",
  cvv: 140,
});

console.log("myCard : ", myCard);
console.log("Issuer of the card is : ", myCard.issuer);
