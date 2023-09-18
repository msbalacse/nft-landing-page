import "./Home.css";
import skull from "../../assets/skull mushroom.png";
import playBtn from "../../assets/playBtn.png";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="home__info">
        <p>
          GATHER YOUR <span>RARE NFT</span> HAS ARIVED.
        </p>
        <Button value={"Explore More"} />
        <div className="inline-flex items-center gap-2">
          <img src={playBtn} className="w-8" alt="play button" />
          <span>show video</span>
        </div>
      </div>
      <img src={skull} alt="skull mushroom" />
    </div>
  );
};

export default Home;
