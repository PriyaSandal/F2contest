/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((element) =>{
        if(element.profession ==="developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) =>{
        if(element.profession ==="developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
  
  let newarr ={id: 4, name: "Raman", age: "28", profession: "intern" }

  arr.push(newarr);
  console.log(arr);

  }
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((element) =>{
        if(element.profession!=="admin"){
            console.log(element);
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployess=[
        {id: 5, name: "Harry", age: "18", profession: "Devops"},
        {id: 7, name: "Anku", age: "25", profession: "Developer"},
        {id: 10, name: "Ritz", age: "45", profession: "Engineer"}
];

let add= arr.concat(newEmployess);
console.log(add);
  }