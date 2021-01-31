import carStyles from './carStyles.module.scss'

const Car = props => {
    const inputClasses = [carStyles.input];

    if (props.title.length === 0) {
        inputClasses.push(carStyles.alert)
    } else {
        inputClasses.push(carStyles.success)
    }

    return (
        <div className={carStyles.car}>
            <h3>{props.title}</h3>
            <p>Description: <strong>{props.description}</strong></p>
            <p>year: <em>{props.year}</em></p>
            <input type="text" onChange={props.onChangeCarTitleHandler} value={props.title} className={inputClasses.join(' ')}/>
            <button onClick={props.onDeleteCarHandler}>Delete</button>
        </div>
    )
}

export default Car