import {useEffect,useState} from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filter/Category/InputGroup'
const Locations = () => {
    let [id,setId] = useState(1)
    let api = `https://rickandmortyapi.com/api/location/${id}`
    let [info,setInfo] = useState([])
    let {dimension,name,type} = info
    let [results,setResults] = useState([])
    let count = 51
     useEffect(()=>{
       (async function(){
       let data = await fetch(api).then(res=>res.json())
       setInfo(data)
       let a = await Promise.all(
           data.residents.map(x=>{
           return fetch(x).then(res=>res.json())
           })
       )
      setResults(a)
    
       }())
        
    },[api])
    

    return(
   <div className='container'>
       <div className='row'>
       <h1 className='text-center mb-3'>  Location : <span class="text-primary">{name}</span></h1>
       <h4 className='text-center '>  Dimension : {dimension}</h4>               
       <h6 className='text-center mb-3'>  Type : {type}</h6>               
       </div>
       <div className='row container mt-3'>
       <div className='col-3'>
          <h5 className='text-center'>Locations</h5> 
           <InputGroup total={126} name="Locations" setId={setId}/>
       </div>
       <div className='col-8'>
         <div className='row'>
          <Cards page="/locations/" results={results} />
       </div>
       </div>
   </div>
   </div>
    )
}
export default Locations