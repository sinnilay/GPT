import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY="AIzaSyApECE9JixZkl0xLwB-a9JwpiKRmXk_e8c"
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
// const name="NILAY"
// const caurse="B-TECH"
// const branch ="CSE"
// const favsub="DSA"

export async function run(prompt) {
    // let prompt = `HELLO MY NAME IS ${name},I am doing ${caurse} in ${branch} please give counceeling for future 
    // and my in intreseted sunbject is ${favsub},Give it in precise and accurate manner and also in proffesional way `
    prompt=  prompt.toLowerCase()
    // console.log(prompt);
    if (prompt === "who devloped you"|| prompt=== "wdu" || prompt==="who made you") {
        // console.log("NILAY SINGH")
        return new Promise((resolve) => {
          setTimeout(() => {
              resolve("NILAY SINGH STUDENT OF BTECH CS, SAIT JABALPUR");
          }, 3000); 
      });
    }
    else{
    const result = await model.generateContent(prompt);
    // console.log(result);
    
    const response = await result.response;
    // console.log(response);
    
    let text =  response.text();
    // text = text.replace(/\*\*(.*?)\*\*/g, '$1');
    console.log(text);
    return text;
    }
  }
  
  // run();


