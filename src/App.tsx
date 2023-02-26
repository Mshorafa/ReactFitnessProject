import { useState, useEffect } from 'react';
import NavBar from '@/scenes/navbar';
import { SelectPage } from '@/shared/types';
import Home from '@/scenes/Home';
import Benefits from '@/scenes/Benefits';
import OurClasses from '@/scenes/OurClasses';
import ContactUs from '@/scenes/ContactUs';
import Footer from '@/scenes/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectPage>(SelectPage.Home);
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  useEffect(() => {
    const HandelScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectPage.Home);
      }
      if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener('scroll', HandelScroll);

    return () => {
      window.removeEventListener('scroll', HandelScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20 text-[#ccc]">
      <NavBar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
