import React from "react";

export default () => {
  return (
    <div className="py-8 footer-bg">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <a href="/" className="logo flex flex-row items-center">
            <img
              src="/images/full-logo.png"
              width="180"
              className="cursor-pointer"
              alt="LEAD"
            />
          </a>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Products</div>
            <div>Business Console</div>
            <div>Settlement Layer</div>
            <div>Crypto Wallets</div>
            <div>LEAD Pride</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <a href="/aboutus" className="font-Montserrat-ExtraBold uppercase">
              About Us
            </a>
            {/* <div>Project</div> */}
            <a href="/contactus">Contact Us</a>
            <a href="/team">Team</a>
            {/* <div>Ecosystem</div> */}
            <a href="/token">The Token</a>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Solutions</div>
            <div>Grow Your Business with our Monetization</div>
            <div>Technology</div>
            <div>The PSP Solution</div>
            <div>Use Your Cryptocurrency</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <div className="font-Montserrat-ExtraBold uppercase">
              Documentation
            </div>
            <a
              href="/en/docs/White Paper v1_0_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
            <a
              href="/en/docs/Privacy Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/en/docs/Terms of Service.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
