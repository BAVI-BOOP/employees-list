import './employees.css';
import { data } from "../../helpers/data/data";

const employees = (props) => {
let count = props.count;
console.log(count)
  return (
    <div className='columns'>

{data.slice(count,count+5).map((item) =>{
            return <div className="employees-container">
            <div>
                <img src={item.image} alt="employee" />
            </div>
                    <div key={item.id}>
                    <p className='name'>{item.name}</p>
                    <p className='mail'>{item.email}</p>
                    <p className='age'>{item.age}</p>
                </div>
    
        </div>

        })}

    </div>
  )
}

export default employees