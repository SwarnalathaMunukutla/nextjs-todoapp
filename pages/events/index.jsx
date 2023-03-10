import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function index() {

const router = useRouter();
console.log(router);

  return (
    <div>
      <h1>Events</h1>
    </div>
  )
}
