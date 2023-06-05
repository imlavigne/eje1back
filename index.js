import { gastos } from "./gastos.js";
import { save, get } from "./readWriteGastos.js";

const run = async ()=>{
    const gasto = await gastos();
    

    const gastoJson= await get("./gastos.json")

    const newGasto = [...gastoJson,gasto]

    save("./gastos.json",newGasto)

 
}

run ()