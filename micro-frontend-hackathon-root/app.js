const routes = {
  '/'        :`<v-card title="Vue JS web component"></v-card>`,
  '/angular' : `<header-app></header-app>`,
  '/vue'     : `<v-card title="Vue JS web component"></v-card>`,
  '/react'   : '<my-table id="myTable" title="test content"><div>Some Test</div></my-table>'
};

const divs = {
  '/'        : document.getElementById('root'),
  '/angular' : document.getElementById('ang'),
  '/vue'     : document.getElementById('vue'),
  '/react'   : document.getElementById('react')
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
}

window.onpopstate = () => {
  divs[pathname].innerHTML = routes[window.location.pathname]
}