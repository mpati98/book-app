import { footerStyles as styles } from "../assets/dummystyles";
import logoImg from "../assets/yeutruyenlogo.jpg";
import { Link } from "react-router-dom";
import { socialLinks, quickLinks } from "../assets/bookappdata";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoBlock}>
            <Link to="/" className={styles.logoLink}>
              <img src={logoImg} alt="Logo" className={styles.logoImg} />
              <h1 className={styles.logoText}>Yêu Truyện</h1>
            </Link>
            <p className={styles.aboutText}>
              Mọi thông tin và hình ảnh trên website đều được bên thứ ba đăng
              tải, Yêu Truyện miễn trừ mọi trách nhiệm liên quan đến các nội
              dung trên website này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức
              nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
              Các vấn đề liên quan đến bản quyền hoặc thắc mắc khác, vui lòng
              liên hệ fanpage: Yêu Truyện
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
