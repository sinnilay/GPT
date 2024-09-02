import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'
import { run } from './GEMINI-API'
import LoadingSpinner from './loading.jsx'
import ReactMarkdown from 'react-markdown'

// function App() {
//   let [color, setcolor] = useState('red')
//   let [newval,setnewval]=useState("")
//   function call() {
//    setcolor(newval) 
//   }
//   return (
//    <>
//    <div
//    style={{backgroundColor:color}}>
//    <input type="text"
//    value={newval}
//    onChange={(e)=>setnewval(e.target.value)}
//     />
//     <br />
//     <br />
//     <button onClick={call}>CHANGE</button>
    
   
//     </div>
//    </>
//   )
// }


// function App() {
//   const [showData, setShowData] = useState(false);
//   const [name,setname]  =useState("")

//   const arr = [{
//     name:"nilay",
//     caurse:"btech"
//   },{
//     name:"Shivam",
//     caurse:"bcom"
//   },{
//     name:"Sidharth",
//     caurse:"bsc-bed"
//   },{
//     name:"Abhi",
//     caurse:"bca"
//   }]

//   const handleClick = () => {
//     setShowData(!showData); // Toggle the showData state
//   };

//   return (
//     <>
//       <input type="text"
//       value={name}
//       onChange={(e)=>(setname(e.target.value))}
//        />
       
//       <br />
//       <br />
//       <button onClick={handleClick}>SHOW DATA</button>
//       <br />
//       <br />
//       {showData && (
//         <>
//           {arr.map((n, idx) => ( 
           
//               <div key={idx}>
//               <h1>{n.name}</h1>
//               <h1>{n.caurse}</h1>
//               <br />
//             </div>
//           ))}
       
//         </>
//       )}
//     </>
//   );
// }
function App() {

  const [result, setresult] = useState("");
  const [text, settext] = useState("");
  const [load,setload] =useState(false);
  const [color,setcolor] = useState('transparent')
  // const [height,setheight] = useState('24rem')
  

async function handleClick(){
   if(text.trim()===""){
    alert("INPUT IS REQURIED ")
    return
   }
    try {
      setload(true)
      let api = await run(text)
      setresult(api)
      setload(false)
      setcolor('black')
    
    } catch (error) {
      setload(false)
      setresult("SERVOR ERROR!!!!")
      
      // setcolor('red') 

    }
 }

 async function reset(){
  settext("")
  setresult("")
  setcolor('transparent')
  setheight('24rem')
 }


  

  // Filter the array based on the input name
  // const filteredData = arr.filter(student => student.name.toLowerCase() === name.toLowerCase());

  return (
    <>
    <h1 className=' font-bold rounded-3xl inline text-black'>GPT CLONE</h1>
    <br />
    <br />
    <br />
    <br />

      <input
        className='w-72 md:w-96 h-auto p-3 text-center rounded-3xl bg-orange-100 text-black font-black'
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
        required
        placeholder='ENTER YOUR QUERY'
        autoFocus

      />
      
      <br />
      <br />
      <div className='md:flex justify-center gap-5'>
      <button className='bg-green-600 font-bold' onClick={handleClick}>SEARCH</button>
      <br />
      <br />
      <button className='bg-red-500 w-32 font-bold'  onClick={reset}>Reset</button>
      </div>
      <br />
      <br />

      {!load?(
        <div class="w-auto md:h-auto overflow-y-auto p-4 rounded-md h-96  "
        style={{backgroundColor:color,}}><h2 className='font-bold'><ReactMarkdown>{result}</ReactMarkdown></h2></div>):<LoadingSpinner />}
      {/* {showData && (
        <>
          {filteredData.length > 0 ? (
            filteredData.map((student, idx) => (
              <div key={idx}>
                <h1>{student.name}</h1>
                <h1>{student.caurse}</h1>
                <br />
              </div>
            ))
          ) : (
            <div>No student found with that name.</div>
          )}
        </>
      )} */}
    
    </>
  );
}






export default App
