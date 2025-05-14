const courses = {
    "Ақпараттық процестер": [
      { title: "1-сабақ: Санау жүйелері", video: "https://player.vimeo.com/video/123456789?h=abcde12345" },
      { title: "2-сабақ: Ақпаратты кодтау", video: "https://youtu.be/dmGUpA-S1zA" },
      { title: "3-сабақ: Ақпаратты өлшеу", video: "https://www.youtube.com/embed/dQw4w9WgXcQ"},
      // https://www.youtube.com/embed/  ${videoId}  ?rel=0&modestbranding=1&controls=1
    ],
    "Компьютерлік жүйелер": [
      { title: "1-сабақ: Есептеу техникасының дамуы", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Компьютердің қызметі", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "3-сабақ: Компьютерлік графика", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "Логикалық операциялар": [
      { title: "1-сабақ: Логикалық операциялар", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Ақиқат кестесі", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "Компьютерлік желілер": [
      { title: "1-сабақ: Компьютерлік желілердің жіктелуі", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: IP адрес", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "3-сабақ: DNS домен", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "4-сабақ: Ақпараттық қауіпсіздік", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    
    "Excel": [
      { title: "1-сабақ: Элементтерді пішімдеу", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Электронды кестелерді модельдеу", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "SQL": [
      { title: "1-сабақ: Мәліметтер қорын құру", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Реляциялық деректер қоры", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "3-сабақ: Мәліметтерді іздеу,сұрыптау және сүзу", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "Web жобалау": [
      { title: "1-сабақ: HTML", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: CSS", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "Python": [
      { title: "1-сабақ: Алгоритм түрлері", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Цикл түрлері", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "3-сабақ: Массивтер", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "4-сабақ: Процедура, функция, жолдар ", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "5-сабақ: Есептерді талдау", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ],
    "Бейнеконтент": [
      { title: "1-сабақ: Бейнемен жұмыс", video: "https://www.youtube.com/embed/dQw4w9WgXcQ"},
      // Басқа сабақтар
    ],
    "Жасанды интелект": [
      { title: "1-сабақ: Жасанды интелект", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "2-сабақ: Нейрондық желілер", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Басқа сабақтар
    ]
   
    // Басқа курстарды қосуға болады
  };
  let currentCourse = null; //null
  let currentLessonIndex = 0;
  
  const courseItems = document.querySelectorAll(".course-item");
  const courseListWrapper = document.querySelector(".course-list-wrapper");
  const videoSection = document.querySelector(".video-section");
  const videoIframe = videoSection.querySelector("iframe");
  const videoTitle = videoSection.querySelector("h2");
  const backBtn = videoSection.querySelector("#back-btn");
  
  courseItems.forEach(item => {
    item.addEventListener("click", () => {
      const courseName = item.innerText.split("\n")[0].split(". ")[1].trim();
      if (courses[courseName]) {
        currentCourse = courses[courseName];
        currentLessonIndex = 0;
        showLesson();
      }
    });
  });
  
  function showLesson() {
    if (!currentCourse) return;
  
    // Видеосабақтың тақырыбы мен видеосын жаңарту
    const lesson = currentCourse[currentLessonIndex];
    videoTitle.innerText = lesson.title;
    videoIframe.src = lesson.video;
  
    // Курс тізімін жасыру
    courseListWrapper.style.display = "none";
    // Видеосабақ бөлімін көрсету
    videoSection.style.display = "block";

    const testLinks = [
      "https://quizizz.com/join?gc=84605974", //  1-сабақтың тесті
      "#", // 2-сабақтың тесті
      "#", // 3-сабақтың тесті
      "#", //  4-сабақтың тесті
      "#", // 5-сабақтың тесті
      "#", // 6-сабақтың тесті
      "#", //  7-сабақтың тесті
      "#", // 8-сабақтың тесті
      "#", // 9-сабақтың тесті
      "#", //  10-сабақтың тесті
      "#", // 11-сабақтың тесті
      "#", // 12-сабақтың тесті
      "#", //  13-сабақтың тесті
      "#", // 14-сабақтың тесті
      "#", // 15-сабақтың тесті
      "#", //  16-сабақтың тесті
      "#", // 17-сабақтың тесті
      "#", // 18-сабақтың тесті
      "#", //  19-сабақтың тесті
      "#", // 20-сабақтың тесті
      "#", // 21-сабақтың тесті
      "#", // 22-сабақтың тесті
      "#", // 23-сабақтың тесті
      "#", //  24-сабақтың тесті
      "#", // 25-сабақтың тесті
      "#", // 26-сабақтың тесті
      "#", //  27-сабақтың тесті
      "#", // 28-сабақтың тесті
      "#", // 29-сабақтың тесті
      // әрі қарай қосып отырасың
    ];
  
    const navButtons = document.createElement("div");
    navButtons.classList.add("nav-buttons");
    navButtons.innerHTML = `
      ${currentLessonIndex > 0 ? '<button id="prev-btn">⬅ Алдыңғы сабақ</button>' : ''}
      ${currentLessonIndex < currentCourse.length - 1 ? '<button id="next-btn" style="text-align:center;">Келесі сабақ ➡</button>' : ''}
      <br><br><br>
      <a href="${testLinks[currentLessonIndex]}" target="_blank">
            <button id="test-btn">📝 Тест тапсыру</button>
      </a>
      `;
    
  
    // Жаңа навигация қосу
    const oldNav = document.querySelector(".nav-buttons");
    if (oldNav) oldNav.remove();
    videoSection.appendChild(navButtons);
  
    if (document.getElementById("prev-btn")) {
      document.getElementById("prev-btn").addEventListener("click", () => {
        currentLessonIndex--;
        showLesson();
      });
    }
  
    if (document.getElementById("next-btn")) {
      document.getElementById("next-btn").addEventListener("click", () => {
        currentLessonIndex++;
        showLesson();
      });
    }
  }
  
  // Артқа қайту батырмасы
  backBtn.addEventListener("click", () => {
    // Видеосабақты жасырып, курстар тізімін қайта көрсету
    videoSection.style.display = "none";
    courseListWrapper.style.display = "block";
  });
  // function toggleLessons(event, id) {
  //   event.stopPropagation(); // Модульдің сыртқы басылуын болдырмау
  //   const list = document.getElementById(id);
  //   const icon = event.currentTarget;
  
  //   if (list.style.display === "block") {
  //     list.style.display = "none";
  //     icon.classList.remove('rotated');
  //   } else {
  //     list.style.display = "block";
  //     icon.classList.add('rotated');
  //   }
  // }
  function toggleLessons(event, lessonsId) {
    event.stopPropagation(); // Басқа onclick шақырмау үшін
    const lessonList = document.getElementById(lessonsId);
    const toggleIcon = event.target;
  
    if (lessonList) {
      const isVisible = lessonList.style.display === "block";
      lessonList.style.display = isVisible ? "none" : "block";
      // Иконка бұрылу эффекті
      toggleIcon.classList.toggle("rotated");
    }
  }
      function openLesson(videoId) {
        const videos = {
          video1: "#",
          video2: "#",
          video3: "#"
        };
        document.getElementById('lessonFrame').src = videos[videoId];
      }