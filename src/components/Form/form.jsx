import { SubmitButton } from "../Button/button";
import { Body__Form } from "./form.style";

function Form() {
    return (
        <Body__Form>
            <div className="background">
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        required />

                    <input
                        type="text"
                        placeholder="Email"
                        required />

                    <input
                        type="text"
                        placeholder="Subject"
                        required />

                    <textarea
                        cols="40"
                        rows="10"
                        placeholder="Message"
                        required />

                    <SubmitButton type='submit' title='Submit' />
                </form>
            </div>
        </Body__Form>
    );
}

export default Form;