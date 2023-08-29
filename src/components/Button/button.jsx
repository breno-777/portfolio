/* eslint-disable react/prop-types */

import { Styled__Submit_Button, Styled__Visit_Button } from "./button.style";

export function SubmitButton(props) {
    return (
        <Styled__Submit_Button>
            {props.title}
        </Styled__Submit_Button>
    );
}

export function VisitButton(props) {
    return (
        <Styled__Visit_Button>
            {props.title}
        </Styled__Visit_Button>
    );
}