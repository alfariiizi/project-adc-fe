import AppLogo from "~/components/primary/app-logo";
import { Mapper } from "~/components/primary/mapper";
import { Link } from "~/components/ui/link";
import { company, products, resources } from "~/shared/menus";

export default function Footer() {
  return (
    <footer className="px-6 py-12 mt-48">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-8 gap-8 mb-12">
          <div className="md:col-span-5 max-w-md">
            <AppLogo className="text-3xl" />
            <p className="text-gray-400">
              Next-generation artificial intelligence for the modern enterprise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <Mapper
              data={products}
              renderItem={(product) => (
                <Link to={product.href} variant="link">
                  {product.title}
                </Link>
              )}
              className="space-y-2 text-neutral-400"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <Mapper
              data={resources}
              renderItem={(item) => (
                <Link to={item.href} variant="link">
                  {item.title}
                </Link>
              )}
              className="space-y-2 text-neutral-400"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <Mapper
              data={company}
              renderItem={(item) => (
                <Link to={item.href} variant="link">
                  {item.title}
                </Link>
              )}
              className="z-10 space-y-2 text-neutral-400"
            />
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
