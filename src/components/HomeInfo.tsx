import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: {
  [key: number]: JSX.Element;
} = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Aleksandar</span> 👋 <br />A
      Web Developer from Canada
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many clients and learned many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: <h1></h1>,
  4: <h1></h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
