 
 
 
 
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbw2qwdxEfdxbxz6sUkBpeAhdp2BeB_OjlXVsEG4i1jkrXfn9R0EoM1y1lTX2xnMDkJqGg/exec", true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.status === "success") {
            // Display the dialog with the success message
            document.getElementById("successMessage").textContent = response.message;
            document.getElementById("successDialog").style.display = "block";
			
			// Clear the message field only
			document.getElementById("message").value = "";
          }
        } else {
          console.error("There was an error with the request.");
        }
      }
    };

    xhr.send(formData);
  });

  function closeDialog() {
    document.getElementById("successDialog").style.display = "none";
  }
 
 
document.addEventListener("DOMContentLoaded", () => {
	
	  // hamburgerMenu click

  const hamburger = document.getElementById('hamburgerMenu');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('navOverlay');
        const menuItems = navLinks.getElementsByTagName('a');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', 
                hamburger.classList.contains('active'));
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        Array.from(menuItems).forEach(item => {
            item.addEventListener('click', toggleMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
	
  // Animation functions
  const animateElements = (elements) => {
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  };

  const initializeAnimations = () => {
    const elementClasses = [".skill-item", ".project-card", ".course-item"];
    elementClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      animateElements(elements);
    });
  };

  // Smooth scrolling
  const initializeSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };

  // Typeahead effect
  const initializeTypeaheadEffect = () => {
    const typeahead = document.querySelector(".typeahead");
    const words = ["Experiences", "Solutions", "Innovations"];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < words[wordIndex].length) {
        typeahead.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        typeahead.classList.add("show-cursor");
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typeahead.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        typeahead.classList.remove("show-cursor");
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      }
    }

    type();
  };

  // Initialize all functions
  initializeAnimations();
  initializeSmoothScrolling();
  initializeTypeaheadEffect();
});

