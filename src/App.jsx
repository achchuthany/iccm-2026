import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Theme from './pages/Theme';
import CallForPapers from './pages/CallForPapers';
import ImportantDates from './pages/ImportantDates';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import Committees from './pages/Committees';
import FocusAreas from './pages/FocusAreas';
import Registration from './pages/Registration';
import Programme from './pages/Programme';
import Venue from './pages/Venue';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <main>
        <Home />
        <About />
        <Theme />
        <CallForPapers />
        <ImportantDates />
        <KeynoteSpeakers />
        <Committees />
        <FocusAreas />
        <Registration />
        <Programme />
        <Venue />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
