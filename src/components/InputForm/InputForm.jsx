import React, { useState } from 'react';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry } from '../../redux/entries/entries-operations';
import { getAllEntries } from '../../redux/entries/entries-selectors';
import styles from './InputForm.module.css';

export default function InputForm() {
  const dispatch = useDispatch();
  const entries = useSelector(getAllEntries);

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const onInputChange = event => {
    const fieldType = event.target.name;
    const fieldContent = event.target.value;
    setContact(prev => ({ ...prev, [fieldType]: fieldContent }));
  };

  const onSubmitEntry = event => {
    event.preventDefault();
    if (entries.find(entry => entry.name === contact.name)) {
      error({
        title: 'Error!',
        text: `Notice me, senpai! It's me, ${contact.name}, I'm already in the list!`,
        icons: 'brighttheme',
      });
      event.target.reset();
      return;
    }
    dispatch(addEntry(contact));
    event.target.reset();
  };

  return (
    <section className={styles.newEntrySection}>
      <form className="inputForm" onSubmit={onSubmitEntry}>
        <label className="inputLabel">
          First / Last name :
          <input
            name="name"
            className="inputField"
            type="text"
            onChange={onInputChange}
            required
          />
        </label>
        <label className="inputLabel">
          Phone number :
          <input
            name="number"
            className="inputField"
            type="tel"
            onChange={onInputChange}
            required
          />
        </label>
        <button className={styles.newEntryButton} type="submit">
          Add entry
        </button>
      </form>
    </section>
  );
}
