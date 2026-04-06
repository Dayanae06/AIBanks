import { motion } from 'framer-motion';
import { Bell, Eye } from '@phosphor-icons/react';
import { USER_PROFILE } from '../../data/mockData';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.avatar}>
          <span>{USER_PROFILE.avatar}</span>
        </div>
        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className={styles.hello}>Hola {USER_PROFILE.name} 👋</span>
          <span className={styles.tier}>{USER_PROFILE.tier}</span>
        </motion.div>
      </div>
      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Notificaciones">
          <Bell size={22} weight="bold" />
          <span className={styles.notifDot} />
        </button>
      </div>
    </header>
  );
}
