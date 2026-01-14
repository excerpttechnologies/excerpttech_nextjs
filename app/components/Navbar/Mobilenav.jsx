
// 'use client';

// import React, { useState } from 'react';
// import { TiStar } from "react-icons/ti";
// import Link from 'next/link';
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { useRouter } from 'next/navigation';

// const MobileNav = ({ isLoggedIn, onLogout }) => {
//     const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//     const [isNavVisible, setNavVisible] = useState(true);
//     const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//     const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
//     const router = useRouter();

//     const toggleMobileNav = () => {
//         setMobileNavOpen(!isMobileNavOpen);
//         if (isMobileNavOpen) {
//             setServicesDropdownOpen(false);
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const closeAllMenus = () => {
//         setMobileNavOpen(false);
//         setServicesDropdownOpen(false);
//         setWebDesignDropdownOpen(false);
//     };

//     const handleLogout = () => {
//         onLogout();
//         closeAllMenus();
//     };

//     const handleServicesClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setServicesDropdownOpen(!isServicesDropdownOpen);
//         if (isServicesDropdownOpen) {
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const handleWebDesignClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setWebDesignDropdownOpen(!isWebDesignDropdownOpen);
//     };

//     const handleServicesLinkNavigate = (e) => {
//         if (!e.target.closest('.dropdown-toggle')) {
//             closeAllMenus();
//             router.push('/services');
//         }
//     };

//     const handleWebDesignLinkNavigate = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         handleWebDesignClick(e);
//     };

//     return (
//         <div style={{ backgroundColor: "white", position: "relative", zIndex: 1000 }}>
//             <div
//                 className={`mobile-nav-wrapper ${isNavVisible ? 'visible' : ''}`}
//                 style={{
//                     textAlign: 'right',
//                     padding: '10px',
//                     background: isNavVisible ? 'white' : 'transparent',
//                     position: 'relative',
//                     zIndex: 1001,
//                     height:"auto",
//                 }}
//             >
//                 {/* Top bar */}
//                 <div style={{ 
//                     display: "flex", 
//                     justifyContent: "space-between", 
//                     alignItems: "center", 
//                     marginBottom: "1px",
//                     position: 'relative',
//                     zIndex: 1002,
//                     height:"auto",
//                 }}>
//                     <div style={{ textAlign: "left", fontSize: "14px", lineHeight: "1.3" }}>
//                         <div>+91 6364657660</div>
//                         <div>info@excerptech.com</div>
//                     </div>
//                     <div>
//                         {isLoggedIn ? (
//                             <button 
//                                 onClick={handleLogout}
//                                 style={{ 
//                                     background: "#dc3545", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         ) : (
//                             <button 
//                                 onClick={() => router.push('/login')}
//                                 style={{ 
//                                     background: "#007bff", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Login / Register
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile menu icon */}
//                 <div
//                     className="mobile-nav-icon"
//                     style={{ fontSize: '25px', cursor: 'pointer', marginRight: "16px" }}
//                     onClick={toggleMobileNav}
//                 >
//                     ☰
//                 </div>

//                 <div style={{ backgroundColor: "white",color:"blue" }}>
//                     {isMobileNavOpen && (
//                         <div
//                             className="mobile-nav-content"
//                             style={{
//                                 top: '10px',
//                                 width: "100%",
//                                 background: "#fff",
//                                 padding: "15px",
//                                 boxSizing: "border-box",
//                                 zIndex: 1000,
//                                 position: "relative",

//                             }}
//                         >
//                             <ul style={{
//                                 listStyle: 'none',
//                                 padding: 0,
//                                 margin: 0,
//                                 textAlign: "left",
//                                 color:"blue"
//                             }}>
//                                 <li style={{ marginBottom: "12px" }}>
//                                         <Link href="/" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>HOME</b>
//                                     </Link>
//                                 </li>

//                                 {/* Services dropdown */}
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <div
//                                      onClick={handleServicesClick}
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'space-between'
//                                         }}
//                                     >
//                                         <div 
//                                             onClick={handleServicesLinkNavigate}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <b style={{ fontSize: "18px",color:"blue" }}>SERVICES</b>
//                                         </div>
//                                         <div
//                                             className="dropdown-toggle"
//                                             onClick={handleServicesClick}
//                                             style={{
//                                                 cursor: 'pointer',
//                                                 padding: '10px',
//                                                 color: '#333'
//                                             }}
//                                         >
//                                             {isServicesDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                         </div>
//                                     </div>

//                                     {isServicesDropdownOpen && (
//                                         <div
//                                             style={{
//                                                 marginTop: '8px',
//                                                 backgroundColor: '#f8f9fa',
//                                                 borderRadius: '6px',
//                                                 padding: '12px',
//                                                 border: '1px solid #e9ecef'
//                                             }}
//                                         >
//                                             {/* Web Design & Development nested */}
//                                             <div style={{ marginBottom: '10px',color:"blue" }}>
//                                                 <div
//                                                     style={{
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'space-between',
//                                                         padding: '6px 0'
//                                                     }}
//                                                 >
//                                                     <div 
//                                                         onClick={handleWebDesignLinkNavigate}
//                                                         style={{ cursor: 'pointer', flex: 1 }}
//                                                     >
//                                                         <span style={{
//                                                             fontSize: "14px",
//                                                             color: '#495057',
//                                                             fontWeight: '500'
//                                                         }}>
//                                                             Web Design & Development
//                                                         </span>
//                                                     </div>
//                                                     <div
//                                                         className="webdesign-toggle"
//                                                         onClick={handleWebDesignClick}
//                                                         style={{
//                                                             cursor: 'pointer',
//                                                             padding: '6px',
//                                                             color: '#333',
//                                                             fontSize: '12px'
//                                                         }}
//                                                     >
//                                                         {isWebDesignDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                                     </div>
//                                                 </div>

