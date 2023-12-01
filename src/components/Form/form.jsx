import { SubmitButton } from "../Button/button";
import { Body__Form } from "./form.style";
import emailjs from "@emailjs/browser";

function Form() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v4r86lo",
        "template_9xps6j7",
        e.target,
        "K_eLeXZ9U-Bb97Uv5"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Body__Form>
      <div className="background">
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required name="from_name" />

          <input type="text" placeholder="Email" required name="from_email" />

          <input type="text" placeholder="Subject" required name="subject" />

          <textarea
            cols="40"
            rows="10"
            placeholder="Message"
            required
            name="html_message"
          />

          <SubmitButton type="submit" title="Submit" value="Send" />
        </form>
      </div>
    </Body__Form>
  );
}

export default Form;
