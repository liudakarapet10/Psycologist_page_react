import React, {useState} from 'react';
import './Article_third.css';
import Form from './Form';
import ficus from './images/ficus.jpg';


function Article_third () { 
  return (
    <div className='article_third' id='contact'>
        <div className='article_third_content-box'>
          <div>
            <h2>Contact Me</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you
            </p>
            <div className='article_third_contacts'>
              <div>
                <p>500 Terry Francois Street</p>
                <p>San Francisco, CA 94158</p>
                <p>info@mysite.com</p>
              </div>
              <div>
                <p>Tel: 123-456-7890</p>
                <p>Fax: 123-456-7890</p>    
              </div> 
              </div>
              <Form/>
            </div> 
            <div className='article_third_image-box'>
              <img src={ficus}></img>
            </div>
        </div>
    </div>
  )
}

export default Article_third;