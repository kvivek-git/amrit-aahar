import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowitWorks';
import Tested from './components/Tested';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InteractiveCard from './components/InteractiveCard';
import TestedForRealLife from './components/TestedForRealLife';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactAndReview from './components/ContactAndReview';

function App() {
  return (
    <div className="font-sans bg-[#FAEFE5]">
      <Navbar />
      <Hero />
      <InteractiveCard />
      <TestedForRealLife />
      <CustomerTestimonials />
      <FAQ />
      <ContactAndReview />
      <Footer />
    </div>
  );
}

export default App;
