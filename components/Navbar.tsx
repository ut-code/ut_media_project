import Link from 'next/link';
import Button from '@mui/material/Button';


// Top navbar
export default function Navbar() {
  let user = null;
  let username: string;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <Button className="btn-logo">FEED TOP</Button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {!username && (
          <>
            <li className="push-left">
              <Link href="/article">
                <Button className="btn-blue">Write Posts</Button>
              </Link>
            </li>
            {/* <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li> */}
          </>
        )}

        {!username && (
          <li>
            <Link href="/article">
              <Button className="btn-blue">Log in</Button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}