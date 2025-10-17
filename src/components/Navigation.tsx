@@
 import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
-import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
+import { Menu, X, Phone } from 'lucide-react';
 import haceLogoImage from '@/assets/hace-logo.png';

 const Navigation = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();

   const navItems = [
     { name: 'Home', path: '/' },
     { name: 'About Us', path: '/about' },
     { name: 'Services', path: '/services' },
     { name: 'Get Insurance', path: '/get-insurance' },
     { name: 'Contact', path: '/contact' },
   ];

   const isActivePath = (path: string) => {
     return location.pathname === path;
   };

-  return (
-    <nav style={{ backgroundColor: '#d9d9d9' }} className="border-b border-border shadow-sm">
+  return (
+    <nav className="border-b border-border shadow-sm" style={{ backgroundColor: '#d9d9d9' }}>
@@
           {/* Desktop navigation */}
-          <div className="hidden md:block">
-            <div className="ml-10 flex items-baseline space-x-4">
-              {navItems.map((item) => (
-                <Link
-                  key={item.name}
-                  to={item.path}
-                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
-                    isActivePath(item.path)
-                      ? 'bg-primary text-primary-foreground'
-                      : 'text-foreground hover:text-primary hover:bg-accent'
-                  }`}
-                >
-                  {item.name}
-                </Link>
-              ))}
-            </div>
-          </div>
+          {/* Desktop nav (pill-style) */}
+          <div className="hidden md:block">
+            <div className="ml-10 flex items-center space-x-2">
+              {navItems.map((item) => {
+                const active = isActivePath(item.path);
+                return (
+                  <Link
+                    key={item.name}
+                    to={item.path}
+                    className={`
+                      px-4 py-2 rounded-full text-sm font-medium transition-colors
+                      ${active
+                        ? 'bg-[#3766e6] text-white'
+                        : 'text-foreground hover:bg-[#3766e6]/20 hover:text-white'}
+                    `}
+                  >
+                    {item.name}
+                  </Link>
+                );
+              })}
+            </div>
+          </div>
@@
           {/* Contact button - Desktop only */}
-          <div className="hidden md:block">
-            <Link
-              to="/contact"
-              className="btn-primary inline-flex items-center"
-            >
-              <Phone className="h-4 w-4 mr-2" />
-              Request Quote
-            </Link>
-          </div>
+          <div className="hidden md:block">
+            <Link
+              to="/contact"
+              className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-[#3766e6] text-white hover:bg-blue-700 transition-colors"
+            >
+              <Phone className="h-4 w-4 mr-2" />
+              Request Quote
+            </Link>
+          </div>
@@
       {/* Mobile menu */}
       {isMenuOpen && (
         <div className="md:hidden">
-          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
-            {navItems.map((item) => (
-              <Link
-                key={item.name}
-                to={item.path}
-                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
-                  isActivePath(item.path)
-                    ? 'bg-primary text-primary-foreground'
-                    : 'text-foreground hover:text-primary hover:bg-accent'
-                }`}
-                onClick={() => setIsMenuOpen(false)}
-              >
-                {item.name}
-              </Link>
-            ))}
-            <div className="pt-4 border-t border-border mt-4">
-              <Link
-                to="/contact"
-                className="btn-primary w-full text-center inline-flex items-center justify-center"
-                onClick={() => setIsMenuOpen(false)}
-              >
-                <Phone className="h-4 w-4 mr-2" />
-                Get in Touch
-              </Link>
-            </div>
-          </div>
-        </div>
-      )}
-    </nav>
-  );
-};
-
-export default Navigation;
+          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d9d9d9] border-t border-border">
+            {navItems.map((item) => {
+              const active = isActivePath(item.path);
+              return (
+                <Link
+                  key={item.name}
+                  to={item.path}
+                  className={`
+                    block px-3 py-2 rounded-md text-base font-medium transition-colors
+                    ${active
+                      ? 'bg-[#3766e6] text-white'
+                      : 'text-foreground hover:bg-[#3766e6]/20 hover:text-white'}
+                  `}
+                  onClick={() => setIsMenuOpen(false)}
+                >
+                  {item.name}
+                </Link>
+              );
+            })}
+            <div className="pt-4 border-t border-border mt-4">
+              <Link
+                to="/contact"
+                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#3766e6] text-white hover:bg-blue-700 transition-colors"
+                onClick={() => setIsMenuOpen(false)}
+              >
+                <Phone className="h-4 w-4 mr-2" />
+                Get in Touch
+              </Link>
+            </div>
+          </div>
+        </div>
+      )}
+    </nav>
+  );
+};
+
+export default Navigation;
