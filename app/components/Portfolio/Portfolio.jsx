










// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from 'next/link';

// const Portfolio = () => {
//     const [activeTab, setActiveTab] = useState('All');
//     const [showAll, setShowAll] = useState(false);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [email, setEmail] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');

//     // Portfolio data with categories
//     const portfolioItems = [
//         {
//             id: 1,
//             title: "RGVK",
//             category: "Static",
//             type: "Tourism",
//             image: "/portfolio/rgvk.webp",
//             link: "https://rgvkindia.com/",
//             className: "hideOnMd"
   
//         },
//         {
//             id: 2,
//             title: "Car Captain",
//             category: "E-com",
//             type: "E-Commerce",
//             image: "/portfolio/car.webp",
//             link: "https://carcaptain.in/",
//             className: ""
//         },
//         {
//             id: 3,
//             title: "DTECH",
//             category: "CRM",
//             type: "Civil",
//             image: "/portfolio/dtech.webp",
//             link: "https://dtechwale.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 4,
//             title: "RoyalHood",
//             category: "E-com",
//             type: "E-Commerce",
//             image: "/portfolio/royalhood.webp",
//             link: "https://royalhood.in/",
//             className: ""
            
//         },
//         {
//             id: 5,
//             title: "ANANTA SAUKHYAM",
//             category: "Health",
//             type: "Wellness",
//             image: "/portfolio/ananta.webp",
//             link: "https://anantasaukhyam.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 6,
//             title: "DIEA",
//             category: "CRM",
//             type: "Industrial Association",
//             image: "/portfolio/diea.webp",
//             link: "https://diea.in/",
//             className: "hideOnMd"
//         },
//         {
//             id: 7,
//             title: "AUTOMET ENGINEERING",
//             category: "Static",
//             type: "Automobile",
//             image: "/portfolio/automet.webp",
//             link: "http://www.autometengg.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 8,
//             title: "GIFCO AUTO FILTERS INDIA",
//             category: "Static",
//             type: "Automobile",
//             image: "/portfolio/gifco.webp",
//             link: "http://gifcoindia.com/",
//             className: "hideOnMd",
          
//         },
//         {
//             id: 9,
//             title: "Shaw Tech Training Services",
//             category: "LMS",
//             type: "Educational",
//             image: "/portfolio/stts.webp",
//             link: "https://sttsonline.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 10,
//             title: "Mech Mold",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/mech.webp",
//             link: "https://mechmold.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 11,
//             title: "IT DESK MAHADEVPURA",
//             category: "LMS",
//             type: "Educational",
//             image: "/images/p5.webp",
//             link: "https://itdeskmahadevpura.com/",
//             className: ""
//         },
//         {
//             id: 12,
//             title: "CAD DESK MAHADEVPURA",
//             category: "LMS",
//             type: "Educational",
//             image: "/images/p4.webp",
//             link: "http://caddeskmahadevpura.com/",
//             className: ""
//         },
//         {
//             id: 13,
//             title: "Terra Clenz",
//             category: "E-com",
//             type: "E-Commerce",
//             image: "/portfolio/terra.webp",
//             link: "https://terraclenz.com/",
//             className: ""
//         },
//         {
//             id: 14,
//             title: "Cad desk",
//             category: "CRM",
//             type: "CRM",
//             image: "/portfolio/cad.webp",
//             link: "https://caddesk.in/",
//             className: ""
//         },
//         {
//             id: 15,
//             title: "JBK Academy",
//             category: "CRM",
//             type: "CRM",
//             image: "/portfolio/jbk.webp",
//             link: "https://jbkadmin.jbkacademy.in/",
//             className: ""
//         },
//         {
//             id: 16,
//             title: "Triicons",
//             category: "CRM",
//             type: "CRM",
//             image: "/portfolio/triicons.webp",
//             link: "https://triicons.com/",
//             className: ""
//         },
//         {
//             id: 17,
//             title: "City Hospitality Solutions",
//             category: "CRM",
//             type: "CRM",
//             image: "/portfolio/city.webp",
//             link: "https://crm.cityhospitalitysolutions.com",
//             className: ""
//         },
//         {
//             id: 18,
//             title: "Jyothi Cloud ERP",
//             category: "ERP",
//             type: "ERP",
//             image: "/portfolio/erp.webp",
//             link: "https://erp.etpl.ai",
//             className: ""
//         },
//         {
//             id: 19,
//             title: "BDM Technology",
//             category: "Static",
//             type: "Educational",
//             image: "/portfolio/bdm.webp",
//             link: "https://bdmtech.in/",
//             className: ""
//         },
//         {
//             id: 20,
//             title: "Darklick",
//             category: "Static",
//             type: "Product",
//             image: "/portfolio/dark.webp",
//             link: "http://darklick.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 21,
//             title: "Lynx industries",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/lynx.webp",
//             link: "http://lynxindustries.in/",
//             className: "hideOnMd"
//         },
//         {
//             id: 22,
//             title: "P and S Industries",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/ps.webp",
//             link: "http://pandsindustries.in",
//             className: "hideOnMd"
//         },
//         {
//             id: 23,
//             title: " Sri Engineering",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/srii.webp",
//             link: "https://sriengineering.net/",
//             className: "hideOnMd"
//         },
//         {
//             id: 24,
//             title: "Sai Shanti Vidya Niketan",
//             category: "Static",
//             type: "Educational",
//             image: "/portfolio/ssvn.webp",
//             link: "http://saishantividyaniketan.in/",
//             className: "hideOnMd"
//         },
//         {
//             id: 25,
//             title: "Umang Marketing & Engineering Services",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/umang.webp",
//             link: "https://umangmarketing.com/",
//             className: "hideOnMd"
//         },
//         {
//             id: 26,
//             title: "Upstreams",
//             category: "Static",
//             type: "Industrial",
//             image: "/portfolio/upst.webp",
//             link: "https://upstreamhotels.in/",
//             className: "hideOnMd"
//         },
//         {
//             id: 27,
//             title: "Terra Batteries",
//             category: "Static",
//             type: "Ecommerce",
//             image: "/portfolio/terrabat.webp",
//             link: "https://terrabatteries.com/",
//             className: "hideOnMd"
//         },
//     ];

//     // Slider images - using first 8 portfolio items for the slider
//     const sliderImages = portfolioItems.slice(0, 8);

//     // Auto-slide effect
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//         }, 4000);

//         return () => clearInterval(timer);
//     }, [sliderImages.length]);

//     // Popup effect
//     useEffect(() => {
//         if (showPopup) {
//             const timer = setTimeout(() => {
//                 setShowPopup(false);
//             }, 2500);
//             return () => clearTimeout(timer);
//         }
//     }, [showPopup]);

//     // Get unique categories
//     const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

//     // Filter items based on active tab
//     const filteredItems = activeTab === 'All'
//         ? portfolioItems
//         : portfolioItems.filter(item => item.category === activeTab);

//     // Determine how many items to show
//     const initialItemCount = 6;
//     const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, initialItemCount);
//     const hasMoreItems = filteredItems.length > initialItemCount;

//     const renderPortfolioCard = (item) => {
//         const CardContent = () => (
//             <div className={`news-card position-relative ${item.id === 2 ? 'news-card-dyavasandra' : ''}`}
//                 style={item.id === 2 ? { height: "350px" } : {}}>
//                 <div className="img-wrapper mb-30">
//                     <Image
//                       src={item.image} 
//                       alt={item.title} 
//                       width="400" 
//                       height="300" 
//                     //   loading="lazy" 
//                       decoding="async"
//                       style={{ display: 'block', aspectRatio: '400 / 300' }}
//                     />
//                 </div>
//                 <div className="content">
//                     <h5 className="heading-5">{item.title}</h5>
//                     <div className="paragraph mb-25">{item.type}</div>
//                 </div>
//                 <div className="circle-1 position-absolute"></div>
//                 <div className="circle-2 position-absolute"></div>
//             </div>
//         );

//         return (
//             <div key={item.id} className={`col-md-6 col-lg-4 ${item.className}`}>
//                 {item.link ? (
//                     <a href={item.link} className="link-to-external-website" target='_blank' rel="noopener noreferrer">
//                         <CardContent />
//                     </a>
                    
