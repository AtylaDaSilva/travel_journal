/*Imports*/

//CSS
import './css/App.css';
import './css/Card.css';

//Components
import './components/Card';
import Card from './components/Card';

//Other data
import travel_data from './data/travel_data.json';
import globe_icon from './img/globe_icon.png';

function App() {
  return (
    <div className="App">
      <header id='app_header'>
        <div id='header_content'>
          <img src={globe_icon} id='header_icon'></img>
          <p id='header_text'>My Travel Journal</p>
        </div>
      </header>
      <div id='App_body'>
        <div className='card_container'>
          {travel_data.entries.map((element, index) => <Card key={index} entry_data={ element } />) }
        </div>
      </div>
    </div>
  );
}

export default App;
