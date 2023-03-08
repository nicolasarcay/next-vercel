import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ActiveLink.module.css';

interface Props {
  text: string;
  path: string;
}

export const ActiveLink: FC<Props> = ({ text, path }) => {
  const { asPath } = useRouter();
  return (
    <Link href={path}>
      <a className={asPath === path ? styles.active : undefined}>{text}</a>
    </Link>
  );
};
