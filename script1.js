// ****************************1.Country Name**************
let request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function()
    {              
        let data = JSON.parse(this.response)
       for(let i in data)
       {
           console.log(data[i].name)
       }
     }

// ****************************4.JSON TASK**************
var cat = {
    name: "Fluffy",
    activities: ['play', 'eat cat food'],
    catFriends: [{
                    name: "bar",
                    activities: ['be grumpy', 'eat bread omblet'],
                    weight: 8,
                    furcolor: 'white'
                    }, 
                    {
                    name:"foo",
                    activities: ['sleep', 'pre-sleep naps'],
                    weight: 3
                }]
   }
//    0.1
cat.height=34;cat.weight=34;
// 0.2
cat.name="Fluffyy";
// 0.3
console.log(cat.activities)
// 0.4
for(i=0;i<cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].name)
}
// 0.5
let sum=0;
for(i=0;i<cat.catFriends.length;i++)
{
 sum=sum+parseInt(cat.catFriends[i].weight)
}
console.log(sum)
// 0.6
let len=0
for(i=0;i<cat.catFriends.length;i++)
{
 len=len+parseInt(cat.catFriends[i].activities.length);
}
console.log(len+cat.activities.length)
// 0.7
    cat.catFriends[0].activities.push("play with wool","play with me")
    cat.catFriends[1].activities.push("play with wool","play with me")

// 0.8
cat.catFriends[0].furcolor="black"




var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

for(i=0;i<myCar.accidents.length;i++)
{
    myCar.accidents[i].atFaultForAccident=false
console.log(myCar.accidents[i].date)
}
console.log(myCar)



// problem 1
console.log("Problem 1")
let obj = 
{
    name:'RajiniKanth',
    age:33,
    hasPets:false
};

function printAllValues(obj) {
 console.log(Object.values(obj));
}
printAllValues(obj);


// problem 2
console.log("Problem 2")
function printAllKeys(obj) {
    console.log(Object.keys(obj));
   }
printAllKeys(obj);

// Problem 3
console.log('Problem 3')
function convertObjectToLis(obj) {
    console.log(Object.entries(obj))
   }
   convertObjectToLis(obj);

 //Problem 4 
console.log('Problem 4')
let arr=['GUVI','I','am','a geek']; 
let func=transformFirstAndLast(arr);
function transformFirstAndLast(arr){
    var newObject={},
    key=arr.shift(),
    val=arr.pop();
    newObject[key]=val;
    return newObject;
}
console.log(func)

// Problem5
console.log('Problem 5')
var newObject = {};
var arrnew = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {

 newObject=Object.fromEntries(arrnew);
 return newObject;
}
fromListToObject(arrnew)
console.log(newObject)

// Problem 6
console.log('Problem 6')
var tranformEmployeeList = [];
var arr2= [
    [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
     [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
    ];
function transformEmployeeData(arr2) {
 
 tranformEmployeeList=Object.fromEntries(arr2);
 return tranformEmployeeList;
}
transformEmployeeData(arr2)
console.log(tranformEmployeeList)

// problem 7
console.log('Problem 7')
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

// console.log(JSON.stringify(actual));
function assertObjectsEqual(actual, expected){
if(JSON.stringify(expected)==JSON.stringify(actual))
{
    console.log("Passed")
}
else{
    console.log("Failed Expected value = "+JSON.stringify(expected)+" but got "+JSON.stringify(actual))
}
}
assertObjectsEqual(actual, expected);

 // problem 8
console.log('Problem 8')
var securityQuestions = 
    [
        {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
        },
        {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
        },
        {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
        }
    ]
    
        var ques = 'What was your first pet’s name?';
       var ans  =  'FlufferNutter';
       var status = chksecurityQuestions(securityQuestions, ques, ans);

    function chksecurityQuestions(securityQuestions,question,expectedAnswer) 
    {
        for(let i in securityQuestions){
    //   if (securityQuestions[i].question===ques)
    if (securityQuestions[i].question===ques)  
    {
        if(securityQuestions[i].expectedAnswer===ans)
        {
            return true
        }
        else{
            return false
        }
      }
    }
}
       console.log(status);

// problem 9
console.log('Problem 9')
var students = [
    {name: 'Siddharth Abhimanyu', age: 21},
    {name: 'Malar', age: 25},
    {name: 'Maari',age: 18},
    {name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},
    {name: 'AAK chandran',age: 23},
    {name:'Gabbar Singh',age: 33},
    {name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},
    {name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},
    {name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
   function returnMinors(arr)
   {
   for( let i in students)
        {
            if(students[i].age<20)
            {
                console.log(students[i].name);
            }
        }
    }
  returnMinors(students);


//   *******************5.Countries.API***********
let request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function()
    {              
        let data = JSON.parse(this.response);
        let total=0
       for(let i in data)
       {
           total=total+ +data[i].population;
       }
       console.log("The total Population is "+total)
    }

