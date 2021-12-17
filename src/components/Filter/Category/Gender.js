import FilterBtn from "../FilterBtn"

const Gender = ({setPageNumber,setGender}) => {
    let gender = ['male','female','withoutGender','unknown']
    return(
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Gender
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap">
         {gender.map((item,index)=>(
            <FilterBtn item={item}
            index={index}
            key={index}
            name="gender"
            setPageNumber={setPageNumber}
            task={setGender}
            />
         ))}
          </div>
        </div>
      </div>
    )
}
export default Gender