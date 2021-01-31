import car from './car.module.scss'

let Car = props => {
    const inputClasses = [car.input];

    if (props.title.length === 0) {
        inputClasses.push(car.alert)
    } else {
        inputClasses.push(car.success)
    }

    return (
        <div className={car.car}>
            <h3>{props.title}</h3>
            <p>Description: <strong>{props.description}</strong></p>
            <p>year: <em>{props.year}</em></p>
            <input type="text" onChange={props.onChangeCarTitleHandler} value={props.title} className={inputClasses.join(' ')}/>
            <button onClick={props.onDeleteCarHandler}>Delete</button>
        </div>
    )
}

export default Car