//                                                 {isWebDesignDropdownOpen && (
//                                                     <div
//                                                         style={{
//                                                             marginTop: '6px',
//                                                             marginLeft: '15px',
//                                                             backgroundColor: '#ffffff',
//                                                             borderRadius: '4px',
//                                                             padding: '8px',
//                                                             border: '1px solid #dee2e6',
//                                                             color:"blue"
//                                                         }}
//                                                     >
//                                                         <Link href="/Staticwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px',color:"blue" }} onClick={closeAllMenus}>
//                                                             Static Websites
//                                                         </Link>
//                                                         <Link href="/Dyanamicwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px',color:"blue" }} onClick={closeAllMenus}>
//                                                             Dynamic Websites
//                                                         </Link>
//                                                         <Link href="/Customizedwebsites" style={{ fontSize: "15px", display: 'block',color:"blue" }} onClick={closeAllMenus}>
//                                                             Customized Websites
//                                                         </Link>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             {/* Other Services */}
//                                             {[
//                                                 { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
//                                                 { path: "/Erp", name: "ERP" },
//                                                 { path: "/Crm", name: "CRM's" },
//                                                 { path: "/Ecommerce", name: "E-commerce" },
//                                                 { path: "/Elearning", name: "E-learning" },
//                                                 { path: "/Lms", name: "LMS" },
//                                                 { path: "/DigitalMarketing", name: "Digital Marketing" },
//                                                 { path: "/Dataanalytics", name: "Data Analytics & Science" },
//                                                 { path: "/Mobileapp", name: "Mobile Application" },
//                                                 { path: "/Cybersecurity", name: "Cyber Security" },
//                                                 { path: "https://trainings.excerptech.com", name: "Excerpt Trainings" }
//                                             ].map((item, i) => {
//                                                 // Use regular <a> tag for external URLs
//                                                 const isExternal = item.path.startsWith('http');
//                                                 const LinkComponent = isExternal ? 'a' : Link;
//                                                 const linkProps = isExternal 
//                                                     ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
//                                                     : { href: item.path };

//                                                 return (
//                                                     <LinkComponent
//                                                         key={i}
//                                                         {...linkProps}
//                                                         onClick={closeAllMenus}
//                                                         style={{
//                                                             fontSize: "14px",
//                                                             display: 'block',
//                                                             padding: '10px 15px',
//                                                             borderRadius: '4px',
//                                                             marginBottom: '6px',
//                                                             color: 'blue',
//                                                         }}
//                                                     >
//                                                         {item.name}
//                                                     </LinkComponent>
//                                                 );
//                                             })}
//                                         </div>
//                                     )}
//                                 </li>

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/portfolio" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>PORTFOLIO</b>
//                                     </Link>
//                                 </li>
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/contact" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>CONTACT</b>
//                                     </Link>
//                                 </li>

//                                 {/* ADMIN menu item - only show when logged in */}
//                                 {isLoggedIn && (
//                                     <li style={{ marginBottom: "12px" }}>
//                                         <Link href="/dashboard" style={{ fontSize: "18px",color:"blue", color: "#007bff" }} onClick={closeAllMenus}>
//                                             <b>ADMIN</b>
//                                         </Link>
//                                     </li>
//                                 )}

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/careers" style={{ color: "blue", fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>CAREERS </b> 
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MobileNav;















//CHANGED BY SAGAR




// 'use client';

// import React, { useState } from 'react';
// import { TiStar } from "react-icons/ti";
// import Link from 'next/link';
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { useRouter } from 'next/navigation';

// const MobileNav = ({ isLoggedIn, onLogout }) => {
//     const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//     const [isNavVisible, setNavVisible] = useState(true);
//     const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//     const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
//     const router = useRouter();

//     const toggleMobileNav = () => {
//         setMobileNavOpen(!isMobileNavOpen);
//         if (isMobileNavOpen) {
//             setServicesDropdownOpen(false);
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const closeAllMenus = () => {
//         setMobileNavOpen(false);
//         setServicesDropdownOpen(false);
//         setWebDesignDropdownOpen(false);
//     };

//     const handleLogout = () => {
//         onLogout();
//         closeAllMenus();
//     };

//     const handleServicesClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setServicesDropdownOpen(!isServicesDropdownOpen);
//         if (isServicesDropdownOpen) {
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const handleWebDesignClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setWebDesignDropdownOpen(!isWebDesignDropdownOpen);
//     };

//     const handleServicesLinkNavigate = (e) => {
//         if (!e.target.closest('.dropdown-toggle')) {
//             closeAllMenus();
//             router.push('/services');
//         }
//     };

//     const handleWebDesignLinkNavigate = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         handleWebDesignClick(e);
//     };

//     return (
//         <div style={{ backgroundColor: "white", position: "relative", zIndex: 1000 }}>
//             <div
//                 className={`mobile-nav-wrapper ${isNavVisible ? 'visible' : ''}`}
//                 style={{
//                     textAlign: 'right',
//                     padding: '10px',
//                     background: isNavVisible ? 'white' : 'transparent',
//                     position: 'relative',
//                     zIndex: 1001,
//                     height:"auto",
//                 }}
//             >
//                 {/* Top bar */}
//                 <div style={{ 
//                     display: "flex", 
//                     justifyContent: "space-between", 
//                     alignItems: "center", 
//                     marginBottom: "1px",
//                     position: 'relative',
//                     zIndex: 1002,
//                     height:"auto",
//                 }}>
//                     <div style={{ textAlign: "left", fontSize: "14px", lineHeight: "1.3" }}>
//                         <div>+91 6364657660</div>
//                         <div>info@excerptech.com</div>
//                     </div>
//                     <div>
//                         {isLoggedIn ? (
//                             <button 
//                                 onClick={handleLogout}
//                                 style={{ 
//                                     background: "#dc3545", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         ) : (
//                             <button 
//                                 onClick={() => router.push('/login')}
//                                 style={{ 
//                                     background: "#007bff", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Login / Register
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile menu icon */}
//                 <div
//                     className="mobile-nav-icon"
//                     style={{ fontSize: '25px', cursor: 'pointer', marginRight: "16px" }}
//                     onClick={toggleMobileNav}
//                 >
//                     ☰
//                 </div>

