// import { Root, Searchinput } from "./styles";
import './styles.scss'
import SearchIcon from '../../../public/search.svg';


const SearchBar = () => {
  return (
    <div className="searchBarContainer">

      <input placeholder="Buscar suscripciones" className="searchBox"/>

    </div>
  );
};

export default SearchBar;
