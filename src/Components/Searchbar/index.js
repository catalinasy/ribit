// import { Root, Searchinput } from "./styles";
import './styles.scss'
import SearchIcon from '../../../public/search.svg';


const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input className="searchBox"/>
      <SearchIcon width='20px'/>
    </div>
  );
};

export default SearchBar;
