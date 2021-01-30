import './style.css';
import Car from './car/car'
import {Component} from 'react'

class App extends Component {

    state = {
        cars: [
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
        ],
        pageTitle: 'Hello, world!'
    }

    render() {
        const cars = this.state.cars;
        return (
            <div className="App">
                <h1>{ this.state.pageTitle }</h1>
                <div className={"content"}>
                    <Car title={cars[0].title} description={cars[0].description} year={cars[0].year}/>
                    <Car title={cars[1].title} description={cars[1].description} year={cars[1].year}/>
                    <Car title={cars[2].title} description={cars[2].description} year={cars[2].year}/>
                </div>
            </div>
        );
    }
}

export default App;
