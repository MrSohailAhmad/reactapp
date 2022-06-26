import React from "react";
import "./Service.css";
import Nav from "../nav/Nav";
import { BsCheck2 } from "react-icons/bs";
function Service() {
  return (
    <section id="Service">
      <Nav />
      <h5>WHAT I OFFER</h5>
      <h2>SERVICES</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>FRONT END DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                As a designers closely analyze the user audience to understand
                their needs and reflect these findings in UI design{" "}
              </p>
            </li>
            {/*  */}

            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                I Having agreed on the look and feel of a web app with project
                stakeholders, we bring it to life with front-end coding.{" "}
              </p>
            </li>
            {/*  */}
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                I set up APIs to integrate your web app with corporate or
                third-party systems and services.
              </p>
            </li>
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                App integration ensures immediate data synchronization across
                systems.
              </p>
            </li>
            {/*  */}

            {/*  */}
            {/* <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li> */}
            {/*  */}
            {/* <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li> */}
          </ul>
        </article>
        {/* artical */}
        {/* <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
           
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
           
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
        
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article> */}
        {/* article */}
        <article className="service">
          <div className="service_head">
            <h3>BACK END DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                I am as a developer accurately implement the business logic of
                your web app on the back end.
              </p>
            </li>
            {/*  */}
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                I rely on proven frameworks to ensure fast and quality coding.{" "}
              </p>
            </li>
            {/*  */}
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                I build a custom API to amplify your existing software or
                connect it with third-party services{" "}
              </p>
            </li>
            {/*  */}
            <li>
              <BsCheck2 className="service-list-icon" />
              <p>
                {" "}
                My Backend web development services to ensure smooth and high
                website performance.{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
