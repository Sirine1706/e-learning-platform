import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="py-[70px] bg-gray-10">
      <div className="container">
        <div>
          <div className="flex flex-col">
            <div className="flex items-start justify-between flex-wrap gap-8 ">
              <div className="footer-col">
                <h2 className="text-h2 text-white">E learning</h2>
                <p className="text-base !leading-[normal] text-gray-80">
                  Explore a world of knowledge and skills at your fingertips.
                </p>
                <div className="flex items-center gap-x-4">
                  <a href="#">
                    <RiFacebookCircleFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiInstagramFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiTwitterFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiLinkedinBoxFill size={32} className="social-icon" />
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">Quick Links</p>
                <div className="flex flex-col gap-y-2">
                  <a href="#home" className="footer-link">
                    Home
                  </a>
                  <a href="#about" className="footer-link">
                    About
                  </a>
                  <a href="#courses" className="footer-link">
                    Courses
                  </a>
                  <a href="#pricing" className="footer-link">
                    Offers
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <p className="footer-heading">Contact Information</p>
                <div className="flex flex-col gap-y-2">
                  <a className="footer-link">Address: Tunisia</a>
                  <a className="footer-link">Mail: Elearning@gmail.com</a>
                  <a className="footer-link">Phone: (+216) 22 333 444</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
