// About
import React from 'react';
import mdlogo from '../images/md-logo.png';

function About() {
  return (
    <main>
      <section>
          <h2 className="about-title">All about Movies</h2>
            <div className="about-info">
              <h3>Welcome to All about Movies- About the Project</h3>
	  			      <p>All about movies is a Movie Database App that is listing 
                  the movies based on popularity, rating, and release date.
                </p>
	  			      <p>This site API data getting from 
                  <b>TMDB movie website.</b>
                </p>
	  			      <p><img className="md-logo" src={mdlogo} alt="md logo" /></p>
	  			      <p>Browse for your favorite film, add it to the Favourite List, 
                and save it for the Watch Later list!
                </p>
	  			      <p>I used the react sources from the class's weather app, 
                  and I based on the codes of the Youtube movie app video.
                </p>
	  			      <p>And then I redesigned the whole website and add some functions.	</p>	
	  			      <p>This Movie app is made by Jaimie Lee. This app site is created for 
                  <b> EDUCATION</b> purpose.
                </p>
              </div>
      </section>
    </main>
  );
}

export default About;
