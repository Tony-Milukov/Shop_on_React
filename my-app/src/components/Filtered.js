import SearchPage from "../components/SearchPage"
import {useSelector} from 'react-redux'

const Filtered = () => {
        const search = useSelector((state) => state.search.searchLine);
    
    return (
        <>
           <SearchPage isHome={false} isFiltered={true}/> </>
    )
}

export default Filtered