// Data
   const courses = [
	    {
		    icon: "fas fa-database",
		    title: "Database Structures and Management with MySQL",
		    date: "2023",
		    provider: "Udemy"
		},
        {
          icon: "fas fa-mobile-alt",
          title: "Flutter Advanced Course: Bloc and MVVM Pattern",
          date: "Nov 2023",
          provider: "Udemy",
        },
        {
          icon: "fas fa-code",
          title: "Advanced React",
          date: "Sep 2023",
          provider: "Meta",
        },
        {
          icon: "fas fa-certificate",
          title: "Take The Lead",
          date: "Sep 2023",
          provider: "eCornell",
        },
        {
          icon: "fas fa-code-branch",
          title: "Version Control",
          date: "May 2023",
          provider: "Meta",
        },
        {
          icon: "fas fa-code",
          title: "Programming with JavaScript",
          date: "Apr 2023",
          provider: "Meta",
        },
        {
          icon: "fas fa-code",
          title: "React Basics",
          date: "Apr 2023",
          provider: "Meta",
        },
        {
          icon: "fas fa-laptop-code",
          title: "Advanced Styling with Responsive Design",
          date: "Feb 2023",
          provider: "University of Michigan",
        },
        {
          icon: "fas fa-robot",
          title: "Introduction to Artificial Intelligence (AI)",
          date: "Feb 2023",
          provider: "IBM Skills Network",
        },
        {
          icon: "fas fa-code",
          title: "HTML and CSS in depth",
          date: "Jul 2023",
          provider: "Meta",
        },
        {
          icon: "fas fa-lightbulb",
          title: "Problem Solving Using Computational Thinking",
          date: "Nov 2022",
          provider: "University of Michigan",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Flutter Clean Architecture",
          date: "Nov 2022",
          provider: "Udemy",
        },
        {
          icon: "fas fa-server",
          title: "Building Modern Node.js Applications on AWS",
          date: "Sep 2022",
          provider: "Amazon Web Services (AWS)",
        },
        {
          icon: "fas fa-server",
          title: "Server side JavaScript with Node.js",
          date: "Jul 2022",
          provider: "NIIT",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Flutter For You",
          date: "Sep 2020",
          provider: "Udemy",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "The Complete Android Developer Course",
          date: "2016-2017",
          provider: "Udemy",
        },
        {
          icon: "fas fa-lightbulb",
          title: "Developing Innovative Ideas for New Companies",
          date: "2015-2016",
          provider: "Coursera",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Programming Mobile Applications for Android Handheld Systems",
          date: "2014-2015",
          provider: "University of Maryland, College Park – Coursera",
        },
        {
          icon: "fas fa-certificate",
          title: "English Certificate",
          date: "2014-2015",
          provider: "NewHorizon Institute",
        },
        {
          icon: "fas fa-certificate",
          title: "Inspiring Leadership through Emotional Intelligence",
          date: "2015-2015",
          provider:
            "Case Western Reserve University – Coursera. by Richard Boyatzis",
        },
        {
          icon: "fas fa-certificate",
          title: "ICDL International Certificate (English)",
          date: "2013-2014",
          provider: "New Horizon Institute",
        },
      ];

      const projects = [
        {
          name: "Bazaar Turkey App",
          description:
            "Discover Bazaar Turkey app – your go-to for everything in Turkey! Get the latest news, rent new cars effortlessly, and dive into articles covering accommodations, investments, education, healthcare, and more. Stay informed about currency rates, weather, prayer times, and get reminders for your stay. Explore Istanbul's top sights and enjoy numerous perks and surprises.",
          image: "assets/images/bazaarapp.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.rafat.pazar_app",
        },
        {
          name: "Bazaar Turkey Website",
          description:
            "Discover Bazaar Turkey app – your go-to for everything in Turkey! Get the latest news, rent new cars effortlessly, and dive into articles covering accommodations, investments, education, healthcare, and more. Stay informed about currency rates, weather, prayer times, and get reminders for your stay. Explore Istanbul's top sights and enjoy numerous perks and surprises.",
          image: "assets/images/bazaarapp.png",
          categories: ["Websites"],
          link: "https://bazaar-tr.com/",
        },
       
        {
          name: "Alhafla App",
          description:
            "Alhafla is the first Syrian application that specializes in the world of booking wedding halls, parties, events, conferences, and all the surrounding accessories and luxuries.",
          image: "assets/images/alhaflaapp.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.rafat.alhafla",
        },
        {
          name: "Alhafla Website",
          description:
            "Alhafla is the first Syrian application that specializes in the world of booking wedding halls, parties, events, conferences, and all the surrounding accessories and luxuries.",
          image: "assets/images/alhalfawebsite.png",
          categories: ["Websites"],
          link: "https://alhafla-app.com/",
        },
        {
          name: "Mobile One App",
          description:
            "Discover Mobile One, the world's premier mobile app, offering global mobile price comparisons, 360-degree phone views, and personalized selections based on features and budget.",
          image: "assets/images/mobile1app.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.rafat.mobileOne",
        },
        {
          name: "Mobile One Website",
          description:
            "Discover Mobile One, the world's premier mobile app, offering global mobile price comparisons, 360-degree phone views, and personalized selections based on features and budget.",
          image: "assets/images/mobile1website.png",
          categories: ["Websites"],
          link: "https://mobile1-app.com",
        },
        {
          name: "Space Run Elite Game",
          description:
            "Space Run Elite challenges you to save your planet by boosting your spaceship's speed, dodging obstacles, and collecting gems. Compete with friends, upgrade your ship, and aim for the highest score!",
          image: "assets/images/spacerunelitegame.png",
          categories: ["Games"],
          link: "https://play.google.com/store/apps/details?id=com.RHGames.SpaceRunElite",
        },
        {
          name: "Tawfeer Space App",
          description:
            '"Tawfeer Space" is a unique app that combines online shopping, secure online payments, and fast delivery, offering a comprehensive shopping experience right at your fingertips.',
          image: "assets/images/tawfeerapp.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.rafat.tawfeer_space",
        },
        {
          name: "Tawfeer Space Website",
          description:
            '"Tawfeer Space" is a unique app that combines online shopping, secure online payments, and fast delivery, offering a comprehensive shopping experience right at your fingertips.',
          image: "assets/images/tawfeerwebsite.png",
          categories: ["Websites"],
          link: "https://tawfeer-space.com/",
        },
		 {
          name: "Estangy App",
          description:
            "Estangy works as an intermediary on behalf of the participating stores, to complete orders and manage the relationship with customers and delivery representatives, by following up the process of supplying the order with the related parties and beyond.",
          image: "https://via.placeholder.com/800x400?text=Estangy+App",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.rafat.estangy&hl=en",
        },
        {
          name: "Asasco Website",
          description:
            "Asasco Website, reminiscent of Coursera, hosts a variety of recorded and live courses, training programs, and more, offered by Asasco Training & Development Center LLC in Dubai, UAE. Owned by Sheikh Zayed bin Mohamed Al Nahyan, this pioneering national institution aims to build individuals and institutions, meeting their needs and developing their skills and capabilities according to the highest international standards. Through specialized training courses, consultation services, and event management, Asasco seeks excellence in individual and institutional performance.",
          image: "assets/images/asasco.png",
          categories: ["Websites"],
          link: "http://asasco.vegasds.com/",
        },
        {
          name: "Alminssa Website",
          description:
            "Explore Al Minssa, an online islamic educational hub offering a broad spectrum of courses and resources from leading educators, trainers, and consultants. Engage with dynamic content, participate in live events, and enrich your knowledge base across various disciplines.",
          image: "assets/images/alminsaa.png",
          categories: ["Websites"],
          link: "https://alminssa.com/",
        },
		{
          name: "Bilal Group Website",
          description:
            "Discover top-quality water pipes at BGroup. its website offers a wide range of durable and reliable pipes for all your needs. Explore our catalog and order directly online for fast and convenient service.",
          image: "assets/images/bgroupwebsite.png",
          categories: ["Websites"],
          link: "https://bgroup.me/",
        },	{
          name: "CoronaTracker COVID-19 Website",
          description:
            "Stay informed with CoronaTracker, providing live counts and updates on COVID-19 cases worldwide. Get the latest statistics and trends all in one place.",
          image: "assets/images/coronawebsite.png",
          categories: ["Websites"],
          link: "https://bgroup.me/",
        },
		{
          name: "MABCO App",
          description:
            "The Mabco app allows you to browse all products available at MABCO showrooms with detailed prices and specifications. It provides information on warranty periods, job application opportunities, and seamless communication with MABCO via social media.",
          image: "assets/images/mabcoapp.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.mabcoApp.application.mabco&hl=en",
        },
		{
          name: "MABCO Alternate Pharmacy",
          description:
            "The Alternate Pharmacy app lets you browse all available pharmacies daily, offering detailed information and filters for easy searching.",
          image: "assets/images/mabcoalternatepharmacy'app.png",
          categories: ["Apps"],
          link: "https://play.google.com/store/apps/details?id=com.mabcoApps.application.pharmacy",
        },	
		{
          name: "Foodlina App",
          description:
            "The Foodlina app is the perfect solution for ordering quick meals and varied dishes directly from local restaurants. You can explore a wide range of restaurants and available dishes in your area thanks to location-based search functionality. The app also provides secure electronic payment options to facilitate the purchasing process, and allows you to load your wallet balance for future orders. Enjoy a fast and delicious dining experience without having to leave home!",
          image: "assets/images/foodlinaapp.png",
          categories: ["Apps"],
          link: "",
        },
		{
          name: "Hdom Center App",
          description:
            "The Hdom Center app offers a multifunctional experience allowing you to shop for unique and innovative clothes. You can search for styles that match your taste and place purchase orders easily. Additionally, the app features electronic payment capabilities, providing you with a secure and comfortable shopping experience. Also, enjoy giving donations and interacting with the community through charitable works submissions.",
          image: "assets/images/hdomcenterapp.png",
          categories: ["Apps"],
          link: "",
        },
		{
          name: "Prime tv App",
          description:
            "A subscription app that lets you watch your favorite channels through monthly subscriptions. It stands out with high-quality video, a wide selection of top channels, and ease of use, making it an ideal choice for those who love watching global content anytime, anywhere. In addition, the app offers many other benefits such as support for modern devices and the ability to stream channels online, making it an ideal choice for self-viewing. You can also enjoy a personalized viewing experience where you can organize your watchlist and create groups of your favorite channels, making the app an ideal choice for those who love interacting with entertainment content personally.",
          image: "assets/images/primetvapp.png",
          categories: ["Apps"],
          link: "",
        },
		{
          name: "Prime tv for Android TV and Smart Tv",
          description:
            "A subscription app that lets you watch your favorite channels through monthly subscriptions. It stands out with high-quality video, a wide selection of top channels, and ease of use, making it an ideal choice for those who love watching global content anytime, anywhere. In addition, the app offers many other benefits such as support for modern devices and the ability to stream channels online, making it an ideal choice for self-viewing. You can also enjoy a personalized viewing experience where you can organize your watchlist and create groups of your favorite channels, making the app an ideal choice for those who love interacting with entertainment content personally.",
          image: "assets/images/primetvandroidtv.png",
          categories: ["Apps"],
          link: "",
        },	
		{
          name: "Wish and order App",
          description:
            "Discover Wish and order app, the online shopping app where you can browse, wish, and order from a vast range of products. Easily add items to your cart and enjoy a seamless e-commerce experience.",
          image: "assets/images/wishandorderapp.png",
          categories: ["Apps"],
          link: "",
        },{
          name: "Gooltamm Client + Driver App",
          description:
            "The Gooltamm Client + Driver App facilitates seamless goods transfer between locations with options for multiple pickups and drop-offs. It offers three subscription plans, each with a daily limit, allowing users to select the order type, pickup location, date, and drop-off location.",
          image: "assets/images/gooltammapp.png",
          categories: ["Apps"],
          link: "",
        },
		{
          name: "Wish and order Website",
          description:
            "Discover Wish and order app, the online shopping app where you can browse, wish, and order from a vast range of products. Easily add items to your cart and enjoy a seamless e-commerce experience.",
          image: "assets/images/wishandorderwebsite.png",
          categories: ["Websites"],
          link: "",
        },
		
		{
          name: "Unipharma Visiting System Website",
          description:
            "Unipharma Visiting System Website enables medical representatives to register visits to doctors, pharmacies, centers, and hospitals. It offers extensive reporting tools to track visits, organize work, and manage marketing plans and vacations for representatives.",
          image: "assets/images/unipharmavisitingwebsite.png",
          categories: ["Websites"],
          link: "",
        },
		{
          name: "Words Academy Website",
          description:
            "Words Academy is a dynamic platform tailored for kids, offering a diverse range of recorded and live courses designed to nurture young minds. By providing engaging and interactive learning experiences, Words Academy aims to develop essential skills and inspire a lifelong love of learning in children.",
          image: "assets/images/words_academy.png",
          categories: ["Websites"],
          link: "https://www.wordsacademy.org/",
        },	{
          name: "Zavodou Website",
          description:
            "Zavodou is a Czech website that offers comprehensive pension savings solutions, featuring a convenient online pension calculator and easy setup. Stay ahead with expert advice and tips for a worry-free retirement.",
          image: "assets/images/zavodou.png",
          categories: ["Websites"],
          link: "https://zavodou.cz/",
        },{
          name: "Kuality AI Website",
          description:
            "Kuality AI  is innovative AI technologies designed to help businesses optimize their fleet operations. We make them smarter, safer, and more efficient",
          image: "assets/images/kualityai.png",
          categories: ["Websites"],
          link: "https://kuality.ai/",
        },
        {
          name: "Task Manager",
          description:
            "A mobile app for efficient task management and organization.",
          image: "https://via.placeholder.com/800x400?text=Task+Manager",
          categories: ["Apps"],
          link: "",
        },
      ];

