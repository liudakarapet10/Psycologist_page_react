import React, {useState, useEffect} from 'react';
import './Form.css';



function Form (){
  const initialValues = {name: '', email: '', message: ''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handlerChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues)); 
    setSubmit(true);
    setFormValues(initialValues);
  }

  useEffect(() => {
    console.log(formErrors);
   if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
   }
  },[formErrors]);

  const validate = (values) => {
     const error = {};
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

     if(!values.name){
      error.name = 'Please write your name';
     }

     if(!values.email){
       error.email = 'Please write your email';
     }else if(!regex.test(values.email)){
       error.email = 'Email is invalid';
     }

     if(!values.message){
      error.message = 'Please write your message';
     }

     return error;
  }

  return(
        <form action="#" method="get" id='form' onSubmit={handlerSubmit}>
          <input 
            type="text"  
            name="name" 
            placeholder='Name'
            value={formValues.name}
            onChange={handlerChange}
            />
            <p style={{color:'red', marginTop: 0, maxWidth: '235px'}}>{formErrors.name}</p>
          <input 
            type="email" 
            name="email"
            placeholder='Email'
            value={formValues.email}
            onChange={handlerChange}
           />
           <p style={{color:'red', marginTop: 0, maxWidth: '235px'}}>{formErrors.email}</p>
          <textarea 
            type='text' 
            name="message" 
            placeholder='Message'
            value={formValues.message}
            onChange={handlerChange}
          />
          <p style={{color:'red', marginTop: 0, maxWidth: '235px'}}>{formErrors.message}</p>
          <button 
            type="submit" 
            form="form" 
            value="Submit">Submit</button>
        </form> 
     );   
  }  

  export default Form;