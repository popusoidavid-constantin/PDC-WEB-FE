import React from "react";
import { assets } from "../src/assets/assets";
import { motion } from "framer-motion";
import Form from "../components/Form";
import ScrollToButton from "../components/ScrollToButton";
export default function Home() {
  return (
    <div className=" mt-12 lg:mt-25">
      <div className="w-full h-70 lg:h-200 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center transform scale-100 border border-b shadow-[2px_10px_60px_#11266a]   "
            style={{
              backgroundImage: `url(${assets.HomeHero})`,
            }}
          >
            <div className="  h-full text-amber-50 flex flex-col items-center justify-between text-center lg:w-[100%]">
              <p className="text-[10px] w-[80%] mt-15 lg:w-max lg:text-[30px] ">
                Innovative IT solutions for businesses to thrive online.
              </p>
              <p
                className="
          text-[2.2vh]
          w-[100%]
           md:text-[3vh]
          lg:text-[6vh]
          font-bold
          drop-shadow-[2px_2px_2px_black]
          "
              >
                YOUR VISION, OUR CODE – LET&apos;S BUILD SOMETHING AMAZING
              </p>

              <ScrollToButton
                className={
                  " shadow-[inset_2px_2px_4px_1px_rgba(0,0,0,0.3)] w-[14vh]  mb-10 font-bold rounded text-[12px] items-center flex flex-row justify-center bg-white p-1 text-black lg:w-[20vh] lg:rounded-xl lg:font-semibold lg:h-[7vh] lg:text-[3vh]"
                }
                label={"Learn More"}
                targetId={"services"}
              ></ScrollToButton>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 mb-10">
        <div className=" w-full lg:h-200 lg:mt-30 mt-10">
          <div className="w-full flex flex-row items-center justify-center text-[#04478ad9] lg:text-5xl text-l font-bold ">
            <h1 className="underline  text-[#386da3ef]">
              About PDC WEB SOLUTIONS
            </h1>
          </div>
          <div className="w-full h-[100%] flex flex-row items-center justify-around mt-10 lg:mt-0">
            <div className="w-[50%] h-[70%] lg:mt-20 ">
              <img
                src={assets.AboutUs}
                className="w-[100%] h-[20vh] lg:h-[80%]"
                alt=""
              />
            </div>
            <div className="w-[45%] flex flex-col items-center ">
              <h2 className="text-l font-bold  lg:text-[5vh] text-[#04478ad9]">
                Our Mission
              </h2>
              <p className="text-[1vh] text-gray-500 font-semibold  text-center mt-3 lg:text-[3vh] lg:font-medium lg:mt-15">
                At PDC WEB SOLUTIONS, our mission is to deliver innovative IT
                solutions that empower businesses to excel in a digital world.
                We strive to create value for our clients through cutting-edge
                technology and exceptional service.
              </p>
            </div>
          </div>
        </div>

        {/* MEET OUR TEAM  */}
        <div className=" w-full lg:h-200 lg:mt-40 mt-10">
          <div className="w-full flex flex-row items-center justify-center text-[#04478ad9] lg:text-5xl text-l font-bold ">
            <h1 className="underline text-[#386da3ef]">Meet Our Team</h1>
          </div>
          <div className="w-full flex flex-row items-center">
            <div className="w-full h-full flex flex-row items-center justify-around mt-10">
              <div className="w-[46%] flex flex-col items-center ">
                <h2 className="text-l font-bold  lg:text-[5vh] text-[#04478ad9]">
                  Our Team
                </h2>
                <p className="text-[1vh] text-gray-500 font-semibold  text-center mt-3 lg:text-[3vh] lg:font-medium ">
                  We are a team of passionate developers dedicated to building
                  scalable and modern web applications using the MERN stack and
                  Next.js. Our expertise spans frontend, backend, and UI/UX
                  design, ensuring a seamless and engaging user experience. Our
                  team includes: Popusoi David-Constantin(Full-Stack Web
                  Developer and CEO of PDC WEB SOLUTIONS).
                </p>
              </div>
              <div className="w-[50%] h-[70%] lg:mt-20 ">
                <img
                  src={assets.OurTeam}
                  className="w-[100%] h-[20vh] lg:h-[80%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="w-full flex flex-col items-center mt-20 md:mt-50  md:mb-30"
      >
        <h2 className="text-white [text-shadow:2px_2px_5px_#FFFFFF] font-extrabold text-2xl mb-2 md:text-7xl ">
          WHY COOSE US?
        </h2>
        <h2 className="text-white [text-shadow:2px_2px_5px_#FFFFFF] font-extrabold text-lg mb-10 md:mt-5 md:text-5xl">
          FEATURES & BENEFITS
        </h2>
      </div>

      <div
        id="services-box"
        className="flex flex-col items-center justify-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-4 gap-4 place-items-center justify-center">
          {/* BENEFITS CARD */}

          <div className="flex flex-col justify-between  items-center w-[90%] lg:w-[95%] h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  Full-Stack Web Development
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Frontend & Backend Development – Complete website
                      architecture.
                    </li>
                    <li className="text-center">
                      ✅ Modern Tech Stack – Using React, Express.js, Node.js,
                      MongoDB, etc.
                    </li>
                    <li className="text-center">
                      ✅ API Integrations – Connecting external services and
                      databases.
                    </li>
                    <li className="text-center">
                      ✅ Secure & Scalable Solutions – Ensuring performance and
                      security.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      🔄 Seamless Functionality – A cohesive system ensures a
                      great user experience.
                    </li>
                    <li className="text-center">
                      ⚡ Faster Development & Deployment – Agile processes for
                      quicker delivery.
                    </li>
                    <li className="text-center">
                      🔐 High Security Standards – Protects your website from
                      cyber threats.
                    </li>
                    <li className="text-center">
                      📈 Scalability for Growth – Easily expand as your business
                      grows.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-[90%]  lg:w-[95%]  h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  Web Design (UX/UI)
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Custom UI/UX Design – Tailored designs that align with
                      your brand identity.
                    </li>
                    <li className="text-center">
                      ✅ Responsive & Mobile-Friendly – Ensuring seamless
                      experience across all devices.
                    </li>
                    <li className="text-center">
                      ✅ User-Centric Approach – Designs focused on usability
                      and accessibility.
                    </li>
                    <li className="text-center">
                      ✅ Wireframes & Prototypes – Visual previews before final
                      development.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      🎯 Higher User Engagement – Attractive and intuitive
                      interfaces keep visitors engaged.
                    </li>
                    <li className="text-center">
                      🚀 Improved Conversion Rates – A well-structured UI boosts
                      sales and leads.
                    </li>
                    <li className="text-center">
                      📱 Better Mobile Experience – Users enjoy smooth
                      navigation on any device.
                    </li>
                    <li className="text-center">
                      💡 Stronger Brand Identity – Consistent visuals strengthen
                      brand recognition.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-[90%]  lg:w-[95%]  h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  Rebranding Websites
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Fresh &amp; Modern Redesign – A new look that aligns
                      with current trends.
                    </li>
                    <li className="text-center">
                      ✅ UX/UI Improvements – Enhancing usability and
                      aesthetics.
                    </li>
                    <li className="text-center">
                      ✅ SEO & Performance Upgrades – Optimizing site speed and
                      visibility.
                    </li>
                    <li className="text-center">
                      ✅ Mobile Optimization – Ensuring a smooth experience
                      across all devices.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      🎨 Stronger Brand Identity – Stand out in a competitive
                      market.
                    </li>
                    <li className="text-center">
                      🚀 Better User Experience – Intuitive navigation keeps
                      visitors engaged.
                    </li>
                    <li className="text-center">
                      📈 Increased Traffic & Conversions – A fresh look attracts
                      new customers.
                    </li>
                    <li className="text-center">
                      💡 Future-Proof Design – Ensuring long-term relevance and
                      scalability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-[90%]  lg:w-[95%]  h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  Optimize Websites
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Page Speed Optimization – Reducing load times for
                      better performance.
                    </li>
                    <li className="text-center">
                      ✅ Code & Image Compression – Minimizing file sizes
                      without losing quality.
                    </li>
                    <li className="text-center">
                      ✅ Database Optimization – Faster queries and improved
                      backend performance.
                    </li>
                    <li className="text-center">
                      ✅ Bug Fixes & Security Enhancements – Ensuring a smooth
                      and safe experience
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      ⚡ Faster Load Times – Improves user experience and
                      reduces bounce rates.
                    </li>
                    <li className="text-center">
                      🔝 Higher SEO Rankings – Google prioritizes fast,
                      optimized websites.
                    </li>
                    <li className="text-center">
                      🔐 Improved Security – Protection against hacking and data
                      breaches.
                    </li>
                    <li className="text-center">
                      📊 Better Website Performance – Enhances engagement and
                      conversions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-[90%]  lg:w-[95%]  h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  SEO Optimization
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Keyword Research &amp; Strategy – Targeting the right
                      audience.
                    </li>
                    <li className="text-center">
                      ✅ On-Page SEO – Optimizing content, meta tags, and URLs.{" "}
                    </li>
                    <li className="text-center">
                      ✅ Technical SEO – Improving site structure and speed.
                    </li>
                    <li className="text-center">
                      ✅ Link Building &amp; Content Strategy – Boosting domain
                      authority.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      📈 Increased Organic Traffic – Rank higher on search
                      engines.
                    </li>
                    <li className="text-center">
                      💰 Better ROI – Cost-effective marketing for long-term
                      success.
                    </li>
                    <li className="text-center">
                      🎯 Higher Visibility – More people find your business
                      online.
                    </li>
                    <li className="text-center">
                      🛒 Boost Sales & Leads – More visitors mean more potential
                      customers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-[90%]  lg:w-[95%]  h-[95%] bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
            <div className="flex flex-col">
              <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                  Website Deployment
                </h3>
              </div>
              <div className="flex flex-row h-[100%]">
                <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                  <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Features
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                    <li className="text-center">
                      ✅ Domain & Hosting Setup – Choosing the right platform
                      for performance.
                    </li>
                    <li className="text-center">
                      ✅ SSL Integration – Securing user data with HTTPS
                      encryption.
                    </li>
                    <li className="text-center">
                      ✅ Cloud & Server Deployment – AWS, DigitalOcean, or
                      dedicated servers.
                    </li>
                    <li className="text-center">
                      {" "}
                      ✅ Performance Monitoring – Ensuring smoothpost-launch
                      performance.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col w-[50%] text-amber-50 items-center">
                  <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                    Benefits
                  </h4>
                  <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                    <li className="text-center">
                      🚀 Seamless Go-Live Process – Hassle-free website launch.
                    </li>
                    <li className="text-center">
                      🔒 High Security Standards – Protects sensitive
                      information.
                    </li>
                    <li className="text-center">
                      📈 Optimized Performance – Ensures uptime and reliability.
                    </li>
                    <li className="text-center">
                      💡 Scalability – Easily upgrade hosting as your business
                      grows.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5 flex flex-row items-center justify-center">
              <ScrollToButton
                label={" Contact Us!"}
                className={
                  "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                }
                targetId={"contact-us"}
              ></ScrollToButton>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center lg:mt-10 ">
          <div className=" w-full md:w-[70%] flex flex-row items-center justify-center">
            <div className="flex flex-col w-[90%] h-full bg-gradient-to-b from-[#020815] via-[#0f1d46] to-[#142248] rounded-[5%] shadow-[10px_4px_100px_#16244A] px-1 py-5  mt-12">
              <div className="flex flex-col">
                <div className="flex items-center flex-row justify-center text-amber-50 font-extrabold text-xl mb-4">
                  <h3 className="text-white text-2xl font-bold [text-shadow:2px_2px_5px_#FFFFFF]">
                    Content Writing
                  </h3>
                </div>
                <div className="flex flex-row h-[100%]">
                  <div className="flex flex-col w-[50%]  text-amber-50 items-center">
                    <h4 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                      Features
                    </h4>
                    <ul className="text-[1.7vh] h-[90%] flex flex-col font-medium justify-between mt-3">
                      <li className="text-center">
                        ✅ SEO-Optimized Content – Engaging copy that ranks well
                        on search engines.
                      </li>{" "}
                      <li className="text-center">
                        ✅ Website Copywriting – Persuasive text for landing
                        pages and services.
                      </li>
                      <li className="text-center">
                        ✅ Blog & Article Writing – Informative and engaging
                        content.
                      </li>
                      <li className="text-center">
                        ✅ Brand Messaging & Tone – Consistent voice that aligns
                        with your business.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col w-[50%] text-amber-50 items-center">
                    <h4 className="text-xl font-bold  text-white [text-shadow:1px_1px_3px_#FFFFFF]">
                      Benefits
                    </h4>
                    <ul className="text-[1.7vh] h-[90%] font-medium flex flex-col justify-between mt-3">
                      <li className="text-center">
                        📝 Stronger Brand Identity – Communicates your vision
                        effectively.
                      </li>
                      <li className="text-center">
                        🔝 Higher SEO Rankings – Quality content improves search
                        visibility.
                      </li>
                      <li className="text-center">
                        {" "}
                        📊 Better User Engagement – Informative blogs and
                        pageskeep users on-site.
                      </li>
                      <li className="text-center">
                        💰 More Conversions – Well-crafted content
                        persuadesvisitors to take action.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" w-full mt-5 flex flex-row items-center justify-center">
                <ScrollToButton
                  label={" Contact Us!"}
                  className={
                    "rounded-[1vh] text-white text-center text-lg font-bold py-2 px-3 bg-[#01152cb8] shadow-[2px_2px_5px_#FFFFFF] "
                  }
                  targetId={"contact-us"}
                ></ScrollToButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-us">
        <Form></Form>
      </div>
    </div>
  );
}
