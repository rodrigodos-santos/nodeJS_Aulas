import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    /*
    let usuarios = await User.findOne({
        "name.firstName":"Rodrigo"
    });
    
    gt = Greate Then = Maior
    gte = Greater Then or Equal = Maior ou Igual
    lt = Lower Then = Abaixo de
    lte = Lower Then or Equal = Abaixo de OU Igual
    */
    let usuarios = await User.find({
        age: { $gt: 20, $lt: 65 } 
    });




    console.log("USUÁRIOS", usuarios);

    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};