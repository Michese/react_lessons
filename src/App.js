import './style.css';
import Car from './car/car'

function App() {
  const props = {
    title: 'car',
    description: 'Lorem ipsum dolor sit amet.',
    year: 2021
  }
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <div className={"content"}>
        <Car title={"hello"} description={"Lorem ipsum dolor sit amet."} year={2020} />
        <Car title = {props.title} description={props.description} year={props.year} />
      </div>
    </div>
  );
}

export default App;
