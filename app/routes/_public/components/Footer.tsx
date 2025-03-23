import AppLogo from "~/components/primary/app-logo";
import Link from "~/components/ui/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 mt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <AppLogo className="text-3xl" />
            <p className="text-gray-400">
              Next-generation artificial intelligence for the modern enterprise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Text AI
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Vision AI
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Predictive AI
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2025 adc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-purple-400">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:text-purple-400">
              Privacy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-purple-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
