let mrk = "#";
let tmp = ""
for(let i = 1 ; i <= 7 ; i++){
    tmp += mrk;
    console.log(tmp);
}

var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]
var emptrmv = strArray.filter(String);
for (let index = 0; index < emptrmv.length; index++) {
    console.log(emptrmv[index]);
}

var myarray=[11,22,33,44,55]
var count = 0;
for(let i in myarray){
    count += 1;
}console.log(count);

let foods = ["aaa", "aab", "aac", "aad", "aae", "aaf", "aag", "aah", "aai", "aaj", "aba", "aca", "ada", "aea", "afa", "aga", "aha", "aia", "aja"];
console.log(foods[4],foods.length);

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling1(input){
        for (var i = 0; i < input.length; i++) {
        if (input[i]==="Mari") {
            input[i] = "Munnabai"
        }
        }
        console.log(input);
        }
        dataHandling1(friends);

    const friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    if(input[i] == "CaptianAmerica"){
        break;
    }
    console.log(input[i]);
    }
    }
    dataHandling(friends1);

const friends2 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
    if (input[i]===name) {
        return "he is my friend"
    }
    }
    }
    let found = dataHandling(friends2,"Jeff");
    console.log(found);
        
var friends11 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var friends22 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
var friends222 = [...friends11, ...friends22];
function dataHandling(input){
    input.sort()
    console.log(input);
    }
    dataHandling(friends222);

let friends3 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
console.log(friends3[0],friends3[friends3.length-1],friends3[Math.floor((friends3.length-1)/2)]);

let friends4 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
let c = "Mr.";
let d = [];
    for(let i = 0 ; i < friends4.length ; i++){
    let e = "";
    e = c + friends4[i];
    d.push(e);
}console.log(d);

let friends5 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
console.log(friends5.join(","));

let friends6 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
console.log(friends6.filter(e => e.includes("a")));


let friends7 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
let fl = 0;
for ( let i = 0 ; i < friends7.length ; i++){
    fl = fl + friends7[i].length;
}console.log(Math.round(fl/friends7.length));


let friends8 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
console.log(friends8.filter(e => e.startsWith("M")));
 
let friends9 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
var lgth = Math.max(...(friends9.map(e => e.length)))
var longest = [];

for (var i = 0; i < friends9.length; i++) {
  if (friends9[i].length === lgth) {
    longest.push(friends9[i]);
  }
}

console.log(...longest);

let friends10 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
var small = [];
    var lenstr = Math.min(...(friends10.map(e => e.length)))
    for (var i = 0; i < friends10.length; i++) {
        if (friends10[i].length == lenstr) {
          small.push(friends10[i]);
        }
      }
      
      console.log(...small);

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let fndnum = friendsInfo.filter(Number.isInteger).reduce((a,b) => (a+b))
console.log(fndnum/(friendsInfo.filter(Number.isInteger).length));

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++){
        console.log(input[i][j]);
    }
    }
    }
    dataHandling(input);

myobject = {1:"one","11":1,"name":"arun"};
console.log(myobject[11]);
myobject["ten"]="ten";
console.log(myobject);

var guvobj = {
    Firstname : "Guvi",
    lastname : "Geek",
    Address : {
        no : 6,
        StreetName : "IIT-M RP",
        place : "Chennai"
    }
}
console.log(guvobj);
var guviobj = [{
    company1 : {
    Firstname : "Guvi",
    lastname : "Geek",
    Address : {
         no : 6,
         StreetName : "IIT-M RP",
         place : "Chennai"
     }},
    company2 : {
    Firstname : "Amazon",
    lastname : "Inc",
    Address : {
        no : 31,
        StreetName : "SP Infocity",
        place : "Chennai"
    }
    },
    company3 : {
        Firstname : "Google",
        lastname : "Alphabet",
        Address : {
            no : 34,
            StreetName : "Amphitheatre Parkway",
            place : "MountainView"
        }
        },
    company4 : {
        Firstname : "Tesla",
        lastname : "Inc",
        Address : {
            no : 32,
            StreetName : "333 Santana Row",
            place : "San jose"
        }
        }
}]
 console.log(guviobj[0]);