const FilterBtn = ({item,index,name,setPageNumber,task}) =>{
    
    return(
        <div>
            <style jsx>
             {`
             .x:checked + label{
                 background-color:#0b5ed7;
                 color:#fff;
             }
             input[type=radio]{
                 display:none;
             }
             `}
            </style>
        <div className="form-check mb-2">
        <input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} onClick={()=>{task(item); setPageNumber(1)}} />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>{item}</label>
      </div>
      </div>
    )
}
export default FilterBtn