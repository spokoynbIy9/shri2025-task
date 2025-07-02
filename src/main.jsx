import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header.jsx';
import { MainContent } from './components/MainContent.jsx';

createRoot(document.getElementById('app')).render(
	<StrictMode>
		<Header />
		<MainContent />
	</StrictMode>
);
