function Contact(){
    return(
        <section id="contact">
        <h2>Contact</h2>
        <form action="mailto:johnny.velasco@icloud.com" method="post" encType="text/plain">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required /><br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required defaultValue={""} /><br />
          <input type="submit" defaultValue="Submit" />
        </form>    </section>
    )
}
export default Contact;