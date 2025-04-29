"use client"
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={`my-10 border-t  transition-opacity duration-500 `}>
      <div className="max-w-8xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Brand Column (Enhanced) */}
          <div className="col-span-2 xl:col-span-1 space-y-6">
            <div className="flex items-center group">
              <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-[#4285F4] transition-colors duration-300">
                <svg className="h-6 w-6 text-white" viewBox="0 0 40 40">
                  <path fill="currentColor" d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm0 36a16 16 0 1 1 0-32 16 16 0 0 1 0 32z"/>
                </svg>
              </div>
              <span className="ml-3 text-2xl font-medium text-gray-900 group-hover:text-[#4285F4] transition-colors duration-300">
                YourBrand
              </span>
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed">
              Building intuitive experiences with pixel-perfect precision.
            </p>
            
            {/* Social Icons (Animated) */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: 'github', color: 'hover:text-gray-900' },
                { icon: 'twitter', color: 'hover:text-[#1DA1F2]' },
                { icon: 'linkedin', color: 'hover:text-[#0077B5]' },
                { icon: 'figma', color: 'hover:text-[#F24E1E]' }
              ].map((social) => (
                <a 
                  key={social.icon} 
                  href="#"
                  className={`text-gray-500 ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
                  aria-label={`${social.icon} link`}
                >
                  <i className={`fab fa-${social.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {[
            { title: 'Product', links: ['Features', 'Solutions', 'Enterprise', 'Pricing', 'Demo'] },
            { title: 'Resources', links: ['Documentation', 'Blog', 'Tutorials', 'API Status', 'Help Center'] },
            { title: 'Company', links: ['About', 'Careers', 'Press', 'Partners', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'] }
          ].map((section) => (
            <div key={section.title} className="space-y-5">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-base transition-colors duration-200 flex items-start group"
                    >
                      <span className="group-hover:underline decoration-2 underline-offset-4">
                        {link}
                      </span>
                      {link === 'API Status' && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs font-medium rounded bg-green-100 text-green-800">
                          Live
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Divider */}
        <div className="mt-16 mb-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-sm text-gray-500">
              Elevating digital experiences
            </span>
          </div>
        </div>

        {/* Bottom Bar (Enhanced) */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">Global</span>
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility'].map((item) => (
              <a 
                key={item} 
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};