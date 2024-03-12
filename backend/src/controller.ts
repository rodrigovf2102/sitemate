import { Request ,Response } from "express";
import httpStatus from "http-status";
import { service } from "./service";
import { JsonObj } from "./protocols";

export async function getJsons(req: Request, res: Response){
    try {
        const jsons = service.getJson();
        return res.status(httpStatus.OK).send(jsons); 
    } catch (error) {
        console.log(error);
    }
}

export async function postJson(req: Request, res: Response){
    try {
        const json : JsonObj = req.body
        service.postJson(json);
        return res.status(httpStatus.CREATED).send(json); 
    } catch (error) {
        console.log(error);
    }
}

export async function updateJsonById(req: Request, res: Response){
    try {
        const jsonUpdate : JsonObj = req.body
        service.updateJsonById(jsonUpdate);
        return res.status(httpStatus.OK).send(jsonUpdate); 
    } catch (error) {
        console.log(error);
    }
}

export async function deleteJsonById(req: Request, res: Response){
    try {
        const jsonDelete : JsonObj = req.body
        service.deleteJsonById(jsonDelete);
        return res.status(httpStatus.OK).send(jsonDelete); 
    } catch (error) {
        console.log(error);
    }
}