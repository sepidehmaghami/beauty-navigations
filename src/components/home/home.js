import './home.css';
import { Link } from 'react-router-dom';
import Nav1 from '../asserts/nav1.jpg'
import Nav2 from '../asserts/nav2.jpg';
import Nav3 from '../asserts/nav3.jpg';
import Nav4 from '../asserts/nav4.jpg';

function Home() {
  return (
    <div className="home">
        <h1>
          Beauty navigations
        </h1>
        <div className='navs'>
          <div className='home-cart'>
            <Link to='/nav1' className='toDoList'>
              <img src={Nav1} alt="ToDoList"/>
              <p>navigation 1</p>
            </Link>
          </div>

          <div className='home-cart'>
            <Link to='/nav2' className='toDoList'>
              <img src={Nav2} alt="ToDoList"/>
              <p>navigation 2</p>
            </Link>
          </div>

          </div>

        <div className='navs'>
          <div className='home-cart'>
            <Link to='/nav3' className='toDoList'>
              <img src={Nav3} alt="ToDoList"/>
              <p>navigation 3</p>
            </Link>
          </div>

          <div className='home-cart'>
            <Link to='/nav4' className='toDoList'>
              <img src={Nav4} alt="ToDoList"/>
              <p>navigation 4</p>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
