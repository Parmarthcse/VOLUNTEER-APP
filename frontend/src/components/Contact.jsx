import React, {useState} from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
const handleSendMessage = (e)=> {
    e.preventDefault();
}
  return (
    <section className='contact'>
        <div className='container'>
            <div className='banner'>
                <form onSubmit={handleSendMessage}>
                    <h2>CONTACT US</h2>
                    <div>
                        <input type='text' value={name} placeHolder="Your Name" onChange={(e)=> setName(e.target.value)} /> 
                         <input type='text' value={email} placeHolder="Your Email" onChange={(e)=> setEmail(e.target.value)}/>  
                         <input type='text'value={phone} placeHolder="Phone Number " onChange={(e)=> setPhone(e.target.value)} /> 

                    </div>
                    <textarea rows="10" value={message} placeHolder="Message " onChange={(e)=> setMessage(e.target.value)}/>
               <button className='btn' type="submit">Send Message</button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact