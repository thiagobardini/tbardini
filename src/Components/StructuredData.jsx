import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Thiago Bardini",
  "alternateName": "Thiago Bardini",
  "url": "https://thiagobardini.com",
  "image": "https://thiagobardini.com/profile-image.jpg",
  "sameAs": [
    "https://github.com/thiagobardini",
    "https://linkedin.com/in/thiagobardini",
    "https://flowquantic.ai"
  ],
  "jobTitle": "Software Engineer & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "FlowQuantic",
    "url": "https://flowquantic.ai"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Code for Boston"
  },
  "knowsAbout": [
    "React",
    "TypeScript", 
    "Node.js",
    "AI Integration",
    "Software Development",
    "Frontend Development",
    "Full Stack Development"
  ],
  "nationality": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country", 
      "name": "Brazil"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "addressCountry": "US"
  }
};

export const ProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "author": {
    "@type": "Person",
    "name": "Thiago Bardini"
  },
  "applicationCategory": "WebApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
});

export const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Thiago Bardini Portfolio",
  "url": "https://thiagobardini.com",
  "author": {
    "@type": "Person",
    "name": "Thiago Bardini"
  },
  "description": "Portfolio website of Thiago Bardini - Software Engineer and Founder",
  "publisher": {
    "@type": "Person",
    "name": "Thiago Bardini"
  }
};

export default StructuredData; 