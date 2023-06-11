
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
    message: "¿cuando? (ingrese la fecha con el formato dd.mm.yy)",

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
  message: "Ingrese la fecha que desea filtrar (formato dd.mm.yy)",
},
]

const filtrarPorNombre =[
  {
  
  type: 'input',
  name: 'name',
  message: "Ingrese el gasto",
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



export const filtrarNombre =()=>{
  return new Promise((resolve, reject)=>{
      try{
          inquirer.prompt(filtrarPorNombre)
          .then(ans=>{resolve(ans)
           })
  }catch(error){
      reject(error)
  }

})
}

export const gastosFiltrados =(filtrado,gastos)=>{
  let filtrados = gastos.filter(gastos=>gastos.price===filtrado.gastos)
  return(filtrados)
  // console.log(filtrados)
}

export const nombreFiltrados =(filtrado,gastos)=>{
  // console.log("hola")
  let filtrados = gastos.filter(gastos=>gastos.item===filtrado.Nombre)
  return(filtrados)
   console.log(filtrados)
}