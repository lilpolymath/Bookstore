import React from 'react';
import styles from './Book.module.css';
import { ReactComponent as Active } from '../common/active-star.svg';
import { ReactComponent as Likes } from '../common/likes.svg';
import { ReactComponent as People } from '../common/people.svg';

const Book = () => {
  return (
    <div className={styles.book}>
      <div className={styles.book_cover}>
        <img
          className={styles.book_cover_image}
          src='https://res.cloudinary.com/favourcodes/image/upload/v1594580160/out-of-the-box_d4zfqw.jpg'
          alt={styles.book_cover}
        />
      </div>
      <div className={styles.book_details}>
        <div className={styles.availiabilty}>
          <p className={styles.available_yes}>Available</p>
        </div>
        <div className={styles.book_info}>
          <p className={styles.title}>Out of the Box</p>
          <p className={styles.book_text}>Adedapo Favour - 2009</p>
          <p className={styles.book_text}>Technology</p>
        </div>
        <div className={styles.metrics}>
          <div className={styles.ratings}>
            <p className={styles.book_text}>Ratings: 4.0</p>
            <div className={styles.stars}>
              <Active />
              <Active />
              <Active />
              <Active />
              <Active />
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.feedback}>
            <div className={styles.middle}>
              <People />
              <p className={styles.book_text}>31</p>
            </div>
            <div className={styles.middle}>
              <Likes />
              <p className={styles.book_text}>24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
