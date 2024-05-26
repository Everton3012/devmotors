import { HomeProps } from "@/utils/types/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Services = ({ object }: HomeProps) => {
  return (
    <>
      <section className={styles.containerAbout}>
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object?.metadata?.about?.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            src={object.metadata.about.banner.url}
            alt={"Imagem ilustrativa sobre a empresa"}
            quality={100}
            fill={true}
            priority
          />
        </div>
      </section>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object &&
          object.metadata.services.map((service) => (
            <article key={service.description} className={styles.service}>
              <div className={styles.innerService}>
                <Image
                  className={styles.imageService}
                  src={service.image.url}
                  alt={"Imagem do serviço"}
                  quality={100}
                  fill={true}
                  priority
                />
              </div>
              <p>{service.description}</p>
            </article>
          ))}
      </section>
    </>
  );
};
