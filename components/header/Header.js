import styles from "../../styles/Header.module.scss";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Mobile from "../utils/header/Mobile";
// import { useMediaQuery } from "@/hooks/useMediaQueries";
import useMediaQuery from "@mui/material/useMediaQuery";

let whatsapp = {
  src: "/images/whatsapp.png",
  alt: "Whatsapp Images",
  height: 30,
  width: 30,
  use: "Whatsapp",
};

let liveChat = {
  src: "/images/liveChat.png",
  alt: "Live Chat Image",
  height: 30,
  width: 32,
};

let english = {
  src: "/images/english.png",
  alt: "English Language",
  height: 19,
  width: 31,
};

let indonesia = {
  src: "/images/indo.png",
  alt: "Indonesia Language",
  height: 19,
  width: 31,
};

let burgerMenu = {
  src: "/images/burgermenu.png",
  alt: "Hamburger Menu",
  height: 12,
  width: 18,
};

let burgerClose = {
  src: "/images/Burger_Close.png",
  alt: "Hamburger Menu Close",
  height: 12,
  width: 18,
};

function Header() {
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 600px)",
  // });

  const isMobile = useMediaQuery("(max-width:600px)");

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <p className={styles.p}>LOGO HERE</p>
      </section>
      <section className={styles.connect}>
        <div className={styles.liveChat}>
          <Image
            src={liveChat.src}
            alt={liveChat.alt}
            width={liveChat.width}
            height={liveChat.height}
          />
          <p>Live Chat</p>
        </div>
        <div className={styles.whatsapp}>
          <Image
            src={whatsapp.src}
            alt={whatsapp.alt}
            width={whatsapp.width}
            height={whatsapp.height}
          />
          <p>WhatsApp</p>
        </div>
        <div
          className={
            isMobile ? `${styles.language} ${styles.hidden}` : styles.language
          }
        >
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
            className={styles.english}
          />
        </div>
      </section>
      <section className={styles.form}>
        {isMobile && <Mobile />}

        {!isMobile && (
          <>
            <form>
              <input type="text" placeholder="Username/Email" />
              <input type="password" placeholder="Password" />
            </form>
            <a href="#" className={styles.button}>
              Masuk
            </a>
            <a href="#" className={styles.button}>
              Daftar
            </a>
          </>
        )}
      </section>
    </header>
  );
}

export default Header;
