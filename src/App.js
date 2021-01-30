import './style.css';
import Car from './car/car'

function App() {
    const colorStyle = {
        color: 'red',
        fontSize: 34
    }

    const props = [
        {
            title: 'car1',
            description: 'Lorem ipsum dolor sit amet.',
            year: 2020
        },
        {
            title: 'car2',
            description: 'Lorem ipsum dolor sit amet.',
            year: 2021
        },
        {
            title: 'car3',
            description: 'Lorem ipsum dolor sit amet.',
            year: 2016
        }
    ]
    return (
        <div className="App">
            <h1>Hello, world!</h1>
            <div className={"content"}>
                <Car title={props[0].title} description={props[0].description} year={props[0].year}>
                    <p style={ colorStyle }>COLOR</p>
                </Car>
                <Car title={props[1].title} description={props[1].description} year={props[1].year}/>
                <Car title={props[2].title} description={props[2].description} year={props[2].year}/>
            </div>
        </div>
    );
}

export default App;
