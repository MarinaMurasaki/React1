//TopPage.js
import Header from "../components/Header.js"
import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";
import { BrowserRouter, Routes } from "react-router-dom";
import '../App.css';

const TopPage = (props) => {
  return (
    <div>
      <Header />
      <Title />
      <Selector 
        countriesJson={props.countriesJson} 
        setCountry={props.setCountry} 
        getCountryData={props.getCountryData}
      />
      <Results countryData={props.countryData} />
    </div>
  )
}

export default TopPage;