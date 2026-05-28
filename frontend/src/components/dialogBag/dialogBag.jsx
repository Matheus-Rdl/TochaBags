import { Dialog } from '@mui/material';
import styles from './dialogBag.module.css'

export default function DialogBag({ open, onClose }) {

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <div className={styles.dialogBox}>
        <h1 className={styles.dialogTitle}>Teste</h1>
      </div>
    </Dialog>
  );
}