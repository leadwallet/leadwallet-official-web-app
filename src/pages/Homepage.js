import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const HomePage = () => {
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
          className="absolute z-10 second-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full home-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header />

        <div className="container mx-auto mb-48 px-4">
          <div className="font-Montserrat-ExtraBold uppercase text-white text-3xl text-center">
            WORLDS Simplest Crypto Wallet
          </div>

          <div className="uppercase text-white text-md text-center">
            Store, Send, Swap, Stake
          </div>

          <div className="mt-8 flex flex-row justify-center">
            <iframe
              src="https://www.youtube.com/embed/kNq-vsWZMBE"
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </div>

          <div className="mt-8 flex flex-row justify-center mb-12">
            <a
              href="https://support.lbank.me/hc/en-gb/articles/900002564983"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/lbank.png" width="560" height="315" />
            </a>
          </div>

          <hr className="w-full sm:w-5/6 mx-auto border-dashed border-2 mb-2" />

          <div className="w-full">
            <img
              src="/images/wallet-preview.png"
              className="w-full lg:w-2/3 mx-auto"
            />
          </div>

          <div className="mb-16 text-center text-white">
            <div className="font-Montserrat-ExtraBold uppercase text-2xl mb-4">
              HOW IT WORKS
            </div>
            <div className="w-full md:w-2/3 mx-auto">
              To enjoy all the products and services offered by Lead Wallet, as
              an iOS or Android user, all you need to do is to head over to the
              Android play store or iOS app store to download Lead Wallet. It
              takes less than a minute to set up your Lead wallet account to
              start benefiting from Lead wallet services.
            </div>
          </div>

          <div className="mb-16 text-center text-white">
            <div className="font-Montserrat-ExtraBold uppercase text-2xl mb-4">
              WHY LEAD?
            </div>
            <div className="w-full md:w-2/3 mx-auto">
              We are not trying to reinvent the wheel. We are not trying to
              create a new blockchain ecosystem that nobody would use. We
              understand the biggest problem with cryptocurrency adoption is the
              lack of user-friendly and beautifully-designed applications.
              Cryptocurrency wallets are the gateway to adoption as they are the
              first application that newcomers often interact with before they
              start interacting with other kinds of apps. We are trying to be
              the leader of that adoption.
            </div>
          </div>

          <div className="w-full mb-24">
            <img
              src="/images/ecosystem.png"
              className="w-full sm:w-2/3 max-w-xl mx-auto"
            />
          </div>

          <div className="mb-16 text-center text-white">
            <div className="font-Montserrat-ExtraBold uppercase text-2xl mb-4">
              LEARN ABOUT LEAD TOKEN
            </div>
            <div className="w-full md:w-2/3 mx-auto">
              LEAD Token is an ERC-20 token that fuels the products and services
              that are delivered on Lead Wallet. With this, LEAD token is
              basically the heart of the Lead Wallet app. LEAD token is designed
              from the ground up to have natural demand as the services of Lead
              Wallet themselves get more popular.
            </div>
          </div>

          <div className="mb-16 text-center text-white">
            <div className="font-Montserrat-ExtraBold uppercase text-2xl mb-4">
              MISSION AND VISION
            </div>
            <div className="w-full md:w-2/3 mx-auto">
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
          </div>

          <div className="mb-16 text-center text-white">
            <div className="font-Montserrat-ExtraBold uppercase text-2xl mb-4">
              ROADMAP
            </div>
            <div className="w-full md:w-2/3 mx-auto">
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
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
