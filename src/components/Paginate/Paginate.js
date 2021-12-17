import ReactPaginate from 'react-paginate'
const Filter = ({info,setPageNumber,pageNumber}) => {
    return(
<ReactPaginate 
className="d-flex justify-content-center gap-2 flex-wrap"
nextLinkClassName="btn btn-primary"
previousLinkClassName="btn btn-primary"
pageClassName="btn btn-primary"
nextLabel="Next"
previousLabel="Previous"
pageCount={info?.pages}
onPageChange={(data)=>{
    setPageNumber(data.selected + 1)
}}
activeClassName='active'
/>
    )
}
export default Filter