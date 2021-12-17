import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filter from './components/Filter/Filter'
import Navbar from "./components/Navbar/Navbar";
import Paginate from './components/Paginate/Paginate'
import Search from "./components/Search/Search";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import CardDetails from "./components/Cards/CardDetails";
function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}
 const Home = () => {
 let [pageNumber,setPageNumber] = useState(1);
 let [search,setSearch] = useState("");
 let [status,setStatus] = useState("")
 let [gender,setGender] = useState("")
 let [species,setSpecies] = useState("")
 let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
 let [fetchedData,updateFetchedData] = useState([])
 let {info,results} = fetchedData;
 useEffect(()=>{
 (async function(){
   let data = await fetch(api).then(res=>res.json())
   updateFetchedData(data)
 })()
 },[api])
  return (
    <div className="App ubuntu my-4">
  

  <Search setSearch={setSearch} setPageNumber={setPageNumber} />
  <div className="container">
    <div className="row">
      <div className="col-sm-3 col-12">
        <Filter setStatus={setStatus} setGender={setGender} setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        </div>
      <div className="col-sm-8 col-12">
        <div className="row">
        <Cards page="/" results={results}/>
        </div>
       
      </div>
    </div>
  </div>
  <div className="">
    <Paginate info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
  </div>
    </div>
  );
}

export default App;
