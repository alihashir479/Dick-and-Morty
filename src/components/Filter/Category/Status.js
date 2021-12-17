import FilterBtn from "../FilterBtn"

const Status = ({setPageNumber,setStatus}) => {
    let statuses = ['Alive','Dead','Unknown']
    return(
<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap">
       {statuses.map((item,index)=>(
           <FilterBtn index={index}
           item={item}
           name="status"
           setPageNumber={setPageNumber}
           task={setStatus}
           key={index}
           />
       ))}
      </div>
    </div>
  </div>
    )
}
export default Status