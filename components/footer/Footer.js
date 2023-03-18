import Image from "next/image";
import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  const menuNumber = [1, 2, 3, 4];

  const imageFooter = {
    src: "/images/imageFooter.png",
    alt: "Image Footer Navigation",
    width: 128,
    height: 31,
    key: null,
  };

  return (
    <footer className={styles.footer}>
      <section className={styles.footerTop}>
        <nav>
          {menuNumber.map((number) => (
            <a href="#" key={number}>
              Menu {number}{" "}
            </a>
          ))}
        </nav>
      </section>

      <section className={styles.footerMiddle}>
        <nav>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((temporary) => (
            <a href="#" key={temporary}>
              <Image
                src={imageFooter.src}
                alt={imageFooter.alt}
                width={imageFooter.width}
                height={imageFooter.height}
                key={temporary}
              />
            </a>
          ))}
        </nav>
      </section>

      <section className={styles.footerBottom}>
        <div className={styles.first}>
          <h1>Powered By:</h1>
          <div className={styles.FooterLogo}>
            <p>LOGO</p>
          </div>
        </div>
        <div className={styles.second}>
          <h1>Brand 1:</h1>
          <div className={styles.wrap}>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
          </div>
        </div>
        <div className={styles.third}>
          <h1>Brand 2:</h1>
          <div className={styles.wrap}>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
            <div className={styles.greenTemp}></div>
          </div>
        </div>
      </section>
    </footer>
  );
}
