import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button } from 'reactstrap'
import flashSales from './flashSales'


class Right extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="right">
                    <AccountCircle color='orange' className='rightIcon' />
                    <div className="sideBtn">
                        <Button>SignUp</Button> <Button>Login</Button>
                    </div>
                    <flashSales />
                </div>
            </>
         );
    }
}
 
export default Right;