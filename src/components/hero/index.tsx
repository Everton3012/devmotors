import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HomeProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon:ReactNode
}

export const Hero = ({
  heading,
  bannerUrl,
  buttonUrl,
  buttonTitle,
  icon,
}: HomeProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a className={styles.link} target="_blank" href={buttonUrl}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          src={bannerUrl}
          alt={heading}
          priority={true}
          quality={100}
          fill={true}
          className={styles.banner}
        />
      </div>
    </main>
  );
};
