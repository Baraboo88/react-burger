import React, {Component} from 'react'
import styles from "./Modal.module.css"
import Auxil from "../../../hoc/Auxil/Auxil";
import Backdrop from "../Backdrop/Backdrop";

class modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) {
            return true;
        }
        return false;
    }

    render() {


        return (
            <Auxil>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxil>
        );
    }

}


export default modal;