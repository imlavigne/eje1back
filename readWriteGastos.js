import { error } from "console"
import fs from "fs"
import { resolve } from "path"

export const get=(file)=>{
    return new Promise ((resolve , reject)=>{
        fs.readFile(file,"utf-8",(error,contenido)=>{
            if(error){
                reject(error)
            }else{
                resolve(JSON.parse(contenido))
            }
        })
    })
}

export const save = (file,newData)=>{
    return new Promise((resolve , reject)=>{
        fs.writeFile(file,JSON.stringify(newData),(error)=>{
            if(error){
                reject(error)
                }else{
                    resolve("gasto cargado")
                }
    })
    })
}