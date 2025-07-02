import { footerStyles as styles } from "../assets/dummystyles";
import logoImg from "../assets/logoicon.png";
import { Link } from "react-router-dom";
import { socialLinks, quickLinks } from "../assets/dummydata";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoBlock}>
            <Link to="/" className={styles.logoLink}>
              <img src={logoImg} alt="Logo" className={styles.logoImg} />
              <h1 className={styles.logoText}>BOOKS</h1>
            </Link>
            <p className={styles.aboutText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quaerat saepe fugit sequi itaque, incidunt asperiores, esse nam
              aliquam optio quae modi quibusdam dolorum debitis quo molestias
              natus adipisci magni!
            </p>
            <div className={styles.socialWrap}>
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  href={url}
                  key={i}
                  target="_blank"
                  className={styles.socialButton}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
                  </div>
                  <div className={styles.quickLinksBlock}>
                      <h3 className={styles.quickLinksTitle}>Quick links</h3>
                      <ul className={styles.quickLinksList}>
                          {quickLinks.map((link, idx) => (
                              <li key={idx}>
                                  <Link to={link.url} className={styles.quickLinkItem}>
                                      <span className={styles.quickLinkDot}></span>
                                      {link.title}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
