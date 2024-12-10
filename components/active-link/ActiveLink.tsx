'use client'
import Link from "next/link";
import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface PropLink {
  path: string,
  text: string
}

export default function ActiveLink({ path, text}: PropLink) {
  const pathName = usePathname()

  return (
    <Link
      key={path}
      className={`${styles.link} ${ (pathName === path) && styles['active-link']}`}
      href={path}
    >
      {text}
    </Link>
  )
}
