const elRender = document.querySelector(".js-skills");
const elTemplate = document.querySelector(".js-template").content;

var typed = new Typed(".typing", {
  strings: ["Web Developer!", "Frontend Developer!", "JavaScript Coder!"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    shaowSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function shaowSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  shaowSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Skills data
const skills = [
  {
    id: 1,
    title: "HTML",
    desc: "HyperText Markup Language",
    img: "./assets/images/html-5.svg",
    content: {
      title: "HTML",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 2,
    title: "CSS",
    desc: "Cascading Style Sheets",
    img: "./assets/images/css-3.svg",
    content: {
      title: "CSS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 3,
    title: "Sass/Scss",
    desc: "Syntactically Awesome Stylesheets",
    img: "./assets/images/sass.svg",
    content: {
      title: "Scss",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 4,
    title: "Bootstrap",
    desc: "Bootstrap CSS Framework",
    img: "./assets/images/bootstrap.svg",
    content: {
      title: "Bootstrap",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 5,
    title: "Tailwindcss",
    desc: "Tailwind CSS Framework",
    img: "./assets/images/tailwindcss.svg",
    content: {
      title: "Tailwindcss",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 6,
    title: "Git",
    desc: "Global Information Tracker",
    img: "./assets/images/git.svg",
    content: {
      title: "Git",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 7,
    title: "GitHub",
    desc: "GitHub online platform",
    img: "./assets/images/3d-fluency-github-logo.png",
    content: {
      title: "GitHub",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 8,
    title: "JavaScript",
    desc: "Mocha, LiveScript, JavaScript",
    img: "./assets/images/js.svg",
    content: {
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 9,
    title: "React JS",
    desc: "React open-source",
    img: "./assets/images/react.svg",
    content: {
      title: "React JS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
];

// Skills data render
function rednerFn(arr, node) {
  const docFrg = document.createDocumentFragment();
  arr.forEach((item) => {
    const clone = elTemplate.cloneNode(true);
    clone.querySelector(".js-title").textContent = item.title;
    clone.querySelector(".js-desc").textContent = item.desc;
    clone.querySelector(".js-img").src = item.img;
    clone.querySelector(".js-img").alt = item.title;
    clone.querySelector(".js-skills-wrapper").dataset.dataId = item.id;
    docFrg.appendChild(clone);
  });
  node.appendChild(docFrg);
}
rednerFn(skills, elRender);

// Modal open
elRender.addEventListener("click", (evt) => {
  evt.preventDefault();
  const dataId = evt.target.closest(".js-skills-wrapper").dataset.dataId;
  skills.forEach((item) => {
    if (Number(item.id) === Number(dataId)) {
      const data = item.content;
      document.querySelector(".js-modal-img").src = item.img;
      document.querySelector(".js-modal-img").alt = data.title;
      document.querySelector(".js-modal-title").textContent = data.title;
      document.querySelector(".js-modal-desc").textContent = data.desc;

      document.querySelector(".js-modal").style.transform = "translateX(0)";
    }
  });
});

// Modal Close
document.querySelector(".js-modal-close").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".js-modal").style.transform = "translateX(100%)";
});
