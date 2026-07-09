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
      <h1 className="about__title">Who am I?</h1>
      <h2 className="about__section">The Professional</h2>
      <div className="about__textarea">

        <p className="about__text">
          I am a software engineer with 4 years of experience in software development.
          My primary specialization is backend development, but I am also comfortable working on the frontend.
        </p>

        <br />

        <p className="about__text">
          I have experience designing distributed systems and have contributed to the development of projects built on distributed architectures. My experience also includes designing and implementing RESTful APIs and building responsive SPAs and PWAs with a strong focus on performance, scalability, and maintainability.
        </p>
        <br />

        <p className="about__text">
          Furthermore, I have hands-on experience with Infrastructure as Code (IaC) using Terraform and extensive experience working with Microsoft Azure.
        </p>
        <br />

        <p className="about__text">
          I have also contributed to AI-related projects, including the development of Retrieval-Augmented Generation (RAG) systems, conversational agents, and evaluation processes for RAG-based applications.
        </p>

        <h2 className="about__section">The Dream Chaser</h2>
        <p className="about__text">
          Enough with the corporative / professional language. I am a {age} years old guy who likes programming.
        </p>
        <p className="about__text">
          Since high school I knew I wanted to be a programmer and the thought of "materializing" an idea really clicked with me.
        </p>
        <br />
        <p className="about__text">
          This section is called the dream chaser because most of my life I have been working hard to achieve this dream.
          Spent many days and nights learning, studying and practicing to improve my skills, and even know I keep doing it.
        </p>
        <br />
        <p className="about__text">
          I have also some personal projects going on such as: GGTime, ArchyByte and this portfolio. And of course, a lot of unfinished projects in my github. But, everything that I have done was a worth lesson learned.
        </p>

        <h2 className="about__section">The Person</h2>
        <p className="about__text">
          I like programming, but I also enjoy different hobbies other than reading algorithms and solving problems.
        </p>
        <br />

        <p className="about__text">
          I grew up playing videogames, I really like them and they always have been part of my life.
          I do not have a specific favorite videogame but one that I liked the most is probably the Mass Effect trilogy.
        </p>
        <br />

        <p className="about__text">
          I also enjoy reading books, my two favorites series are <cite>Stormlight Archive</cite> by Brandon Sanderson and <cite>Ender's Game</cite> by Orson Scott Card. I normally read sci-fi or fantasy when I had enough of reading software engineering books.
        </p>
        <br />


        <p className="about__text">
          I also try to keep a healthy life and keep my body in movement, because my work and hobbies are not really about touching grass. That is why I put to myself this daily goal to at least go out and do minimum 7000 steps, and also there are days where I like to go running, because when I was in high school I used to run a lot.
        </p>
        <br />

        <p className="about__text">
          All of these hobbies are great, but the thing that I enjoy the most is spending quality time with my beloved person, Paula ❤️. I had to mention her, because she is also part of my life and she also is helping me with the portfolio and my blog.
        </p>
      </div>
    </article >
  </>
}

