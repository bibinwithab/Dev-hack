const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    passingYear : String,
    department : String,
    bio : String
})

const doubtSchema = new mongoose.Schema({
    doubt:String,
    answer: {
        type: [String],
        default: []
    }
})

const teamSchema = new mongoose.Schema({
    title:String,
    description:String,
    comment:{
        type:String,
        default: []
    }
})

const volunteerSchema = new mongoose.Schema({
    title:String,
    description:String,
    comment:{
        type:String,
        default: []
    }
})

const UserData = mongoose.model("UserData", dataSchema);
const DoubtData = mongoose.model("DoubtData", doubtSchema);
const TeamData = mongoose.model("TeamData", teamSchema);
const VolunteerData = mongoose.model("VolunteerData", volunteerSchema);

app.get('/', (req, res) => {
    res.json({
        message: 'Go to /data'
    })
})

app.get('/data', async (req, res) => {
    const data = await UserData.find();
    res.json(data);
})

app.post('/data', async (req, res) => {
    const data = new UserData(req.body);
    const savedData = await data.save();
    res.json(savedData);
})

app.get('/doubts', async (req,res)=>{
    const data = await DoubtData.find();
    res.json(data);
})

app.post('/doubts', async (req,res)=>{
    const data = new DoubtData(req.body);
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/doubts/:id/doubt', async (req, res)=>{
    const data = await DoubtData.findById(req.params.id);
    data.doubt = req.body.doubt;
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/doubts/:id/answer', async (req,res)=>{
    const data = await DoubtData.findById(req.params.id);
    data.answer.push(req.body.answer);
    const savedData = await data.save();
    res.json(savedData);
})

app.delete('/doubts/:id', async (req,res)=>{
    const data = await DoubtData.findByIdAndDelete(req.params.id);
    res.json(data);
})

app.delete('/doubts/:id/answer/:index', async (req,res)=>{
    const data = await DoubtData.findById(req.params.id);
    data.answer.splice(req.params.index,1);
    const savedData = await data.save();
    res.json(savedData);
})

app.get('/team', async (req,res)=>{
    const data = await TeamData.find();
    res.json(data);
})

app.post('/team', async (req,res)=>{
    const data = new TeamData(req.body);
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/team/:id/title', async (req, res)=>{
    const data = await TeamData.findById(req.params.id);
    data.title = req.body.title;
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/team/:id/description', async (req, res)=>{
    const data = await TeamData.findById(req.params.id);
    data.description = req.body.description;
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/team/:id/comment', async (req,res)=>{
    const data = await TeamData.findById(req.params.id);
    data.comment.push(req.body.comment);
    const savedData = await data.save();
    res.json(savedData);
})

app.delete('/team/:id', async (req,res)=>{
    const data = await TeamData.findByIdAndDelete(req.params.id);
    res.json(data);
})

app.delete('/team/:id/comment/:index', async (req,res)=>{
    const data = await TeamData.findById(req.params.id);
    data.comment.splice(req.params.index,1);
    const savedData = await data.save();
    res.json(savedData);
})

app.get('/volunteer', async (req,res)=>{
    const data = await VolunteerData.find();
    res.json(data);
})

app.post('/volunteer', async (req,res)=>{
    const data = new VolunteerData(req.body);
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/volunteer/:id/title', async (req, res)=>{
    const data = await VolunteerData.findById(req.params.id);
    data.title = req.body.title;
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/volunteer/:id/description', async (req, res)=>{
    const data = await VolunteerData.findById(req.params.id);
    data.description = req.body.description;
    const savedData = await data.save();
    res.json(savedData);
})

app.put('/volunteer/:id/comment', async (req,res)=>{
    const data = await VolunteerData.findById(req.params.id);
    data.comment.push(req.body.comment);
    const savedData = await data.save();
    res.json(savedData);
})

app.delete('/volunteer/:id', async (req,res)=>{
    const data = await VolunteerData.findByIdAndDelete(req.params.id);
    res.json(data);
})

app.delete('/volunteer/:id/comment/:index', async (req,res)=>{
    const data = await VolunteerData.findById(req.params.id);
    data.comment.splice(req.params.index,1);
    const savedData = await data.save();
    res.json(savedData);
})

app.listen(PORT, () => {
    console.log(`heard at http://localhost:${PORT}/`);
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("DB connected")
    })
})
