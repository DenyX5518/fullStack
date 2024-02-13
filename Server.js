const express = require('express');
const bodyParser = require("body-parser")
const {MongoClient, ObjectId} = require('mongodb');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});
app.use(bodyParser.json());
const PORT = 9999;
const Client = new MongoClient("mongodb+srv://Danya:DANIK17-152855@cluster0.2jeotfl.mongodb.net/?retryWrites=true&w=majority")


async function connectDB() {
    try {
        await Client.connect();   
        console.log("Connected");
    }
    catch (e){
        console.log(e);
    }
}

app.get("/", async(req, res) => {
    const list = Client.db("list").collection('goals');
    const goals = await list.find().toArray();
    res.send(goals)
})

app.post("/", async (req, res) => {
    const list = Client.db("list").collection('goals');
    if (req.body.body == 'create') {
        console.log("its creating")
        if (await list.findOne({ title: req.body.title }) == null || list.findOne({ description: req.body.description }) == null) {
            await list.insertOne({ title: req.body.title, description: req.body.description, deadline: req.body.deadline })
            const newGoals = await list.find().toArray();
            res.send(newGoals);
        }
        else {
            console.log("Уже существует")
            res.send("Err! Уже сущестует")
        }
    }
    else if (req.body.body == "delete") {
        await list.deleteOne({ _id: new ObjectId(`${req.body.id}`) });
        const delGoals = await list.find().toArray();
        res.send(delGoals);
    }
})

app.listen(PORT, () => {
    console.log("Works!");
    connectDB();
})