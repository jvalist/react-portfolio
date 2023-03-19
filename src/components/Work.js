function Work(){
    return(
        <section id="work">
        <h2>Work</h2>
        <div className="work-container">
          <a href="https://jvalist.github.io/weatherdashboard/">
            <img src={require("./weatherdashboard.png")} alt="Screenshot of Application 1" height="800px" width="1200px" />
            <h3>Application 1</h3>
          </a>
          <a href="https://jvalist.github.io/passwordgenerator/">
            <img src={require("./passwordGenerator.png")} alt="Screenshot of Application 2" height="400px" width="600px" />
            <h3>Application 2</h3>
          </a>
          <a href="https://jvalist.github.io/day-planner/">
            <img src={require("./workDayScheduler.png")} alt="Screenshot of Application 3" height="400px" width="600px" />
            <h3>Application 3</h3>
          </a>
        </div>
      </section>
    )
}
export default Work;