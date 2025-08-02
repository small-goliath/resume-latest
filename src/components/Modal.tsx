// src/components/Modal.tsx
import styles from './Modal.module.css';

type ModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const Modal = ({ imageUrl, onClose }: ModalProps) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <span className={styles.modalClose}>&times;</span>
      <img className={styles.modalContent} src={imageUrl} alt="확대된 동료평가 이미지" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default Modal;