//                 ) : (
//                     <div>
//                         <CardContent />
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     const handleReadMore = () => {
//         setShowAll(!showAll);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
//     };

//     const handleEmailSubmit = (e) => {
//         e.preventDefault();
        
//         // Simple email validation
//         if (!email || !email.includes('@')) {
//             setPopupMessage('⚠️ Please enter a valid email address');
//             setShowPopup(true);
//             return;
//         }
        
//         // Show success message
//         setPopupMessage('✅ Thank you for submitting!');
//         setShowPopup(true);
        
//         // Clear email field
//         setEmail('');
//     };

//     return (
//         <div>
//             <style jsx>{`
//                 .simple-slider-ram {
//                     position: relative;
//                     width: 100%;
//                     max-width: 100%;
//                     height: 580px;
//                     overflow: hidden;
//                     border-radius: 15px;
//                     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//                     background: #e9ecef;
                    
//                 }

//                 .simple-slides-wrapper-ram {
//                     position: relative;
//                     width: 100%;
//                     height: 100%;
//                 }

//                 .simple-single-slide-ram {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     opacity: 0;
//                     transition: opacity 0.5s ease-in-out;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     background: white;
//                 }

//                 .simple-single-slide-ram.active-slide-ram {
//                     opacity: 1;
//                     z-index: 1;
//                 }

//                 .simple-slide-img-ram {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                 }

//                 .simple-nav-btn-ram {
//                     position: absolute;
//                     top: 50%;
//                     transform: translateY(-50%);
//                     background: rgba(255, 255, 255, 0.95);
//                     border: none;
//                     border-radius: 50%;
//                     width: 50px;
//                     height: 50px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     cursor: pointer;
//                     z-index: 10;
//                     font-size: 24px;
//                     color: #0011ff;
//                     font-weight: bold;
//                     transition: all 0.3s;
//                 }

//                 .simple-nav-btn-ram:hover {
//                     background: #0011ff;
//                     color: white;
//                     transform: translateY(-50%) scale(1.1);
//                 }

//                 .simple-nav-btn-ram.left-ram {
//                     left: 20px;
//                 }

//                 .simple-nav-btn-ram.right-ram {
//                     right: 20px;
//                 }

//                 .simple-dots-wrapper-ram {
//                     position: absolute;
//                     bottom: 20px;
//                     left: 50%;
//                     transform: translateX(-50%);
//                     display: flex;
//                     gap: 12px;
//                     z-index: 10;
//                 }

//                 .simple-dot-ram {
//                     width: 12px;
//                     height: 12px;
//                     border-radius: 50%;
//                     background: rgba(255, 255, 255, 0.6);
//                     cursor: pointer;
//                     transition: all 0.3s;
//                     border: 2px solid rgba(0, 17, 255, 0.3);
//                 }

//                 .simple-dot-ram.dot-active-ram {
//                     background: #0011ff;
//                     transform: scale(1.3);
//                     border-color: #0011ff;
//                 }

//                 /* Popup Styles */
//                 .popup-box {
//                     position: fixed;
//                     top: 50%;
//                     left: 50%;
//                     transform: translate(-50%, -50%);
//                     background: white;
//                     padding: 25px 35px;
//                     border-radius: 12px;
//                     box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
//                     z-index: 9999;
//                     font-size: 18px;
//                     font-weight: 500;
//                     text-align: center;
//                     animation: fadeInOut 2.5s ease forwards;
//                     max-width: 400px;
//                     width: 90%;
//                 }

//                 @keyframes fadeInOut {
//                     0% { 
//                         opacity: 0; 
//                         transform: translate(-50%, -60%); 
//                     }
//                     10% { 
//                         opacity: 1; 
//                         transform: translate(-50%, -50%); 
//                     }
//                     90% { 
//                         opacity: 1; 
//                         transform: translate(-50%, -50%); 
//                     }
//                     100% { 
//                         opacity: 0; 
//                         transform: translate(-50%, -40%); 
//                     }
//                 }

//                 /* Newsletter Styles */
//                 .newsletter-Wrapper {
//                     text-align: center;
//                 }

//                 .newsletter-Wrapper .text h3 {
//                     font-size: 2rem;
//                     color: white;
//                     margin-bottom: 10px;
//                 }

//                 .newsletter-Wrapper .text p {
//                     font-size: 1.2rem;
//                     color: rgba(255, 255, 255, 0.9);
//                     margin-bottom: 30px;
//                 }

//                 .form {
//                     max-width: 600px;
//                     margin: 0 auto;
//                 }

//                 .email-wrapper {
//                     display: flex;
//                     gap: 15px;
//                     justify-content: center;
//                 }

//                 .email-wrapper input {
//                     flex: 1;
//                     max-width: 400px;
//                     padding: 15px 25px;
//                     border: none;
//                     // border-radius: 50px;
//                     font-size: 16px;
//                     outline: none;
//                     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//                 }

//                 .subscribe-btn {
//                     padding: 15px 40px;
//                     background: #0011ff;
//                     color: white;
//                     border: none;
//                     border-radius: 50px;
//                     font-size: 16px;
//                     font-weight: 600;
//                     cursor: pointer;
//                     transition: all 0.3s ease;
//                     white-space: nowrap;
//                     box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3);
//                 }

//                 .subscribe-btn:hover {
//                     background: #0000cc;
//                     transform: translateY(-2px);
//                     box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4);
//                 }

//                 @media (max-width: 768px) {
//                     .simple-slider-ram {
//                         height: 300px;
//                         margin-bottom: 30px;
//                     }

//                     .simple-slide-img-ram {
//                         object-fit: contain;
//                         padding: 20px;
//                     }

//                     .simple-nav-btn-ram {
//                         width: 40px;
//                         height: 40px;
//                         font-size: 20px;
//                     }

//                     .simple-nav-btn-ram.left-ram {
//                         left: 10px;
//                     }

//                     .simple-nav-btn-ram.right-ram {
//                         right: 10px;
//                     }

//                     .simple-dots-wrapper-ram {
//                         bottom: 10px;
//                         gap: 8px;
//                     }

//                     .simple-dot-ram {
//                         width: 10px;
//                         height: 10px;
//                     }

//                     .portfolio-tabs-ram {
//                         margin-top: 20px !important;
//                         margin-bottom: 30px !important;
//                         overflow-x: auto;
//                         -webkit-overflow-scrolling: touch;
//                     }

//                     .tab-wrapper-ram {
//                         display: flex;
//                         gap: 8px;
//                         padding: 0 15px;
//                     }

//                     .tab-btn-ram {
//                         padding: 10px 18px !important;
//                         font-size: 13px !important;
//                         white-space: nowrap;
//                         flex-shrink: 0;
//                     }

//                     .email-wrapper {
//                         flex-direction: column;
//                         align-items: center;
//                         gap: 15px;
//                     }

//                     .email-wrapper input,
//                     .subscribe-btn {
//                         width: 100%;
//                         max-width: 300px;
//                     }

//                     .newsletter-Wrapper .text h3 {
//                         font-size: 1.5rem;
//                     }

//                     .newsletter-Wrapper .text p {
//                         font-size: 1rem;
//                     }

//                     .hideOnMd {
//                         display: none !important;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .simple-slider-ram {
//                         height: 250px;
//                     }

//                     .simple-nav-btn-ram {
//                         width: 35px;
//                         height: 35px;
//                         font-size: 18px;
//                     }

//                     .simple-nav-btn-ram.left-ram {
//                         left: 8px;
//                     }

//                     .simple-nav-btn-ram.right-ram {
//                         right: 8px;
//                     }

//                     .popup-box {
//                         padding: 20px;
//                         font-size: 16px;
//                     }

//                     /* Mobile Responsive Styles for Newsletter - Classes with 4 */
// @media (max-width: 768px) {
//     .newsletter4Wrapper {
//         padding: 40px 20px !important;
//         text-align: center !important;
//         display: flex !important;
//         flex-direction: column !important;
//         align-items: center !important;
//         justify-content: center !important;
//         min-height: auto !important;
//     }
    
//     .text4Container {
//         margin-bottom: 25px !important;
//         padding: 0 !important;
//         width: 100% !important;
//         max-width: 500px !important;
//     }
    
//     .heading4Title {
//         font-size: 24px !important;
//         line-height: 1.3 !important;
//         margin-bottom: 12px !important;
//         word-wrap: break-word !important;
//         color: white !important;
//         font-weight: 700 !important;
//         padding: 0 10px !important;
//     }
    
//     .para4Description {
//         font-size: 16px !important;
//         margin-bottom: 30px !important;
//         color: rgba(255, 255, 255, 0.95) !important;
//         padding: 0 15px !important;
//         line-height: 1.5 !important;
//     }
    
//     .form4Layout {
//         width: 100% !important;
//         max-width: 500px !important;
//         margin: 0 auto !important;
//         padding: 0 !important;
//     }
    
//     .email4Wrapper {
//         display: flex !important;
//         flex-direction: column !important;
//         gap: 15px !important;
//         width: 100% !important;
//         padding: 0 10px !important;
//     }
    
//     .input4Field {
//         width: 100% !important;
//         padding: 16px 20px !important;
//         font-size: 16px !important;
//         border-radius: 50px !important;
//         border: 2px solid rgba(255, 255, 255, 0.3) !important;
//         box-sizing: border-box !important;
//         background: rgba(255, 255, 255, 0.95) !important;
//         color: #333 !important;
//         font-weight: 500 !important;
//         height: 56px !important;
//     }
    
//     .input4Field::placeholder {
//         color: #666 !important;
//         opacity: 0.8 !important;
//     }
    
//     .input4Field:focus {
//         outline: none !important;
//         border-color: #0011ff !important;
//         background: white !important;
//         box-shadow: 0 0 0 3px rgba(0, 17, 255, 0.1) !important;
//     }
    
//     .subscribe4Button {
//         width: 100% !important;
//         padding: 16px 20px !important;
//         font-size: 16px !important;
//         border-radius: 50px !important;
//         background-color: #0011ff !important;
//         color: white !important;
//         border: none !important;
//         cursor: pointer !important;
//         transition: all 0.3s !important;
//         font-weight: 600 !important;
//         height: 56px !important;
//         box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3) !important;
//     }
    
//     .subscribe4Button:hover {
//         background-color: #0000cc !important;
//         transform: translateY(-2px) !important;
//         box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4) !important;
//     }
    
//     .subscribe4Button:active {
//         transform: translateY(0) !important;
//     }
    
//     .span4Text {
//         font-weight: 600 !important;
//         font-size: 16px !important;
//         letter-spacing: 0.5px !important;
//     }
// }

// @media (max-width: 480px) {
//     .newsletter4Wrapper {
//         padding: 35px 16px !important;
//     }
    
//     .heading4Title {
//         font-size: 22px !important;
//         line-height: 1.4 !important;
//         padding: 0 5px !important;
//     }
    
//     .para4Description {
//         font-size: 15px !important;
//         margin-bottom: 25px !important;
//         padding: 0 10px !important;
//     }
    
//     .form4Layout {
//         max-width: 100% !important;
//     }
    
//     .email4Wrapper {
//         padding: 0 !important;
//         gap: 12px !important;
//     }
    
//     .input4Field {
//         padding: 14px 18px !important;
//         font-size: 15px !important;
//         height: 52px !important;
//     }
    
//     .subscribe4Button {
//         padding: 14px 18px !important;
//         font-size: 15px !important;
//         height: 52px !important;
//     }
    
//     .span4Text {
//         font-size: 15px !important;
//     }
// }

// @media (max-width: 360px) {
//     .newsletter4Wrapper {
//         padding: 30px 12px !important;
//     }
    
//     .heading4Title {
//         font-size: 20px !important;
//     }
    
//     .para4Description {
//         font-size: 14px !important;
//         margin-bottom: 20px !important;
//     }
    
//     .input4Field {
//         padding: 12px 16px !important;
//         font-size: 14px !important;
//         height: 48px !important;
//     }
    
//     .subscribe4Button {
//         padding: 12px 16px !important;
//         font-size: 14px !important;
//         height: 48px !important;
//     }
    
//     .span4Text {
//         font-size: 14px !important;
//     }
// }

// /* Special fix for very small screens */
// @media (max-width: 320px) {
//     .newsletter4Wrapper {
//         padding: 25px 10px !important;
//     }
    
//     .heading4Title {
//         font-size: 18px !important;
//         padding: 0 !important;
//     }
    
//     .para4Description {
//         font-size: 13px !important;
//         padding: 0 5px !important;
//     }
    
//     .input4Field {
//         padding: 10px 14px !important;
//         height: 44px !important;
//     }
    
//     .subscribe4Button {
//         padding: 10px 14px !important;
//         height: 44px !important;
//     }

//     /* Desktop Only Styles for the Button */
// @media (min-width: 769px) {
//     .subscribe4Button {
//         background-color: #0011ff !important;
//         color: white !important;
//         border: none !important;
//         padding: 15px 40px !important;
//         border-radius: 50px !important;
//         font-size: 16px !important;
//         font-weight: 600 !important;
//         cursor: pointer !important;
//         transition: all 0.3s ease !important;
//         white-space: nowrap !important;
//         box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3) !important;
//     }
    
//     .subscribe4Button:hover {
//         background-color: #0000cc !important;
//         transform: translateY(-2px) !important;
//         box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4) !important;
//     }
    
//     .span4Text {
//         color: white !important;
//         font-weight: 600 !important;
//         font-size: 16px !important;
//     }
// }
// }
//                 }
//             `}</style>

//             {/* Popup */}
//             {showPopup && (
//                 <div className="popup-box">
//                     {popupMessage}
//                 </div>
//             )}

//             <section style={{
//                 backgroundImage: `url("/images/00.webp")`,
//                 backgroundColor: "rgb(255, 255, 255)",
//             }}
//                 className="sub-header position-relative">
//                 <div className="container">
//                     <div className="page-info ">
//                         <h2 className="heading-2" style={{ color: "white", textAlign: "center" }}>Our Portfolio</h2>
//                         <h6 className="heading-6">
//                             <Link href="/">Home</Link> / <Link href="#">Portfolio</Link>
//                         </h6>
//                     </div>
//                 </div>
//             </section>

//             <section id="projects">
//                 <div className="container">
//                     <div className="simple-slider-ram">
//                         <div className="simple-slides-wrapper-ram">
//                             {sliderImages.map((item, index) => (
//                                 <div 
//                                     key={index} 
//                                     className={`simple-single-slide-ram ${index === currentSlide ? 'active-slide-ram' : ''}`}
//                                 >
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="simple-slide-img-ram"
//                                         width="1200"
//                                         height="580"
//                                         loading="lazy"
//                                         decoding="async"
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         <button className="simple-nav-btn-ram left-ram" onClick={prevSlide}>
//                             ‹
//                         </button>
//                         <button className="simple-nav-btn-ram right-ram" onClick={nextSlide}>
//                             ›
//                         </button>

//                         <div className="simple-dots-wrapper-ram">
//                             {sliderImages.map((_, index) => (
//                                 <span
//                                     key={index}
//                                     className={`simple-dot-ram ${index === currentSlide ? 'dot-active-ram' : ''}`}
//                                     onClick={() => goToSlide(index)}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <div className="portfolio-tabs-ram d-flex">
//                         <div className="tab-wrapper-ram d-flex">
//                             {categories.map((category) => (
//                                 <button
//                                     key={category}
//                                     className={`tab-btn-ram ${activeTab === category ? 'active' : ''}`}
//                                     onClick={() => {
//                                         setActiveTab(category);
//                                         setShowAll(false);
//                                     }}
//                                     style={{
//                                         padding: '22px 25px',
//                                         margin: '25px 8px',
//                                         border: 'none',
//                                         borderRadius: '25px',
//                                         backgroundColor: activeTab === category ? '#0011ffff' : 'transparent',
//                                         color: activeTab === category ? 'white' : '#333',
//                                         cursor: 'pointer',
//                                         fontWeight: '500',
//                                         transition: 'all 0.3s ease',
//                                         fontSize: '16px',
//                                         textTransform: 'uppercase',
//                                         letterSpacing: '1px',
//                                         minWidth: '120px',
//                                         whiteSpace: 'nowrap'
//                                     }}
//                                     onMouseEnter={(e) => {
//                                         if (activeTab !== category) {
//                                             e.target.style.backgroundColor = '#f8f9fa';
//                                             e.target.style.color = '#0011ffff';
//                                         }
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         if (activeTab !== category) {
//                                             e.target.style.backgroundColor = 'transparent';
//                                             e.target.style.color = '#333';
//                                         }
//                                     }}
//                                 >
//                                     {category}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <section id="latest-news" className="home__latest--news">
//                     <div className="container">
//                         <div className="row">
//                             {itemsToShow.map(item => renderPortfolioCard(item))}
//                         </div>

//                         {hasMoreItems && (
//                             <div className="d-flex justify-content-center mt-50">
//                                 <button
//                                     onClick={handleReadMore}
//                                     style={{
//                                         padding: '27px 16px',
//                                         border: '2px solid #0011ffff',
//                                         borderRadius: '30px',
//                                         backgroundColor: showAll ? '#0011ffff' : 'transparent',
//                                         color: showAll ? 'white' : '#0011ffff',
//                                         cursor: 'pointer',
//                                         fontWeight: '600',
//                                         fontSize: '16px',
//                                         textTransform: 'uppercase',
//                                         letterSpacing: '1px',
//                                         transition: 'all 0.3s ease',
//                                         minWidth: '180px'
//                                     }}
//                                     onMouseEnter={(e) => {
//                                         if (!showAll) {
//                                             e.target.style.backgroundColor = '#0011ffff';
//                                             e.target.style.color = 'white';
//                                         }
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         if (!showAll) {
//                                             e.target.style.backgroundColor = 'transparent';
//                                             e.target.style.color = '#0011ffff';
//                                         }
//                                     }}
//                                 >
//                                     {showAll ? 'Show Less' : 'Read More'}
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 <div className="space50"></div>
//             </section>
// {/* 
//             <section
//                 style={{
//                     backgroundImage: `url("/images/Newimage/digital-marketing-banner1.webp")`,
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                 }}
//                 id="newsletter"
//                 className="portfolio__newsletter"
//             >
//                 <div className="container newsletter-Wrapper">
//                     <div className="text">
//                         <h3>Join to Our Team For More Info</h3>
//                         <p>Excerpt Technologies PVT LTD</p>
//                     </div>

//                     <form
//                         className="form"
//                         onSubmit={handleEmailSubmit}
//                     >
//                         <div className="email-wrapper">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <button type="submit" className="subscribe-btn">
//                                 <span>Reach Us</span>
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </section> */}



