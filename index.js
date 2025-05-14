const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});





const courseDataList = [
    { id: "course1", title: "1. Ақпараттық процестер", lessons: 3 },
    { id: "course2", title: "2. Компьютерлік жүйелер", lessons: 3 },
    { id: "course3", title: "3. Логикалық операциялар", lessons: 2 },
    { id: "course4", title: "4. Компьютерлік желілер", lessons: 4 },
    { id: "course5", title: "5. Excel", lessons: 2 },
    { id: "course6", title: "6. SQL", lessons: 3 },
    { id: "course7", title: "7. Web жобалау", lessons: 2 },
    { id: "course8", title: "8. Python", lessons: 5 },
    { id: "course9", title: "9. Бейнеконтент", lessons: 1 },
    { id: "course10", title: "10. Жасанды интелект", lessons: 2 }
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const courseItems = document.querySelectorAll(".course-item");
  
    courseItems.forEach(courseItem => {
      const courseId = courseItem.getAttribute("id"); 
      
      if (!courseId) return;

      const courseData = courseDataList.find(course => course.id === courseId);
      const hasAccess = localStorage.getItem(courseId + "_access") === "true";
      const isExpanded = localStorage.getItem(courseId + "_expanded") === "true";
      const infoBlock = courseItem.querySelector(".course-info");
      const lessonsId = "lessons" + courseId.replace("course", ""); 
      const lessonList = document.getElementById(lessonsId);
  
      if (courseData) {
        if (hasAccess) {
          courseItem.classList.remove("locked");
          courseItem.onclick = () => openCourse(true, courseId);
          infoBlock.innerHTML = `${courseData.title} <span class="subtext">${courseData.lessons} сабақ</span>`;
          if (isExpanded && lessonList) {
            lessonList.style.display = "block";
          }
        } else {
          courseItem.classList.add("locked");
          courseItem.onclick = () => openCourse(false, courseId);
          infoBlock.innerHTML = `${courseData.title} 🔒 <span class="subtext">${courseData.lessons} сабақ</span>`;
        }
      }
    });
  });
  

                // негізігі код өзгермейтін акаунт сақталып қалатын 
  function openCourse(hasAccess, courseId) {
    if (!hasAccess) {
      alert("Бұл бөлімге қол жеткізу үшін курсты сатып алыңыз.");
      return;
    }
    const lessonsId = "lessons" + courseId.replace("course", "");
    const lessonList = document.getElementById(lessonsId);
    if (lessonList) {
        const isVisible = lessonList.style.display === "block";
        lessonList.style.display = isVisible ? "none" : "block";
    
        // Ашылған/жабылған күйін сақтау
        localStorage.setItem(courseId + "_expanded", !isVisible);
      }
      console.log(`${courseId} ашылды!`);
    }
      // function buyCourse(courseId) {
      //     localStorage.setItem(courseId + "_access", "true");
      //     alert("Сатып алу сәтті өтті!");
      //     location.reload(); // Курстар тізімін жаңарту
      //   }
      function buyAllCourses() {
        for (let i = 1; i <= 10; i++) {
          const courseId = "course" + i;
          localStorage.setItem(courseId + "_access", "true");
        }
        alert("Барлық курстар ашылды!");
        location.reload();
    }