//TopPage.js
import Header from "../components/Header"
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { BrowserRouter, Routes } from "react-router-dom";
import '../App.css';
import { TopPageType } from "../types"


const TopPage = ({countriesJson, setCountry, getCountryData, countryData, loading}: TopPageType) => {
  return (
    <div className="to-page-container">
      <Header />
      <Title />
      <Selector 
        countriesJson={countriesJson} 
        setCountry={setCountry} 
        getCountryData={getCountryData}
        />
      <Results countryData={countryData} loading={loading}/>
    </div>
  )
}

export default TopPage;