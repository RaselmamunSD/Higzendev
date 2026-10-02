import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  author?: string;
  schema?: Record<string, any>;
}

const defaultDescription = "HigzenDev is a premier software engineering & AI development agency founded by MD Rasel Mamun. We build high-throughput distributed backends, autonomous AI pipelines, custom web apps, and enterprise cloud solutions.";
const defaultKeywords = "HigzenDev, MD Rasel Mamun, software development company, AI development agency, custom enterprise software, cloud architecture, Kubernetes, React, FastAPI, Python AI, DevOps, Bangladesh software company, Silicon Valley engineering";
const siteUrl = "https://higzendev.com";
const defaultImage = `${siteUrl}/images/higzendev-share-banner.png`;

export const SEO: React.FC<SEOProps> = ({
  title = "HigzenDev | Enterprise Software Engineering & AI Solutions",
  description = defaultDescription,
  keywords = defaultKeywords,
  canonical,
  ogImage = defaultImage,
  ogType = "website",
  author = "MD Rasel Mamun, HigzenDev",
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes("HigzenDev") ? title : `${title} | HigzenDev`;
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', author);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. OpenGraph Tags
    const pathname = window.location.pathname === '/' ? '' : window.location.pathname;
    const resolvedCanonical = canonical 
      ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`)
      : `${siteUrl}${pathname}`;
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', resolvedCanonical);
    setMeta('property', 'og:image', resolvedOgImage);
    setMeta('property', 'og:image:secure_url', resolvedOgImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'HigzenDev');
    setMeta('property', 'og:locale', 'en_US');

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:domain', 'higzendev.com');
    setMeta('name', 'twitter:url', resolvedCanonical);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', resolvedOgImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', resolvedCanonical);

    // 6. Schema JSON-LD Injection
    if (schema) {
      let scriptSchema = document.querySelector('#page-schema-jsonld') as HTMLScriptElement;
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'page-schema-jsonld';
        scriptSchema.type = 'application/ld+json';
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup page-specific schema on unmount if needed
      const scriptSchema = document.querySelector('#page-schema-jsonld');
      if (scriptSchema && scriptSchema.parentNode) {
        scriptSchema.parentNode.removeChild(scriptSchema);
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, author, schema]);

  return null;
};

export default SEO;
