import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Thiago Bardini | Software Engineer & Founder", 
  description = "Software engineer and founder specializing in React, TypeScript, and AI integration. Building innovative solutions at FlowQuantic.",
  keywords = "Thiago Bardini, Software Engineer, React Developer, TypeScript, AI Integration, FlowQuantic, PetQuantic, CrewQuantic",
  image = "https://thiagobardini.com/og-image.png",
  type = "website"
}) => {
  const location = useLocation();
  const currentUrl = `https://thiagobardini.com${location.pathname}`;
  
  // Add page-specific suffix to title
  const fullTitle = location.pathname === '/' 
    ? `${title} | Portfolio` 
    : `${title} | ${location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)}`;

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
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO; 