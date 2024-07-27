var user = [1, "Pallavi"];
console.log("user :: ", user);
var rgbValues = [[250, 212, 152]];
console.log("rgbValues :: ", rgbValues);
//rgbValues ::  [ [ 250, 212, 152 ] ]
rgbValues.push([24, 75, 145]);
console.log("rgbValues :: ", rgbValues);
var newUser = [1, "Laxman Krishnamurti"];
console.log("newUser before changes :: ", newUser);
//newUser before changes ::  [ 1, 'Laxman Krishnamurti' ]
newUser[1] = "Pallavi Jain";
console.log("newUser after changing values :: ", newUser);
//newUser after changing values ::  [ 1, 'Pallavi Jain' ]
newUser.push(1, "Anjali");
console.log("newUser after changing values :: ", newUser);
//newUser after changing values ::  [ 1, 'Pallavi Jain', 1, 'Anjali' ]
