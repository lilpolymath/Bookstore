import React from 'react';
import styles from './BookSection.module.css';
import Book from '../Book';

const BookSection = ({ title = 'Featured' }) => {
  return (
    <section className={styles.books}>
      <header className={styles.header}>{title}</header>
      <section className={styles.book_listing}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </section>
  );
};

export default BookSection;
