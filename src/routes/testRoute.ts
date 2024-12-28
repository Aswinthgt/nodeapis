import {Router} from 'express';

export const testRoute = Router();

testRoute.get('/:name', (req, res) => {
    const {name} = req.params;
    res.json({message: name});
});