import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button } from 'reactstrap'
import flashSales from './flashSales'


class Right extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="right center">
                    {/* <AccountCircle className='rightIcon center' /> */}
                    <div className="sideBtn center">
                        <Button className="sideButton">SignUp</Button> <Button className="sideButton">Login</Button>
                    </div>
                    <flashSales />
                </div>
            </>
         );
    }
}
 
export default Right;