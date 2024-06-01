import styles from "./styles.module.scss";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h2>Pagina de teste</h2>
    </div>
  );
}
