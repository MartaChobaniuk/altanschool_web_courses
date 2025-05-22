import React, { useState } from 'react';
import styles from './Contact.module.scss';

interface Props {
  title: string;
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  buttonText: string;
  image: string;
}

export const Contact: React.FC<Props> = ({ title, placeholders, buttonText, image }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() ? '' : 'Name is required',
      email: validateEmail(formData.email) ? '' : 'Enter a valid email',
      message: formData.message.trim() ? '' : 'Message is required',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err);
    if (!hasErrors) {
      alert('Thank you! Form submitted.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className={styles.contact}>
      <form className={styles.contact__form} onSubmit={handleSubmit}>
        <h2 className={styles.contact__title}>{title}</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={placeholders.name}
          className={styles.contact__input}
        />
        {errors.name && <p className={styles.contact__error}>{errors.name}</p>}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={placeholders.email}
          className={styles.contact__input}
        />
        {errors.email && <p className={styles.contact__error}>{errors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={placeholders.message}
          className={styles.contact__textarea}
        />
        {errors.message && <p className={styles.contact__error}>{errors.message}</p>}

        <button className={styles.contact__button} type="submit">
          <span className={styles['contact__button-text']}>
            {buttonText}
          </span>
        </button>
      </form>

      <div className={styles['contact__img-container']}>
        <img src={image} alt="Contact illustration" className={styles.contact__img} />
      </div>
    </section>
  );
};
