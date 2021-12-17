import Status from "./Category/Status"
import Species from "./Category/Species"
import Gender from "./Category/Gender"
const Filter = ({setPageNumber,setStatus,setGender,setSpecies}) => {
    return(<div>
    <div className="fw-bold text-center mb-2 fs-5">Filter</div>
    <div onClick={()=>{
        setStatus("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    }} className=" text-decoration-underline text-primary text-center fs-6 mb-4" style={{cursor:'pointer'}}>Clear Filters</div>
    <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
</div>
    </div>)
}
export default Filter