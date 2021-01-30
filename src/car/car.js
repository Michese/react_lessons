const Car = props => (
    <div className="car">
        <h3>{props.title}</h3>
        <p>Description: <strong>{props.description}</strong></p>
        <p>year: <em>{props.year}</em></p>
    </div>
)

export default Car