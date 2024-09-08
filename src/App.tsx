import { useEffect, useState } from "react";
import { Desktop__Navbar } from "./components/Navbar/Desktop"
import { Home } from "./pages/Home"
import { Body__App } from "./styles/App.styled"
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

import { Footer } from "./components/Footer";
import { Warning } from "./components/Warning";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position: number = window.pageYOffset;
    setScrollPosition(position);
  }

  // Get user data from github
  useEffect(() => {
    fetch('https://api.github.com/users/breno-777').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
      .then(data => {
        setLoading(false)
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching GitHub profile:", error);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition]);

  return (
    <>
      {
        loading ? (
          <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignContent: "center" }}>Loading...</div>
        ) : (
          <Body__App>
            <Warning />

            <Desktop__Navbar userData={data} scrollPosition={scrollPosition} />
            <section>
              <Home />
            </section>

            <section>
              <Skills />
            </section>

            <section>
              <Projects />
            </section>

            <section>
              <Contact />
            </section>

            <Footer userData={data} />

          </Body__App>
        )
      }
    </>

  )
}

export default App
