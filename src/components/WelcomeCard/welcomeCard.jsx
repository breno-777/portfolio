/* eslint-disable react/no-unescaped-entities */
import { Body__WelcomeCard } from "./welcomeCard.style";

function WelcomeCard() {
  const messages = [
    "Hello, nice to have you here!",
    "Welcome to my website!",
    "I hope you enjoy your visit!",
    "Thank you for visiting us today!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const greetings = messages[randomIndex];
  console.log(greetings);

  return (
    <Body__WelcomeCard>
      <div className="container">
        <div className="row">
          <div className="top-bar col-12">
            <div className="red-circle"></div>
            <div className="yellow-circle"></div>
            <div className="green-circle"></div>
          </div>
          <div className="contents col-12">
            <div className="code-message">
              <p>
                <span>1</span>
                <span>const </span>
                <span>messages = [</span>
              </p>
              <p>
                <span>2</span>
                <span>"Hello, nice to have you here!"</span>
                <span>,</span>
              </p>
              <p>
                <span>3</span>
                <span>"Welcome to my website!"</span>
                <span>,</span>
              </p>
              <p>
                <span>4</span>
                <span>
                  "I hope you enjoy your visit!"<span>,</span>
                </span>
              </p>
              <p>
                <span>5</span>
                <span>"Thank you for visiting me today!"</span>
                <span>,</span>
              </p>
              <p>
                <span>6</span>
                ];
              </p>
              <p>
                <span>7</span>
              </p>
              <p>
                <span>8</span>
                <span>const </span>
                <span>randomIndex = </span>
                <span>Math</span>.<span>floor</span>(<span>Math</span>.
                <span>random</span>
                <span>() * messages.length); </span>
              </p>
              <p>
                <span>9</span>
                <span>const </span>
                <span>greetings = messages[randomIndex];</span>
              </p>
              <p>
                <span>10</span>
                <span>console</span>.<span>log</span>
                <span>(greetings);</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Body__WelcomeCard>
  );
}

export { WelcomeCard };
