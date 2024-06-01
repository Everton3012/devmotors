import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/types/home.type";
import { PhoneCall } from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { MenuProps } from "@/utils/types/menu.type";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  const menu: MenuProps = await getSubMenu();
  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}
      <Hero
        heading={object.metadata.heading}
        buttonUrl={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<PhoneCall size={24} color="#fff" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
