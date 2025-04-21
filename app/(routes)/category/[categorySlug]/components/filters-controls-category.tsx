import FilterOrigin from "./filter-origin";


type FiltersControlsCategoryProps = {
    setFilterOrigin: (Origin: string) => void
}

const FiltesControlCategory = (props: FiltersControlsCategoryProps) => {
    const {setFilterOrigin} = props
    return ( 
        <div className="sm:w-[350px]sm:mt-5 p-6">
            <FilterOrigin setFilterOrigin={setFilterOrigin}/>
        </div>
        
     );
}
 
export default FiltesControlCategory;