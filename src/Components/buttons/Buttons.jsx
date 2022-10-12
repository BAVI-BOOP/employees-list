import "./Buttons.css"

const Buttons = (props) => {
 // console.log(props)
  return (
    <div className="button-container">
        <button value="Prev" onClick={props.func}>Prev</button>
        <button value="Next" onClick={props.func}>Next</button>
    </div>
  )
}

export default Buttons