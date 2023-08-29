import IconsCarousel from "../../components/Icons/IconsCarousel";
import { Body__Skills } from "./Skills.style";

function Skills() {
    return (
        <Body__Skills>
            <div className="container-fluid">
                <div className="background">

                    <div className="row">
                        <div className="col-10">
                            <strong>
                                <h2>Front-End</h2>
                                <hr />
                                <div>
                                    {/* Sou um desenvolvedor Front-End experiente, especializado em criar interfaces de usuário interativas e envolventes. Minhas habilidades abrangem HTML, CSS e JavaScript, e estou familiarizado com as mais recentes tendências em design responsivo. Tenho expertise em frameworks como React e Angular, permitindo-me transformar conceitos em experiências visuais atraentes e funcionais. */}

                                    I'm an experienced Front-End developer, specializing in creating interactive and engaging user interfaces. My skills span HTML, CSS and JavaScript, and I'm familiar with the latest trends in responsive design. I have expertise in frameworks such as React and Angular, allowing me to transform concepts into attractive and functional visual experiences.
                                </div>

                                <h2>Back-End</h2>
                                <hr />
                                <div>
                                    {/* Com vasta experiência no desenvolvimento Back-End, sou capaz de criar sistemas sólidos e eficientes. Minhas habilidades incluem linguagens como Java e Node.js, bem como a implementação de bancos de dados SQL e NoSQL. Tenho proficiência na construção de APIs seguras e escaláveis, garantindo um desempenho robusto e uma manutenção tranquila. Estou atualizado com as melhores práticas de arquitetura de software. */}

                                    With extensive experience in Back-End development, I am able to create solid and efficient systems. My skills include languages such as Java and Node.js, as well as the implementation of SQL and NoSQL databases. I am proficient in building secure and scalable APIs, ensuring robust performance and smooth maintenance. I am up-to-date with the best practices in software architecture.
                                </div>

                                <h2>Mobile Apps</h2>
                                <hr />
                                <div>
                                    {/* Especializado no desenvolvimento de aplicativos móveis, tenho expertise em frameworks como React Native e Flutter. Minhas habilidades abrangem a criação de aplicativos nativos para iOS e Android, oferecendo uma experiência unificada e de alta qualidade. Minha abordagem orientada a resultados se traduz em aplicativos intuitivos e eficientes, incorporando as últimas inovações em UX/UI para alcançar o máximo impacto. */}

                                    Specializing in mobile application development, I have expertise in frameworks such as React Native and Flutter. My skills cover the creation of native apps for iOS and Android, offering a unified, high-quality experience. My results-oriented approach translates into intuitive and efficient apps, incorporating the latest innovations in UX/UI to achieve maximum impact.
                                </div>
                            </strong>

                        </div>
                        <div className="col-2">
                            <IconsCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </Body__Skills>
    );
}
export default Skills;