import { useState, useRef } from "react";

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const timeoutRef = useRef(null);
    const handleSearch = (e)=>{
        const data = e.target.value;

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(()=>{
            console.log("busqueda",data);
            setSearchTerm(data);
        },500);
        
    }
    return (
        <section className="search-bar">
            <input onChange={handleSearch}/>
        </section>
        
    )
}

export default SearchFilter;