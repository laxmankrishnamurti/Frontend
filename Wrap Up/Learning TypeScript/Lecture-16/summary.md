# Lecture - 16 (Interfaces)

- Interface :: Interface means we don't care about what is happening under the hood. It means interface provides a layer of abstraction.

```TypeScript
interface User {
  readonly databaseId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

const newUser: User = {
  databaseId: 2312234,
  email: "laxmankrishnamurti@gmail.com",
  userId: 293848,
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
  googleId: '3klj3lkj345kj',
  startTrial: [Function: startTrial],
  getCoupon: [Function: getCoupon]
}


Coupon name is :  DISCOUNT50
Coupon value is :  50
*/

```
