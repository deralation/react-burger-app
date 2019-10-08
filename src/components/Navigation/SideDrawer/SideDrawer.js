import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props)=>{

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="SideDrawer">
                <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;