import { Fragment } from 'react';
import {Nav} from "./index";
import SmallWithSocial from "./footer";


function Lay(props) {
  return (
    <Fragment

    >
      <Nav/>
      <main>{props.children}</main>
        <SmallWithSocial/>
    </Fragment>
  );
}

export default Lay;
