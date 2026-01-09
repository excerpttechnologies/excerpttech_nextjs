// 'use client';

// import React from "react";
// import Link from "next/link";
// import { Helmet } from "react-helmet-async";
// import Image from "next/image";
// const CustomizedWebsites = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Customized Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED</title>
//         <meta
//           name="description"
//           content="Explore our customized website solutions tailored to your business needs."
//         />
//       </Helmet>
      
//       {/* <section
//         style={{
//           backgroundImage: "url(/images/banners1se1.webp)",
//           backgroundColor: "rgb(255, 255, 255)",
//         }}
//         className="sub-header position-relative"
//       >
//         <div className="container">
//           <div className="page-info">
//             <h2
//               className="heading-2"
//               style={{ color: "white", textAlign: "center" }}
//             >
//               Customized Websites
//             </h2>
//             <h6 className="heading-6">
//               <Link href="/">Home</Link> / <span>Customized Websites</span>
//             </h6>
//           </div>
//         </div>
//       </section> */}

// <section
//   style={{
//     backgroundImage: "url(/images/banners1se1.webp)",
//     backgroundColor: "rgb(255, 255, 255)",
//     overflow: "hidden",
//     width: "100%",
//     boxSizing: "border-box",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     minHeight: "250px",
//     display: "flex",
//     alignItems: "center"
//   }}
//   className="sub-header position-relative"
// >
//   <div 
//     className="container"
//     style={{
//       width: "100%",
//       maxWidth: "100%",
//       paddingLeft: "15px",
//       paddingRight: "15px",
//       boxSizing: "border-box",
//       margin: "0 auto"
//     }}
//   >
//     <div 
//       className="page-info"
//       style={{
//         width: "100%",
//         maxWidth: "100%",
//         boxSizing: "border-box",
//         padding: "20px 0"
//       }}
//     >
//       <h2
//         className="heading-2"
//         style={{
//           color: "white",
//           textAlign: "center",
//           wordWrap: "break-word",
//           overflowWrap: "break-word",
//           wordBreak: "break-word",
//           lineHeight: "1.3",
//           margin: "0 auto",
//           padding: "0 15px",
//           maxWidth: "100%",
//           boxSizing: "border-box",
//           display: "block",
//           whiteSpace: "normal",
//           fontSize: "2rem",
//           textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)"
//         }}
//       >
//         Customized Websites
//       </h2>
//       <h6
//         className="heading-6"
//         style={{
//           whiteSpace: "normal",
//           wordBreak: "break-word",
//           overflowWrap: "break-word",
//           textAlign: "center",
//           lineHeight: "1.5",
//           margin: "15px auto 0",
//           padding: "0 15px",
//           maxWidth: "100%",
//           boxSizing: "border-box",
//           display: "block",
//           color: "white",
//           fontSize: "1rem",
//           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
//         }}
//       >
//         <Link 
//           href="/" 
//           style={{ 
//             color: "white", 
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//         >
//           Home
//         </Link> 
//         {" / "} 
//         <span style={{ fontWeight: "600" }}>Customized Websites</span>
//       </h6>
//     </div>
//   </div>
// </section>
//       <section id="service-details" className="service-details">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-md-8 mb-40">
//               <div className="img-wrapper mb-25 equal-image-wrapper" style={{ height: '400px' }}>
//                 <Image
//                   src="/portfolio/dtech.webp"
//                   className="img-fluid equal-image"
//                   alt="Customized Websites"
//                   width={800}
//                   height={400}
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <h4 className="heading-4 mb-25">Customized Websites</h4>

//               <div className="paragraph mb-40">
//                 Every business is unique, and so should be its website. We offer
//                 customized website solutions that are designed specifically to
//                 match your brand identity, business goals, and customer
//                 expectations. Whether you want to enhance an existing website or
//                 build a completely tailored platform from scratch, we deliver a
//                 solution that truly represents you.
//               </div>

//               <div className="row g-4 mb-25">
//                 <div className="col-md-6">
//                   <div className="img-wrapper equal-image-wrapper">
//                     <Image
//                       src="/service/crm13.webp"
//                       className="img-fluid equal-image"
//                       alt="Customized Example"
//                       width={400}
//                       height={300}
//                       loading="lazy"
//                       decoding="async"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="img-wrapper equal-image-wrapper">
//                     <Image
//                       src="/portfolio/nipuna.webp"
//                       className="img-fluid equal-image"
//                       alt="Customized Example"
//                       width={400}
//                       height={300}
//                       loading="lazy"
//                       decoding="async"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <h4 className="heading-3 mb-25">
//                 Tailored to Fit Your Needs
//               </h4>

//               <div className="paragraph mb-40">
//                 From personalized UI/UX designs to advanced integrations, our
//                 customized websites are flexible and scalable. We make sure your
//                 site is easy to manage, mobile-friendly, and optimized for
//                 performance, while reflecting the unique personality of your
//                 business.
//               </div>

