import Express from "express"
import cors from "cors"
import bodyParser  from "body-parser"
import mongoose from "mongoose"
import userinfo from "./model/user.js"


const app = Express()
app.use(cors())
app.use(bodyParser.json());


const database = "mongodb://mymongo:27017/docker-mern_stack";

mongoose.connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to DB")
}).catch(()=>{
    console.log("Not connected to DB")
})


app.get("/",(req,res)=>{
    res.send("Welcome to docker tutor")
})

app.post("/datapost",(req,res)=>{
    mongoose.model("Datapost",userinfo).create(req.body,(err,data)=>{
        if(err){
            res.send({
                result: []
            })
        }
        else{
            res.send({
                result: data
            })
        }
    })
})



app.get("/dataget",(req,res)=>{
    mongoose.model("Datapost",userinfo).find({},(err,data)=>{
        if(err){
            res.send({
                result: []
            })
        }
        else{
            res.send({
                result: data
            })
        }
    })
})

app.listen(3001,()=>{
    console.log("app is listening on port: 3001")
})