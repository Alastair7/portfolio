import { Menu } from "../components/menu/Menu"
import "./About.css"

export const AboutPage = () => {
  const age = 2026 - 1998
  return <>
    <header className="header">
      <h1 className="header__title">Alexandru Ban</h1>
      <h2 className="header__subtitle">Fullstack Software Engineer</h2>
      <Menu />
    </header>

    <article className="about">
      <div className="about__textarea">

        <section className="about__section">
          <h2>The Professional</h2>

          <p className="about__text">
            I am a software engineer with 4 years of experience in software development.
            My primary specialization is backend development, but I am also comfortable working on the frontend.
          </p>


          <p className="about__text">
            I have experience designing distributed systems and have contributed to the development of projects built on distributed architectures. My experience also includes designing and implementing RESTful APIs and building responsive SPAs and PWAs with a strong focus on performance, scalability, and maintainability.
          </p>

          <p className="about__text">
            Furthermore, I have hands-on experience with Infrastructure as Code (IaC) using Terraform and extensive experience working with Microsoft Azure.
          </p>

          <p className="about__text">
            I have also contributed to AI-related projects, including the development of Retrieval-Augmented Generation (RAG) systems, conversational agents, and evaluation processes for RAG-based applications.
          </p>

        </section>

        <section className="about__section">
          <h2>The Dream Chaser</h2>
          <p className="about__text">
            That's enough of the corporate talk. I am a {age}-year-old guy who likes programming.
          </p>
          <p className="about__text">
            Ever since high school, I've known programming was what I wanted to do. The thought of bringing ideas to life with coding really clicked with me.
          </p>
          <p className="about__text">
            This section is called the dream chaser because most of my life I have been working hard to achieve this dream.
            I Spent countless days and nights learning, studying and practicing to improve my skills, and even now I keep doing it.
          </p>
          <p className="about__text">
            I have also some personal projects going on such as: GGTime, ArchyByte and this portfolio. And of course, a lot of unfinished projects in my github. But, every project has taught me something valuable.
          </p>
        </section>

        <section className="about__section">
          <h2>The Person</h2>
          <p className="about__text">
            I enjoy programming, but I also have hobbies beyond reading about algorithms and solving problems.
          </p>

          <p className="about__text">
            I grew up playing videogames, I really like them and they always been part of my life.
            I do not have a specific favorite videogame but one that I enjoyed the most is probably the <cite>Mass Effect</cite> trilogy.
          </p>

          <p className="about__text">
            I also enjoy reading books, my two favorite book series are <cite>Stormlight Archive</cite> by Brandon Sanderson and <cite>Ender's Game</cite> by Orson Scott Card. I normally read sci-fi or fantasy when I've had enough of reading software engineering books.
          </p>


          <p className="about__text">
            I also try to keep a healthy life and stay active, because my work and hobbies are not really about touching grass. That is why I put to myself this daily goal to at least go out and do at least 7.000 steps, and also there are days where I like to go running, because when I was in high school I used to run a lot.
          </p>

          <p className="about__text">
            All of these hobbies are great, but the thing that I enjoy the most is spending quality time with my partner, Paula ❤️. I had to mention her, because she is part of my life and she is also helping me with the portfolio and my blog.
          </p>
        </section>
      </div>
    </article >
  </>
}
