let Car = props => (
    <div className="car">
        <h3>{props.title}</h3>
        <p>Description: <strong>{props.description}</strong></p>
        <p>year: <em>{props.year}</em></p>
        <input type="text" onChange={props.onChangeCarTitleHandler} value={props.title}/>
        <button onClick={props.onDeleteCarHandler}>Delete</button>
    </div>
)

export default Car