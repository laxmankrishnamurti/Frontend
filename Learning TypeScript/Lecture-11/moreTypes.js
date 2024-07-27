var user = {
    _id: "fh24hdj3de",
    username: "Laxman Krishnamurti",
    age: 21,
    email: "laxmankrishnamurti@gmail.com",
};
console.log("newUser :: ", user);
//let's create an object by using the creditCardInfo multi-type
function issueNewCreditCard(card) {
    var newCardDetails = {
        holderName: card.holderName,
        cardNumber: card.cardNumber,
        expiry: card.expiry,
        cvv: card.cvv,
        issuer: "ICICI BANK",
    };
    return newCardDetails;
}
var myCard = issueNewCreditCard({
    holderName: "Laxman Krishnamurti",
    cardNumber: 1010202030304040,
    expiry: "07/2030",
    cvv: 140,
});
console.log("myCard : ", myCard);
console.log("Issuer of the card is : ", myCard.issuer);