// Project and course rendering
const renderProjects = (category = "All") => {
  const projectGrid = document.getElementById("projectGrid");
  projectGrid.innerHTML = "";
  projects.forEach((project, index) => {
    if (category === "All" || project.categories.includes(category)) {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description.substring(0, 100)}...</p>
        <button class="see-details" data-index="${index}">See Details</button>
      `;
      projectGrid.appendChild(card);
    }
  });
};

const renderCourses = () => {
  const coursesGrid = document.getElementById("courses-grid");
  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.className = "course-item";
    courseElement.innerHTML = `
      <i class="${course.icon} course-icon"></i>
      <h3>${course.title}</h3>
      <p>${course.date}</p>
      <span class="course-provider">${course.provider}</span>
    `;
    coursesGrid.appendChild(courseElement);
  });
};

// Modal functions
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.getElementsByClassName("close")[0];

const openModal = (index) => {
  const project = projects[index];
  modalImage.src = project.image;
  modalTitle.textContent = project.name;
  modalDescription.textContent = project.description;
  
  if (project.link && project.link.trim() !== '') {
    modalLink.innerHTML = `
      <br><hr style="margin: 0 20%"><br>
      <span style="color: grey;">Link:</span><br><br>
      <a href="${project.link}" target="_blank" style="color: blue;">${project.link}</a>
    `;
  } else {
    modalLink.innerHTML = '';
  }
  
  modal.style.display = "block";
};

const closeModal = () => {
  modalImage.src = "";
  modalTitle.textContent = "";
  modalDescription.textContent = "";
  modalLink.innerHTML = "";
  modal.style.display = "none";
};

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderCourses();

  const categoryTabs = document.getElementById("categoryTabs");
  categoryTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-tab")) {
      const category = e.target.getAttribute("data-category");
      document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
      renderProjects(category);
    }
  });

  const projectGrid = document.getElementById("projectGrid");
  projectGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("see-details")) {
      const index = e.target.getAttribute("data-index");
      openModal(index);
    }
  });

  closeBtn.onclick = closeModal;
  window.onclick = (e) => {
    if (e.target == modal) {
      closeModal();
    }
  };
});
 
