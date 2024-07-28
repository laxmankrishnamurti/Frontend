# Lectue - 15 (enums)

- enum :: enums are used to restrict user's choice.

```TypeScript
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;
```

After Compilation process the JS file looks like

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
  SeatChoice[(SeatChoice["AISLE"] = 0)] = "AISLE";
  SeatChoice[(SeatChoice["MIDDLE"] = 1)] = "MIDDLE";
  SeatChoice[(SeatChoice["WINDOW"] = 2)] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.WINDOW;
```

This is a debaratble topic that does it really make sense to produce that much line of JS code? But, however we can overcome this by just adding a keyword into the enum

```TypeScript
cosnt enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;
```

//Output of the code

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mySeat = 2; /* SeatChoice.WINDOW */
```
