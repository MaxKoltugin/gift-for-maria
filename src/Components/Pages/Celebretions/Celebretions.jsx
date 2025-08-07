import "./celebretions.css";
import MusicButton from "../../MusicButton/MusicButton";
import CelebrationCards from "../CelebrationCard/CelebrationCards";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="/birthday-image2.png"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление 🎂</strong>
          </p>
          <p className="text-celebration">
            Дорогая баба Маша, поздравляю с днём рождения!
            <br />
            Пусть каждый новый день приносит тебе радость и улыбки, а здоровье
            будет крепким. Спасибо за твою заботу, которую ты проявляешь к нам.
            Желаю, чтобы все твои мечты сбывались. Пусть каждый миг будет
            наполнен теплом и радостью! 💖
            <br />
            <br /> <strong>Максим</strong>
          </p>
        </div>
      </div>
      <CelebrationCards />
    </div>
  );
};

export default Celebretions;
