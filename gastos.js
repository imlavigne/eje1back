
import inquirer from 'inquirer';
import { resolve } from 'path';


const questions = [
  {
    type: 'input',
    name: 'item',
    message: "¿cual fue el gasto?",
  },
  {
    type: 'input',
    name: 'price',
    message: "¿precio?",

  },
 
];

// inquirer.prompt(questions).then((answers) => {
//   console.log(JSON.stringify(answers));
// });

export const gastos =()=>{
    return new Promise((resolve, reject)=>{
        try{
            inquirer.prompt(questions)
            .then(ans=>{resolve(ans)
             })
    }catch(error){
        reject(error)
    }

})
}
    