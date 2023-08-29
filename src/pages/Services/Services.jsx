import { Body__Services } from './Services.style'
import img01 from '../../assets/img/service-banner-01.png'
import img02 from '../../assets/img/service-banner-02.png'
import img03 from '../../assets/img/service-banner-03.png'

function Services() {
    return (
        <Body__Services>
            <div className="container-fluid">
                <div className="row">
                    <div className="cards">

                        <div className="service-card col-3">
                            <div className="service-banner">
                                <img src={img02} alt="" />
                            </div>
                            <div className="title">
                                <h1>Front-END</h1>
                            </div>
                            <div className="list">
                                <p>CSS</p>
                                <p>HTML</p>
                                <p>JavaScript</p>
                                <p>React</p>
                                <p>Bootstrap</p>
                            </div>
                        </div>

                        <div className="service-card col-3">
                            <div className="service-banner">
                                <img src={img01} alt="" />
                            </div>
                            <div className="title">
                                <h1>Back-END</h1>
                            </div>
                            <div className="list">
                                <p>NodeJS</p>
                                <p>MySQL</p>
                                <p>PgAdmin</p>
                                <p>Restful APIs</p>
                                <p>Server Logic</p>
                            </div>
                        </div>

                        <div className="service-card col-3">
                            <div className="service-banner">
                                <img src={img03} alt="" />
                            </div>
                            <div className="title">
                                <h1>Others</h1>
                            </div>
                            <div className="list">
                                <p>GitHub</p>
                                <p>VS Code</p>
                                <p>TypeScript</p>
                                <p>Native Script</p>
                                <p>Mobile APPs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Body__Services>
    );
}

export default Services;