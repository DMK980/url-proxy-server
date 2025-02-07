const express = require('express');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = 3000

app.use(cors())
app.use(bodyParser.json());
  
app.get('/',(req,res)=>{
    res.json({message:"Hello World!"})
})
app.post('/shortening',async (req,res)=>{
    try {
        const data = await axios.post("https://cleanuri.com/api/v1/shorten",{
            url:req.body.url
        })
        res.json({response:data.data.result_url}) 
    } catch (error) {
        res.send(error)  
    }
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

