# Lecture - 17 (Re-Opening the Interface)

- Re-Opening Interface :: It allow us to add an extra field into the interface without changing it. Means we can create an interface that is similar to the previous one and add an extra values that is not added previously becuase of some reson. It may be like the data has been some other modules and the module is not currently available to put that value. Once the value get available then we can simply re-open the interface and put that value and it will sync with the other values.

```TypeScript
interface User {
  readonly databaseId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

//Let's reopen the interface

interface User {
  githubToken: string;
}

const newUser: User = {
  databaseId: 2312234,
  email: "laxmankrishnamurti@gmail.com",
  userId: 293848,
  githubToken: "git@laxmn&&000",
  googleId: "3klj3lkj345kj",
  startTrial: function () {
    return "Trial started";
  },
  getCoupon: function (name, value) {
    console.log("Coupon name is : ", name);
    console.log("Coupon value is : ", value);
    return 10;
  },
};

console.log("newUser :: ", newUser);
newUser.getCoupon("DISCOUNT50", 50);

/*
 newUser ::  {
  databaseId: 2312234,
  email: 'laxmankrishnamurti@gmail.com',
  userId: 293848,
  githubToken: 'git@laxmn&&000',
  googleId: '3klj3lkj345kj',
  startTrial: [Function: startTrial],
  getCoupon: [Function: getCoupon]
}
Coupon name is :  DISCOUNT50
Coupon value is :  50
  */


```
