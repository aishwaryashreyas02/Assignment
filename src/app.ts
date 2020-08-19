import express from 'express';
import bodyParser from 'body-parser';
import {formJsonData} from "./parser";
import  {processDetails} from "./parser";
import url from 'url';
const app = express();
const port = 8080;

app.use(bodyParser.json({type: 'application/json'}));

app.post('/api/*', (req, res) => {
    let data : string = req.body.data;
    let q = url.parse(req.url, true);
    let indicator : boolean = false;
    if(q.pathname.includes("v2")){
        indicator = true;
    }
    const processV1Request  = async()=>{
        try{
            let frameResponseData : Array<string> = await processDetails(data);
            let outputData :any = await formJsonData(frameResponseData, indicator);
            console.log("app.ts -- processV1Request function -- response : " ,outputData);
            res.status(200).send({data:outputData});
        }catch(err){
            if(err){
                res.status(400).send({"errorMessage" :err.message});
            }
        }

    }
    processV1Request().then();
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});