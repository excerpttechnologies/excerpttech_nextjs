






// 'use client';

// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { Helmet } from "react-helmet-async";

// const DynamicWebsites = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>
//           Dynamic Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider
//         </title>
//         <meta
//           name="description"
//           content="Excerpt Technologies Private Limited offers dynamic website solutions for interactive and personalized online experiences."
//         />
//       </Helmet>

//       <section
//         style={{
//           backgroundImage: "url(/images/banners1se1.webp)",
//           backgroundColor: "rgb(255, 255, 255)",
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           backgroundRepeat: "no-repeat",
//           minHeight: "200px",
//           display: "flex",
//           alignItems: "center",
//           overflow: "hidden"
//         }}
//         className="sub-header position-relative"
//       >
//         <div className="container" style={{ width: "100%" }}>
//           <div className="page-info" style={{ width: "100%" }}>
//             <h2 
//               className="heading-2" 
//               style={{ 
//                 color: "white", 
//                 textAlign: "center",
//                 fontSize: "clamp(2.5rem, 4vw, 2.5rem)",
//                 lineHeight: "1.3",
//                 margin: "0 auto",
//                 padding: "0 15px",
//                 wordWrap: "break-word",
//                 overflowWrap: "break-word",
//                 maxWidth: "100%",
//                 boxSizing: "border-box"
//               }}
//             >
//               Dynamic Websites
//             </h2>
//             <h6 
//               className="heading-6"
//               style={{
//                 color: "white",
//                 textAlign: "center",
//                 fontSize: "clamp(0.875rem, 2vw, 1rem)",
//                 lineHeight: "1.5",
//                 margin: "10px auto 0",
//                 padding: "0 15px",
//                 wordWrap: "break-word",
//                 overflowWrap: "break-word",
//                 maxWidth: "100%",
//                 boxSizing: "border-box"
//               }}
//             >
//               <Link 
//                 href="/" 
//                 style={{ 
//                   color: "white", 
//                   textDecoration: "none",
//                   whiteSpace: "nowrap",
//                   fontSize: "1.5rem"
//                 }}
//               >
//                 Home
//               </Link> 
//               {" / "} 
//               <span style={{ whiteSpace: "nowrap", fontSize: "1.5rem" }}>Dynamic Websites</span>
//             </h6>
//           </div>
//         </div>
//       </section>

//       <section id="service-details" className="service-details">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-md-8 mb-40">
//               {/* FIXED IMAGE CONTAINER FOR MOBILE */}
//               <div 
//                 className="img-wrapper mb-25 equal-image-wrapper" 
//                 style={{ 
//                   height: 'auto', 
//                   minHeight: 'unset',
//                   width: '100%',
//                   overflow: 'hidden',
//                   padding: '0',
//                   margin: '0'
//                 }}
//               >
//                 <Image
//                   src="/images/Dynamic-Website.png"
//                   className="img-fluid equal-image"
//                   alt="Dynamic Websites"
//                   width={400}
//                   height={300}
//                   loading="lazy"
//                   decoding="async"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     display: 'block',
//                     margin: '0 auto',
//                     borderRadius: '12px',
//                     maxWidth: '100%',
//                     // Mobile-specific styles
//                     '@media (maxWidth: 768px)': {
//                       width: '100%',
//                       marginLeft: '0',
//                       marginRight: '0',
//                       paddingLeft: '0',
//                       paddingRight: '0'
//                     }
//                   }}
//                 />
//               </div>

//               <h4 className="heading-4 mb-25">Dynamic Websites</h4>

//               <div className="paragraph mb-40">
//                 A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features.
//               </div>

//               <div className="row g-1 mb-25">
//                 <div className="col-md-6 mt-3">
//                   <div style={{ 
//                     width: '100%', 
//                     overflow: 'hidden', 
//                     borderRadius: '12px',
//                     padding: '0',
//                     margin: '0'
//                   }}>
//                     <Image
//                       src="/portfolio/car.png"
//                       alt="Dynamic Website Example"
//                       width={400}
//                       height={300}
//                       style={{
//                         width: '100%',
//                         height: '200px',
//                         objectFit: 'cover',
//                         maxWidth: '100%',
//                         // Mobile-specific styles
//                         '@media (max-width: 768px)': {
//                           width: '100%',
//                           paddingLeft: '0',
//                           paddingRight: '0'
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6 mt-3">
//                   <div style={{ 
//                     width: '100%', 
//                     overflow: 'hidden', 
//                     borderRadius: '12px',
//                     padding: '0',
//                     margin: '0'
//                   }}>
//                     <Image
//                       src="/portfolio/jbk.webp"
//                       alt="Dynamic Website Features"
//                       width={400}
//                       height={300}
//                       style={{
//                         width: '100%',
//                         height: '200px',
//                         objectFit: 'cover',
//                         maxWidth: '100%',
//                         // Mobile-specific styles
//                         '@media (max-width: 768px)': {
//                           width: '100%',
//                           paddingLeft: '0',
//                           paddingRight: '0'
//                         }
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <h4 className="heading-3 mb-25">Dynamic Website Services</h4>

//               <ul className="paragraph mb-40" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
//                 <li>Maintenance & Support – Updates & fixes</li>
//                 <li>Interactive Features – Forms & login</li>
//                 <li>Database Integration – Data storage</li>
//                 <li>Content Management – Update content</li>
//                 <li>Website Design – Visual layout</li>
//               </ul>

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
//                         <span>Mobile Application</span>
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
//                         <span>Digital Marketing</span>
//                         <div className="icon">
//                           <i className="fa-solid fa-arrow-right-long"></i>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link href="/Dyanamicwebsite">
//                       <div className="d-flex justify-content-between item">
//                         <span>Dynamic Websites</span>
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

//       {/* ADD THIS INLINE STYLE BLOCK FOR MOBILE FIXES */}
//       <style jsx>{`
//         /* Mobile-specific fixes */
//         @media (max-width: 768px) {
//           .container {
//             padding-left: 15px;
//             padding-right: 15px;
//             max-width: 100%;
//             overflow-x: hidden;
//           }
          
//           .row {
//             margin-left: 0;
//             margin-right: 0;
//           }
          
//           .col-md-8, .col-md-4, .col-md-6 {
//             padding-left: 0 !important;
//             padding-right: 0 !important;
//           }
          
//           /* Fix for the main dynamic website image */
//           .equal-image-wrapper {
//             width: 100vw !important;
//             position: relative;
//             left: 50%;
//             right: 50%;
//             margin-left: -50vw !important;
//             margin-right: -50vw !important;
//             padding: 0 !important;
//             border-radius: 0 !important;
//           }
          
//           .equal-image {
//             width: 100% !important;
//             height: auto !important;
//             border-radius: 0 !important;
//             margin: 0 !important;
//             padding: 0 15px !important;
//             box-sizing: border-box !important;
//           }
          
//           /* Fix for the two smaller images */
//           .col-md-6 > div {
//             padding: 0 15px !important;
//             box-sizing: border-box !important;
//           }
          
//           .col-md-6 img {
//             width: 100% !important;
//             border-radius: 8px !important;
//           }
//         }
        
//         /* Extra small devices */
//         @media (max-width: 576px) {
//           .equal-image-wrapper {
//             margin-left: -50vw !important;
//             margin-right: -50vw !important;
//           }
          
//           .equal-image {
//             padding: 0 10px !important;
//           }
          
//           .col-md-6 > div {
//             padding: 0 10px !important;
//           }
//         }
        
//         /* Desktop styles remain unchanged */
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
        
//         @media (max-width: 768px) {
//           .equal-image-wrapper {
//             height: 250px;
//           }
//         }
        
//         @media (max-width: 576px) {
//           .equal-image-wrapper {
//             height: 200px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DynamicWebsites;

















'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Helmet } from "react-helmet-async";

const DynamicWebsites = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dynamic Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider
        </title>
        <meta
          name="description"
          content="Excerpt Technologies Private Limited offers dynamic website solutions for interactive and personalized online experiences."
        />
      </Helmet>

      <section
        style={{
          backgroundImage: "url(/images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className="sub-header position-relative"
      >
        <div className="container">
          <div className="page-info">
            <h2 className="heading-2" style={{ color: "white", textAlign: "center" }}>Dynamic Websites</h2>
            <h6 className="heading-6">
              <Link href="/">Home</Link> / <span>Dynamic Websites</span>
            </h6>
          </div>
        </div>
      </section>

      <section id="service-details" className="service-details">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-8 mb-40">
              <div className="img-wrapper mb-25 equal-image-wrapper" style={{ height: 'auto', minHeight: 'unset',overflow:"hidden" }}>
                <Image
                  src="/images/Dynamic-Website.png"
                  className="img-fluid equal-image"
                  alt="Dynamic Websites"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '90%',
                    height: '200px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                   // borderRadius: '12px',
                     objectFit: "cover",
    objectPosition: "left top",                   borderRadius:"12px"
                  }}
                />
              </div>

              <h4 className="heading-4 mb-25">Dynamic Websites</h4>

              <div className="paragraph mb-40">
                A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features.
              </div>

              <div className="row g-1 mb-25">
                <div className="col-md-6 mt-3">
                  <Image
                    src="/portfolio/car.png"
                    alt="Dynamic Website Example"
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
                    src="/portfolio/jbk.webp"
                    alt="Dynamic Website Features"
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

              <h4 className="heading-3 mb-25">Dynamic Website Services</h4>

              <ul className="paragraph mb-40" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Maintenance & Support – Updates & fixes</li>
                <li>Interactive Features – Forms & login</li>
                <li>Database Integration – Data storage</li>
                <li>Content Management – Update content</li>
                <li>Website Design – Visual layout</li>
              </ul>

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
                    <Link href="/Dyanamicwebsite">
                      <div className="d-flex justify-content-between item">
                        <span>Dynamic Websites</span>
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

export default DynamicWebsites;




