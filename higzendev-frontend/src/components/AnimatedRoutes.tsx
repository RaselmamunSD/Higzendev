import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import RouteLoadingFallback from "./RouteLoadingFallback";

// Home Page: loaded eagerly for instant first-paint
import Index from "@/pages/Index";

// Secondary Pages: code-split dynamically via React.lazy for instant initial load speed
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetails = lazy(() => import("@/pages/ServiceDetails"));
const Industries = lazy(() => import("@/pages/Industries"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Careers = lazy(() => import("@/pages/Careers"));
const JobDetail = lazy(() => import("@/pages/JobDetail"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const RequestQuote = lazy(() => import("@/pages/RequestQuote"));
const Story = lazy(() => import("@/pages/Story"));
const Founder = lazy(() => import("@/pages/Founder"));
const Team = lazy(() => import("@/pages/Team"));
const ScheduleMeeting = lazy(() => import("@/pages/ScheduleMeeting"));
const VideoMeeting = lazy(() => import("@/pages/VideoMeeting"));
const Products = lazy(() => import("@/pages/Products"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("@/pages/TermsConditions"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const StaffAugmentation = lazy(() => import("@/pages/StaffAugmentation"));
const ManagedApplications = lazy(() => import("@/pages/ManagedApplications"));
const ProfessionalServices = lazy(() => import("@/pages/ProfessionalServices"));
const BrandPromotion = lazy(() => import("@/pages/BrandPromotion"));
const WebDevelopment = lazy(() => import("@/pages/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("@/pages/MobileAppDevelopment"));
const UIUXDesign = lazy(() => import("@/pages/UIUXDesign"));
const CloudSolutions = lazy(() => import("@/pages/CloudSolutions"));
const ITConsulting = lazy(() => import("@/pages/ITConsulting"));
const DatabaseManagement = lazy(() => import("@/pages/DatabaseManagement"));
const Ecommerce = lazy(() => import("@/pages/Ecommerce"));
const QATesting = lazy(() => import("@/pages/QATesting"));
const CustomCMS = lazy(() => import("@/pages/CustomCMS"));
const AIDevelopment = lazy(() => import("@/pages/AIDevelopment"));
const EmbeddedSystemDesign = lazy(() => import("@/pages/EmbeddedSystemDesign"));
const DevOps = lazy(() => import("@/pages/DevOps"));
const SRE = lazy(() => import("@/pages/SRE"));
const SuccessStories = lazy(() => import("@/pages/SuccessStories"));
const CaseStudyDetails = lazy(() => import("@/pages/CaseStudyDetails"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/about/story" element={<PageTransition><Story /></PageTransition>} />
          <Route path="/about/founder" element={<PageTransition><Founder /></PageTransition>} />
          <Route path="/about/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:serviceId" element={<PageTransition><ServiceDetails /></PageTransition>} />
          <Route path="/schedule-meeting" element={<PageTransition><ScheduleMeeting /></PageTransition>} />
          <Route path="/video-meeting" element={<PageTransition><VideoMeeting /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/careers/:jobId" element={<PageTransition><JobDetail /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:blogId" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/request-quote" element={<PageTransition><RequestQuote /></PageTransition>} />
          <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
          <Route path="/case-studies/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
          <Route path="/success-stories" element={<PageTransition><SuccessStories /></PageTransition>} />
          <Route path="/case-study-details/:id" element={<PageTransition><CaseStudyDetails /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-conditions" element={<PageTransition><TermsConditions /></PageTransition>} />
          <Route path="/sitemap" element={<PageTransition><Sitemap /></PageTransition>} />
          <Route path="/services/staff-augmentation" element={<PageTransition><StaffAugmentation /></PageTransition>} />
          <Route path="/services/managed-applications" element={<PageTransition><ManagedApplications /></PageTransition>} />
          <Route path="/services/professional-services" element={<PageTransition><ProfessionalServices /></PageTransition>} />
          <Route path="/services/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
          <Route path="/services/mobile-app-development" element={<PageTransition><MobileAppDevelopment /></PageTransition>} />
          <Route path="/services/ui-ux-design" element={<PageTransition><UIUXDesign /></PageTransition>} />
          <Route path="/services/cloud-solutions" element={<PageTransition><CloudSolutions /></PageTransition>} />
          <Route path="/services/it-consulting" element={<PageTransition><ITConsulting /></PageTransition>} />
          <Route path="/services/database-management" element={<PageTransition><DatabaseManagement /></PageTransition>} />
          <Route path="/services/ecommerce" element={<PageTransition><Ecommerce /></PageTransition>} />
          <Route path="/services/qa-testing" element={<PageTransition><QATesting /></PageTransition>} />
          <Route path="/services/custom-cms" element={<PageTransition><CustomCMS /></PageTransition>} />
          <Route path="/services/ai-development" element={<PageTransition><AIDevelopment /></PageTransition>} />
          <Route path="/services/embedded-system-design" element={<PageTransition><EmbeddedSystemDesign /></PageTransition>} />
          <Route path="/services/devops" element={<PageTransition><DevOps /></PageTransition>} />
          <Route path="/services/sre" element={<PageTransition><SRE /></PageTransition>} />
          <Route path="/brand-promotion" element={<PageTransition><BrandPromotion /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
