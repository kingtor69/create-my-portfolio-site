import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MyInfoContext from '../context/MyInfoContext';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
	footer : {
		padding : theme.spacing(8)
	}
}));
const Footer = () => {
	const { navigation: { name } } = useContext(MyInfoContext);
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='subtitle2' align='center' color='textSecondary' component='p'>
				<hr />
				template forked from <a href="https://github.com/brian-trann/create-my-portfolio-site">Brian Trann&rsquo;s create-my-portfolio-site</a>
			</Typography>
			<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
				<a href="https://github.com/kingtor69/create-my-portfolio-site">modifications and content</a> &copy; {name} 2021-{new Date().getFullYear()}
			</Typography>
		</footer>
	);
};
export default Footer;
