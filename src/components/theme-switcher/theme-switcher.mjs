const lightStyles = document.querySelectorAll(
  'link[rel=stylesheet][media*=prefers-color-scheme][media*=light]',
);
const darkStyles = document.querySelectorAll(
  'link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]',
);
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const themeSwitcher = document.querySelector('.theme-switcher');

const setupSwitcher = () => {
  const bodyClasslist = document.body.classList;
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    setScheme(savedScheme);
  }

  themeSwitcher.addEventListener('click', (event) => {
    if (bodyClasslist.contains('_dark-theme')) {
      setScheme('light');
      bodyClasslist.remove('_dark-theme');
    } else {
      setScheme('dark');
      bodyClasslist.add('_dark-theme');
    }
  });
};

const setupScheme = () => {
  const savedScheme = getSavedScheme();
  const systemScheme = getSystemScheme();

  if (savedScheme === null) {
    return;
  }

  if (savedScheme !== systemScheme) {
    setScheme(savedScheme);
  }
};

const setScheme = (scheme) => {
  switchMedia(scheme);
  saveScheme(scheme);
};

const switchMedia = (scheme) => {
  let lightMedia;
  let darkMedia;

  lightMedia = scheme === 'light' ? 'all' : 'not all';
  darkMedia = scheme === 'dark' ? 'all' : 'not all';

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
};

const getSystemScheme = () => {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
};

const getSavedScheme = () => {
  return localStorage.getItem('color-scheme');
};

const saveScheme = (scheme) => {
  localStorage.setItem('color-scheme', scheme);
};

setupSwitcher();
setupScheme();
