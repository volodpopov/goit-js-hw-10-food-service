const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const refs = {
    switchInput: document.querySelector('.js-switch-input'),
    body: document.querySelector('body'),
  };
  
  readSavedTheme();
  
  refs.switchInput.addEventListener('change', changeTheme);
  
  function changeTheme() {
    if (!refs.body.classList.value) {
      refs.body.classList.add(`${Theme.DARK}`);
      localStorage.setItem('theme', `${Theme.DARK}`);
    } else if (refs.body.classList.contains(`${Theme.LIGHT}`)) {
      refs.body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
      localStorage.setItem('theme', `${Theme.DARK}`);
    } else {
      refs.body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
      localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
  }
  
  function readSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === `${Theme.DARK}`) {
        refs.switchInput.setAttribute('checked', true);
      }
      refs.body.classList.add(`${savedTheme}`);
    }
  }
  