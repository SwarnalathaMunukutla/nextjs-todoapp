import React from 'react'
import styles from '../styles/NotFound.module.css';
import Link from 'next/link';
import { FaExclamationTriangle} from 'react-icons/fa'
import Layout from "../components/Layout";

const NotFound = () => {
  return (
<>
   
      <div className={styles.error}>
      <h1><FaExclamationTriangle />404 </h1>
        <h1>Sorry there is nothing here</h1>
        <Link href="/">Go Back To Home</Link>
        </div>

      </>)
}

export default NotFound
