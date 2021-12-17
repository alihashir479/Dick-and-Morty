const InputGroup = ({total,name,setId}) => {
    return(
<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02" onChange={e=>setId(e.target.value)} >
     
    <option selected value="1">Choose...</option>
 {[...Array(total).keys()].map(x=>{
     return(
<option value={x+1} id={x+1}>{`${name} - ${x+1}`}</option>
     )
     
 })
 
 }
  </select>
</div>
    )
}
export default InputGroup