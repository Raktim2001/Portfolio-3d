import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            - {new Date().getFullYear()} Raktim Verma. Feel free to use any
            icons :)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
