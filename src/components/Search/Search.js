import styles from './search.module.scss'
const Search = ({setSearch,setPageNumber}) => {
    return(
    <form className='d-flex justify-content-center gap-4 mb-4'>
        <input type="text" placeholder="Search your characters" className={styles.input} onChange={(e)=>{
            setSearch(e.target.value)
            setPageNumber(1)
        }} />
        <button type="button" className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
    </form>
    )
}
export default Search