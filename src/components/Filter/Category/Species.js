import FilterBtn from "../FilterBtn";
const Species = ({setPageNumber,setSpecies}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
    return(
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Species
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap">
            {species.map((item,index) => (
                <FilterBtn index={index}
                 item={item} name="species"
                  setPageNumber={setPageNumber} 
                  task={setSpecies}
                  key={index} />
            ))}
          </div>
        </div>
      </div>
    )
}
export default Species