const routes = {
  '/': `<v-card title="Vue JS web component"></v-card>`,
  '/angular': `<header-app></header-app>`,
  '/vue': `<v-card title="Vue JS web component"></v-card>`,
  '/react': '<user-profile id="user-profile"></user-profile>'
};

const divs = {
  '/': document.getElementById('root'),
  '/angular': document.getElementById('ang'),
  '/vue': document.getElementById('root'),
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
  if(document.querySelector('v-card')) {
    const user = document.querySelector('v-card');
    user.addEventListener('submit', () => {
      $('a[href="#angular"]').click();
      divs['/'].innerHTML = `<v-card title="Vue JS web component"></v-card>`;
    });
  }
  if(document.getElementById('user-profile')) {
	const userProfile = document.getElementById('user-profile');
	userProfile.addEventListener('myEvent', () => {
	  $('a[href="#vue"]').click();
	});
  }
}

window.onpopstate = () => {
  divs[pathname].innerHTML = routes[window.location.pathname]
}