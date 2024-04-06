import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <section>
      <div className="error-center-logout">
        <h2>You have been logged out!!!</h2>
        <Link to={"/"} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
