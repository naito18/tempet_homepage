import { Link } from '@tanstack/react-router';
import { css } from "../styled-system/css"


function App() {
  return (
    <div>
      <div>
        <Link to='/about'className={css({
          backgroundColor: "red",
        })}>To About</Link>  
      </div>
      <div>
        <Link to='/top'className={css({
          backgroundColor: "red",
        })}>To Top</Link>
      </div>
    </div>
  );
}

export default App
