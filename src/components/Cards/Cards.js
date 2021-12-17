import styles from './cards.module.scss'
import { Link } from 'react-router-dom';
const Cards = ({results,page}) => {
    let display;
    if(results){
    display = results.map((item)=>{
        let {id,name,image,location,status} = item
        return(
        <Link to={`${page}${id}`}
         className="col-sm-4 col-12 position-relative mb-4 text-dark"
          key={id}
          style={{textDecoration:'none'}}
          >
        <div className={`${styles.cards} `}>
                <img src={image} alt="" className={`img-fluid ${styles.img}`} />
                <div className="content" style={{padding:"10px"}}>
                  <div className="fw-bold fs-4 mb-4">{name}</div>
                  <div className="">
                      <div className="fs-6">Last Location</div>
                      <div className="fs-5">{location.name}</div>
                  </div>
                </div>
                {(()=>{
                    if(status==="Alive"){
                        return(
                    <div className={`position-absolute badge bg-success ${styles.badge}`}>
                      {status}
                    </div>
                        )
                    }
                    else if(status==="Dead"){
                        return(
                            <div className={`position-absolute badge bg-danger ${styles.badge}`}>
                            {status}
                          </div>
                        )
                    }
                    else{
                        return(
                            <div className={`position-absolute badge bg-secondary ${styles.badge}`}>
                            {status}
                          </div>
                        )
                    }
                })()}
                
        </div>
        </Link>)
    })
    }
    else{
        display = "No Chracters Found :/"
    }
    return(<>
   {display}
    </>)
}
export default Cards