import React from 'react'
import { connect } from 'react-redux'

class Story extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div>
        </div>
        <div className="kraft-section">
          <div className="vertical-align-wrap">
            <div className="vertical-align vertical-align--middle">
              <h2>it was 2010 when phil & katy first met through mutual friends - but their love affair didn’t truly begin until the summer of 2012. </h2>
            </div>
          </div>
        </div>
        <div className="container">
        <p>In the summer of 2012, Katy was attending Appalachian State University in Boone, NC - working toward her BFA in Graphic Design; while Phil was living in Charlotte and working for Carolina’s Healthcare System as an IT Administrator.</p>

        <p>One weekend on a whim, Katy decided to travel back home to Charlotte to see a show at local music venue, Snug Harbor. Phil was also there at random, and the two began catching up and quickly made plans to meet again. After their first date, the two were virtually inseperable.</p>

        <p>They maintained a long distance relationship until Katy graduated in the winter of 2013, when they decided to move in together. Having a shared passion for all things tech-related, Phil began teaching himself programming and front end development while Katy steered her focus towards user experience design.</p>

        <p>Today, Phil works as a Software Programmer for Bank of America, while Katy is a Digital Product Designer for Levvel, an IT Consultancy. The two always find time to work and collaborate on projects together (like this website!) and are constantly teaching each other new things about the world of web development and design.</p>

        <p>In their free time, the couple enjoys playing video games together, cooking, and hanging out with their cat, Meepa. They just purchased their first home in Charlotte, and are looking forward to growing their furry family in the months to come.</p>

        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps, {

})(Story)
