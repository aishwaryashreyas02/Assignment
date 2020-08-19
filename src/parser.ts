 export  function processDetails (data : string) {

     try {
         let limiter1: string = "0000";
         let limiter2: string = "000";
         let resultArray: Array<string> = [];
         let firstName: string = data.split(limiter1, 1).toString();
         resultArray.push(firstName);
         let nextPart: string[] = data.split(limiter1);
         let x: string = nextPart[1];
         let y: string[] = x.split(limiter2);
         let lastName = y[0];
         resultArray.push(lastName);
         let processClientId: string = y[1];
         resultArray.push(processClientId);
         let clientId = processClientId.slice(0, 3) + "-" + processClientId.slice(3);
         resultArray.push(clientId);
         console.log("parser.ts -- processDetails function -- resultArray : ", resultArray);
         return (resultArray);
     }catch(err){
         throw new Error(err);

     }

 }

 export const formJsonData :any = async (data : Array<string>, versionIndicator : boolean) =>{
     let responseJson : {
         firstName : string,
         lastName : string,
         clientId : string
     };
     if(versionIndicator) {
         responseJson = {
             "firstName": data[0],
             "lastName": data[1],
             "clientId": data[3]
         }
     }else{
         responseJson = {
             "firstName": data[0]+"0000",
             "lastName": data[1]+"000",
             "clientId": data[2]
         }
     }
     console.log("parser.ts -- formJsonData function : response : " ,responseJson);
    return responseJson;

}
