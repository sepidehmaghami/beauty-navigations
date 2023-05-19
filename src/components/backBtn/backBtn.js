import { Link } from 'react-router-dom';
import './backBtn.css';


function BackBtn() {
  return (
    <div className="backBtn">
           <Link to='/' className='toDoList'>
                <button class="btn third">Back To Home Page</button>
           </Link>
    </div>
  );
}

export default BackBtn;
