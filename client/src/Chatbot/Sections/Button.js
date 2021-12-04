import React from 'react'
import Button from '@material-ui/core/Button';

//import { Button } from "react-bootstrap";
function Chips(props) {
    return (
           <div style={{width:'auto',
           height:'auto',
           display:'inline-block',margin:'8px'}}>
            <Button variant="outlined" size="small"
             style={{textTransform: 'none', borderRadius: "23px",  border: '1px solid #673ab7',
             color:'#673ab7',backgroundColor:'#f8f9fa'}}
                onClick={props.buttonclick}> {props.chipInfo.fields.text.stringValue}</Button>
       </div>
    )
}

export default Chips;