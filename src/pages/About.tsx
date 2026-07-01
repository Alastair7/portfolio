import { Menu } from "../components/menu/Menu"
import "./About.css"

export const AboutPage = () => {
  const age = 2026 - 1998
  return <>
    <h1>Alexandru Ban</h1>
    <h2>About me</h2>
    <Menu />

    <article className="about">
      <h1 className="about__title">More details about me</h1>
      <h2 className="about__section">The Professional</h2>
      <p className="about__text">I am a software engineer currently working at Plain Concepts for already 2 years.
        I have been working for 4 years in the software development world; Previously in ViewNext
        for 2 years.
      </p>

      <p className="about__text">I am specialized in backend development but I have also experience in frontend.
        To be honest, I would always be a backend guy, because it is what I like the most.</p>
      <p className="about__text">Since AI has came to our lives, I have also experience with AI projects such as: RAG systems,
        conversational bots, AI focused systems...</p>

      <h2 className="about__section">The Dream Chaser</h2>
      <p className="about__text">If my professional presentation is not enough and you want to know more about me. Well,
        I am a {age} years old guy who likes programming.
      </p>
      <p className="about__text">
        Since high school I knew I wanted to be a programmer and the thought of "materializing" an idea really clicked with me.
      </p>
      <p className="about__text">That is how I see programming. I can create anything I want, I feel free.</p>

      <h2 className="about__section">The Kid</h2>
      <p className="about__text">We all have been kids. Me too, I promise.</p>
      <p className="about__text">As a little boy, I was not interested in programming, even though I grew up with a computer.</p>
      <p className="about__text">That is why I have another hobby such as videogames. I enjoy playing videogames, and the game I enjoyed the most is the Mass Effect trilogy. Such a ride.
      </p>
      <p className="about__text">I also try to have a healthy life by doing some exercise and doing at least 7000-10000 steps each day.</p>
      <p className="about__text">But well, I am not the most athletic guy, but I am trying my best.</p>
    </article>
  </>
}

