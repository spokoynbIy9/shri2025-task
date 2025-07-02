import { createRoot } from 'react-dom/client';
import { Header } from './components/Header.jsx';
import { MainContent } from './components/MainContent.jsx';

import './reset.css';
import './styles.css';

createRoot(document.getElementById('app')).render(
	<>
		<Header />
		<MainContent />
	</>
);
