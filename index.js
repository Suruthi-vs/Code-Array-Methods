
//My Function...
array=[1, 30, 39, 29, 30, 13]; 
count=0;
function myFunction() 
{ 
  
    for (x of array){
      if (x<40){
        count+=1
      }
    }
    if (count==array.length){
      return true;
    }else{
      return false;
    }
    }
console.log(myFunction(array));

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var wor1=[];
function word(){
  for(x of words){
    if (x.length>6){
      wor1.push(x);
    }
    x++;
  }
  return wor1;
}
console.log(word(words));

var find = [5, 4,2,16, 44];
function find1(){
  for (x of find){
    if (x>10){
      return x;
      break;
    }
  }
}
console.log(find1(find))


var ind = [5, 12, 8, 130, 44];
function index(){
for (i = 0; i < ind.length; i++) {
  if (ind[i]>13){
    return i;
    break;
  }
}
}
console.log(index(ind))

var some=[1,9,3,7,5];
count=0;
function some1(){
  for (x of some){
    if (x%2==0){
      count+=1
    }
  }
  if (count>=1){
    return true;
  }
  else{
    return false;
  }
  }
console.log(some1(some));

