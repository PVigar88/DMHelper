import {Link} from 'react-router-dom'

function Header() {
    return (
      <div className="Header">
        <header className="App-header">
          <h1>DMHelper</h1>
        </header>
        <nav>
            <Link to="">Home</Link>
            <Link to="">Fall Calculator</Link>
            <Link to="">Initiative Tracker</Link>
        </nav>
      </div>
    );
  }
  
  export default Header;