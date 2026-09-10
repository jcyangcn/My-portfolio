import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const hasName = name.trim() !== '';
    const hasEmail = email.trim() !== '';
    const hasMessage = message.trim() !== '';

    setNameError(!hasName);
    setEmailError(!hasEmail);
    setMessageError(!hasMessage);

    if (hasName && hasEmail && hasMessage) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:guilhermedouglas332@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <p className="section-kicker">Contact</p>
          <h1 className="section-title">Let's talk</h1>
          <p className="section-lead">
            Open to collaborations with research teams, diagnostics companies, and biopharma groups
            working on genomic AI evaluation and precision medicine.
          </p>

          <div className="contact-layout">
            <div className="contact-details">
              <a href="mailto:guilhermedouglas332@gmail.com"><EmailIcon fontSize="small" /> guilhermedouglas332@gmail.com</a>
              <a href="tel:+16465430546"><PhoneIcon fontSize="small" /> +1 (646) 543 0546</a>
              <a href="https://www.linkedin.com/in/douglas-guinunes" target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="small" /> linkedin.com/in/douglas-guinunes
              </a>
              <a href="https://github.com/jcyangcn" target="_blank" rel="noreferrer">
                <GitHubIcon fontSize="small" /> github.com/jcyangcn
              </a>
              <p className="location-line"><PlaceIcon fontSize="small" /> Recife, PE, Brazil</p>
            </div>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              className='contact-form'
              onSubmit={sendEmail}
            >
              <div className='form-flex'>
                <TextField
                  required
                  id="contact-name"
                  label="Your name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                />
                <TextField
                  required
                  id="contact-email"
                  label="Email"
                  placeholder="you@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? "Please enter your email" : ""}
                />
              </div>
              <TextField
                required
                id="contact-message"
                label="Message"
                placeholder="How can I help?"
                multiline
                rows={7}
                className="body-form"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter a message" : ""}
              />
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
