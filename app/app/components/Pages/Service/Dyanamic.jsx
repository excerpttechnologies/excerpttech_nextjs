// 'use client';

// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { Helmet } from "react-helmet-async";

// const DynamicWebsites = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Dynamic Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED</title>
//         <meta
//           name="description"
//           content="Explore our dynamic website solutions for a more interactive online presence."
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
//               Dynamic Websites
//             </h2>
//             <h6 className="heading-6">
//               <Link href="/">Home</Link> / <span>Dynamic Websites</span>
//             </h6>
//           </div>
//         </div>
//       </section> */}




//       <section
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
//         Dynamic Websites
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
//         <span style={{ fontWeight: "600" }}>Dynamic Websites</span>
//       </h6>
//     </div>
//   </div>
// </section>

//       <section id="service-details" className="service-details">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-md-8 mb-10">
//               <div className="img-wrapper mb-25 equal-image-wrapper" style={{ height: '400px' }}>
//                 <Image
//                   src="/images/Dynamic-Website.png"
//                   className="img-fluid equal-image"
//                   alt="Dynamic Websites"
//                   width={800}
//                   height={400}
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <h4 className="heading-4 mb-25">Dynamic Websites</h4>

//               <div className="paragraph mb-40">
//                 A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features.
//               </div>

//               <div className="row g-4 mb-25">
//                 <div className="col-md-6">
//                   <div className="img-wrapper equal-image-wrapper">
//                     <Image
//                       src="/portfolio/car.png"
//                       className="img-fluid equal-image"
//                       alt="Dynamic Example"
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
//                       src="/portfolio/jbk.webp"
//                       className="img-fluid equal-image"
//                       alt="Dynamic Example"
//                       width={400}
//                       height={300}
//                       loading="lazy"
//                       decoding="async"
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
            
//             <div className="d-md-block col-md-4">
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
        
//         /* First image wrapper special height */
//         .img-wrapper.mb-25.equal-image-wrapper:first-child {
//           height: 400px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DynamicWebsites;











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
//         }}
//         className="sub-header position-relative"
//       >
//         <div className="container">
//           <div className="page-info">
//             <h2 className="heading-2" style={{ color: "white", textAlign: "center" }}>Dynamic Websites</h2>
//             <h6 className="heading-6">
//               <Link href="/">Home</Link> / <span>Dynamic Websites</span>
//             </h6>
//           </div>
//         </div>
//       </section>

//       <section id="service-details" className="service-details">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-md-8 mb-40">
//               <div className="img-wrapper mb-25 equal-image-wrapper" style={{ height: 'auto', minHeight: 'unset' }}>
//                 <Image
//                   src="/images/Dynamic-Website.png"
//                   className="img-fluid equal-image"
//                   alt="Dynamic Websites"
//                   width={400}
//                   height={300}
//                   loading="lazy"
//                   decoding="async"
//                   style={{
//                     width: '90%',
//                     height: '200px',
//                     display: 'block',
//                     marginLeft: 'auto',
//                     marginRight: 'auto',
//                     borderRadius: '12px'
//                   }}
//                 />
//               </div>

//               <h4 className="heading-4 mb-25">Dynamic Websites</h4>

//               <div className="paragraph mb-40">
//                 A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features.
//               </div>

//               <div className="row g-1 mb-25">
//                 <div className="col-md-6 mt-3">
//                   <Image
//                     src="/portfolio/car.png"
//                     alt="Dynamic Website Example"
//                     width={400}
//                     height={300}
//                     style={{
//                       width: '100%',
//                       height: '200px',
//                       objectFit: 'cover',
//                       borderRadius: '12px'
//                     }}
//                   />
//                 </div>

//                 <div className="col-md-6 mt-3">
//                   <Image
//                     src="/portfolio/jbk.webp"
//                     alt="Dynamic Website Features"
//                     width={400}
//                     height={300}
//                     style={{
//                       width: '100%',
//                       height: '200px',
//                       objectFit: 'cover',
//                       borderRadius: '12px'
//                     }}
//                   />
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
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
        className="sub-header position-relative"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="page-info" style={{ width: "100%" }}>
            <h2 
              className="heading-2" 
              style={{ 
                color: "white", 
                textAlign: "center",
                fontSize: "clamp(2.5rem, 4vw, 2.5rem)",
                lineHeight: "1.3",
                margin: "0 auto",
                padding: "0 15px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
                boxSizing: "border-box"
              }}
            >
              Dynamic Websites
            </h2>
            <h6 
              className="heading-6"
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: "1.5",
                margin: "10px auto 0",
                padding: "0 15px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
                boxSizing: "border-box"
              }}
            >
              <Link 
                href="/" 
                style={{ 
                  color: "white", 
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                   fontSize: "1.5rem"
                }}
              >
                Home
              </Link> 
              {" / "} 
              <span style={{ whiteSpace: "nowrap" , fontSize: "1.5rem" }}>Dynamic Websites</span>
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
                  src="/images/Dynamic-Website.png"
                  className="img-fluid equal-image"
                  alt="Dynamic Websites"
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
                    borderRadius: '12px',
                    maxWidth: '100%'
                  }}
                />
              </div>

              <h4 className="heading-4 mb-25">Dynamic Websites</h4>

              <div className="paragraph mb-40">
                A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features.
              </div>

              <div className="row g-1 mb-25">
                <div className="col-md-6 mt-3">
                  <div style={{ width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
                    <Image
                      src="/portfolio/car.png"
                      alt="Dynamic Website Example"
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div style={{ width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
                    <Image
                      src="/portfolio/jbk.webp"
                      alt="Dynamic Website Features"
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
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
        
        /* Responsive fixes */
        @media (max-width: 768px) {
          .equal-image-wrapper {
            height: 250px;
          }
          
          .col-md-8, .col-md-4 {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .equal-image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicWebsites;