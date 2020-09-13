import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 bottom-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full token-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header />

        <div className="container mx-auto mb-12 px-4">
          <section className="mt-8 text-center">
            <div className="font-Montserrat-ExtraBold uppercase text-white text-4xl mb-2">
              TEAM AND ADVISORS
            </div>
            <div className="text-white w-full md:w-5/6 mx-auto leading-7">
              The Lead team members and advisors are globally distributed with
              members based in Nigeria, India, Singapore, Indonesia, Russia,
              China, etc. The team and advisor panel is continually growing.
            </div>
          </section>

          <section className="mt-20 mx-auto">
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/obasi.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Obasi Francis Ifegwu
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Executive Officer
                </div>
                <div>
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

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-24">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/henry.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Henry Onyebuchi
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Technology Officer
                </div>
                <div>
                  Henry is a co-founder of ICE Firm and Lead Cyber Services
                  Limited (LEAD Wallet). He is an innovative and team-oriented
                  strategist with a track record on startups and turnaround
                  business situations. He has 4 years of extensive experience in
                  blockchain, cryptocurrency development, ICO projects, smart
                  contract development, sales/marketing for blockchain projects.
                </div>
              </div>
            </div>

            <hr className="w-full sm:w-5/6 mx-auto border-dashed border-2 mb-24" />

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/rect.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Ruddy Gunawan
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Marketing Officer
                </div>
                <div>
                  Ruddy has been working in the blockchain world since 2017. He
                  used to work as an independent contractor for Switchain,
                  Remitano, Origin Protocol, and Publish0x. Using his massive
                  experience in the crypto space, Ruddy co-founded Lead Cyber
                  Services Limited (LEAD Wallet). In addition to his experience
                  with cryptocurrency and blockchain-related companies, Ruddy is
                  also the co-founder of SISAS Global, a South American company
                  that uses Big Data to analyze and tackle social and
                  psychological problems.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/rect.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Jaswant Kumar
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Operating Officer
                </div>
                <div>
                  An entrepreneur with more than 7 years of experience in the
                  startup environment working on different innovative solutions
                  across designing, His passion for the blockchain scene stems
                  from his personal experience working in the conventional
                  marketing and design sector. Quickly he grew to realize that
                  in this world, power is concentrated at the top. While the
                  crypto scene offers a chance to rewrite the rulebook. He holds
                  a design degree and has won international awards representing
                  his country at many world stages.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/rect.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Chianakwalam Eliezer
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Communication Officer
                </div>
                <div>
                  Eliezer is a business solutions provider with experience in
                  data analysis. He is the Chief Communications Officer of Lead
                  Wallet. He has about three years of experience helping to plan
                  and execute business ideas for start-ups as well as
                  established organizations. He is a Cofounder of ICE and Lead
                  Cyber Services Limited (LEAD Wallet). Eliezer has been
                  actively involved with projects in the blockchain industry for
                  more than 3 years, filling various roles. Through his position
                  as the CCO, he is committed to making Lead wallet a household
                  name within and beyond the blockchain space.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/rect.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Vinay Yadav
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Business Development Officer
                </div>
                <div>
                  A Business Development Professional associated with tech
                  industries for more than 11 years, Vinay has extensive work
                  experience across multiple business functions such as sales,
                  marketing, management and financial positions throughout his
                  decade-long career in the hardware, software and internet
                  industries. A true all-round prospect is known for his on-time
                  project delivery. Master in tactics to assist in strategic
                  planning and monitoring the business.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/rect.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <div className="font-Montserrat-ExtraBold text-xl">
                  Neil Mani
                </div>
                <div className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Design Officer
                </div>
                <div>
                  His work experience spans 7 years and he possesses excellent
                  design leadership skills, strategic design thinking, and User
                  Experience design. Neil is extremely focused on innovation,
                  with a special focus on user experience strategy, setting
                  design goals and metrics, omni-channel solution design, design
                  for enterprise software products, advanced ecosystem research,
                  validation techniques, and setting up a mature UX practice.
                  Neil is well versed with Lean UX, agile, user-centered
                  methodologies, user research, and he’s always learning
                  emerging technologies that have been helping user experience
                  in a few business houses.
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