//                 <div style={{ backgroundColor: "white",color:"blue" }}>
//                     {isMobileNavOpen && (
//                         <div
//                             className="mobile-nav-content"
//                             style={{
//                                 top: '10px',
//                                 width: "100%",
//                                 background: "#fff",
//                                 padding: "15px",
//                                 boxSizing: "border-box",
//                                 zIndex: 1000,
//                                 position: "relative",

//                             }}
//                         >
//                             <ul style={{
//                                 listStyle: 'none',
//                                 padding: 0,
//                                 margin: 0,
//                                 textAlign: "left",
//                                 color:"blue"
//                             }}>
//                                 <li style={{ marginBottom: "12px" }}>
//                                         <Link href="/" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>HOME</b>
//                                     </Link>
//                                 </li>

//                                 {/* Services dropdown */}
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <div
//                                      onClick={handleServicesClick}
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'space-between'
//                                         }}
//                                     >
//                                         <div 
//                                             onClick={handleServicesLinkNavigate}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <b style={{ fontSize: "18px",color:"blue" }}>SERVICES</b>
//                                         </div>
//                                         <div
//                                             className="dropdown-toggle"
//                                             onClick={handleServicesClick}
//                                             style={{
//                                                 cursor: 'pointer',
//                                                 padding: '10px',
//                                                 color: '#333'
//                                             }}
//                                         >
//                                             {isServicesDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                         </div>
//                                     </div>

//                                     {isServicesDropdownOpen && (
//                                         <div
//                                             style={{
//                                                 marginTop: '8px',
//                                                 backgroundColor: '#f8f9fa',
//                                                 borderRadius: '6px',
//                                                 padding: '12px',
//                                                 border: '1px solid #e9ecef'
//                                             }}
//                                         >
//                                             {/* Web Design & Development nested */}
//                                             <div style={{ marginBottom: '10px',color:"blue" }}>
//                                                 <div
//                                                     style={{
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'space-between',
//                                                         padding: '6px 0'
//                                                     }}
//                                                 >
//                                                     <div 
//                                                         onClick={handleWebDesignLinkNavigate}
//                                                         style={{ cursor: 'pointer', flex: 1 }}
//                                                     >
//                                                         <span style={{
//                                                             fontSize: "14px",
//                                                             color: '#495057',
//                                                             fontWeight: '500'
//                                                         }}>
//                                                             Web Design & Development
//                                                         </span>
//                                                     </div>
//                                                     <div
//                                                         className="webdesign-toggle"
//                                                         onClick={handleWebDesignClick}
//                                                         style={{
//                                                             cursor: 'pointer',
//                                                             padding: '6px',
//                                                             color: '#333',
//                                                             fontSize: '12px'
//                                                         }}
//                                                     >
//                                                         {isWebDesignDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                                     </div>
//                                                 </div>

//                                                 {isWebDesignDropdownOpen && (
//                                                     <div
//                                                         style={{
//                                                             marginTop: '6px',
//                                                             marginLeft: '15px',
//                                                             backgroundColor: '#ffffff',
//                                                             borderRadius: '4px',
//                                                             padding: '8px',
//                                                             border: '1px solid #dee2e6',
//                                                             color:"blue"
//                                                         }}
//                                                     >
//                                                         <Link href="/Staticwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px',color:"blue" }} onClick={closeAllMenus}>
//                                                             Static Websites
//                                                         </Link>
//                                                         <Link href="/Dyanamicwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px',color:"blue" }} onClick={closeAllMenus}>
//                                                             Dynamic Websites
//                                                         </Link>
//                                                         <Link href="/Customizedwebsites" style={{ fontSize: "15px", display: 'block',color:"blue" }} onClick={closeAllMenus}>
//                                                             Customized Websites
//                                                         </Link>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             {/* Other Services */}
//                                             {[
//                                                 { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
//                                                 { path: "/Erp", name: "ERP" },
//                                                 { path: "/Crm", name: "CRM's" },
//                                                 { path: "/Ecommerce", name: "E-commerce" },
//                                                 { path: "/Elearning", name: "E-learning" },
//                                                 { path: "/Lms", name: "LMS" },
//                                                 { path: "/DigitalMarketing", name: "Digital Marketing" },
//                                                 { path: "/Dataanalytics", name: "Data Analytics & Science" },
//                                                 { path: "/Mobileapp", name: "Mobile Application" },
//                                                 { path: "/Cybersecurity", name: "Cyber Security" },
//                                                 { path: "https://trainings.excerptech.com", name: "Excerpt Trainings" }
//                                             ].map((item, i) => {
//                                                 // Use regular <a> tag for external URLs
//                                                 const isExternal = item.path.startsWith('http');
//                                                 const LinkComponent = isExternal ? 'a' : Link;
//                                                 const linkProps = isExternal 
//                                                     ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
//                                                     : { href: item.path };

//                                                 return (
//                                                     <LinkComponent
//                                                         key={i}
//                                                         {...linkProps}
//                                                         onClick={closeAllMenus}
//                                                         style={{
//                                                             fontSize: "14px",
//                                                             display: 'block',
//                                                             padding: '10px 15px',
//                                                             borderRadius: '4px',
//                                                             marginBottom: '6px',
//                                                             color: 'blue',
//                                                         }}
//                                                     >
//                                                         {item.name}
//                                                     </LinkComponent>
//                                                 );
//                                             })}
//                                         </div>
//                                     )}
//                                 </li>

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/portfolio" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>PORTFOLIO</b>
//                                     </Link>
//                                 </li>
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/contact" style={{ fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>CONTACT</b>
//                                     </Link>
//                                 </li>

