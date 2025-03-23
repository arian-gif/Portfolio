import { useState } from "react";
import Card from "../components/Card";
import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";

function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");     
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const style = {
        backgroundImage: "url('/assets/images/pexels-edurawpro-20775609.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
    };
    


    return (
        <>  
            <div style={{ ...style, ...spacer_style }}>
                <div className="spacer" />
                <Card 
                    name={name}
                    email={email}       
                    message={message}
                    status={status}
                />
                <div className="spacer" />
            </div>
        </>
    );
}
export default Contact;