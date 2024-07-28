const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;

//This will restrict to me that i can only choose one options among all of them.
//Each value has it's own index number which starts from 0. But we can change it. If we change it's value like if we assign
//AISLE = 10; Further value has assigned by it's increasing number.
//We can also assign a string value instead of assigning a number. But remember one thing that if do that we have to assign
//a string vlue to all of them, But we can mixed with number and string. Like this

// enum Options {
//   FIRST,
//   SECOND = "second",
//   THIRD = 99,
//   FOURTH,
//   FIFTH,
// }

//Index of FIRST = 0
//SECOND has "second" index value
//Index of THIRD = 99
//Index of FOURTH = 100
//Index of FIFTH = 101

export {};