//                                 {/* ADMIN menu item - only show when logged in */}
//                                 {isLoggedIn && (
//                                     <li style={{ marginBottom: "12px" }}>
//                                         <Link href="/dashboard" style={{ fontSize: "18px",color:"blue", color: "#007bff" }} onClick={closeAllMenus}>
//                                             <b>ADMIN</b>
//                                         </Link>
//                                     </li>
//                                 )}

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/careers" style={{ color: "blue", fontSize: "18px",color:"blue" }} onClick={closeAllMenus}>
//                                         <b>CAREERS </b> 
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MobileNav;








//arvinf

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { useRouter } from 'next/navigation';

// const MobileNav = ({ isLoggedIn, onLogout }) => {
//     const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//     const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//     const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
//     const router = useRouter();

//     const toggleMobileNav = () => {
//         setMobileNavOpen(!isMobileNavOpen);
//         if (isMobileNavOpen) {
//             setServicesDropdownOpen(false);
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const closeAllMenus = () => {
//         setMobileNavOpen(false);
//         setServicesDropdownOpen(false);
//         setWebDesignDropdownOpen(false);
//     };

//     const handleLogout = () => {
//         onLogout();
//         closeAllMenus();
//     };

//     const handleServicesClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setServicesDropdownOpen(!isServicesDropdownOpen);
//         if (isServicesDropdownOpen) {
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const handleWebDesignClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setWebDesignDropdownOpen(!isWebDesignDropdownOpen);
//     };

//     const handleServicesLinkNavigate = (e) => {
//         if (!e.target.closest('.dropdown-toggle')) {
//             closeAllMenus();
//             router.push('/services');
//         }
//     };

//     const handleWebDesignLinkNavigate = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         handleWebDesignClick(e);
//     };

//     return (
//         <>
//             {/* Mobile Navigation - Only shows on mobile screens */}
//             <div className="mobile-nav-container">
//                 <div style={{
//                     backgroundColor: "white",
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     zIndex: 1000,
//                     boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//                 }}>
//                     <div style={{
//                         padding: '10px 15px',
//                         background: 'white',
//                     }}>
//                         {/* Top Bar - Logo and Contact */}
//                         <div style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginBottom: "10px"
//                         }}>
//                             {/* Logo - Left Side */}
//                             <div>
//                                 <Link href="/" onClick={closeAllMenus}>
//                                     <img
//                                         src="/images/excerptlogo.webp"
//                                         alt="Excerpt Logo"
//                                         style={{
//                                             height: "65px",
//                                             width: "auto",
//                                             Width: "150px",
//                                             objectFit: "contain",
//                                             cursor: "pointer"
//                                         }}
//                                     />
//                                 </Link>
//                             </div>

//                             {/* Contact Info - Right Side */}
//                             <div style={{ textAlign: "right", fontSize: "11px", lineHeight: "1.5", color: "#333" }}>
//                                 <div>+91 6364657660</div>
//                                 <div>info@excerptech.com</div>
//                             </div>
//                         </div>

//                         {/* Menu Icon */}
//                         <div
//                             style={{
//                                 fontSize: '28px',
//                                 cursor: 'pointer',
//                                 textAlign: 'right',
//                                 color: '#333'
//                             }}
//                             onClick={toggleMobileNav}
//                         >
//                             ☰
//                         </div>

//                         {/* Mobile Menu Dropdown */}
//                         {isMobileNavOpen && (
//                             <div
//                                 style={{
//                                     position: "fixed",
//                                     top: '85px',
//                                     left: 0,
//                                     right: 0,
//                                     maxHeight: 'calc(100vh - 85px)',
//                                     overflowY: 'auto',
//                                     background: "#fff",
//                                     padding: "20px 15px",
//                                     zIndex: 999,
//                                     boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
//                                 }}
//                             >
//                                 <ul style={{
//                                     listStyle: 'none',
//                                     padding: 0,
//                                     margin: 0,
//                                     textAlign: "left"
//                                 }}>
//                                     <li style={{ marginBottom: "15px" }}>
//                                         <Link href="/" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
//                                             HOME
//                                         </Link>
//                                     </li>

//                                     {/* SERVICES */}
//                                     <li style={{ marginBottom: "15px" }}>
//                                         <div style={{
//                                             display: 'flex',
//                                             justifyContent: 'space-between',
//                                             alignItems: 'center'
//                                         }}>
//                                             <span
//                                                 onClick={handleServicesLinkNavigate}
//                                                 style={{
//                                                     fontSize: "16px",
//                                                     color: "blue",
//                                                     fontWeight: "bold",
//                                                     cursor: "pointer"
//                                                 }}
//                                             >
//                                                 SERVICES
//                                             </span>
//                                             <span
//                                                 className="dropdown-toggle"
//                                                 onClick={handleServicesClick}
//                                                 style={{
//                                                     cursor: "pointer",
//                                                     padding: "5px",
//                                                     color: "#333"
//                                                 }}
//                                             >
//                                                 {isServicesDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                             </span>
//                                         </div>

//                                         {isServicesDropdownOpen && (
//                                             <div style={{
//                                                 paddingLeft: "15px",
//                                                 marginTop: "10px",
//                                                 backgroundColor: "#f8f9fa",
//                                                 padding: "10px",
//                                                 borderRadius: "5px"
//                                             }}>
//                                                 {/* Web Design */}
//                                                 <div style={{
//                                                     display: 'flex',
//                                                     justifyContent: 'space-between',
//                                                     alignItems: 'center',
//                                                     marginBottom: "10px"
//                                                 }}>
//                                                     <span
//                                                         onClick={handleWebDesignLinkNavigate}
//                                                         style={{
//                                                             fontSize: "14px",
//                                                             color: "#495057",
//                                                             cursor: "pointer"
//                                                         }}
//                                                     >
//                                                         Web Design & Development
//                                                     </span>
//                                                     <span
//                                                         onClick={handleWebDesignClick}
//                                                         style={{
//                                                             cursor: "pointer",
//                                                             padding: "5px",
//                                                             color: "#333"
//                                                         }}
//                                                     >
//                                                         {isWebDesignDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                                     </span>
//                                                 </div>

//                                                 {isWebDesignDropdownOpen && (
//                                                     <div style={{
//                                                         paddingLeft: "15px",
//                                                         marginBottom: "10px",
//                                                         backgroundColor: "white",
//                                                         padding: "8px",
//                                                         borderRadius: "4px"
//                                                     }}>
//                                                         <Link href="/Staticwebsite" onClick={closeAllMenus} style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "blue" }}>
//                                                             Static Websites
//                                                         </Link>
//                                                         <Link href="/Dyanamicwebsite" onClick={closeAllMenus} style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "blue" }}>
//                                                             Dynamic Websites
//                                                         </Link>
//                                                         <Link href="/Customizedwebsites" onClick={closeAllMenus} style={{ display: "block", fontSize: "13px", color: "blue" }}>
//                                                             Customized Websites
//                                                         </Link>
//                                                     </div>
//                                                 )}

//                                                 {[
//                                                     { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
//                                                     { path: "/Erp", name: "ERP" },
//                                                     { path: "/Crm", name: "CRM's" },
//                                                     { path: "/Ecommerce", name: "E-commerce" },
//                                                     { path: "/Elearning", name: "E-learning" },
//                                                     { path: "/Lms", name: "LMS" },
//                                                     { path: "/DigitalMarketing", name: "Digital Marketing" },
//                                                     { path: "/Dataanalytics", name: "Data Analytics & Science" },
//                                                     { path: "/Mobileapp", name: "Mobile Application" },
//                                                     { path: "/Cybersecurity", name: "Cyber Security" },
//                                                 ].map((item, i) => (
//                                                     <Link
//                                                         key={i}
//                                                         href={item.path}
//                                                         onClick={closeAllMenus}
//                                                         style={{
//                                                             display: "block",
//                                                             padding: "8px 10px",
//                                                             fontSize: "14px",
//                                                             color: "blue",
//                                                             marginBottom: "5px"
//                                                         }}
//                                                     >
//                                                         {item.name}
//                                                     </Link>
//                                                 ))}

//                                                 <a
//                                                     href="https://trainings.excerptech.com"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     onClick={closeAllMenus}
//                                                     style={{
//                                                         display: "block",
//                                                         padding: "8px 10px",
//                                                         fontSize: "14px",
//                                                         color: "blue"
//                                                     }}
//                                                 >
//                                                     Excerpt Trainings
//                                                 </a>
//                                             </div>
//                                         )}
//                                     </li>

//                                     <li style={{ marginBottom: "15px" }}>
//                                         <Link href="/portfolio" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
//                                             PORTFOLIO
//                                         </Link>
//                                     </li>

//                                     <li style={{ marginBottom: "15px" }}>
//                                         <Link href="/contact" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
//                                             CONTACT
//                                         </Link>
//                                     </li>

//                                     <li style={{ marginBottom: "15px" }}>
//                                         <Link href="/careers" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
//                                             CAREERS
//                                         </Link>
//                                     </li>

//                                     {isLoggedIn && (
//                                         <li style={{ marginBottom: "15px" }}>
//                                             <Link href="/dashboard" onClick={closeAllMenus} style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>
//                                                 ADMIN
//                                             </Link>
//                                         </li>
//                                     )}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* CSS - Hide on desktop, show only on mobile */}
//             <style jsx>{`
//                 .mobile-nav-container {
//                     display: none;
//                 }

//                 @media (max-width: 768px) {
//                     .mobile-nav-container {
//                         display: block;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// };

// export default MobileNav;





















// ///SAGAR
// 'use client';

// import React, { use, useEffect, useState } from 'react';
// import { TiStar } from "react-icons/ti";
// import Link from 'next/link';
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const MobileNav = ({ isLoggedIn, onLogout }) => {
//     const [isMobileNavOpen, setMobileNavOpen] = useState(false);
//     const [isNavVisible, setNavVisible] = useState(true);
//     const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//     const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
//     const router = useRouter();
//    const blackLogo = "/image/excerptbbb.png";
   

//     const toggleMobileNav = () => {
//         setMobileNavOpen(!isMobileNavOpen);
//         if (isMobileNavOpen) {
//             setServicesDropdownOpen(false);
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const closeAllMenus = () => {
//         setMobileNavOpen(false);
//         setServicesDropdownOpen(false);
//         setWebDesignDropdownOpen(false);
//     };

//     const handleLogout = () => {
//         onLogout();
//         closeAllMenus();
//     };

//     const handleServicesClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setServicesDropdownOpen(!isServicesDropdownOpen);
//         if (isServicesDropdownOpen) {
//             setWebDesignDropdownOpen(false);
//         }
//     };

//     const handleWebDesignClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setWebDesignDropdownOpen(!isWebDesignDropdownOpen);
//     };

//     const handleServicesLinkNavigate = (e) => {
//         if (!e.target.closest('.dropdown-toggle')) {
//             closeAllMenus();
//             router.push('/services');
//         }
//     };

//     const handleWebDesignLinkNavigate = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         handleWebDesignClick(e);
//     };

//     return (
//         <div id='mobile-nav' style={{ 
//             backgroundColor: "white", 
//             position: 'relative', 
//             zIndex: 1000,
//             top: 0,
//             left: 0,
//             right: 0,
//             width: '100%'
//         }}>
//             <div
//                 className={`mobile-nav-wrapper ${isNavVisible ? 'visible' : ''}`}
//                 style={{
//                     textAlign: 'right',
//                     padding: '8px',
//                     background: isNavVisible ? 'white' : 'transparent',
//                     position: 'relative',
//                     zIndex: 1001,
//                     height: "auto",
//                     width: '100%',
//                     boxSizing: 'border-box'
//                 }}
//             >
//                 {/* Top bar */}
//                 <div style={{ 
//                     display: "flex", 
//                     justifyContent: "space-between", 
//                     alignItems: "center", 
//                     marginBottom: "1px",
//                     position: 'relative',
//                     zIndex: 1002,
//                     height: "auto",
//                 }}>
//                     <div style={{ textAlign: "left", fontSize: "12px", lineHeight: "1.3",marginBottom:"4px" }}>
//                         <div>+91 6364657660</div>
//                         <div>info@excerptech.com</div>
//                     </div>
//                     <div>
//                         {isLoggedIn ? (
//                             <button 
//                                 onClick={handleLogout}
//                                 style={{ 
//                                     background: "#dc3545", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         ) : (
//                             <button 
//                                 onClick={() => router.push('/login')}
//                                 style={{ 
//                                     background: "#007bff", 
//                                     color: "white", 
//                                     border: "none", 
//                                     padding: "2px 4px", 
//                                     borderRadius: "4px", 
//                                     fontSize: "12px", 
//                                     cursor: "pointer",
//                                     marginLeft: "10px",
//                                     position: 'relative',
//                                     zIndex: 1003
//                                 }}
//                             >
//                                 Login / Register
//                             </button>
//                         )}
//                     </div>
//                 </div>
//                 <Image  height={0} width={0} sizes='100vw'  src={blackLogo} alt="" className='mobile-logo'/>
//                 {/* Mobile menu icon */}
//                 <div
//                     className="mobile-nav-icon"
//                     style={{ fontSize: '25px', cursor: 'pointer', marginRight: "16px" }}
//                     onClick={toggleMobileNav}
//                 >
//                     ☰
//                 </div>

//                 <div style={{ backgroundColor: "white", color: "blue" }}>
//                     {isMobileNavOpen && (
//                         <div
//                             className="mobile-nav-content"
//                             style={{
//                                 top: '100%',
//                                 width: "100%",
//                                 background: "#fff",
//                                 padding: "15px",
//                                 boxSizing: "border-box",
//                                 zIndex: 1000,
//                                 position: "relative",
//                             }}
//                         >
//                             <ul style={{
//                                 listStyle: 'none',
//                                 padding: 0,
//                                 margin: 0,
//                                 textAlign: "left",
//                                 color: "blue"
//                             }}>
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/" style={{ fontSize: "18px", color: "blue" }} onClick={closeAllMenus}>
//                                         <b>HOME</b>
//                                     </Link>
//                                 </li>

//                                 {/* Services dropdown */}
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <div
//                                         onClick={handleServicesClick}
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'space-between'
//                                         }}
//                                     >
//                                         <div 
//                                             onClick={handleServicesLinkNavigate}
//                                             style={{ cursor: 'pointer' }}
//                                         >
//                                             <b style={{ fontSize: "18px", color: "blue" }}>SERVICES</b>
//                                         </div>
//                                         <div
//                                             className="dropdown-toggle"
//                                             onClick={handleServicesClick}
//                                             style={{
//                                                 cursor: 'pointer',
//                                                 padding: '10px',
//                                                 color: '#333'
//                                             }}
//                                         >
//                                             {isServicesDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                         </div>
//                                     </div>

//                                     {isServicesDropdownOpen && (
//                                         <div
//                                             style={{
//                                                 marginTop: '8px',
//                                                 backgroundColor: '#f8f9fa',
//                                                 borderRadius: '6px',
//                                                 padding: '12px',
//                                                 border: '1px solid #e9ecef'
//                                             }}
//                                         >
//                                             {/* Web Design & Development nested */}
//                                             <div style={{ marginBottom: '10px', color: "blue" }}>
//                                                 <div
//                                                     style={{
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'space-between',
//                                                         padding: '6px 0'
//                                                     }}
//                                                 >
//                                                     <div 
//                                                         onClick={handleWebDesignLinkNavigate}
//                                                         style={{ cursor: 'pointer', flex: 1 }}
//                                                     >
//                                                         <span style={{
//                                                             fontSize: "14px",
//                                                             color: '#495057',
//                                                             fontWeight: '500'
//                                                         }}>
//                                                             Web Design & Development
//                                                         </span>
//                                                     </div>
//                                                     <div
//                                                         className="webdesign-toggle"
//                                                         onClick={handleWebDesignClick}
//                                                         style={{
//                                                             cursor: 'pointer',
//                                                             padding: '6px',
//                                                             color: '#333',
//                                                             fontSize: '12px'
//                                                         }}
//                                                     >
//                                                         {isWebDesignDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
//                                                     </div>
//                                                 </div>

//                                                 {isWebDesignDropdownOpen && (
//                                                     <div
//                                                         style={{
//                                                             marginTop: '6px',
//                                                             marginLeft: '15px',
//                                                             backgroundColor: '#ffffff',
//                                                             borderRadius: '4px',
//                                                             padding: '8px',
//                                                             border: '1px solid #dee2e6',
//                                                             color: "blue"
//                                                         }}
//                                                     >
//                                                         <Link href="/Staticwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px', color: "blue" }} onClick={closeAllMenus}>
//                                                             Static Websites
//                                                         </Link>
//                                                         <Link href="/Dyanamicwebsite" style={{ fontSize: "15px", display: 'block', marginBottom: '18px', color: "blue" }} onClick={closeAllMenus}>
//                                                             Dynamic Websites
//                                                         </Link>
//                                                         <Link href="/Customizedwebsites" style={{ fontSize: "15px", display: 'block', color: "blue" }} onClick={closeAllMenus}>
//                                                             Customized Websites
//                                                         </Link>
//                                                     </div>
//                                                 )}
//                                             </div>

//                                             {/* Other Services */}
//                                             {[
//                                                 { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
//                                                 { path: "/Erp", name: "ERP" },
//                                                 { path: "/Crm", name: "CRM's" },
//                                                 { path: "/Ecommerce", name: "E-commerce" },
//                                                 { path: "/Elearning", name: "E-learning" },
//                                                 { path: "/Lms", name: "LMS" },
//                                                 { path: "/DigitalMarketing", name: "Digital Marketing" },
//                                                 { path: "/Dataanalytics", name: "Data Analytics & Science" },
//                                                 { path: "/Mobileapp", name: "Mobile Application" },
//                                                 { path: "/Cybersecurity", name: "Cyber Security" },
//                                                 { path: "https://trainings.excerptech.com", name: "Excerpt Trainings" }
//                                             ].map((item, i) => {
//                                                 const isExternal = item.path.startsWith('http');
//                                                 const LinkComponent = isExternal ? 'a' : Link;
//                                                 const linkProps = isExternal 
//                                                     ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
//                                                     : { href: item.path };
                                                
//                                                 return (
//                                                     <LinkComponent
//                                                         key={i}
//                                                         {...linkProps}
//                                                         onClick={closeAllMenus}
//                                                         style={{
//                                                             fontSize: "14px",
//                                                             display: 'block',
//                                                             padding: '10px 15px',
//                                                             borderRadius: '4px',
//                                                             marginBottom: '6px',
//                                                             color: 'blue',
//                                                         }}
//                                                     >
//                                                         {item.name}
//                                                     </LinkComponent>
//                                                 );
//                                             })}
//                                         </div>
//                                     )}
//                                 </li>

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/portfolio" style={{ fontSize: "18px", color: "blue" }} onClick={closeAllMenus}>
//                                         <b>PORTFOLIO</b>
//                                     </Link>
//                                 </li>
//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/contact" style={{ fontSize: "18px", color: "blue" }} onClick={closeAllMenus}>
//                                         <b>CONTACT</b>
//                                     </Link>
//                                 </li>
                                
//                                 {/* ADMIN menu item - only show when logged in */}
//                                 {isLoggedIn && (
//                                     <li style={{ marginBottom: "12px" }}>
//                                         <Link href="/dashboard" style={{ fontSize: "18px", color: "blue", color: "#007bff" }} onClick={closeAllMenus}>
//                                             <b>ADMIN</b>
//                                         </Link>
//                                     </li>
//                                 )}

//                                 <li style={{ marginBottom: "12px" }}>
//                                     <Link href="/careers" style={{ color: "blue", fontSize: "18px", color: "blue" }} onClick={closeAllMenus}>
//                                         <b>CAREERS </b> 
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MobileNav;










'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { TiStar } from "react-icons/ti";

const MobileNav = ({ isLoggedIn, onLogout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'services' or null
    const [activeSubDropdown, setActiveSubDropdown] = useState(null); // 'webdesign' or null
    
    const router = useRouter();
    const pathname = usePathname();

    const whiteLogo = "/image/excerptwww.png";
    const blackLogo = "/image/excerptbbb.png";

    useEffect(() => {
        const handleScroll = () => {
             // Logic: Scroll > 40px triggers compact mode
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
        // Reset dropdowns when closing
        if (isMobileNavOpen) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
        }
    };

    const closeMenu = () => {
        setMobileNavOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
    };

    const handleLogoutClick = () => {
        if (onLogout) onLogout();
        closeMenu();
    };

    const toggleDropdown = (name, e) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === name ? null : name);
        setActiveSubDropdown(null); // Close sub-dropdowns needed
    };

    const toggleSubDropdown = (name, e) => {
        e.stopPropagation();
        setActiveSubDropdown(activeSubDropdown === name ? null : name);
    };

    return (
        <>
            <style jsx global>{`
                /* Mobile Nav Container */
                .mobile-nav-root {
                    display: none; /* Hidden on desktop by default */
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 9999;
                    font-family: 'Roboto', sans-serif;
                }

                @media (max-width: 768px) {
                    .mobile-nav-root {
                        display: block;
                    }
                }

                /* Layout & Transitions */
                .mobile-header-container {
                    width: 100%;
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }

                /* -- Full Mode (Initial) -- */
                .header-full .top-brand-bar {
                    background-color: #0F766E ; /* Blue */
                    padding: 10px 15px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: 60px;
                    transition: height 0.3s ease, padding 0.3s ease, background-color 0.3s ease;
                }
                
                .header-full .bottom-info-bar {
                    background-color: #fff;
                    padding: 10px 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: auto;
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 0.3s ease;
                    border-bottom: 1px solid #eee;
                }

                /* -- Compact Mode (Scrolled) -- */
                .header-compact .top-brand-bar {
                    background-color: #fff; /* White */
                    height: 70px; /* Slightly taller to accommodate black logo */
                    padding: 5px 15px;
                }

                .header-compact .bottom-info-bar {
                    height: 0;
                    padding: 0;
                    opacity: 0;
                    overflow: hidden;
                    transform: translateY(-20px);
                }

                /* Elements */
                .logo-image {
                    /* Transitions for logo if needed */
                    transition: all 0.3s ease;
                }

                .contact-info {
                    font-size: 13px;
                    color: #333;
                    line-height: 1.4;
                }
                .contact-info div {
                    font-weight: 500;
                }

                .action-area {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .login-btn {
                    background-color: #0F766E ;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                }
                
                .hamburger-btn {
                    font-size: 24px;
                    color: #333;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    transition: color 0.3s;
                }

                /* In compact mode, hamburger needs to be visible in the top bar or moved */
                /* The user request says: "Compact navbar ... Only logo ... Keep hamburger menu visible" */
                /* Implementation: We will move the hamburger to the top bar in compact mode or keep a single bar */
                
                /* Refined Strategy: 
                   Full Mode: Top Bar (Logo) + Bottom Bar (Contact + Login + Hamburger) 
                   Compact Mode: Top Bar (Logo + Hamburger) 
                */

                .hamburger-in-top {
                    display: none;
                    margin-left: auto; /* Push to right */
                    color: #333;
                }
                
                .header-compact .hamburger-in-top {
                    display: block;
                }
                
                /* In compact mode, the bottom bar is hidden, so hide the hamburger there */
                
                /* Off-Canvas Menu */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 80%;
                    max-width: 300px;
                    height: 100vh;
                    background: white;
                    z-index: 10001;
                    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                    transition: right 0.3s ease-in-out;
                    overflow-y: auto;
                    padding: 20px;
                }

                .mobile-menu-overlay.open {
                    right: 0;
                }

                .menu-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    z-index: 10000;
                    display: none;
                }
                .menu-backdrop.open {
                    display: block;
                }

                /* Menu Items */
                .menu-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .menu-item {
                    border-bottom: 1px solid #f0f0f0;
                }
                .menu-link {
                    display: block;
                    padding: 12px 0;
                    font-size: 16px;
                    font-weight: 600;
                    color: #0F766E ;
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .menu-link-sub {
                    font-size: 14px;
                    color: #555;
                    font-weight: 500;
                    padding: 10px 0 10px 15px;
                }
                
                .dropdown-container {
                    background: #f9f9f9;
                    padding: 0 10px;
                    display: none;
                }
                .dropdown-container.show {
                    display: block;
                }
                
                .close-btn {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    font-size: 24px;
                    color: #333;
                    cursor: pointer;
                }
            `}</style>

            <div className="mobile-nav-root">
                <div className={`mobile-header-container ${isScrolled ? 'header-compact' : 'header-full'}`}>
                    
                    {/* TOP BAR: Logo (Blue in Full, White in Compact) */}
                    <div className="top-brand-bar">
                        <Link href="/" onClick={closeMenu}>
                            <Image 
                                src={isScrolled ? blackLogo : whiteLogo} 
                                alt="Excerpt Logo" 
                                width={160} 
                                height={60} 
                                style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
                            />
                        </Link>

                        {/* Hamburger appears here only in COMPACT mode */}
                        <div className="hamburger-btn hamburger-in-top" onClick={toggleMobileNav}>
                            <FaBars />
                        </div>
                    </div>

                    {/* BOTTOM BAR: Contact + Buttons (Visible in Full, Hidden in Compact) */}
                    <div className="bottom-info-bar">
                        <div className="contact-info">
                            <div>+91 6364657660</div>
                            <div>info@excerptech.com</div>
                        </div>
                        <div className="action-area">
                            {!isLoggedIn ? (
                                <Link href="/login" className="login-btn" onClick={closeMenu}>
                                    Login / Register
                                </Link>
                            ) : (
                                <button onClick={handleLogoutClick} className="login-btn" style={{backgroundColor: '#dc3545'}}>
                                    Logout
                                </button>
                            )}
                            
                            {/* Hamburger in FULL mode */}
                            <div className="hamburger-btn" onClick={toggleMobileNav}>
                                <FaBars />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OFF-CANVAS MENU */}
            <div className={`menu-backdrop ${isMobileNavOpen ? 'open' : ''}`} onClick={closeMenu}></div>
            <div className={`mobile-menu-overlay ${isMobileNavOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={closeMenu}>
                    <FaTimes />
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link href="/" className="menu-link" onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        
                        {/* Services */}
                        <li className="menu-item">
                            <div className="menu-link" onClick={(e) => toggleDropdown('services', e)}>
                                <span style={{color: "#0F766E"}}>SERVICES</span>
                                {activeDropdown === 'services' ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
                            </div>
                            <div className={`dropdown-container ${activeDropdown === 'services' ? 'show' : ''}`}>
                                
                                {/* Web Design Sub-Menu */}
                                <div className="menu-link menu-link-sub" style={{justifyContent: 'space-between'}} onClick={(e) => toggleSubDropdown('webdesign', e)}>
                                    <span style={{color: "#0F766E"}}>Web Design & Development</span>
                                    {activeSubDropdown === 'webdesign' ? <FaChevronDown size={10}/> : <FaChevronRight size={10}/>}
                                </div>
                                <div className={`dropdown-container ${activeSubDropdown === 'webdesign' ? 'show' : ''}`} style={{background: '#fff', paddingLeft: '10px'}}>
                                    <Link href="/Staticwebsite" className="menu-link menu-link-sub" onClick={closeMenu}>Static Websites</Link>
                                    <Link href="/Dyanamicwebsite" className="menu-link menu-link-sub" onClick={closeMenu}>Dynamic Websites</Link>
                                    <Link href="/Customizedwebsites" className="menu-link menu-link-sub" onClick={closeMenu}>Customized Websites</Link>
                                </div>

                                <Link href="/Geekychat" className="menu-link menu-link-sub" onClick={closeMenu}>GeekyChat</Link>
                                <Link href="/Erp" className="menu-link menu-link-sub" onClick={closeMenu}>ERP</Link>
                                <Link href="/Crm" className="menu-link menu-link-sub" onClick={closeMenu}>CRMs</Link>
                                <Link href="/Ecommerce" className="menu-link menu-link-sub" onClick={closeMenu}>E-commerce</Link>
                                <Link href="/Lms" className="menu-link menu-link-sub" onClick={closeMenu}>LMS</Link>
                                 <Link href="/Elearning" className="menu-link menu-link-sub" onClick={closeMenu}>E-learning</Link>
                                  <Link href="/Dataanalytics" className="menu-link menu-link-sub" onClick={closeMenu}>Data Analytics & Science</Link>
                                <Link href="/DigitalMarketing" className="menu-link menu-link-sub" onClick={closeMenu}>Digital Marketing</Link>
                                <Link href="/Mobileapp" className="menu-link menu-link-sub" onClick={closeMenu}>Mobile Application</Link>
                                <Link href="/Cybersecurity" className="menu-link menu-link-sub" onClick={closeMenu}>Cyber Security</Link>
                                <a href="https://trainings.excerptech.com" target="_blank" rel="noopener noreferrer" className="menu-link menu-link-sub" onClick={closeMenu}>Excerpt Trainings</a>
                            </div>
                        </li>

                        <li className="menu-item">
                            <Link href="/portfolio" className="menu-link" onClick={closeMenu}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/contact" className="menu-link" onClick={closeMenu}>
                                CONTACT
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/careers" className="menu-link" onClick={closeMenu}>
                                CAREERS <TiStar style={{color: '#f39c12'}} />
                            </Link>
                        </li>

                        {isLoggedIn && (
                            <li className="menu-item">
                                <Link href="/dashboard" className="menu-link" onClick={closeMenu} style={{color: '#007bff'}}>
                                    ADMIN DASHBOARD
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;