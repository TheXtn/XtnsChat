import { Fragment } from 'react';
import {Nav} from "./index";


function Lay(props) {
  return (
    <Fragment>
      <Nav/>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Lay;
