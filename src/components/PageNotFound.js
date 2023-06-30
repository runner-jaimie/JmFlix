// Page Not Found
import { Link } from 'react-router-dom';

function PageNotFound() {

  return (
    <main>
      <section>
          <h2>Page Not Found</h2>
          <p>Could not find the requested page.</p>
          <p>Go to the <Link to={'/'}>home page.</Link></p>
      </section>
    </main>
  );
}

export default PageNotFound;