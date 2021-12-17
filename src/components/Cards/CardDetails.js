import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styles from './CardDetails.module.scss'
const CardDetails = () =>{
    let {id} = useParams()
    let api = `https://rickandmortyapi.com/api/character/${id}`
    let[fetchData,updateFetchData] = useState([])
    let {name,image,origin,gender,status,species,type,location} = fetchData
    useEffect(()=>{
    async function fetchData(){
        const data = await fetch(api).then(res=>res.json())
        updateFetchData(data)
    }
    fetchData()
    })
    
    return(
        <div className="container d-flex justify-content-center">
            <div>
               <h1 className="text-center">{name}</h1> 
               <div className="mb-2">
               <img src={image} alt="" className="img-fluid"/>
               </div>
               {(()=>{
                    if(status==="Alive"){
                        return(
                    <div className={`badge bg-success ${styles.badge}`}>
                      {status}
                    </div>
                        )
                    }
                    else if(status==="Dead"){
                        return(
                            <div className={`badge bg-danger ${styles.badge}`}>
                            {status}
                          </div>
                        )
                    }
                    else{
                        return(
                            <div className={`badge bg-secondary ${styles.badge}`}>
                            {status}
                          </div>
                        )
                    }
                })()}
                <div className="content">
                    <div>
                    <span className="fw-bold">Gender: {gender}</span>
                    </div>
                    <div>
                    <span className="fw-bold">Species: {species}</span>
                    </div>
                    <div>
                    <span className="fw-bold">Type: {type==""? "Unknown" : type}</span>
                    </div>
                    <div>
                    <span className="fw-bold">Location: {location?.name}</span>
                    </div>
                    <div>
                    <span className="fw-bold">Origin: {origin?.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetails