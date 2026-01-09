

// 'use client';

// import React from "react";
// import Image from "next/image";

// function Homeabout() {
//   return (
//     <div className="responsive_aboutus" style={{ marginBottom: "15px" }}>
//       <section className="about-area pb-150s tp-el-section">
//         <div className="container" style={{ maxWidth: "1440px" }}>
//           <div className="row align-items-end">
//             <div className="col-xl-6 col-lg-5" style={{ display: "flex", alignItems: "center" }}>
//               <div className="tp-about-thumb" style={{ width: "100%" }}>
//                 <div className="tp-about-thumb-main overlay-anim w-img tp-thumb-common fix">
//                   <div className="tp-thumb-common-overlay"></div>
//                   <Image
//                     decoding="async"
//                     loading="lazy"
//                     src="/images/111.webp"
//                     width="400"
//                     height="500"
//                     alt=""
//                     style={{ display: "block", aspectRatio: "400 / 500" }}
//                   />
//                 </div>
//                 <div className="tp-about-thumb-shape">
//                   <div className="tp-about-thumb-shape-one">
//                     <div className="about-image-1 overlay-anim tp-thumb-common fix">
//                       <div className="tp-thumb-common-overlay"></div>
//                       <Image
//                         decoding="async"
//                         loading="lazy"
//                         src="/images/ab2.webp"
//                         width="400"
//                         height="400"
//                         alt=""
//                         style={{ marginTop: "60px", display: "block", aspectRatio: "400 / 400" }}
//                       />
//                     </div>
//                   </div>
                 
//                 </div>
                
//               </div>
//             </div>
            
//             <div className="col-xl-6 col-lg-7" style={{ marginTop: "40px", display: "flex", alignItems: "center" }}>
//               <div className="tp-about-wrap ml-20" style={{ width: "100%", marginTop: "-100px" }}>
//                 <div className="tp-section mb-25">
//                   <h1 style={{ 
//                     textAlign: "left", 
//                     marginBottom: "15px",
//                     fontSize: "42px",  // Bigger font size
//                     fontWeight: "700"   // Bold
//                   }}>
//                     About us...
//                   </h1>

//                   <h2 className="tp-section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
//                     Smart Solution For Business
//                   </h2>

//                   <div className="container" style={{ marginLeft: "0", paddingLeft: "0", paddingRight: "0" }}>
//                     <div
//                       className="tp-section-title-wrapper"
//                       style={{ textAlign: "justify", lineHeight: "1.8" }}
//                     >
//                       <p style={{fontWeight:"bold"}}>
//                         <b style={{ fontSize: "17px" }}>
//                           Excerpt Technologies Private Limited
//                         </b>{" "}
//                         <span></span>we redefine the way businesses harness
//                         technology. Backed by a team of professionals with 20+
//                         years of proven expertise in the software industry, we
//                         specialize in building solutions that are not only
//                         powerful but purpose-driven. Our portfolio spans across
//                         AI integrated ERP and CRM platforms, advanced E-Learning
//                         and LMS solutions, dynamic E-Commerce applications,
//                         interactive Power BI dashboards, AI-powered tools, and
//                         niche projects designed to simplify complex business
//                         challenges. Each solution is crafted with precision,
//                         blending innovation, usability, and scalability. What
//                         sets us apart is our ability to translate business needs
//                         into future-ready digital ecosystems that drive
//                         measurable impact. We don&apos;t
// believe in
//                         one-size-fits-all; instead, we design tailored solutions
//                         that align with every client&apos;s
//  unique vision and goals.
//                       </p>
//                     </div>
//                     <div
//                       className="tp-section-title-wrapper"
//                       style={{ textAlign: "justify" }}
//                     >
//                       <p style={{lineHeight:1.8,fontWeight:"bold"}}>
//                         {" "}
//                         <b>Excerpt Technologies Private Limited </b> our mission
//                         is clear—to empower businesses with technology that
//                         works smarter, faster, and better. With integrity,
//                         innovation, and collaboration at our core, we build more
//                         than software—we build success stories.{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Homeabout;











'use client';

import React from "react";
import Image from "next/image";

function Homeabout() {
  return (
    <div className="responsive_aboutus" style={{ marginBottom: "15px" }}>
      <section className="about-area pb-150s tp-el-section">
        <div className="container" style={{ maxWidth: "1440px", marginTop: "-50px" }}>
          <div  className="row p-0 align-items-end">
            <div className="col-xl-6  col-lg-5 right-fix" style={{ display: "flex", alignItems: "center",position:"relative" }}>
              <div style={{position:"absolute",zIndex:20,height:"100%",width:"100%",top:0,left:0,bottom:0,right:0}}>

              </div>
              <div className="tp-about-thumb" style={{ width: "100%", padding: 0, margin: 0 }}>
                {/* Main Image Container */}
                <div 
                  className="tp-about-thumb-main overlay-anim w-img tp-thumb-common fix"
                  style={{ 
                    margin: 0, 
                    padding: 0,
                    position: "relative",
                    display: "inline-block"
                  }}
                >
                  <div className="tp-thumb-common-overlay"></div>
                  <div className="image-container-main">
                    <Image
                      decoding="async"
                      loading="lazy"
                      src="/images/111.webp"
                      width={400}
                      height={500}
                      alt="About us main image"
                      style={{ 
                        objectFit: "cover",
                        display: "block"
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                {/* Secondary Image Container */}
                <div className="tp-about-thumb-shape" style={{ margin: 0, padding: 0, marginTop: "30px" }}>
                  <div className="tp-about-thumb-shape-one">
                    <div className="about-image-1 overlay-anim tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay"></div>
                      <div className="image-container-secondary">
                        <Image
                          decoding="async"
                          loading="lazy"
                          src="/images/ab2.webp"
                          width={400}
                          height={400}
                          alt="About us secondary image"
                          style={{ 
                            objectFit: "cover",
                            display: "block"
                          }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-6 col-lg-7" style={{ 
              marginTop: "40px", 
              display: "flex", 
              alignItems: "center",
              paddingLeft: "20px"
            }}>
              <div className="tp-about-wrap ml-20" style={{ width: "100%", marginTop: "-5px" }}>
                <div className="tp-section mb-25">
                  <h1 style={{ 
                    textAlign: "left", 
                    marginBottom: "15px",
                    fontSize: "42px",
                    fontWeight: "700"
                  }}>
                    About us...
                  </h1>

                  <h2 className="tp-section-title" style={{ 
                    textAlign: "left", 
                    marginBottom: "20px",
                    fontSize: "28px"
                  }}>
                    Smart Solution For Business
                  </h2>

                  <div className="container" style={{ 
                    marginLeft: "0", 
                    paddingLeft: "0", 
                    paddingRight: "0" 
                  }}>
                    <div
                      className="tp-section-title-wrapper"
                      style={{ textAlign: "justify", lineHeight: "1.8" }}
                    >
                      <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
                        <span style={{ fontSize: "17px", display: "block", marginBottom: "10px" }}>
                          Excerpt Technologies Private Limited
                        </span>
                        we redefine the way businesses harness technology. Backed by a team of 
                        professionals with 20+ years of proven expertise in the software industry, 
                        we specialize in building solutions that are not only powerful but purpose-driven. 
                        Our portfolio spans across AI integrated ERP and CRM platforms, advanced E-Learning 
                        and LMS solutions, dynamic E-Commerce applications, interactive Power BI dashboards, 
                        AI-powered tools, and niche projects designed to simplify complex business challenges. 
                        Each solution is crafted with precision, blending innovation, usability, and scalability. 
                        What sets us apart is our ability to translate business needs into future-ready digital 
                        ecosystems that drive measurable impact. We don&apos;t believe in one-size-fits-all; 
                        instead, we design tailored solutions that align with every client&apos;s unique vision 
                        and goals.
                      </p>
                    </div>
                    <div
                      className="tp-section-title-wrapper"
                      style={{ textAlign: "justify" }}
                    >
                      <p style={{ lineHeight: 1.8, fontWeight: "bold" }}>
                        <b>Excerpt Technologies Private Limited</b> our mission is clear—to empower businesses 
                        with technology that works smarter, faster, and better. With integrity, innovation, 
                        and collaboration at our core, we build more than software—we build success stories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Responsive CSS for small devices */}
      <style jsx>{`
        /* Desktop styles */
        .image-container-main,
        .image-container-secondary {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .image-container-main {
          height: 500px;
        }
        
        .image-container-secondary {
          height: 400px;
          margin-top: 60px;
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          /* Add more space on right side for mobile */
          .responsive_aboutus {
            overflow-x: hidden;
            width: 100%;
            padding-right: 20px; /* Increased from 15px to 20px */
            box-sizing: border-box;
          }
          
          

          .container {
            padding-left: 10px !important; /* Increased from 15px to 20px */
            padding-right: 20px !important; /* Increased from 15px to 20px */
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 100% !important;
            overflow-x: hidden;
            box-sizing: border-box;
          }
          
          .row {
            margin-left: 0 !important;
            margin-right: 0 !important;
            overflow-x: hidden;
            width: 100%;
            box-sizing: border-box; 
          }
          
          .col-xl-6.col-lg-5,
          .col-xl-6.col-lg-7 {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            overflow-x: hidden;
            width: 100%;
            box-sizing: border-box;
          }
          
          /* Make both images same height on mobile */
          .image-container-main,
          .image-container-secondary {
            height: 280px !important; /* Both images same height */
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            display: block !important;
            overflow: hidden !important;
            box-sizing: border-box;
          }
          
          /* Remove margin-top from second image on mobile */
          .image-container-secondary {
            margin-top: 20px !important;
          }
          
          /* Ensure images fill containers */
          .image-container-main img,
          .image-container-secondary img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            display: block !important;
          }
          
          /* Override desktop styles for mobile */
          .tp-about-thumb-main,
          .about-image-1 {
            width: 100% !important;
            min-width: 100% !important;
            min-height: auto !important;
            height: auto !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box;
          }
          
          /* Remove negative margins and adjust spacing */
          .col-xl-6.col-lg-5 {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            width: 100%;
          
          }
          
          .col-xl-6.col-lg-7 {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-top: 30px !important;
            display: block !important;
            width: 100%;
            padding-right: 15px !important; /* Increased from 10px to 15px */
            box-sizing: border-box;
          }
          
          /* Add more padding to content wrapper */
          .tp-about-wrap.ml-20 {
            margin-left: 0 !important;
            padding: 0 15px 0 20px !important; /* Increased right padding from 10px to 15px */
            width: 100%;
            box-sizing: border-box;
          }
          
          h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
            text-align: center !important;
          }
          
          .tp-section-title {
            font-size: 20px !important;
            margin-bottom: 15px !important;
            text-align: center !important;
          }
          
          p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            padding-right: 10px !important; /* Added right padding to text */
          }
          
          .tp-about-thumb {
            margin-left: 0 !important;
            margin-bottom: 20px !important;
            width: 100% !important;
            padding: 0 20px !important; /* Increased from 15px to 20px */
            box-sizing: border-box;
          }
          
          .tp-section.mb-25 {
            margin-bottom: 15px !important;
          }
          
          /* Ensure the about area doesn't overflow */
          .about-area.pb-150s.tp-el-section {
            overflow-x: hidden;
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          /* Make images even smaller on very small devices */
          .image-container-main,
          .image-container-secondary {
            height: 250px !important;
            padding-right: 15px !important;
          }
          
          /* Add more padding on very small screens */
          .container {
            padding-left: 8px !important; /* Increased from 10px to 15px */
            padding-right: 12px !important; /* Increased from 10px to 15px */
          }
          
          .tp-about-thumb {
            padding: 0 15px !important; /* Increased from 10px to 15px */
          }
          
          .tp-about-wrap.ml-20 {
            padding: 0 5px 0 5px !important; /* Increased right padding from 5px to 10px */
          }
          
          h1 {
            font-size: 24px !important;
          }
          
          .tp-section-title {
            font-size: 18px !important;
          }
          
          p {
            font-size: 13px !important;
            line-height: 1.5 !important;
            padding-right: 8px !important; /* Added right padding to text */
          }
          
          .col-xl-6.col-lg-7 {
            padding-right: 10px !important; /* Increased from default to 10px */
          }
             .tp-about-thumb-shape{
          margin-top:-30px !important;
          }
        }

         @media (max-width: 760px) {
          .tp-about-thumb-shape{
          margin-top:-20px !important;
          }
          }
        
        @media (max-width: 360px) {
          .image-container-main,
          .image-container-secondary {
            height: 220px !important;
            padding: 0px !important;
            padding-right: 13px !important;
          }
          
          tp-about-thumb-shape{
          margin-top:-25px !important;
          }

          .container {
            padding-left: 5px !important; /* Increased from 4px to 12px */
            padding-right: 12px !important; /* Increased from 10px to 12px */
          }
          
          .tp-about-wrap.ml-20 {
            padding: 0 8px 0 12px !important; /* Increased right padding from 3px to 8px */
          }
          
          .tp-about-thumb {
            padding: 0 12px !important;
          }
          
          p {
            padding-right: 6px !important;
          }
        }
        
        /* Override any CLS guard rules for this specific component */
        .tp-about-thumb-main,
        .tp-about-thumb-main > div,
        .about-image-1,
        .about-image-1 > div {
          display: block !important;
          overflow: visible !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

export default Homeabout;