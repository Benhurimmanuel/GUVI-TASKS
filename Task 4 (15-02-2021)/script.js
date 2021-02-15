//Solving problems using array functions on rest countries data.
// 1.Get all the countries from Asia continent / “region” using Filter function
// let request= new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     // console.log(data);
//     let result = data.filter((item)=>{
//         return item.region=="Asia"
//     })
//     console.log(result)
// }

// 2.Get all the countries with population of less than 2 lacs using Filter function
// let request= new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     let result = data.filter((item)=>{
//         return item.population>200000
//     })
//     console.log(result)
// }

// 3.Print the following details name, capital, flag using forEach function
// let request=new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     data.forEach(element => {
//         console.log(element.name,element.capital,element.flag)        
//     });

// }


// 4.Print the total population of countries using reduce function.
// let req=new XMLHttpRequest();
// let arr=[]
// req.open('GET','https://restcountries.eu/rest/v2/all',true)
// req.send();
// req.onload = function(){    
//                         var data = JSON.parse(this.response);
//                         let val=data.map((item)=>
//                         {
//                         let pop= JSON.parse(item.population);
//                         return(pop);
//                         });
//                         let n=val.reduce((acc,item)=>{
//                             return acc+item;
//                         })
//                         console.log(n)
//                     }


// 5.Print the country which uses US Dollars as currency.  
let req=new XMLHttpRequest();
let arr=[]
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send();
req.onload = function(){    
                        var data = JSON.parse(this.response);
                        // console.log(data.length)
                        // for(let i in data)
                        // {
                        // console.log(data[i].name)
                        let val=data.filter((item)=>
                            {
                                return item.currencies[0].name=="United States dollar"
                            })
                        console.log(val)
                        // }
                        // console.log(val)
                }
