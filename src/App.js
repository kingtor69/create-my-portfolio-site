import MyInfoContext from '~/Dropbox/kingtorcodesData/context/MyInfoContext';
import myInfo from '~/Dropbox/kingtorcodesData/context/myInfo.json';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './nav-routes/NavBar';
import Footer from './components/Footer';
import Routes from './nav-routes/Routes';

function App() {
	return (
		<MyInfoContext.Provider value={myInfo}>
			<BrowserRouter>
				<NavBar />
				<Routes />
				<Footer />
			</BrowserRouter>
		</MyInfoContext.Provider>
	);
}

export default App;
