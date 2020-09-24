import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-20 w-full top-0">
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 top-noisy"
        />
        {/* <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 second-noisy"
        /> */}
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full contactus-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header />

        <div className="container mx-auto pb-24 px-4 force-height">
          <section className="mt-8 text-center">
            <div className="font-Montserrat-ExtraBold uppercase text-white text-4xl mb-2">
              ABOUT US
            </div>
            <div className="text-white w-full md:w-5/6 mx-auto leading-7">
              The Lead Wallet team is committed to providing a sophisticated yet
              simple crypto wallet application that will enable anyone (either
              newbie or expert) to store, send, receive, spend, exchange/swap
              crypto assets at users’ convenience without the need to provide or
              store user data. Lead Wallet will enable users across the globe at
              any time to conveniently spend their cryptocurrency assets in
              exchange for what they’ve always wanted to have or buy. In
              addition, Lead Wallet will constantly research and provide
              excellent blockchain technology and cryptocurrency application
              scenarios that will further the adoption and use cases of
              cryptocurrencies.
            </div>
          </section>

          <section className="mt-16 flex flex-col-reverse md:flex-row w-5/6 mx-auto">
            <div className="w-full md:w-1/3">
              <img
                src="/images/app-product.png"
                alt=""
                className="mx-auto w-80 md:w-full lg:w-full xl:w-2/3"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="font-Montserrat-ExtraBold uppercase text-white text-3xl mb-2">
                PRODUCT
              </div>
              <div className="text-white leading-7 mb-4">
                Lead Wallet is a decentralized multi-cryptocurrency application
                based on the Android and iOS platforms. As a decentralized
                cryptocurrency wallet, its users will be able to control how
                they spend, store, and organize their funds. In addition, the
                wallet allows users to spend, swap, exchange and stake their
                cryptocurrency directly from the Lead Wallet interface via a
                very short execution process.
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
