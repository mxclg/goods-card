import ArrowRight from "./assets/arrow-right.svg";
import logoBrightLock from "./assets/logo-bright-lock.svg";
import CircleCheck from "./assets/circle-check.svg";
import StarIcon from "./assets/star.svg";

function ProductCard({
  logo,
  title,
  rating,
  reviews,
  price,
  isOfficial = true,
  isUniversal = true,
}) {
  return (
    <div className="bg-[#f8f9fb] w-[365px] border border-[#E1EAF6] rounded-[10px] p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="w-[60px] h-[60px] bg-white rounded-[5px] overflow-hidden flex items-center justify-center">
          <img
            src={logo}
            alt="Dark logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 w-64">
          <div className="flex items-start gap-[5px]">
            <p className="text-zinc-800 text-xl font-semibold leading-snug break-words">
              {title}{" "}
              <img src={ArrowRight} className="inline w-5 h-5" alt="Arrow" />
            </p>
          </div>
          {isOfficial && (
            <div className="flex items-center gap-[8px] px-[12px] h-6 bg-[#00A1B3] rounded-2xl w-fit">
              <img
                src={logoBrightLock}
                alt="Bright logo"
                className="w-3 h-4 object-contain"
              />
              <span className="text-white text-sm font-normal">
                Official software
              </span>
            </div>
          )}
        </div>
      </div>

      {isUniversal && (
        <div className="flex items-center gap-[8px]">
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

      <div className="flex items-center justify-between">
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
          {price}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
