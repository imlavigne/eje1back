import { gastos,  filtroFecha, filtroGasto, gastosFiltrados } from "./gastos.js";
import { save, get } from "./readWriteGastos.js";
import inquirer from "inquirer";







 

 //run ()


 const main = async()=>{
    let promptCorriendo = true
    while(promptCorriendo){
        const opciones = await inquirer.prompt([
            {
              type: 'list',
              name: 'choices',
              message: "Selecciona una opcion",
              choices:[
                {value: 1, name: "Agregar nuevo gasto"},
                {value: 2, name: "Obtener gastos"},
                {value: 3, name: "filtrar gastos"},
                {value: 99, name: "Exit"}
              ]
            },
          ])
    
        switch(opciones.choices){
            case 1:
                await run();
                break
            case 2:
                await obtenerGastos()
                break
            case 3:
                await filterOptions()
            case 99:
                promptCorriendo = false
                break
            default:
                promptCorriendo= false
                break
        }
    }
}

main()


const run = async ()=>{
    const gasto = await gastos();
 
   const gastoJson= await get("./gastos.json")
    const newGasto = [...gastoJson,gasto]
    save("./gastos.json",newGasto)
 }
 

const obtenerGastos = async ()=>{
    
    const gastos = await get("./gastos.json")
    console.log(gastos)
 }

const filterOptions =async()=>{
    const opciones = await inquirer.prompt([
   
    {
        type: 'list',
        name: 'choices',
        message: "como desea realizar el filtro",
        choices:[
          {value: 1, name: "Por fecha"},
          {value: 2, name: "Por gasto"},
    
          {value: 99, name: "Exit"}
        ]
      },
    ])

  switch(opciones.choices){
      case 1:
          await dateFilter();
          break
      case 2:
          await priceFilter()
          break
        case 99:
        break   


  }
}

const dateFilter = async ()=>{
    const filtrado= await filtroFecha()
    console.log(filtrado)
}

const priceFilter = async ()=>{
    const filtrado= await filtroGasto()
    const gastos = await get("./gastos.json")
    const filtrarGastos= await gastosFiltrados(filtrado,gastos)
    console.log(filtrarGastos)
    
}