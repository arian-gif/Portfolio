import "./Footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  
    return (
      <footer className="footer">
        <p>© {year} Arian Khan Portfolio</p>
      </footer>
    );
  }
  
  export default Footer;
  