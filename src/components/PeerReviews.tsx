// src/components/PeerReviews.tsx
import { useState } from 'react';
import Modal from './Modal';
import styles from './PeerReviews.module.css';

type PeerReviewsProps = {
  reviews: string[];
};

const PeerReviews = ({ reviews }: PeerReviewsProps) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className={styles.peerReviewContainer}>
        {reviews.map((review, index) => (
          <img
            key={index}
            src={review}
            alt={`동료평가 ${index + 1}`}
            className={styles.peerReviewImage}
            onClick={() => openModal(review)}
          />
        ))}
      </div>
      {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
    </>
  );
};

export default PeerReviews;
