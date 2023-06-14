import { makeStyles } from '@material-ui/styles';
import Background from './assets/BG.png';

const useStyles= makeStyles((theme)=>({
    root: {
        backgroundColor: '#2148c0',
    },
    main: {
        minWidth: '100%' ,
        minHeight: '100vh',
        backgroundColor: '#2148c0',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
    }}));

export default useStyles;