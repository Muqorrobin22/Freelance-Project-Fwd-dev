import styles from "../../../styles/NavbarMobile.module.scss";
import Image from "next/image";

let english = {
  src: "/images/english.png",
  alt: "English Language",
  height: 25,
  width: 36,
};

let indonesia = {
  src: "/images/indo.png",
  alt: "Indonesia Language",
  height: 25,
  width: 36,
};

let burgerClose = {
  src: "/images/burgerClose.png",
  alt: "Hamburger Menu Close",
  height: 14,
  width: 14,
};

export default function NavbarMobile({ handleClick }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        <a href="#" className={`${styles.button} ${styles.daftar}`}>
          Daftar
        </a>
        <a href="#" className={styles.button}>
          Masuk
        </a>

        <div className={styles.imgWrap}>
          <Image
            src={burgerClose.src}
            alt={burgerClose.alt}
            width={burgerClose.width}
            height={burgerClose.height}
            onClick={handleClick}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.language}>
        <h1>Switch Language</h1>
        <div>
          <Image
            src={indonesia.src}
            alt={indonesia.alt}
            width={indonesia.width}
            height={indonesia.height}
          />
          <Image
            src={english.src}
            alt={english.alt}
            width={english.width}
            height={english.height}
          />
        </div>
      </div>
    </nav>
  );
}
