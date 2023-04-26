import React,{useState,suseEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate } from 'react-router-dom';

export default function AlertMessage(props) {
  const {imagename,open}=props;
  const [isRedirect,setRedirect]=useState(false);
  
  function redirectTo() {    
    setRedirect(true)
  };


  return (
    <div> 
       
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <strong>{`Do you want to generate product description for`}  <span className='img-op'>{props.imagename}</span></strong>
        </DialogTitle>
        
        <DialogActions>
          <Button onClick={()=>props.handleClose()}  className='gn-btn'>Cancel</Button>
          <Button onClick={()=> redirectTo() } className='gn-btn'>
         Yes
        {isRedirect? <Navigate replace to={`/productdescription?inputOne=${imagename}` }  />:""}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}