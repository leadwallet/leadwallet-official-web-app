import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const Teampage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-20 w-full top-0">
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 top-noisy"
        />
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 third-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full token-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header />

        <div className="container mx-auto mb-12 px-4">
          <section className="mt-8 text-center">
            <div className="font-Montserrat-ExtraBold uppercase text-white text-3xl mb-2">
              TEAM AND ADVISORS
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              The Lead team members and advisors are globally distributed with
              members based in Nigeria, India, Singapore, Indonesia, Russia,
              China, etc. The team and advisor panel is continually growing.
            </div>
          </section>

          <section className="mt-20 mx-auto">
            <div className="flex flex-row w-full">
              <div className="w-1/3 px-12">
                <img
                  src="/images/obasi.png"
                  alt=""
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
              <div className="w-2/3 text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Obasi Francis Ifegwu
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-2">
                  Chief Executive Officer
                </div>
                <div className="text-xs">
                  Obasi has over 7 years of experience in the start-up
                  environment and is a o-founder of Lead Cyber Services Limited
                  (LEAD Wallet). Obasi is charged with the responsibility of
                  daily operations of Lead in order to achieve the vision of
                  Lead Wallet so that millions of users worldwide will have
                  access to cryptocurrencies and financial services use-cases
                  specifically for cryptocurrency.
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Teampage;
