import "./ThingsToDo.css";
import sarnath from '../../assets/sarnath.jpg'
import morningboat from '../../assets/morningboat.jpg'
import gangaArti from '../../assets/gangaArti.jpg'
import kashiVishwanath from '../../assets/kashiVishwanath.jpg'


const ThingsToDo = () => {
  return (
    <>
      <div className="things-to-do">
        <h1>Things To Do</h1>
        <div className="wrapper">
          <div className="card">
            <img src={gangaArti} />
             <div className="info">
              <h2>Culture & Heritage</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>
          <div className="card">
            <img src={morningboat} />
             <div className="info">
              <h2>Culture & Heritage</h2>
              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>

          <div className="card">
            <img src={kashiVishwanath} />
             <div className="info">
              <h2>Culture & Heritage</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>
          
          <div className="card">
            <img src={kashiVishwanath} />
             <div className="info">
              <h2>Culture & Heritage</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>

          <div className="card">
            <img src={sarnath} />
             <div className="info">
              <h2>Culture & Heritage</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsToDo;
