var obj1 = { "name": "Person 1", "age":5 };
var obj2 = { "age":5, "name": "Person 1" };
var EqualJson = (obj1,obj2) => {
    key1 = Object.keys(obj1).length;
    key2 = Object.keys(obj2).length;
    return key1 === key2 && Object.keys(obj1).every(key => obj1[key] == obj2[key])
}
console.log(EqualJson(obj1,obj2));
// console.log(_.Equal(obj1,obj2));