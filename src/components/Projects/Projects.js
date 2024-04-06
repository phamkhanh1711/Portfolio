import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import portfollio from "../../Assets/Projects/portfolio.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import thuongmai from "../../Assets/Projects/thuongmai.png";
import Cinema from "../../Assets/Projects/Cinema.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfollio}
              isBlog={false}
              title="Portfollio"
              description="This is my portfolio page introducing myself with friends build with   "
              ghLink="https://github.com/phamkhanh1711/Portfolio"
              demoLink="portfoliokhanh.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore"
              description="My BookStore page build with React.js and React-Bootstrap A book reading website allows users to discover and read a wide variety of books online. Users can explore genres, authors, and titles, access book previews and reviews, and personalize their reading experience. It offers convenient access to a vast digital library, making reading enjoyable and accessible from anywhere."
              ghLink="https://github.com/phamkhanh1711/Front-end-book"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thuongmai}
              isBlog={false}
              title="E-Commerce "
              description="A clothing booking website lets users browse, select, and buy fashion items online. They can explore clothes, shoes, and accessories from different brands, view product details, add items to cart, and securely checkout. It's a convenient, fast, and diverse online shopping experience.."
              ghLink="https://github.com/phamkhanh1711/Fe-ban-hang"
              demoLink="fe-e-commerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cinema}
              isBlog={false}
              title="Cinema Ticket"
              description="A platform for booking movie tickets online, where users can easily browse current movies, check showtimes, select suitable screenings, and book tickets. The website also provides detailed information about movies, including cast, directors, genres, and ratings. Additional features include user registration for managing personal information and booking history, as well as secure online payments. It offers users a fast, convenient, and enjoyable online ticket booking experience"
              ghLink="https://github.com/phamkhanh1711/Fe_Cinema"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
