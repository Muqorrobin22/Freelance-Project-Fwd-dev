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

      <section className={styles.form}>
        <div className={styles.images}>
          <Image
            src={"/images/bg-form.png"}
            alt="Background Image"
            quality={100}
            width={1000}
            height={100}
            className={styles.image}
          />
        </div>

        <div className={styles.register}>
          <h1 className={styles.h1}>Daftar</h1>
          <form>
            <div>
              <label for="nama_lengkap">Nama Lengkap</label>
              <input
                type="text"
                id="nama_lengkap"
                placeholder="Sesuai Rekening Bank Anda"
              />
            </div>
            <div>
              <label for="email">Alamat Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email Anda"
              />
            </div>
            <div className={styles.number}>
              <label for="number">Handphone</label>
              <div>
                <select name="number" id="number">
                  <option value="+62">+62</option>
                  <option value="+0">+0</option>
                  <option value="+98">+98</option>
                  <option value="+88">+88</option>
                </select>
                <input type="tel" id="number" placeholder="Ex: 81234456789" />
              </div>
            </div>
            <div>
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="6-14 Karakter Huruf dan Angka"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="6-14 Karakter"
              />
              <ul className={styles.ul}>
                <li>Minimal 6 kombinasi angka, huruf atau simbol</li>
                <li>Maksimal 14 kombinasi angka, huruf atau simbol</li>
              </ul>
            </div>
            <div>
              <label for="confirm_password">Konfirmasi Password</label>
              <input
                type="password"
                id="confirm_password"
                placeholder="6-14 Karakter"
              />
            </div>
            <div className={styles.knowUs}>
              <label for="knowUs">
                Darimana Anda Mengetahui Kami? (opsional)
              </label>
              <select name="knowUs" id="knowUs">
                <option value="choose">-- Pilih Salah Satu --</option>
                <option value="xxxx">xxx</option>
                <option value="zzzz">zzzz</option>
                <option value="aaaa">aaaa</option>
              </select>
            </div>
            <div>
              <label for="referral_code">Kode Referral (opsional)</label>
              <input
                type="text"
                id="referral_code"
                placeholder="Kode Referensi"
              />
            </div>
            {/* Code capctha Ini adalah Image karena sifatnya sementara */}

            <div className={styles.capctha}>
              <Image
                src={"/images/captcha.png"}
                alt="Kode Captcha"
                width={300}
                height={76}
              />
            </div>
            {/* ------------------------------------------------- */}
            <div className={styles.agreement}>
              <p>
                Dengan menetapkan DAFTAR, Anda menyatakan bahwa benar Anda
                berusia 18 tahun ke atas dan Anda setuju dengan{" "}
                <a href="#">Syarat dan Ketentuan</a>
              </p>
            </div>

            <button type="submit" className={styles.submit}>
              DAFTAR
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
