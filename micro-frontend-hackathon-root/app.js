const routes = {
  '/': `<v-card title="Vue JS web component"></v-card>`,
  '/angular': `<header-app></header-app>`,
  '/vue': `<v-card title="Vue JS web component"></v-card>`,
  '/react': '<user-profile id="user-profile"></user-profile>'
};

const divs = {
  '/': document.getElementById('root'),
  '/angular': document.getElementById('ang'),
  '/vue': document.getElementById('vue'),
  '/react': document.getElementById('react')
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  divs[pathname].innerHTML = routes[pathname]
  //rootDiv.innerHTML = pathname
  const userProfile = document.getElementById('user-profile');
  userProfile.addEventListener('myEvent', () => {
    $('a[href="#portfolio"]').click();
  });
}

window.onpopstate = () => {
  divs[pathname].innerHTML = routes[window.location.pathname]
}