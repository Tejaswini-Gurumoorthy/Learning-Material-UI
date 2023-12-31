
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2148c0',
  },
  main: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#2148c0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  vectorImage: {
    height: '100vh',
    width: 'auto',
    //zIndex: -1,
  },
  ellipse1: {
    width: 'auto',
    zIndex: 1,
    position: 'absolute',
    bottom: 0, // to position the image at the bottom
    left: 0, // to position the image at the left
  },
  ellipse2: {
    width: 'auto',
    zIndex: 1,
    position: 'absolute',
    bottom: 0, 
    left: 0, 
  },
  ellipse3: {
    width: 'auto',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cart: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'auto',
  },
}));

export default useStyles;