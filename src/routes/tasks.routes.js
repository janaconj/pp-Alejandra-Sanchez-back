import { Router } from 'express';
const router = Router();

//Database connection
import { connect } from '../database';
import { ObjectID } from 'mongodb';

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('users').find({}).toArray();
    res.send(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const user = {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        genre: req.body.genre,
        dateOfCreation: req.body.dateOfCreation
    };
    const result = await db.collection('users').insertOne(user);
    res.json(result.ops[0]);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('users').findOne({_id: ObjectID(id)});
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('users').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `User ${id} deleted`,
        result
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const updateUser = {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        genre: req.body.genre,
        dateOfCreation: req.body.dateOfCreation
    };
    await db.collection('users').updateOne({_id: ObjectID(id)}, {$set: updateUser});
    res.json({
        message: `User ${id} updated`
    });
});

export default router;