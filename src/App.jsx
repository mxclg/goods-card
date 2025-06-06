import logoDark from "./assets/logo-dark.svg";
import ArrowRight from "./assets/arrow-right.svg";

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-[#f8f9fb] w-[365px] h-[187px] border border-[#E1EAF6] rounded-[10px] relative">
        <div className="absolute top-[20px] left-[15px] w-[60px] h-[60px] bg-white rounded-[5px] overflow-hidden">
          <img
            src={logoDark}
            alt="Product logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-[20px] left-[90px] flex items-center gap-[5px] h-[30px]">
          <span className="text-zinc-800 text-xl font-semibold leading-loose">
            2Captcha solver
          </span>
          <img src={ArrowRight} alt="Arrow" className="w-5 h-5 mt-[2px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
