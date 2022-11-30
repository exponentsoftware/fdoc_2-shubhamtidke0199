// 1. Write a function which filter users who has scoresGreaterThan85,
// 2. Write a function which addUser to the user array only if the user does not exist.
// 3. Write a function which addUserSkill which can add skill to a user only if the user exist.
// 4. Write a function which editUser if the user exist in the users array.




const users = [
    {
      name:'Brook', 
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    }, 
    {
      name:'David', 
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    }, 
    {
      name:'John', 
      scores:85,
      skills:['HTM'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ];

    
// 1. function which filter users who has scoresGreaterThan85,.
    function greaterThan85(arr){
      return arr.filter((data)=>{
        return data.scores > 85
      })
    }
  
    console.log(greaterThan85(users))


    
    
 