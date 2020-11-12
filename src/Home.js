import React,{useEffect} from "react";
import "./Home.css";
import Product from "./Product";
import udio1 from './assets/Instructions.mp3'

function Home({i, setI}) {
  const audio1 = new Audio(udio1);
  useEffect(()=>{
    if (i===0){
      audio1.play();
      setI(1);
    }
  }, []) 

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_title" >Featured Subjects:</div>
        <div className="home_row">
        <Product
            link="/Subject3"
            title="Density"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iBpQSvdrogG_wytHBuUsBAHaHa%26pid%3DApi&f=1"
          />

          <Product
          link="/Subject2"
            title="Pollination"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pp-Nzyom59jjpd50HAvjFwHaEw%26pid%3DApi&f=1"
          />
          <Product
          link="/Subject1"
            title="Periodic Table"
            image="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/1080_SS_periodic_table_0.png"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
