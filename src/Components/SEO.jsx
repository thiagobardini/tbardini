import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Thiago Bardini", 
  description = "Software engineer and founder specializing in React, TypeScript, and AI integration. Building innovative solutions at FlowQuantic.",
  keywords = "Thiago Bardini, Software Engineer, React Developer, TypeScript, AI Integration, FlowQuantic, PetQuantic, CrewQuantic",
  image = "https://thiagobardini.com/logoNav250.png", // TODO: Change to og-image.png after generating it (see TODO-OG-IMAGE.md)
  type = "website"
}) => {
  const location = useLocation();
  const currentUrl = `https://thiagobardini.com${location.pathname}`;
  
  // Map routes to proper page names
  const getPageTitle = (pathname) => {
    const pageMap = {
      '/': 'Portfolio',
      '/aboutme': 'About Me',
      '/about': 'About Me',
      '/contact': 'Contact',
      '/projects': 'Projects',
      '/signin': 'Sign In',
      '/signup': 'Sign Up'
    };
    
    return pageMap[pathname] || pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  };
  
  // Create proper title structure: "Page Name | Thiago Bardini" (except for homepage)
  const pageTitle = getPageTitle(location.pathname);
  const fullTitle = location.pathname === '/' 
    ? `${title} | ${pageTitle}` 
    : `${pageTitle} | ${title}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <meta property="og:image:alt" content="Thiago Bardini Logo" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* WhatsApp and other messaging apps */}
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:locale" content="en_US" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO; 