import React from 'react';
import './Button.scss';

export default function Button({ link, text }) {
  return (
    <a className="button" href={link}>{text}</a>
  )
}
