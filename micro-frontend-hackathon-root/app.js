const routes = {
  '/': `<v-card title="Vue JS web component"></v-card>`,
  '/angular': `<header-app [studentDetails]="studentDetails"></header-app>`,
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

//Fetch Student Data from Json Server API
const getStudent = () => {
  fetch("http://localhost:3000/studentData/")
    .then(res => res.json())
    .then(
      (result) => {
        return studentDetails = result;
      },
      (error) => {
        console.log(error);
      }
    )
};

getStudent();

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  divs[pathname].innerHTML = routes[pathname]
 
  getStudent();
  if (pathname == '/angular') {
    setTimeout(function () {  
    const header = document.querySelector('header-app');
    header.studentDetails = studentDetails;
    },800);
  }

  if (document.querySelector('v-card')) {
    const user = document.querySelector('v-card');
    user.addEventListener('submit', () => {
      divs['/'].innerHTML = `<v-card title="Vue JS web component"></v-card>`;
      $('a[href="#angular"]').click(); 
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
      var record = JSON.parse(data.detail);
      $('a[href="#vue"]').click();
      const user = document.querySelector('v-card');
      user.id = record.id;
      user.editFlag = "true";
    });
  }

  if (document.querySelector('header-app') !== null) {
    document.querySelector('header-app').addEventListener('selectedStudent', (data) => {
      var jsonData = data.detail
      console.log(data.detail);
      var id = JSON.parse(jsonData);    
      divs['/react'].innerHTML = routes['/react']
      const userProfile = document.getElementById('user-profile');
      userProfile.id = id.id;
      $('html, body').animate({
        scrollTop: $("#react").offset().top
    }, 800);
      //$('a[href="#react"]').click();
    });
  }

}

window.onpopstate = () => {
  divs[pathname].innerHTML = routes[window.location.pathname]
}