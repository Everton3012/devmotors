import styles from "./styles.module.scss";
import { PostProps } from "@/utils/types/post.type";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Hero } from "@/components/hero";
import { PhoneCall } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada",
        description: "Oficina de carros em São Paulo",
      };
    })

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description}`,
      keywords: [
        "DevMotors",
        "oficina",
        "oficina de carros",
        "carros",
        "manutenção de carros",
        "troca de oléo",
        `${objects[0].title}`
      ],
      openGraph: {
        title: "DevMotors - Sua oficina especializada",
        images: [`${objects[0].metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        }
      }
    };

  } catch (error) {
    return {
      title: "DevMotors - Sua oficina especializada",
      description: "Oficina de carros em São Paulo",
    };
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <main>
      <Hero
        heading={objects[0].title}
        buttonUrl={objects[0].metadata.button.url}
        buttonTitle={objects[0].metadata.button.title}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<PhoneCall size={24} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              src={objects[0].metadata.description.banner.url}
              alt={objects[0].title}
              quality={100}
              fill={true}
              priority={true}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
