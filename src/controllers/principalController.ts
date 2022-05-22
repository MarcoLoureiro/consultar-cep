import { Request,Response } from "express";
import { consultaApi } from "../models/Cep";
import axios from "axios";

export const home = (req:Request,res:Response) =>{
    res.render('pages/home');
}


export const consultaCep = async (req:Request,res:Response) =>{

    let ceps=[];
    let {cep,cep2,cep3,cep4,cep5} = req.body;
    if(cep){
        let consulta = await consultaApi(cep as string);
        console.log(consulta);
        ceps.push(consulta);
        let consulta2 = await consultaApi(cep2 as string);
        ceps.push(consulta2);
        let consulta3 = await consultaApi(cep3 as string);
        ceps.push(consulta3);
        let consulta4 = await consultaApi(cep4 as string);
        ceps.push(consulta4);
        let consulta5 = await consultaApi(cep5 as string);
        ceps.push(consulta5);
        console.log(ceps);
    }

    res.render('pages/ceps',{
        ceps
    });

}