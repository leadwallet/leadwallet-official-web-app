import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/common/Card";

const TokenPage = () => {
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

        <div className="container mx-auto pb-12 px-4 force-height">
          <section className="mt-8 text-center">
            <div className="Montserrat-Black uppercase text-white text-4xl mb-2">
              LEAD TOKEN
            </div>
            <div className="text-white w-full md:w-5/6 mx-auto leading-7">
              The LEAD Token is an ERC-20 token that fuels the products and
              services that are delivered on Lead Wallet. With this, LEAD token
              is basically the heart of the Lead Wallet app. LEAD token is
              designed from the ground up to have natural demand as the services
              of Lead Wallet themselves get more popular. It’s also important to
              know that LEAD token will be a cross-chain token in the future and
              won’t be just part of the Ethereum ecosystem.
            </div>
          </section>

          <section className="mt-20">
            <Card className="px-4 md:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="mx-auto w-40 py-8">
                  <img
                    src="/images/payment.svg"
                    width="50"
                    alt=""
                    className="mx-auto mb-6"
                  />
                  <div className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                    30% PROFIT SHARE
                  </div>
                </div>
                <div className="mx-auto w-40 py-8">
                  <img
                    src="/images/reward.svg"
                    width="50"
                    alt=""
                    className="mx-auto mb-6"
                  />
                  <div className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                    40% STAKE REWARD
                  </div>
                </div>
                <div className="mx-auto w-40 py-8">
                  <img
                    src="/images/water.svg"
                    width="50"
                    alt=""
                    className="mx-auto mb-6"
                  />
                  <div className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                    100% LIQUIDITY
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="mt-20 text-center">
            <div className="Montserrat-Black uppercase text-white text-3xl mb-2">
              WHY LEAD TOKEN?
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              Many cryptocurrency projects out there do not really care where
              the natural demand for their tokens would come from. Lead Wallet
              and LEAD token are designed to grow together. More users for the
              services would mean more natural demand for the LEAD token as
              well.
            </div>
          </section>

          <section className="mt-20 text-center">
            <div className="Montserrat-Black uppercase text-white text-3xl mb-2">
              TOKEN DISTRIBUTION
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              The team only gets 15% of the total token distribution as we do
              not want this project to enrich the select few. We believe that
              the community deserves to get the most out of our project. Please
              take a look at the chart below to see how we are going to
              distribute the tokens:
            </div>
          </section>

          <section className="mt-20 text-center">
            <img
              src="/images/distribution.png"
              alt=""
              className="w-full md:w-96 mx-auto"
            />
            <div className="text-white w-full lg:w-2/3 mx-auto mt-12">
              <div className="py-2">
                <img src="/images/bar_1.png" alt="" className="w-full" />
              </div>
              <div className="py-2">
                <img src="/images/bar_2.png" alt="" className="w-full" />
              </div>
              <div className="py-2">
                <img src="/images/bar_3.png" alt="" className="w-full" />
              </div>
              <div className="py-2">
                <img src="/images/bar_4.png" alt="" className="w-full" />
              </div>
              <div className="py-2">
                <img src="/images/bar_5.png" alt="" className="w-full" />
              </div>
              <div className="py-2">
                <img src="/images/bar_6.png" alt="" className="w-full" />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TokenPage;
