import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faFreebsd } from '@fortawesome/free-brands-svg-icons';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* <FontAwesomeIcon icon={faFreebsd} /> */}
          {/* {siteTitle} */}
        </Link>
      </h4>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
