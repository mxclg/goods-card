import ProductCard from "./ProductCard";
import LoadMoreButton from "./LoadMoreBtn";
import twoCaptchaLogo from "./assets/2Captcha-logo.svg";
import puppeteerLogo from "./assets/puppeteer-logo.svg";
import twoCaptchaJavascript from "./assets/2Captcha-js-logo.svg";

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
        logo={puppeteerLogo}
        title={`Puppeteer plugin to solve reCAPTCHAs
                automatically`}
        rating="4.6"
        reviews={456}
        price="$67"
        isOfficial={true}
        isUniversal={true}
      />
      <ProductCard
        logo={twoCaptchaJavascript}
        title={`2captcha-javascript`}
        rating="4.6"
        reviews={456}
        price="$67"
        isOfficial={false}
        isUniversal={true}
      />
      <LoadMoreButton />
    </div>
  );
}

export default ProductsLayout;
