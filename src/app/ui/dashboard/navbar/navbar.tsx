import React from 'react'
import { styled } from '@mui/material/styles';
import styles from './navbar.module.css';
import { MailOutlined, NotificationAdd, Person3Outlined, SearchRounded } from '@mui/icons-material';

function navbar() {
  return (
    
    <div className={styles.container}>
    <div className={styles.title}>Dashboard</div>
    <div className={styles. search}>
      <SearchRounded/>
      <input type="text" placeholder='Search..' className={styles.input}  />
    </div>
    <div className={styles.icons}>
      <NotificationAdd/>
      <MailOutlined/>
      <Person3Outlined/>

    </div>
    </div> 
  )
}

export default navbar
