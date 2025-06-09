import ProductCard from "./ProductCard";
import twoCaptchaLogo from "./assets/2Captcha-logo.svg";

function ProductsLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
      <ProductCard
        logo={twoCaptchaLogo}
        title="2Captcha solver"
        rating="4.6"
        reviews={456}
        price="Free"
        isOfficial={true}
        isUniversal={true}
      />
      <ProductCard
        logo={twoCaptchaLogo}
        title="2Captcha solver"
        rating="4.6"
        reviews={456}
        price="ADD PRICE"
        isOfficial={true}
        isUniversal={true}
      />
    </div>
  );
}

export default ProductsLayout;
