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

let navMenu = {
  src: "/images/ikan.png",
  alt: "Navigation",
  height: 29,
  width: 29,
};

let navMenuActive = {
  src: "/images/ikan-active.png",
  alt: "Navigation",
  height: 29,
  width: 29,
};

export default function NavbarMobile({ handleClick }) {
  const menuNumber = [1, 2, 3, 4, 5];
  const menu = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
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
        <div className={styles.menuScroll}>
          {menuNumber.map((data) =>
            data === 1 ? (
              <a href="#" key={data}>
                <Image
                  src={navMenuActive.src}
                  alt={navMenuActive.alt}
                  width={navMenuActive.width}
                  height={navMenuActive.height}
                />
                <h1>Menu {data}</h1>
              </a>
            ) : (
              <a href="#" key={data}>
                <Image
                  src={navMenu.src}
                  alt={navMenu.alt}
                  width={navMenu.width}
                  height={navMenu.height}
                />
                <h1>Menu {data}</h1>
              </a>
            )
          )}
        </div>
        <div className={styles.language}>
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
        <div className={styles.menu}>
          {menu.map((data) => (
            <a href="#">Menu {data}</a>
          ))}
        </div>
      </nav>
      <div className={styles.overlay}></div>
    </>
  );
}
