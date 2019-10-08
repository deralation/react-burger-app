import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class layout extends Component {
    return(
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;