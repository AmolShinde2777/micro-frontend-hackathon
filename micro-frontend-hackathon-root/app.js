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

  if (document.querySelector('v-card')) {
    const user = document.querySelector('v-card');
    user.addEventListener('submit', () => {
      $('a[href="#angular"]').click();
      divs['/'].innerHTML = `<v-card title="Vue JS web component"></v-card>`;
    });
  }

  if (document.getElementById('user-profile')) {
    const userProfile = document.getElementById('user-profile');
    userProfile.addEventListener('myEvent', () => {
      $('a[href="#angular"]').click();
    });
  }

  if (document.querySelector('header-app') !== null) {
    document.querySelector('header-app').addEventListener('editStudentRecord', (data) => {
      console.log(data.detail);
      const user = document.querySelector('v-card');
      user.id = 2;
      user.editFlag = "true";
      //$('a[href="#vue"]').click();
      // document.getElementById('react').click();
    });
  }

  if (document.querySelector('header-app') !== null) {
    document.querySelector('header-app').addEventListener('selectedStudent', (data) => {

      var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

      console.log(obj.name)
      var jsonData=data.detail
      console.log(data.detail);
      var id=JSON.parse(jsonData);
      
      // if (data.detail == true)
    //  document.getElementById('react') = '<user-profile></user-profile>';
      $('a[href="#react"]').click();
      const userProfile = document.getElementById('user-profile');
      console.log(data.detail.id);
      userProfile.id = id.id;
    });
  }

}

window.onpopstate = () => {
  divs[pathname].innerHTML = routes[window.location.pathname]
}