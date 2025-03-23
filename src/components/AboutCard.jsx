import "./AboutCard.css";

function AboutCard() {
    return (
      <div className="about-card">
        <img src="/assets/images/profile.jpg" alt="Arian Khan" className="profile" />
        <h2 className="about-title">About Me</h2>
        <div className="paragraph">
        <p>
            Hi, I'm Arian, a passionate Mechatronics Engineering student at the University of Waterloo.  
            I’ve always been fascinated by the idea of turning complex problems into simple solutions,  
            whether that’s coding a new app, working with robots, or finally cracking the code to winning this week in fantasy basketball.  
            I love learning new things and constantly challenging myself, there’s just something satisfying about watching an idea go from concept to reality.
        </p>
        <p>
            When I'm not busy debugging code (or my life), you’ll probably find me at the gym because if my code doesn’t run, at least I can.  
            Working out helps me clear my mind and gives me the energy to tackle the next big challenge.  
            You may also catch me unwinding with a good horror movie  
            because apparently debugging code just isn’t scary enough.
        </p>
        <p>
            Professionally, I’ve had the chance to work at Sun Life and CoinWa (startup), where I learned to think on my feet and adapt to fast-paced environments.  
            At Sun Life, I provided technical support, configured systems, and made sure everything ran smoothly (well, most of the time).  
            At CoinWa, I took on software engineering challenges head-on developing new features, solving complex problems everyday, and growing as a developer along the way.
        </p>
        <p>
            I'm always looking for new opportunities to learn and grow.  
            If you have a cool project or just want to chat about code, engineering, or the Raptors’ latest game, feel free to reach out!  
            I'm excited to see where this journey takes me next.  
        </p>

        </div>
        <a href="/contact" className="button">Contact Me</a>
      </div>
    );
  }
  
  export default AboutCard;
  