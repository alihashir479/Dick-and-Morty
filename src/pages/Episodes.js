import {useEffect,useState} from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filter/Category/InputGroup'
const Episodes = () => {
    let [id,setId] = useState(1)
    let api = `https://rickandmortyapi.com/api/episode/${id}`
    let [info,setInfo] = useState([])
    let {air_date,name} = info
    let [results,setResults] = useState([])
    let count = 51
     useEffect(()=>{
       (async function(){
       let data = await fetch(api).then(res=>res.json())
       setInfo(data)
       let a = await Promise.all(
           data.characters.map(x=>{
           return fetch(x).then(res=>res.json())
           })
       )
      setResults(a)
    
       }())
        
    },[api])
    

    return(
   <div className='container'>
       <div className='row'>
       <h1 className='text-center mb-3'>  Episode : <span class="text-primary">{name}</span></h1>
       <h1 className='text-center mb-3'>  AirDate : {air_date}</h1>               
       </div>
       <div className='row container mt-3'>
       <div className='col-3'>
          <h5 className='text-center'>Pick an Episode</h5> 
           <InputGroup total={51} name="Episode" setId={setId}/>
       </div>
       <div className='col-8'>
         <div className='row'>
          <Cards page="/episodes/" results={results} />
       </div>
       </div>
   </div>
   </div>
    )
}
export default Episodes