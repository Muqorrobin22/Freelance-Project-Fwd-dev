import Image from "next/image";
import styles from "../../styles/Main.module.scss";

export default function Main() {
  let navMenu = {
    src: "/images/ikan.png",
    alt: "Navigation",
    height: 35,
    width: 35,
  };

  let navMenuActive = {
    src: "/images/ikan-active.png",
    alt: "Navigation",
    height: 35,
    width: 35,
  };

  const menuNumber = [1, 2, 3, 4, 5];

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
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
      </nav>
    </main>
  );
}
