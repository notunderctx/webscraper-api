import express from "express"
import {gyt} from "./logg"

const app = express()
const PORT: number = 3000;
app.use(express.json());

app.get("/",async (req,res)=>{
      let rd = await gyt();

      res.send(res.json(rd))
})

app.get("/:w",async (req,res)=>{
      let sb = req.params.w
      let rd = await gyt(sb);

      res.send(res.json(rd))
})

app.get("/r/:w",async (req,res)=>{
      let sb = req.params.w
      let rd = await gyt(`r/${sb}`);

      res.send(res.json(rd))
})

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });