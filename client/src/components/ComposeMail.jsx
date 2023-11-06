import {useState} from 'react'
import { Dialog,Box,Typography, styled,InputBase, TextField,Button } from '@mui/material'
import  { Close,DeleteOutline } from '@mui/icons-material'

const dialogStyle = {
    height : '90%',
    width : '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:  'none',
    borderRadius : '10px 10px 0 0'
}
const Header = styled(Box) ({
    display : 'flex', 
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p' : {
        fontSize :14,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box) ({
display : 'flex',
flexDirection: 'column',
padding: '0 15px',
 '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #f5f5f5',
    marginTop: '10px'
 }

})

const Footer = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding:  '10px 15px',
    alignItems: 'center'
    
})

const SendButton = styled(Button)  ({
    background: '#0B57D0',
    color: '#fff',
    borderRadius:'18px',
    fontWeight: '500',
    textTransform: 'none',
    width: '100px'
     
    
})

const ComposeMail= ({openDialog, setOpenDialog}) => {

    const [data, setdata]= useState({});

    const closeComposeMail = (e)=> {
      //  e.preventDefault();
        setOpenDialog(false);
    }

    const config = {
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        Port: 2525
    }

    const sendMail = (e) =>{
        e.preventDefault();

        if(window.Email)
        {
        window.Email.send({
            ...config,
            To : data.to,
            From : "sukhveerbhatigulshan@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
        }
        setOpenDialog(false);
    }

    const onValueChange = (e) =>{

        setdata({...data, [e.target.name] : e.target.value})
        console.log(data)

    }

  return (
    <Dialog
    open ={openDialog}
    PaperProps={ {sx: dialogStyle}}
    >
    <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick ={ ()=> closeComposeMail()} />
    </Header>
    <RecipientsWrapper>
        <InputBase placeholder ="Recipients" name='to' onChange={ (e) => onValueChange(e)} />
        <InputBase placeholder ="Subject" name='subject' onChange={ (e) => onValueChange(e)} />
    </RecipientsWrapper>
    
    <TextField
        multiline
        rows={20}
        sx = {{ '& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
       name = 'body' onChange={ (e) => onValueChange(e)}
     />
    
    <Footer>
        <SendButton onClick={(e)=> sendMail(e)}> Send </SendButton>
        <DeleteOutline onClick={()=> setOpenDialog(false)} />
    </Footer>
    </Dialog>
  )
}

export default ComposeMail
