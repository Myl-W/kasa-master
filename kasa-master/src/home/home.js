import './home.scss';
import {
    Link
} from "react-router-dom";
function Home() {
const numbers = [1, 2, 3, 4, 5, 6];
  const list = numbers.map((number,index) =>
    <Link key={index.toString()} to={`/details/${index}`} className='thumb'><span>Titre de la location</span></Link>
  );
  return (
    <div>
      <main>
            <div>
              <p className='everywhere'>Chez vous, partout et ailleurs</p>
              <div className='divOfThumbs'><br></br>
                {list}
              </div>
                            
            </div>
          
        </main>
    </div>
  );
}

export default Home;
