		
	const btn = document.querySelector('.btn');
	const textArea = document.querySelector('.textarea');
	
	//! textarea
	// Сохранили измененные значение textarea в localStorage
	textArea.addEventListener('input', () => {
		if(localStorage.getItem('textArea') !== '') {
			localStorage.setItem('textArea', textArea.value);
		}
		if (localStorage.getItem('textArea') === '') {
			localStorage.removeItem('textArea');
		}
	})
	// Сохранили измененные значение newTextArea в textarea, при перезагрузке или закрытии, данные сохранятся
	textArea.value = localStorage.getItem('textArea');
	
	// при нажатии на кнопку 'очистить' удалили из localStorage newTextArea и очистилии textArea
	btn.addEventListener('click', (e) => {
		if (e.target) {
			textArea.value = '';
			localStorage.removeItem('textArea')
		}
	})

	//! checkbox

	let checkBox = document.querySelector('.checkbox');

	const darkTheme = {
		backgroundColor: 'rgb(9, 19, 45)',
		color: '#fff',
	}

	const lightTheme = {
		backgroundColor: 'powderblue',
		color: '#000',
	}

	const getTheme = () => localStorage.getItem('theme') || 'light';

	function init() {
		getThemeStyle();
		if (getTheme() === 'light') {
			checkBox.checked = false;
		} else {
			checkBox.checked = true;
		}
	}
	init();

	function getThemeStyle() {
		if (getTheme() === 'light') {
			document.body.style.backgroundColor = lightTheme.backgroundColor;
			document.body.style.color = lightTheme.color;
		} else {
			document.body.style.backgroundColor = darkTheme.backgroundColor;
			document.body.style.color = darkTheme.color;
		}
	}
	
	function onBtnClick (e) {
		localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
		getThemeStyle();
	}

	checkBox.addEventListener('click', onBtnClick);

	
	
	
	
	

	
	
	

	
	
	
	






