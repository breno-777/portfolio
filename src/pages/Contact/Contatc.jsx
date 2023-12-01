import Form from "../../components/Form/form";
import ProfileCard from "../../components/ProfileCard/profileCard";
import { Body__Contact } from "./Contact.style";

function Contact() {
  return (
    <Body__Contact>
      <div className="container-fluid">
        <ProfileCard
          title="GitHub"
          link={"https://api.github.com/users/breno-777"}
        ></ProfileCard>
        <Form />
      </div>
    </Body__Contact>
  );
}

export default Contact;
