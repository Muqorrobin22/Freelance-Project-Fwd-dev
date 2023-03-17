import Image from "next/image";
import styles from "../../../styles/HeaderUitls.module.scss";

export default function Menu(props) {
  return (
    <div className={styles.utils}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />

      <p>{props.use}</p>
    </div>
  );
}
