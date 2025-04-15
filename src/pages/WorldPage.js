import Header from "../components/Header.js"
import Card from "../components/Card.js";
import Title from "../components/Title.js";
import '../App.css';

const WorldPage = (props) => {
  return (
    <div>
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;