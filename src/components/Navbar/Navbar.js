import {Link} from 'react-router-dom'
import './Navbar.css';
export default function Navbar(props){
    return(
        <div className="nav">
           <Link to= {"/"}> <button> Login</button></Link>
            <Link to ={'/restaurant'}><button>Restaurant</button></Link>
            <Link to ={"./cart"}><button>cart</button></Link>
        </div>
    );
}

