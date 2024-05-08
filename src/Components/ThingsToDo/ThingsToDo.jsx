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
        <div class="wrapper">
          <div class="card">
            <img src={gangaArti} />
             <div class="info">
              <h2>Culture & Heritage</h2>

              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>
          <div class="card">
            <img src={morningboat} />
             <div class="info">
              <h2>Culture & Heritage</h2>
              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={kashiVishwanath} />
             <div class="info">
              <h2>Culture & Heritage</h2>

              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>
          
          <div class="card">
            <img src={kashiVishwanath} />
             <div class="info">
              <h2>Culture & Heritage</h2>

              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={sarnath} />
             <div class="info">
              <h2>Culture & Heritage</h2>

              <a href="#" class="btn">
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
