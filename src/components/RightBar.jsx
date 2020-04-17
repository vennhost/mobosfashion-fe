import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button } from 'reactstrap'
import flashSales from './flashSales'
import product from '../img/products/top.jpg'

class Right extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="right center">
                    {/* <AccountCircle className='rightIcon center' /> */}
                    <div className="sideBtn center">
                        <Button className="sideButton">SignUp</Button> <Button className="sideButton">Login</Button>
                        <div className="deal">
                            <h5 className="pt-5 mt-5 centre">Deal of the Day</h5>
                            <img src={product} alt="deal" width="200px"/>

                        </div>
                    </div>
                    <flashSales />
                </div>
            </>
         );
    }
}
 
export default Right;