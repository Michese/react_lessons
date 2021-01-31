import './style.scss';
import Car from './car/car'
import {Component} from 'react'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            pageTitle: 'Hello, world!',
            showCars: false
        }

    }

    onDeleteCarHandler = index => {
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({
            cars
        })
    }

    onToggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeCarTitleHandler = (newTitle, index) => {
        console.log(newTitle, index)
        const cars = [...this.state.cars]
        cars[index].title = newTitle
        this.setState({
            cars
        })
    }

    changeInput = event => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        console.log('Render');
        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (<Car
                    key={index}
                    title={car.title}
                    description={car.description}
                    year={car.year}
                    onChangeCarTitleHandler={event => this.onChangeCarTitleHandler(event.target.value, index)}
                    onDeleteCarHandler={this.onDeleteCarHandler.bind(this, index)}
                />)
            })
        }

        return (
            <div className="App">
                <h1>{ this.state.pageTitle }</h1>
                <button onClick={this.onToggleCarsHandler}>Click me!</button>
                <div className={"content"}>
                    { cars }
                </div>
            </div>
        );
    }
}

export default App;
