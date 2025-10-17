import { Award as AwardType } from '../types';
import { useState } from 'react';
import Modal from './Modal';
import styles from './Awards.module.css';

type AwardsProps = {
  items: AwardType[];
};

const Awards = ({ items }: AwardsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.awardItem}>
            <div className={styles.awardContent}>
              <div className={styles.awardHeader}>
                <div className={styles.awardInfo}>
                  <h3 className={styles.awardName}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.awardName}
                      </a>
                    ) : (
                      item.awardName
                    )}
                  </h3>
                  <p className={styles.awardCategory}>{item.category}</p>
                </div>
              </div>
              {item.certificateImageUrl && (
                <div className={styles.certificateContainer}>
                  <img
                    src={item.certificateImageUrl}
                    alt={`${item.awardName} 상장`}
                    className={styles.certificateImage}
                    onClick={() => setSelectedImage(item.certificateImageUrl!)}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
};

export default Awards;
