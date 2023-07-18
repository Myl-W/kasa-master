import './home.scss';
import {
    Link
} from "react-router-dom";
function Home() {
const numbers = [1, 2, 3, 4, 5, 6];
  const list = numbers.map((number,index) =>
    <div key={index.toString()} className='thumb'>
      <Link to={`/details/${index}`}>{number}</Link>
    </div>
  );
  return (
    <div>
      <main>
            <div>
              <p>Chez vous, partout et ailleurs</p>
              <div className='divOfThumbs'><br></br>
              {list}
              </div>
                            
            </div>
          
        </main>
    </div>
  );
}

export default Home;
