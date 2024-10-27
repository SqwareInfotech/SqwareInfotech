import { companyLogos } from "../constants";
import Marquee from 'react-fast-marquee';

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Providing solutions at
      </h5>
      <Marquee pauseOnHover="true" className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {companyLogos.map((logo, index) => (
          <div
            className="flex items-center justify-centerc mx-20 flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} /><span>{index}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyLogos;
