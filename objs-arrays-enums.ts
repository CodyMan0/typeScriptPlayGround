// const person: {
//   name: string;
//   age: number; 
// } 

// const person:{
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]

// } = {
//   name : 'juyoung',
//   age: 27,
//   hobbies:['Sports','Cooking'],
//   role : [2,'author']
// };

enum Role { ADMIN='ADMIN', READ_ONLY=100, AUTHOR='AUTHOR'};

const person = {
  name : 'juyoung',
  age: 27,
  hobbies:['Sports','Cooking'],
  role: Role.ADMIN,
}


let favoriteActivities: string[];
favoriteActivities = ['Sports']

if(person.role === Role.AUTHOR){
  console.log('is author');
}

 