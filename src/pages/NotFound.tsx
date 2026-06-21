
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
    <div className="text-center space-y-6 max-w-md">
      <p className="text-xs font-medium text-primary uppercase tracking-widest">404</p>
      <h1 className="text-5xl font-black">Page not found.</h1>
      <p className="text-gray-400 leading-relaxed">
        Nothing lives at this URL. If you typed it manually, check for typos.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
    </div>
  </div>
);

export default NotFound;