//               <div className="service-divider"></div>
//             </div>
            
//             <div className="col-md-4">
//               <div className="service">
//                 <h4 className="heading-3">Services</h4>

//                 <div className="underline"></div>

//                 <ul className="service-list">
//                   <li>
//                     <Link href="/Webdesign">
//                       <div className="d-flex justify-content-between item">
//                         <span>Web Design and Development</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/Mobileapp">
//                       <div className="d-flex justify-content-between item">
//                         <span>MobileApplication</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/Ecommerce">
//                       <div className="d-flex justify-content-between item">
//                         <span>Ecommerce</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/DigitalMarketing">
//                       <div className="d-flex justify-content-between item">
//                         <span>DigitalMarketing</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link href="/Customizedwebsites">
//                       <div className="d-flex justify-content-between item">
//                         <span>Customized Websites</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="squre-banner">
//                 <h2 className="heading-3">Easy solutions to your tech problem</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <style jsx>{`
//         /* Equal Image Wrapper Styles */
//         .equal-image-wrapper {
//           width: 100%;
//           height: 300px;
//           overflow: hidden;
//           border-radius: 8px;
//           position: relative;
//         }
        
//         .equal-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.3s ease;
//         }
        
//         .equal-image:hover {
//           transform: scale(1.05);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CustomizedWebsites;





'use client';

import React from "react";
import Link from "next/link";
import { Helmet } from "react-helmet-async";
import Image from "next/image";

const CustomizedWebsites = () => {
  return (
    <div>
      <Helmet>
        <title>
          Customized Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider
        </title>
        <meta
          name="description"
          content="Excerpt Technologies Private Limited offers fully customized website solutions tailored to your unique business needs and brand identity."
        />
      </Helmet>

      <section
        style={{
          backgroundImage: "url(/images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
           minHeight: "200px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
        className="sub-header position-relative"
      >
        <div className="container">
          <div className="page-info">
            <h2 className="heading-2" style={{ color: "white", textAlign: "center" }}>Customized Websites</h2>
            <h6 className="heading-6">
              <Link href="/">Home</Link> / <span>Customized Websites</span>
            </h6>
          </div>
        </div>
      </section>

      <section id="service-details" className="service-details">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-8 mb-40">
              <div className="img-wrapper mb-25 equal-image-wrapper" style={{ height: 'auto', minHeight: 'unset' }}>
                <Image
                  src="/portfolio/dtech.webp"
                  className="img-fluid equal-image"
                  alt="Customized Websites"
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '90%',
                    height: '200px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '12px'
                  }}
                />
              </div>

              <h4 className="heading-4 mb-25">Customized Websites</h4>

              <div className="paragraph mb-40">
                Every business is unique, and so should be its website. We offer
                customized website solutions that are designed specifically to
                match your brand identity, business goals, and customer
                expectations. Whether you want to enhance an existing website or
                build a completely tailored platform from scratch, we deliver a
                solution that truly represents you.
              </div>

              <div className="row g-1 mb-25">
                <div className="col-md-6 mt-3">
                  <Image
                    src="/service/crm13.webp"
                    alt="Customized Website Example"
                    width={400}
                    height={300}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>

                <div className="col-md-6 mt-3">
                  <Image
                    src="/portfolio/nipuna.webp"
                    alt="Customized Website Features"
                    width={400}
                    height={300}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
              </div>

              <h4 className="heading-3 mb-25">Tailored to Fit Your Needs</h4>

              <div className="paragraph mb-40">
                From personalized UI/UX designs to advanced integrations, our
                customized websites are flexible and scalable. We make sure your
                site is easy to manage, mobile-friendly, and optimized for
                performance, while reflecting the unique personality of your
                business.
              </div>

              <div className="service-divider"></div>
            </div>

            <div className="col-md-4">
              <div className="service">
                <h4 className="heading-3">Services</h4>

                <div className="underline"></div>

                <ul className="service-list">
                  <li>
                    <Link href="/Webdesign">
                      <div className="d-flex justify-content-between item">
                        <span>Web Design and Development</span>
                        <div className="icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Mobileapp">
                      <div className="d-flex justify-content-between item">
                        <span>Mobile Application</span>
                        <div className="icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Ecommerce">
                      <div className="d-flex justify-content-between item">
                        <span>Ecommerce</span>
                        <div className="icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/DigitalMarketing">
                      <div className="d-flex justify-content-between item">
                        <span>Digital Marketing</span>
                        <div className="icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="active">
                    <Link href="/Customizedwebsites">
                      <div className="d-flex justify-content-between item">
                        <span>Customized Websites</span>
                        <div className="icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="squre-banner">
                <h2 className="heading-3">Easy solutions to your tech problem</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Equal Image Wrapper Styles */
        .equal-image-wrapper {
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 8px;
          position: relative;
        }
        
        .equal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .equal-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default CustomizedWebsites;