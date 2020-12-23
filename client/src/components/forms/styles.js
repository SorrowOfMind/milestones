import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#23D4D2',
    '&:hover': {
        backgroundColor: '#1EB1AF',
    }
  },
  buttonClear: {
    backgroundColor: '#F3D059',
    '&:hover': {
        backgroundColor: '#DABB51',
    }
  }
}));