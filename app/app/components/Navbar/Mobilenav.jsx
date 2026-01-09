
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const MobileNav = ({ isLoggedIn, onLogout }) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
    const router = useRouter();

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
        if (isMobileNavOpen) {
            setServicesDropdownOpen(false);
            setWebDesignDropdownOpen(false);
        }
    };

    const closeAllMenus = () => {
        setMobileNavOpen(false);
        setServicesDropdownOpen(false);
        setWebDesignDropdownOpen(false);
    };

    const handleLogout = () => {
        onLogout();
        closeAllMenus();
    };

    const handleServicesClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setServicesDropdownOpen(!isServicesDropdownOpen);
        if (isServicesDropdownOpen) {
            setWebDesignDropdownOpen(false);
        }
    };

    const handleWebDesignClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setWebDesignDropdownOpen(!isWebDesignDropdownOpen);
    };

    const handleServicesLinkNavigate = (e) => {
        if (!e.target.closest('.dropdown-toggle')) {
            closeAllMenus();
            router.push('/services');
        }
    };

    const handleWebDesignLinkNavigate = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleWebDesignClick(e);
    };

    return (
        <>
            {/* Mobile Navigation - Only shows on mobile screens */}
            <div className="mobile-nav-container">
                <div style={{
                    backgroundColor: "white",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <div style={{
                        padding: '10px 15px',
                        background: 'white',
                    }}>
                        {/* Top Bar - Logo and Contact */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px"
                        }}>
                            {/* Logo - Left Side */}
                            <div>
                                <Link href="/" onClick={closeAllMenus}>
                                    <img
                                        src="/images/excerptlogo.webp"
                                        alt="Excerpt Logo"
                                        style={{
                                            height: "65px",
                                            width: "auto",
                                            Width: "150px",
                                            objectFit: "contain",
                                            cursor: "pointer"
                                        }}
                                    />
                                </Link>
                            </div>

                            {/* Contact Info - Right Side */}
                            <div style={{ textAlign: "right", fontSize: "11px", lineHeight: "1.5", color: "#333" }}>
                                <div>+91 6364657660</div>
                                <div>info@excerptech.com</div>
                            </div>
                        </div>

                        {/* Menu Icon */}
                        <div
                            style={{
                                fontSize: '28px',
                                cursor: 'pointer',
                                textAlign: 'right',
                                color: '#333'
                            }}
                            onClick={toggleMobileNav}
                        >
                            ☰
                        </div>

                        {/* Mobile Menu Dropdown */}
                        {isMobileNavOpen && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: '85px',
                                    left: 0,
                                    right: 0,
                                    maxHeight: 'calc(100vh - 85px)',
                                    overflowY: 'auto',
                                    background: "#fff",
                                    padding: "20px 15px",
                                    zIndex: 999,
                                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                }}
                            >
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    textAlign: "left"
                                }}>
                                    <li style={{ marginBottom: "15px" }}>
                                        <Link href="/" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
                                            HOME
                                        </Link>
                                    </li>

                                    {/* SERVICES */}
                                    <li style={{ marginBottom: "15px" }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span
                                                onClick={handleServicesLinkNavigate}
                                                style={{
                                                    fontSize: "16px",
                                                    color: "blue",
                                                    fontWeight: "bold",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                SERVICES
                                            </span>
                                            <span
                                                className="dropdown-toggle"
                                                onClick={handleServicesClick}
                                                style={{
                                                    cursor: "pointer",
                                                    padding: "5px",
                                                    color: "#333"
                                                }}
                                            >
                                                {isServicesDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
                                            </span>
                                        </div>

                                        {isServicesDropdownOpen && (
                                            <div style={{
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                backgroundColor: "#f8f9fa",
                                                padding: "10px",
                                                borderRadius: "5px"
                                            }}>
                                                {/* Web Design */}
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: "10px"
                                                }}>
                                                    <span
                                                        onClick={handleWebDesignLinkNavigate}
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#495057",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        Web Design & Development
                                                    </span>
                                                    <span
                                                        onClick={handleWebDesignClick}
                                                        style={{
                                                            cursor: "pointer",
                                                            padding: "5px",
                                                            color: "#333"
                                                        }}
                                                    >
                                                        {isWebDesignDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
                                                    </span>
                                                </div>

                                                {isWebDesignDropdownOpen && (
                                                    <div style={{
                                                        paddingLeft: "15px",
                                                        marginBottom: "10px",
                                                        backgroundColor: "white",
                                                        padding: "8px",
                                                        borderRadius: "4px"
                                                    }}>
                                                        <Link href="/Staticwebsite" onClick={closeAllMenus} style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "blue" }}>
                                                            Static Websites
                                                        </Link>
                                                        <Link href="/Dyanamicwebsite" onClick={closeAllMenus} style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "blue" }}>
                                                            Dynamic Websites
                                                        </Link>
                                                        <Link href="/Customizedwebsites" onClick={closeAllMenus} style={{ display: "block", fontSize: "13px", color: "blue" }}>
                                                            Customized Websites
                                                        </Link>
                                                    </div>
                                                )}

                                                {[
                                                    { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
                                                    { path: "/Erp", name: "ERP" },
                                                    { path: "/Crm", name: "CRM's" },
                                                    { path: "/Ecommerce", name: "E-commerce" },
                                                    { path: "/Elearning", name: "E-learning" },
                                                    { path: "/Lms", name: "LMS" },
                                                    { path: "/DigitalMarketing", name: "Digital Marketing" },
                                                    { path: "/Dataanalytics", name: "Data Analytics & Science" },
                                                    { path: "/Mobileapp", name: "Mobile Application" },
                                                    { path: "/Cybersecurity", name: "Cyber Security" },
                                                ].map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.path}
                                                        onClick={closeAllMenus}
                                                        style={{
                                                            display: "block",
                                                            padding: "8px 10px",
                                                            fontSize: "14px",
                                                            color: "blue",
                                                            marginBottom: "5px"
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}

                                                <a
                                                    href="https://trainings.excerptech.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={closeAllMenus}
                                                    style={{
                                                        display: "block",
                                                        padding: "8px 10px",
                                                        fontSize: "14px",
                                                        color: "blue"
                                                    }}
                                                >
                                                    Excerpt Trainings
                                                </a>
                                            </div>
                                        )}
                                    </li>

                                    <li style={{ marginBottom: "15px" }}>
                                        <Link href="/portfolio" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
                                            PORTFOLIO
                                        </Link>
                                    </li>

                                    <li style={{ marginBottom: "15px" }}>
                                        <Link href="/contact" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
                                            CONTACT
                                        </Link>
                                    </li>

                                    <li style={{ marginBottom: "15px" }}>
                                        <Link href="/careers" onClick={closeAllMenus} style={{ fontSize: "16px", color: "blue", fontWeight: "bold" }}>
                                            CAREERS
                                        </Link>
                                    </li>

                                    {isLoggedIn && (
                                        <li style={{ marginBottom: "15px" }}>
                                            <Link href="/dashboard" onClick={closeAllMenus} style={{ fontSize: "16px", color: "#007bff", fontWeight: "bold" }}>
                                                ADMIN
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* CSS - Hide on desktop, show only on mobile */}
            <style jsx>{`
                .mobile-nav-container {
                    display: none;
                }

                @media (max-width: 768px) {
                    .mobile-nav-container {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
};

export default MobileNav;