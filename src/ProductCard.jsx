import logoDark from "./assets/logo-dark.svg";
import ArrowRight from "./assets/arrow-right.svg";
import logoBright from "./assets/logo-bright.svg";
import CircleCheck from "./assets/circle-check.svg";
import StarIcon from "./assets/star.svg";

function ProductCard({
  title,
  rating,
  reviews,
  isOfficial = true,
  isUniversal = true,
}) {
  return (
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
          {title}
        </span>
        <img src={ArrowRight} alt="Arrow" className="w-5 h-5 mt-[2px]" />
      </div>

      {isOfficial && (
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
      )}

      {isUniversal && (
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
      )}

      <div className="absolute top-[142px] left-[15px] w-[335px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="w-14 h-6 bg-slate-200 rounded-xl flex items-center justify-center gap-[4px] px-[6px]">
            <span className="text-zinc-800 text-sm font-semibold leading-none">
              {rating}
            </span>
            <img src={StarIcon} alt="Star" className="w-[14px] h-[14px]" />
          </div>
          <span className="text-gray-500 text-sm font-normal leading-normal">
            {reviews} Reviews
          </span>
        </div>
        <div className="text-cyan-600 text-xl font-semibold leading-loose">
          Free
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
