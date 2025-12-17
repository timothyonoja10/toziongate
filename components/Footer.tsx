import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Student & Professional Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Certificate Verification</li>
              <li>Career & Job Application Support</li>
              <li>Training & Course Enrolment</li>
              <li>CV & Personal Statement Services</li>
              <li>Academic & Postgraduate Support</li>
              <li>Travel & Study Guidance</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Training & Programmes
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Health & Social Care (Levels 2–5)</li>
              <li>Functional Skills Maths & English</li>
              <li>Door Supervisor & CCTV</li>
              <li>CSCS (CITB & GQA)</li>
              <li>Employability Programmes</li>
              <li>Upcoming Training & Events</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Partners & Opportunities
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Partnership Opportunities</li>
              <li>Affiliate & Referral Programme</li>
              <li>Training Centre Collaboration</li>
              <li>Franchising & Reseller License</li>
              <li>Career Acceleration Support</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              About Toziongate
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Our Team</li>
              <li>Our Profile</li>
              <li>Accreditation & Compliance</li>
              <li>Registration & Policies</li>
              <li>Jobs & Opportunities</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>

            {/* Socials */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/toziongate"
                  target="_blank"
                  aria-label="Facebook"
                  className="hover:text-white transition"
                >
                  <Facebook className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.instagram.com/toziongate"
                  target="_blank"
                  aria-label="Instagram"
                  className="hover:text-white transition"
                >
                  <Instagram className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/toziongate"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-white transition"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Toziongate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
