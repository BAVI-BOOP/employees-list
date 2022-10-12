import './Header.css'

const Header = (props) => {
  return (
    <div className="header-container">
        <h2>Employee List</h2>
        <p>(Employees {props.counter} to {props.counter + 5})</p>
    </div>
  )
}

export default Header