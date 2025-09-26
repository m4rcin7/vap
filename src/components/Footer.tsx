import React from "react";

interface FooterProps {
  logo?: string;
  links?: FooterLink[];
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
}

const defaultLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Footer: React.FC<FooterProps> = ({
  logo = "Logo",
  links = defaultLinks,
  className = "",
}) => {
  return (
    <footer className={`bg-gray-900 text-gray-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-semibold text-white">{logo}</div>

          {/* Links */}
          <div className="flex space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {logo}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
