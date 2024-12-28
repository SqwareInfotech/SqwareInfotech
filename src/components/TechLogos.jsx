import { techLogos } from "../constants";
import Marquee from 'react-fast-marquee';

const TechLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline my-3 text-center text-n-1/50">
        Powering Solutions With Leading Technologies
      </h5>
      <Marquee pauseOnHover="true" className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {techLogos.map((logo, index) => (
          <div
            className="flex items-center justify-centerc mx-10 flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo.src} width={logo.width? logo.width : undefined} height={logo.height? logo.height : undefined} alt={logo} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechLogos;
