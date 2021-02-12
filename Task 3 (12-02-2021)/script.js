// Do the below programs in anonymous function and IIFE
//1. Print odd numbers in an array
// anonynous function 
let num=function(){
    let arr =[1,2,3,4,5,6]
    let odd=[]
    for(let i in arr )
    {
        if(i%2!==0)
        {
            odd.push(i)
        }
    }
    console.log(odd.toString())
    }
    num();

// IIFE

(function(){
    let arr =[1,2,3,4,5,6];
    let odd=[]
    for(let i in arr )
    {
        if(i%2!==0)
        {
            odd.push(i)
        }
    }
    console.log(odd.toString())
    })();
 

// 2.Convert all the strings to title caps in a string array
// anonynous function 
let oldstr="hello world"
let str=function(){
    let split=oldstr.split("")[0].toUpperCase()
    for(let i=1;i<parseInt(oldstr.length);i++)
    {
        split=split+oldstr[i];
    }
    console.log(split);
}
str();
// IIFE
let oldstr="hello world";
( function(){
    let split=oldstr.split("")[0].toUpperCase()
    for(let i=1;i<parseInt(oldstr.length);i++)
    {
        split=split+oldstr[i];
    }
    console.log(split);
})();


//3. Sum of all numbers in an array
// anonynous function
let num=[1,2,3,4,5];
let add=0;
// console.log(num.length)
let sum=function(){
for( let i in num ){
    add=add+num[i]
}
return add
}
console.log(sum());

let num2=[1,2,3,4,5];
let add2=0;

 // IIFE
 
(function(){
    for( let i in num2 )
    {
     add2=add2+num2[i]
     }
 console.log(add2)
 })();


//4. Return all the prime numbers in an array
// anonynous function
let primenum=function (){
    let a=[8,2,3,4,5,6,19];
    let arr=[];
    for(j=0;j<a.length;j++)
    {
        val="prime"
        for(i=2;i<a[j];i++)
        {
            if(a[j]%i===0)
            {
                val="not prime"
                break;
            }
        }
        if (val=="prime")
        {
            arr.push(a[j])
        }
        
    }
    console.log(arr)
}
primenum();
  
 // IIFE
 (function (){
    let a=[8,2,3,4,5,6,19];
    let arr=[];
    for(j=0;j<a.length;j++)
    {
        val="prime"
        for(i=2;i<a[j];i++)
        {
            if(a[j]%i===0)
            {
                val="not prime"
                break;
            }
        }
        if (val=="prime")
        {
            arr.push(a[j])
        }
        
    }
    console.log(arr)
})();


// 5.Return all the palindromes in an array
// anonynous function
let arrayfunct=function(){

let arr=["asd","ala","prso"];
let str="",lstr="",newarr=[]
for(let i=0;i<arr.length;i++)
{
    str=arr[i].split("");
    lstr=str.reverse();
    if(str.toString()==(str.reverse().toString())){
        newarr.push(arr[i]);
    }
}
console.log(newarr)
}
arrayfunct();
 // IIFE
 (function(){

    let arr=["asd","ala","prso"];
    let str="",lstr="",newarr=[]
    for(let i=0;i<arr.length;i++)
    {
        str=arr[i].split("");
        lstr=str.reverse();
        if(str.toString()==(str.reverse().toString())){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr)
    })();

    

//6. Return median of two sorted arrays of same size
// anonynous function
let func=function(){
    let a=[8,100,3,4,10,6];
    let b=[3,4,6,8,9]
    let arrconcat =a.concat(b)
    let ans=0
    let sortedarray=arrconcat.sort(function(x, y){return x - y});
    if(arrconcat.length%2!==0)
       {
           let mid=(sortedarray.length)/2;
           ans=Math.round(mid);
       }
    console.log(arrconcat[ans-1])
  }
  func();  
 // IIFE
 (function(){
    let a=[8,100,3,4,10,6];
    let b=[3,4,6,8,9]
    let arrconcat =a.concat(b)
    let ans=0
    let sortedarray=arrconcat.sort(function(x, y){return x - y});
    if(arrconcat.length%2!==0)
       {
           let mid=(sortedarray.length)/2;
           ans=Math.round(mid);
       }
    console.log(arrconcat[ans-1])
  })();



//7.Remove duplicates from an array
// anonynous function
let dup=function(){
    let a=[1,2,3,4,1,1,2,3]
    let uniqueChars = [...new Set(a)];
    console.log(uniqueChars)}
    dup();
 // IIFE
(function(){
    let a=[1,2,3,4,1,1,2,3]
    let uniqueChars = [...new Set(a)];
    console.log(uniqueChars)})();
 
//8. Rotate an array by k times and return the rotated array
// anonynous function
let rot=function(){let a=[1,2,3,4],b=[]
    let times=3
    for (let i = 0; i < times; i++) {
          a.unshift(a.pop());
            console.log(a);
      }
    }
    rot()
 // IIFE
(function(){let a=[1,2,3,4],b=[]
    let times=3
    for (let i = 0; i < times; i++) {
          a.unshift(a.pop());
            console.log(a);
      }
    })();
