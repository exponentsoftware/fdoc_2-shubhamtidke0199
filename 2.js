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


// 2. function which addUser to the user array only if the user does not exist.
    
 function addUser(user){
    let name = user.name
    let existingUsers = []
    
    for(let i=0; i<users.length; i++){
        existingUsers.push(users[i].name)
       }
   
       if(existingUsers.includes(name)){
           return `User "${name}" already exists`
       }
       else{
           users.push(user)
           return `User added`
       }
       
   }
   
   let newuser = { name:'Martha', age:18}
   console.log(addUser(newuser))
   

// 3. function which addUserSkill which can add skill to a user only if the user exist.

   function addSkill(user,skill){
    let existingUsers = []
    let userIndex 
  
    for(let i=0; i<users.length; i++){
      existingUsers.push(users[i].name)
    }
    
    if(existingUsers.includes(user)){
       userIndex =  existingUsers.indexOf(user)
       users[userIndex].skills.push(skill)
       return `Skill added` 
    }
    else{
      return `User does not exist`
    }
  }
  
  console.log(addSkill("Martha", "React"))
  console.log(users)
    

// 4. function which editUser if the user exist in the users array.
 
  function editUser(oldUserName,newUserName){
    let existingUsers = []
    let userIndex 
  
    for(let i=0; i<users.length; i++){
      existingUsers.push(users[i].name)
    }
    
    if(existingUsers.includes(oldUserName)){
       userIndex =  existingUsers.indexOf(oldUserName)
       users[userIndex].name = newUserName
       return `Username updated` 
    }
    else{
      return `User does not exist`
    }
  }
  
  console.log(editUser("Martha", "Marshall"))
  console.log(users)