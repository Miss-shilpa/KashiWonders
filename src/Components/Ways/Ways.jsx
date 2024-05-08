import React from "react";
import './Ways.css'
import picture1 from '../../assets/picture1.webp';
import picture2 from '../../assets/picture2.webp';
import picture3 from '../../assets/picture3.webp';
import picture5 from '../../assets/picture5.jpg';


const Ways = () => {
  return (
    <>
      <div className="ways-to-visit">
        <h1>See Kashi in a Variety of Ways</h1>
        <div class="wrapper">
          <div class="card">
            <img src={picture1} />
            <div class="info">
              <h2>Culture & Heritage</h2>

              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={picture3} />
            <div class="info">
              <h2>Subah-e-Banaras</h2>

              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>
          
          <div class="card">
                <img src={picture2}/>
                <div class="info">
                    <h2>Nature & Adventure</h2>

                    <a href="#" class="btn">Explore</a>
                </div>
            </div>

            <div class="card">
                <img src={picture5}/>
                <div class="info">
                    <h2>Tent City</h2>

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

export default Ways;
