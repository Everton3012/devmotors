"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { MenuProps } from "@/utils/types/menu.type";

interface SubMenuProp {
  menu: MenuProps;
}

export const Submenu = ({ menu }: SubMenuProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#212121" />
          </button>
        )}

        {menu.objects.map((item) => (
          <li>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
