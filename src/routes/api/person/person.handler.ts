import * as express from "express";
import persons from "../../../data/person";

export class PersonHandler {
    public static list(req: express.Request, res: express.Response, next: express.NextFunction): any {
        res.status(200);
        return res.json(persons);
    }

    public static add(req: express.Request, res: express.Response, next: express.NextFunction): any {
        const data = req.body;
        persons.push(data);
        res.status(200);
        return res.json(persons);
    }

    public static edit(req: express.Request, res: express.Response, next: express.NextFunction): any {
        const data = req.body;
        const id =  req.params.id || "";
        const index = persons.findIndex(item => item.id === id);
        if (index !== -1) {
            persons[index] = data;
            res.status(200);
            return res.json({
                data: data,
                message: "update successful"
            })
        } else {
            next("update unsuccessful");
        }
    }

    public static remove(req: express.Request, res: express.Response, next: express.NextFunction): any {
        const id =  req.params.id || "";
        const index = persons.findIndex(item => item.id === id);
        if (index !== -1) {
            persons.splice(index, 1);
            res.status(200);
            return res.json({
                message: "delete successful"
            })
        } else {
            next("delete unsuccessful");
        }
    }

}

export default PersonHandler