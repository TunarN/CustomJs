const personRovshen = {
    firstname: "Rovshan",
    lastname: "Khalilov",
    salary: 120,
  };
  
  const personElnur = {
    firstname: "Elnur",
    lastname: "Azizov",
    salary: 130,
  };
  const personTunar = {
    firstname: "Tunar",
    lastname: "Namazov",
    salary: 200,
  };
  
  const personLeman = {
    firstname: "Leman",
    lastname: "Yaqubova",
    salary: 150,
  };
  const personTural = {
    firstname: "Tural",
    lastname: "Namazov",
    salary: 250,
  };

  const employees=["Rovshan","Elnur","Tunar","Leman","Tural"]
  employees.myFindFunc=function(callback){
    for (let i = 0; i < this.length; i++) {
      if (true===callback(this[i],this)) {
        return{element:this[i],array:this}
      }
    }
  };  

let {element,array}=employees.myFindFunc((element)=>element[0]==="T")
console.log(`Bu Ad:${element}; bu arrayde T ile baslayan ilk Addir: ${array}`);

const salary=[20,130,200,150,250]
   function myFiltrFunc(array,callback){
     for (let i = 0; i < array.length; i++) {
      if (array[i]>150) {
        callback(array[i])
      }
     }
   }

   myFiltrFunc(salary,function(item){
     console.log(item);
   });

function myEvery(array, callback) {

 for (let i = 0; i < array.length; i++) {
   if (callback(array[i])) {
     return true;
    }
   else
   return false;
  }
}
console.log(myEvery(salary,function(item){
  return item>100;
}));

function mySome(array, callback) {
  let count=0
  for (let i = 0; i < array.length; i++) {

    if (true==callback(array[i])) {
      count++
     }
   }
   if (count>0) {
    return true
  }
  else
  return false;
 }
 console.log(mySome(salary,function(item){
   return item>100;
 }));

 const employee=[personElnur,personLeman,personRovshen,personTunar,personTural]
 employee.sort((a, b) => {
  let fa = a.firstname.toLowerCase(),
      fb = b.firstname.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});

employee.forEach((e) => {
  console.log(`${e.firstname} ${e.lastname} ${e.salary}`);
});