import { Navbar as Nv } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import router from 'next/router'
import logout from '../hooks/logout';

export default function Navbar() {
  return (
    <div>
      <style jsx>{`
        .c-navbar {
          background-color: var(--main-color);
          /* height: 50px; */
          /* color: #fff; */
        }

        .c-searchbar {
          background-color: transparent;
          border: 0;
          outline: 0;
          box-shadow: 0 1px #fff;
          color: #fff;
        }
      `}</style>

      <Nv color="main-color" dark expand="md" className="c-navbar" style={{ height: 50, color: '#fff' }}>
        <div>
          <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeft} style={{ width: 20, height: 20, margin: '0 9px' }} />
        </div>
        <div style={{ position: 'absolute', right: '16px' }}>
          <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} style={{ width: 20, height: 20, margin: '0 9px' }} />
        </div>
      </Nv>
    </div>
  );
}