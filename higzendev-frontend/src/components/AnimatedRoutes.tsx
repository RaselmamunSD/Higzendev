import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Industries from "@/pages/Industries";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Careers from "@/pages/Careers";
import JobDetail from "@/pages/JobDetail";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import RequestQuote from "@/pages/RequestQuote";
import Story from "@/pages/Story";
import Founder from "@/pages/Founder";
import Team from "@/pages/Team";
import ScheduleMeeting from "@/pages/ScheduleMeeting";
import VideoMeeting from "@/pages/VideoMeeting";
import Products from "@/pages/Products";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import Sitemap from "@/pages/Sitemap";
import StaffAugmentation from "@/pages/StaffAugmentation";
import ManagedApplications from "@/pages/ManagedApplications";
import ProfessionalServices from "@/pages/ProfessionalServices";
import BrandPromotion from "@/pages/BrandPromotion";
import WebDevelopment from "@/pages/WebDevelopment";
import MobileAppDevelopment from "@/pages/MobileAppDevelopment";
import UIUXDesign from "@/pages/UIUXDesign";
import CloudSolutions from "@/pages/CloudSolutions";
import ITConsulting from "@/pages/ITConsulting";
import DatabaseManagement from "@/pages/DatabaseManagement";
import Ecommerce from "@/pages/Ecommerce";
import QATesting from "@/pages/QATesting";
import CustomCMS from "@/pages/CustomCMS";
import AIDevelopment from "@/pages/AIDevelopment";
import EmbeddedSystemDesign from "@/pages/EmbeddedSystemDesign";
import DevOps from "@/pages/DevOps";
import SRE from "@/pages/SRE";
import SuccessStories from "@/pages/SuccessStories";
import CaseStudyDetails from "@/pages/CaseStudyDetails";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
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
  );
};

export default AnimatedRoutes;
