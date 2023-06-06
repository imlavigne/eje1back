
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
  {
    type: 'date',
    name: 'date',
    message: "¿cuando?",

  },

];

const filtrarPorGasto =[
  {
  
  type: 'input',
  name: 'gastos',
  message: "Ingrese el gasto que desea filtrar",
},
]
const filtrarPorFecha =[
  {
  
  type: 'input',
  name: 'fecha',
  message: "Ingrese la fecha que desea filtrar",
},
]


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

export const filtroFecha =()=>{
  return new Promise((resolve, reject)=>{
      try{
          inquirer.prompt(filtrarPorFecha)
          .then(ans=>{resolve(ans)
           })
  }catch(error){
      reject(error)
  }

})
}
 

export const filtroGasto =()=>{
  return new Promise((resolve, reject)=>{
      try{
          inquirer.prompt(filtrarPorGasto)
          .then(ans=>{resolve(ans)
           })
  }catch(error){
      reject(error)
  }

})
}


export const gastosFiltrados =(filtro,lista)=>{
  let filtrados = lista.filter(lista=>lista.price===filtro.gastos)
  return(filtrados)
  // console.log(filtrados)
}