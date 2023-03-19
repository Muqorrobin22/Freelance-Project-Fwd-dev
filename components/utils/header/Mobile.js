import Image from "next/image";
import { useState } from "react";
import NavbarMobile from "../modile/NavbarMobile";
import styles from "../../../styles/Mobile.module.scss";

let burgerClose = {
  src: "/images/Burger_Close.png",
  alt: "Hamburger Menu Close",
  height: 18,
  width: 18,
};
let burgerMenu = {
  src: "/images/burgermenu.png",
  alt: "Hamburger Menu",
  height: 12,
  width: 18,
};

function Mobile() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles.mobile}>
      {!isClicked ? (
        <Image
          src={burgerMenu.src}
          alt={burgerMenu.alt}
          width={burgerMenu.width}
          height={burgerMenu.height}
          onClick={handleClick}
          className={styles.img}
        />
      ) : (
        <Image
          src={burgerClose.src}
          alt={burgerClose.alt}
          width={burgerClose.width}
          height={burgerClose.height}
          onClick={handleClick}
          className={styles.img}
        />
      )}
      {isClicked && <NavbarMobile handleClick={handleClick} />}
    </div>
  );
}

export default Mobile;
