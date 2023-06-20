'use client'

import { FormEvent, FormEventHandler } from "react";

export default function Contactform(){
    
    async function handleSubmit(event: any ) {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        }

        const response = await fetch('../api/contact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok){
            console.log('Message sent successfuly')
        }else{
            console.log(`response status is: ${response.status}`)
            alert('Error sending message!')
        }

      }
    
    
    return (
    <div className="form">
        <form onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <div className="name">
            <label htmlFor="name">Name:</label>
            <input type='text' minLength={2} id='name' maxLength={100}></input>
        </div>
        <div className="email">
            <label htmlFor="email">Email:</label>
            <input type='email' id='email' required></input>
        </div>
        <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea id='message' rows={6} placeholder='hi:)' required minLength={2} maxLength={500}/>
        </div>
        <button aria-label='submit button' type='submit'>Send</button>
        
        </form> 
    </div>           
    )
}