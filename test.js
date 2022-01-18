
// Prototype
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
};

Person.prototype.showmethename = function() {
  return this.firstName + "." + this.lastName
};

var Fn=1;
var Ln=2;
var el = document.getElementsByName("tt")[0];

var getname=function(){
  Fn=document.getElementById("fn").value;
  Ln=document.getElementById("ln").value;
};

el.addEventListener("click",getname);

el.addEventListener("click",showmethefather);

function showmethefather(){
var myFather = new Person(Fn, Ln, 50, "blue");
document.getElementById("father").innerHTML =
"我的父亲是 " + myFather.showmethename(); 
console.log(Fn);
};


// Eliminate_Duplicated_Array
var eda=document.getElementById("EDA");

var array = [1,2,2,2,3,4,4,5,6,7,7,7,8,8,9];

var max=0;

var find_max = function(){
  for (var i=1;i<array.length;i++){
    if(array[i]>array[max]){
      max=i;
    }
  }
  return max;
}
var na = new Array();
var init = function(){
  for(var i =0 ;i<=array[max];i++){
    na[i]=0;
  }
}
var e=function(){
  for(var i=0;i<array.length;i++){
    na[array[i]]=na[array[i]]+1;
  }
}

var print=function(){
  var j=0;
  for(var i=0 ;i<na.length;i++){
    if(na[i]!=0){
      array[j]=i;
      j=j+1;
    }
  }
  for(;j<array.length;j++){
    array[j]=undefined;
  }
  eda.innerText=array;
}

eda.addEventListener("click",find_max);
eda.addEventListener("click",init);
eda.addEventListener("click",e);
eda.addEventListener("click",print);

//数组扁平化
let arr = [1, [2, [3, 4]]];
 
function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item //+可以快速获得Number类型
    })
}