//             <section
//     style={{
//         backgroundImage: `url("/images/Newimage/digital-marketing-banner1.webp")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//     }}
//     id="newsletter"
//     className="portfolio__newsletter"
// >
//     <div style={{display:"flex",flexDirection:"column", alignItems:"center",width:"100vw"}} className="container newsletter-Wrapper newsletter4Wrapper">
//         <div className="text text4Container">
//             <h3 className="heading4 Title">Join to Our Team For More Info</h3>
//             <p className="para4 Description">Excerpt Technologies PVT LTD</p>
//         </div>

//         <form
//           style={{paddingBottom:"10vh"}}
//             className="form form4Layout"
//             onSubmit={handleEmailSubmit}
//         >
//             <div className="email-wrapper email4Wrapper d-flex">
//                 <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="input4Field"
//                 />
//                 <button style={{width:"10rem",marginTop:".1rem",borderRadius:0,marginLeft:-15}} type="submit" className="subscribe-btn">
//                     <span style={{color:"white"}}>Reach Us</span>
//                 </button>
//                 <br />
//             </div>
//         </form>
//     </div>
// </section>



            

//             <div className="space100"></div>
//         </div>
//     );
// };

// export default Portfolio;
















'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // Portfolio data with categories
    const portfolioItems = [
        {
            id: 1,
            title: "RGVK",
            category: "Static",
            type: "Tourism",
            image: "/portfolio/rgvk.webp",
            link: "https://rgvkindia.com/",
            className: ""
   
        },
   
        {
            id: 3,
            title: "DTECH",
            category: "CRM",
            type: "Civil",
            image: "/portfolio/dtech.webp",
            link: "https://dtechwale.com/",
            className: ""
        },

         {
            id: 3,
            title: "Car Captain",
            category: "E-Com",
            type: "Car Services",
            image: "/portfolio/car.webp",
            link: "https://carcaptain.in/",
            className: ""
        },
        {
            id: 4,
            title: "RoyalHood",
            category: "E-com",
            type: "E-Commerce",
            image: "/portfolio/royalhood.webp",
            link: "https://royalhood.in/",
            className: ""
            
        },
        {
            id: 5,
            title: "ANANTA SAUKHYAM",
            category: "Health",
            type: "Wellness",
            image: "/portfolio/ananta.webp",
            link: "https://anantasaukhyam.com/",
            className: ""
        },
        {
            id: 6,
            title: "DIEA",
            category: "CRM",
            type: "Industrial Association",
            image: "/portfolio/diea.webp",
            link: "https://diea.in/",
            className: ""
        },
        {
            id: 7,
            title: "AUTOMET ENGINEERING",
            category: "Static",
            type: "Automobile",
            image: "/portfolio/automet.webp",
            link: "http://www.autometengg.com/",
            className: "hideOnMd"
        },
        {
            id: 8,
            title: "GIFCO AUTO FILTERS INDIA",
            category: "Static",
            type: "Automobile",
            image: "/portfolio/gifco.webp",
            link: "http://gifcoindia.com/",
            className: "hideOnMd",
          
        },
        {
            id: 9,
            title: "Shaw Tech Training Services",
            category: "LMS",
            type: "Educational",
            image: "/portfolio/stts.webp",
            link: "https://sttsonline.com/",
            className: "hideOnMd"
        },
        {
            id: 10,
            title: "Mech Mold",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/mech.webp",
            link: "https://mechmold.com/",
            className: "hideOnMd"
        },
        {
            id: 11,
            title: "IT DESK MAHADEVPURA",
            category: "LMS",
            type: "Educational",
            image: "/images/p5.webp",
            link: "https://itdeskmahadevpura.com/",
            className: ""
        },
        {
            id: 12,
            title: "CAD DESK MAHADEVPURA",
            category: "LMS",
            type: "Educational",
            image: "/images/p4.webp",
            link: "http://caddeskmahadevpura.com/",
            className: ""
        },
        {
            id: 13,
            title: "Terra Clenz",
            category: "E-com",
            type: "E-Commerce",
            image: "/portfolio/terra.webp",
            link: "https://terraclenz.com/",
            className: ""
        },
        {
            id: 14,
            title: "Cad desk",
            category: "CRM",
            type: "CRM",
            image: "/portfolio/cad.webp",
            link: "https://caddesk.in/",
            className: ""
        },
        {
            id: 15,
            title: "JBK Academy",
            category: "CRM",
            type: "CRM",
            image: "/portfolio/jbk.webp",
            link: "https://jbkadmin.jbkacademy.in/",
            className: ""
        },
        {
            id: 16,
            title: "Triicons",
            category: "CRM",
            type: "CRM",
            image: "/portfolio/triicons.webp",
            link: "https://triicons.com/",
            className: ""
        },
        {
            id: 17,
            title: "City Hospitality Solutions",
            category: "CRM",
            type: "CRM",
            image: "/portfolio/city.webp",
            link: "https://crm.cityhospitalitysolutions.com",
            className: ""
        },
        {
            id: 18,
            title: "Jyothi Cloud ERP",
            category: "ERP",
            type: "ERP",
            image: "/portfolio/erp.webp",
            link: "https://erp.etpl.ai",
            className: ""
        },
        {
            id: 19,
            title: "BDM Technology",
            category: "Static",
            type: "Educational",
            image: "/portfolio/bdm.webp",
            link: "https://bdmtech.in/",
            className: ""
        },
        {
            id: 20,
            title: "Darklick",
            category: "Static",
            type: "Product",
            image: "/portfolio/dark.webp",
            link: "http://darklick.com/",
            className: "hideOnMd"
        },
        {
            id: 21,
            title: "Lynx industries",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/lynx.webp",
            link: "http://lynxindustries.in/",
            className: "hideOnMd"
        },
        {
            id: 22,
            title: "P and S Industries",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/ps.webp",
            link: "http://pandsindustries.in",
            className: "hideOnMd"
        },
        {
            id: 23,
            title: " Sri Engineering",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/srii.webp",
            link: "https://sriengineering.net/",
            className: "hideOnMd"
        },
        {
            id: 24,
            title: "Sai Shanti Vidya Niketan",
            category: "Static",
            type: "Educational",
            image: "/portfolio/ssvn.webp",
            link: "http://saishantividyaniketan.in/",
            className: "hideOnMd"
        },
        {
            id: 25,
            title: "Umang Marketing & Engineering Services",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/umang.webp",
            link: "https://umangmarketing.com/",
            className: "hideOnMd"
        },
        {
            id: 26,
            title: "Upstreams",
            category: "Static",
            type: "Industrial",
            image: "/portfolio/upst.webp",
            link: "https://upstreamhotels.in/",
            className: "hideOnMd"
        },
        {
            id: 27,
            title: "Terra Batteries",
            category: "Static",
            type: "Ecommerce",
            image: "/portfolio/terrabat.webp",
            link: "https://terrabatteries.com/",
            className: "hideOnMd"
        },
    ];

    // Slider images - using first 8 portfolio items for the slider
    const sliderImages = portfolioItems.slice(0, 8);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [sliderImages.length]);

    // Popup effect
    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    // Get unique categories
    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

    // Filter items based on active tab
    const filteredItems = activeTab === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeTab);

    // Determine how many items to show
    const initialItemCount = 6;
    const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, initialItemCount);
    const hasMoreItems = filteredItems.length > initialItemCount;

    const renderPortfolioCard = (item) => {
        const CardContent = () => (
            <div className={`news-card position-relative ${item.id === 2 ? 'news-card-dyavasandra' : ''}`}
                style={item.id === 2 ? { height: "350px" } : {}}>
                <div className="img-wrapper mb-30">
                    <Image
                      src={item.image} 
                      alt={item.title} 
                      width="400" 
                      height="300" 
                    //   loading="lazy" 
                      decoding="async"
                      style={{ display: 'block', aspectRatio: '400 / 300' }}
                    />
                </div>
                <div className="content">
                    <h5 className="heading-5">{item.title}</h5>
                    <div className="paragraph mb-25">{item.type}</div>
                </div>
                <div className="circle-1 position-absolute"></div>
                <div className="circle-2 position-absolute"></div>
            </div>
        );

        return (
    <div key={`${item.id}-${item.title.replace(/\s+/g, '-')}`} className={`col-md-6 col-lg-4 ${item.className}`}>
                {item.link ? (
                    <a href={item.link} className="link-to-external-website" target='_blank' rel="noopener noreferrer">
                        <CardContent />
                    </a>
                    
                ) : (
                    <div>
                        <CardContent />
                    </div>
                )}
            </div>
        );
    };

    const handleReadMore = () => {
        setShowAll(!showAll);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        
        // Simple email validation
        if (!email || !email.includes('@')) {
            setPopupMessage('⚠️ Please enter a valid email address');
            setShowPopup(true);
            return;
        }
        
        // Show success message
        setPopupMessage('✅ Thank you for submitting!');
        setShowPopup(true);
        
        // Clear email field
        setEmail('');
    };

    return (
        <div>
            <style jsx>{`
                .simple-slider-ram {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    height: 580px;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    background: #e9ecef;
                    
                }

                .simple-slides-wrapper-ram {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .simple-single-slide-ram {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: white;
                }

                .simple-single-slide-ram.active-slide-ram {
                    opacity: 1;
                    z-index: 1;
                }

                .simple-slide-img-ram {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .simple-nav-btn-ram {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.95);
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                    font-size: 24px;
                    color: #0011ff;
                    font-weight: bold;
                    transition: all 0.3s;
                }

                .simple-nav-btn-ram:hover {
                    background: #0011ff;
                    color: white;
                    transform: translateY(-50%) scale(1.1);
                }

                .simple-nav-btn-ram.left-ram {
                    left: 20px;
                }

                .simple-nav-btn-ram.right-ram {
                    right: 20px;
                }

                .simple-dots-wrapper-ram {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }

                .simple-dot-ram {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    transition: all 0.3s;
                    border: 2px solid rgba(0, 17, 255, 0.3);
                }

                .simple-dot-ram.dot-active-ram {
                    background: #0011ff;
                    transform: scale(1.3);
                    border-color: #0011ff;
                }

                /* Popup Styles */
                .popup-box {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 25px 35px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    z-index: 9999;
                    font-size: 18px;
                    font-weight: 500;
                    text-align: center;
                    animation: fadeInOut 2.5s ease forwards;
                    max-width: 400px;
                    width: 90%;
                }

                @keyframes fadeInOut {
                    0% { 
                        opacity: 0; 
                        transform: translate(-50%, -60%); 
                    }
                    10% { 
                        opacity: 1; 
                        transform: translate(-50%, -50%); 
                    }
                    90% { 
                        opacity: 1; 
                        transform: translate(-50%, -50%); 
                    }
                    100% { 
                        opacity: 0; 
                        transform: translate(-50%, -40%); 
                    }
                }

                /* Newsletter Styles */
                .newsletter-Wrapper {
                    text-align: center;
                }

                .newsletter-Wrapper .text h3 {
                    font-size: 2rem;
                    color: white;
                    margin-bottom: 10px;
                }

                .newsletter-Wrapper .text p {
                    font-size: 1.2rem;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 30px;
                }

                .form {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .email-wrapper {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }

                .email-wrapper input {
                    flex: 1;
                    max-width: 400px;
                    padding: 15px 25px;
                    border: none;
                    // border-radius: 50px;
                    font-size: 16px;
                    outline: none;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .subscribe-btn {
                    padding: 15px 40px;
                    background: #0011ff;
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3);
                }

                .subscribe-btn:hover {
                    background: #0000cc;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4);
                }

                @media (max-width: 768px) {
                    .simple-slider-ram {
                        height: 300px;
                        margin-bottom: 30px;
                    }

                    .simple-slide-img-ram {
                        object-fit: contain;
                        padding: 20px;
                    }

                    .simple-nav-btn-ram {
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }

                    .simple-nav-btn-ram.left-ram {
                        left: 10px;
                    }

                    .simple-nav-btn-ram.right-ram {
                        right: 10px;
                    }

                    .simple-dots-wrapper-ram {
                        bottom: 10px;
                        gap: 8px;
                    }

                    .simple-dot-ram {
                        width: 10px;
                        height: 10px;
                    }

                    .portfolio-tabs-ram {
                        margin-top: 20px !important;
                        margin-bottom: 30px !important;
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }

                    .tab-wrapper-ram {
                        display: flex;
                        gap: 8px;
                        padding: 0 15px;
                    }

                    .tab-btn-ram {
                        padding: 10px 18px !important;
                        font-size: 13px !important;
                        white-space: nowrap;
                        flex-shrink: 0;
                    }

                    .email-wrapper {
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;
                    }

                    .email-wrapper input,
                    .subscribe-btn {
                        width: 100%;
                        max-width: 300px;
                    }

                    .newsletter-Wrapper .text h3 {
                        font-size: 1.5rem;
                    }

                    .newsletter-Wrapper .text p {
                        font-size: 1rem;
                    }

                    .hideOnMd {
                        display: none !important;
                    }
                }

                @media (max-width: 480px) {
                    .simple-slider-ram {
                        height: 250px;
                    }

                    .simple-nav-btn-ram {
                        width: 35px;
                        height: 35px;
                        font-size: 18px;
                    }

                    .simple-nav-btn-ram.left-ram {
                        left: 8px;
                    }

                    .simple-nav-btn-ram.right-ram {
                        right: 8px;
                    }

                    .popup-box {
                        padding: 20px;
                        font-size: 16px;
                    }

                    /* Mobile Responsive Styles for Newsletter - Classes with 4 */
@media (max-width: 768px) {
    .newsletter4Wrapper {
        padding: 40px 20px !important;
        text-align: center !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: auto !important;
    }
    
    .text4Container {
        margin-bottom: 25px !important;
        padding: 0 !important;
        width: 100% !important;
        max-width: 500px !important;
    }
    
    .heading4Title {
        font-size: 24px !important;
        line-height: 1.3 !important;
        margin-bottom: 12px !important;
        word-wrap: break-word !important;
        color: white !important;
        font-weight: 700 !important;
        padding: 0 10px !important;
    }
    
    .para4Description {
        font-size: 16px !important;
        margin-bottom: 30px !important;
        color: rgba(255, 255, 255, 0.95) !important;
        padding: 0 15px !important;
        line-height: 1.5 !important;
    }
    
    .form4Layout {
        width: 100% !important;
        max-width: 500px !important;
        margin: 0 auto !important;
        padding: 0 !important;
    }
    
    .email4Wrapper {
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important;
        width: 100% !important;
        padding: 0 10px !important;
    }
    
    .input4Field {
        width: 100% !important;
        padding: 16px 20px !important;
        font-size: 16px !important;
        border-radius: 50px !important;
        border: 2px solid rgba(255, 255, 255, 0.3) !important;
        box-sizing: border-box !important;
        background: rgba(255, 255, 255, 0.95) !important;
        color: #333 !important;
        font-weight: 500 !important;
        height: 56px !important;
    }
    
    .input4Field::placeholder {
        color: #666 !important;
        opacity: 0.8 !important;
    }
    
    .input4Field:focus {
        outline: none !important;
        border-color: #0011ff !important;
        background: white !important;
        box-shadow: 0 0 0 3px rgba(0, 17, 255, 0.1) !important;
    }
    
    .subscribe4Button {
        width: 100% !important;
        padding: 16px 20px !important;
        font-size: 16px !important;
        border-radius: 50px !important;
        background-color: #0011ff !important;
        color: white !important;
        border: none !important;
        cursor: pointer !important;
        transition: all 0.3s !important;
        font-weight: 600 !important;
        height: 56px !important;
        box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3) !important;
    }
    
    .subscribe4Button:hover {
        background-color: #0000cc !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4) !important;
    }
    
    .subscribe4Button:active {
        transform: translateY(0) !important;
    }
    
    .span4Text {
        font-weight: 600 !important;
        font-size: 16px !important;
        letter-spacing: 0.5px !important;
    }
}

@media (max-width: 480px) {
    .newsletter4Wrapper {
        padding: 35px 16px !important;
    }
    
    .heading4Title {
        font-size: 22px !important;
        line-height: 1.4 !important;
        padding: 0 5px !important;
    }
    
    .para4Description {
        font-size: 15px !important;
        margin-bottom: 25px !important;
        padding: 0 10px !important;
    }
    
    .form4Layout {
        max-width: 100% !important;
    }
    
    .email4Wrapper {
        padding: 0 !important;
        gap: 12px !important;
    }
    
    .input4Field {
        padding: 14px 18px !important;
        font-size: 15px !important;
        height: 52px !important;
    }
    
    .subscribe4Button {
        padding: 14px 18px !important;
        font-size: 15px !important;
        height: 52px !important;
    }
    
    .span4Text {
        font-size: 15px !important;
    }
}

@media (max-width: 360px) {
    .newsletter4Wrapper {
        padding: 30px 12px !important;
    }
    
    .heading4Title {
        font-size: 20px !important;
    }
    
    .para4Description {
        font-size: 14px !important;
        margin-bottom: 20px !important;
    }
    
    .input4Field {
        padding: 12px 16px !important;
        font-size: 14px !important;
        height: 48px !important;
    }
    
    .subscribe4Button {
        padding: 12px 16px !important;
        font-size: 14px !important;
        height: 48px !important;
    }
    
    .span4Text {
        font-size: 14px !important;
    }
}

/* Special fix for very small screens */
@media (max-width: 320px) {
    .newsletter4Wrapper {
        padding: 25px 10px !important;
    }
    
    .heading4Title {
        font-size: 18px !important;
        padding: 0 !important;
    }
    
    .para4Description {
        font-size: 13px !important;
        padding: 0 5px !important;
    }
    
    .input4Field {
        padding: 10px 14px !important;
        height: 44px !important;
    }
    
    .subscribe4Button {
        padding: 10px 14px !important;
        height: 44px !important;
    }

    /* Desktop Only Styles for the Button */
@media (min-width: 769px) {
    .subscribe4Button {
        background-color: #0011ff !important;
        color: white !important;
        border: none !important;
        padding: 15px 40px !important;
        border-radius: 50px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        white-space: nowrap !important;
        box-shadow: 0 4px 15px rgba(0, 17, 255, 0.3) !important;
    }
    
    .subscribe4Button:hover {
        background-color: #0000cc !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0, 17, 255, 0.4) !important;
    }
    
    .span4Text {
        color: white !important;
        font-weight: 600 !important;
        font-size: 16px !important;
    }
        
}
}
                }
            `}</style>

            {/* Popup */}
            {showPopup && (
                <div className="popup-box">
                    {popupMessage}
                </div>
            )}

            <section style={{
                backgroundImage: `url("/images/00.webp")`,
                backgroundColor: "rgb(255, 255, 255)",
            }}
                className="sub-header position-relative">
                <div className="container">
                    <div className="page-info ">
                        <h2 className="heading-2" style={{ color: "white", textAlign: "center" }}>Our Portfolio</h2>
                        <h6 className="heading-6">
                            <Link href="/">Home</Link> / <Link href="#">Portfolio</Link>
                        </h6>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="container">
                    <div className="simple-slider-ram">
                        <div className="simple-slides-wrapper-ram">
                            {sliderImages.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`simple-single-slide-ram ${index === currentSlide ? 'active-slide-ram' : ''}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="simple-slide-img-ram"
                                        width="1200"
                                        height="580"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </div>

                        <button className="simple-nav-btn-ram left-ram" onClick={prevSlide}>
                            ‹
                        </button>
                        <button className="simple-nav-btn-ram right-ram" onClick={nextSlide}>
                            ›
                        </button>

                        <div className="simple-dots-wrapper-ram">
                            {sliderImages.map((_, index) => (
                                <span
                                    key={index}
                                    className={`simple-dot-ram ${index === currentSlide ? 'dot-active-ram' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="portfolio-tabs-ram d-flex">
                        <div className="tab-wrapper-ram d-flex">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`tab-btn-ram ${activeTab === category ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTab(category);
                                        setShowAll(false);
                                    }}
                                    style={{
                                        padding: '22px 25px',
                                        margin: '25px 8px',
                                        border: 'none',
                                        borderRadius: '25px',
                                        backgroundColor: activeTab === category ? '#0011ffff' : 'transparent',
                                        color: activeTab === category ? 'white' : '#333',
                                        cursor: 'pointer',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        fontSize: '16px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        minWidth: '120px',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== category) {
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.color = '#0011ffff';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== category) {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#333';
                                        }
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <section id="latest-news" className="home__latest--news">
                    <div className="container">
                        <div className="row">
                            {itemsToShow.map(item => renderPortfolioCard(item))}
                        </div>

                        {hasMoreItems && (
                            <div className="d-flex justify-content-center mt-50">
                                <button
                                    onClick={handleReadMore}
                                    style={{
                                        padding: '27px 16px',
                                        border: '2px solid #0011ffff',
                                        borderRadius: '30px',
                                        backgroundColor: showAll ? '#0011ffff' : 'transparent',
                                        color: showAll ? 'white' : '#0011ffff',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'all 0.3s ease',
                                        minWidth: '180px'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!showAll) {
                                            e.target.style.backgroundColor = '#0011ffff';
                                            e.target.style.color = 'white';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!showAll) {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#0011ffff';
                                        }
                                    }}
                                >
                                    {showAll ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                <div className="space50"></div>
            </section>
{/* 
            <section
                style={{
                    backgroundImage: `url("/images/Newimage/digital-marketing-banner1.webp")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                id="newsletter"
                className="portfolio__newsletter"
            >
                <div className="container newsletter-Wrapper">
                    <div className="text">
                        <h3>Join to Our Team For More Info</h3>
                        <p>Excerpt Technologies PVT LTD</p>
                    </div>

                    <form
                        className="form"
                        onSubmit={handleEmailSubmit}
                    >
                        <div className="email-wrapper">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="subscribe-btn">
                                <span>Reach Us</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section> */}



            <section
    style={{
        backgroundImage: `url("/images/Newimage/digital-marketing-banner1.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}
    id="newsletter"
    className="portfolio__newsletter"
>
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",width:"100vw"}} className="container newsletter-Wrapper newsletter4Wrapper">
        <div className="text text4Container">
            <h3 className="heading4 Title">Join to Our Team For More Info</h3>
            <p className="para4 Description">Excerpt Technologies PVT LTD</p>
        </div>

        <form
          style={{paddingBottom:"10vh"}}
            className="form form4Layout"
            onSubmit={handleEmailSubmit}
        >
            <div className="email-wrapper email4Wrapper d-flex">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input4Field"
                />
                <button style={{width:"10rem",marginTop:".1rem",borderRadius:0,marginLeft:-15}} type="submit" className="subscribe-btn">
                    <span style={{color:"white"}}>Reach Us</span>
                </button>
                <br />
            </div>
        </form>
    </div>
</section>



            

            <div className="space100"></div>
        </div>
    );
};

export default Portfolio;