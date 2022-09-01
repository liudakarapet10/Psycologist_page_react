import React from 'react';
import './Article_first.css';
import doctor from './images/doctor.jpg';


function Article_first () {
  return (
    <div className='article_first' id='home'>
        <div className='article_first_image-box'>
          <img src={doctor} alt='doctor' className='article_first_image'></img>
        </div>
        <div className='article_first_content-box'>
          <h1 className='article_first_content_big_title'>Norah Horowitz</h1>
          <h2 className='article_first_content_small_title'>Ph.D. Clinical Psychotherapist</h2>
          <p className='article_first_content_par'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
    </div>
  )
}

export default Article_first;