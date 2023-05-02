import {useState} from 'react'
function App() {
  const [data, setData]=useState("123   jgjgg")
  // const [data1, setData1]=useState('1')
  const [name, setName]=useState('2')
  // const [name1, setName1]=useState("3")
  // const [name2, setName2]=useState("4")
  // const [name3, setName3]=useState("5")
  const [arr, setArr]=useState(['6'])
//   function updateData()
//  {  setArr(['Asim ', ' raza ',' khani'])
//     setData1(myArray)
//   // setData(console.log("clicked")

//   const firstName = "zain";
//   const secName ='Ashan';
//   const thrName ='Ashan';
//   const forName ='Ashan';
//   setName(firstName);
//   setName1(secName);
//   setName2(thrName);
//   setName3(forName);
//   return({ setArr}, {setName}, {setName2}, {setName3});
//   };
  // const myArray = () => {
  //   const myList = ["a","b"];
  //   return  myList;
  // }
  // setData(updateData)
// const user = ['hamza','izhar','wajid']
// const [data,setData] = useState(user)
//Hafiz bhai ka function add kar
function upDate(){
  setData(['fida ', 'raza ', 'asim '])
}
  
  return( 
    <div className="App">
       <h1>{data}  </h1>
       <button onClick={upDate}>Click Me</button>
    </div>
  );
  
}

export default App;
