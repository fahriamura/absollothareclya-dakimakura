import Layout from '../components/Layout';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GallerySection from '../components/sections/GallerySection';
import TipsSection from '../components/sections/TipsSection';
import SplashScreenWrapper from '../components/SplashScreenWrapper';

export default function Home() {
  return (
    <SplashScreenWrapper alwaysShow={true}>
      <Layout>
        <HomeSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <GallerySection />
        <TipsSection />

      <div className="text-center my-8 p-4 border-2 border-dashed border-red-600 bg-yellow-200">
        <h3 className="text-xl font-bold mb-2">Join our community!</h3>
        <p className="mb-2">If you think you are silly come join our community</p>
        <p className="mb-4">Together we will.. being good (maybe)! 😂</p>
        <a
          href="#"
          className="blink text-red-600 font-bold text-lg hover:underline"
        >
          CLICK HERE TO JOIN!
        </a>
      </div>
      </Layout>
    </SplashScreenWrapper>
  );
}
