const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICCM 2026</h3>
            <p className="text-gray-400">
              9th International Conference on Contemporary Management
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#call-for-papers" className="hover:text-white transition-colors">Call for Papers</a></li>
              <li><a href="#registration" className="hover:text-white transition-colors">Registration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Important</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#important-dates" className="hover:text-white transition-colors">Important Dates</a></li>
              <li><a href="#committees" className="hover:text-white transition-colors">Committees</a></li>
              <li><a href="#venue" className="hover:text-white transition-colors">Venue</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@iccm2026.org</li>
              <li>Phone: TBA</li>
              <li>Address: TBA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ICCM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
