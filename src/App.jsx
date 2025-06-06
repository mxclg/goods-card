import logoDark from "./assets/logo-dark.svg";
import ArrowRight from "./assets/arrow-right.svg";
import logoBright from "./assets/logo-bright.svg";
import CircleCheck from "./assets/circle-check.svg";

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-[#f8f9fb] w-[365px] h-[187px] border border-[#E1EAF6] rounded-[10px] relative">
        <div className="absolute top-[20px] left-[15px] w-[60px] h-[60px] bg-white rounded-[5px] overflow-hidden">
          <img
            src={logoDark}
            alt="Dark logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-[20px] left-[90px] flex items-center gap-[5px] h-[30px]">
          <span className="text-zinc-800 text-xl font-semibold leading-loose">
            2Captcha solver
          </span>
          <img src={ArrowRight} alt="Arrow" className="w-5 h-5 mt-[2px]" />
        </div>
        <div className="absolute top-[63px] left-[90px] flex items-center gap-[8px] px-[12px] h-6 bg-[#00A1B3] rounded-2xl">
          <img
            src={logoBright}
            alt="Bright logo"
            className="w-3 h-4 object-contain"
          />
          <span className="text-white text-sm font-normal">
            Official software
          </span>
        </div>
        <div className="absolute top-[107px] left-[15px] flex items-center gap-[8px]">
          <img
            src={CircleCheck}
            alt="Check icon"
            className="w-4 h-4 object-contain"
          />
          <span className="text-zinc-800 text-sm font-normal leading-normal">
            This software is designed to work with any site
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
