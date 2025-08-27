import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e) => {
    const path = e.target.value;
    router.push(path);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <Link href="/" className="text-sm">
          {pathname === "/" ? "ABOUT" : "에 대한"} ACME STORE
        </Link>
        <div>
          <p className="text-sm">
            {pathname === "/" ? "CONTACT US" : "문의하기"}
          </p>
          <div className="contact-us">
            <span>service@acme.com</span>
            <span>Service hours: 24 hours</span>
          </div>
        </div>
        <div className="footer-select">
          <select onChange={handleChange}>
            <option value="">Select Language</option>
            <option value="/">English</option>
            <option value="/ko">한국인</option>
          </select>
        </div>
      </div>

      <div className="text-sm">© 2025 ACME, Inc. All rights reserved.</div>
    </div>
  );
}
