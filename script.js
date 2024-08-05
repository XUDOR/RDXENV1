// Array of project data
const projectsData = [
  {
    description: "Interstellar Packges | Charoltta | 2005/2010",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Charlotta/1_CHARLOTTA.png",
    altText: "Interstellar Packges-Charlotta"
  },

  {
    description: "Interstellar Packges | Objects & Particles | 2006/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Objects-and-Particles/2_OBJECTS-PARTICLES.png",
    altText: "Interstellar Packges-Objects-and-Particles"
  },

  {
    description: "Interstellar Packges | Glass City of Us | 2005/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Glass-City-of-Us/3_GLASS-CITY-OF-US.png",
    altText: "Interstellar Packges-Glass-CIty-of-Us"
  },

  {
    description: "Interstellar Packges | New Domes of Earth | 2005/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/New-Domes-of-Earth/4_NEW-DOMES.png",
    altText: "Interstellar Packges-New-Domes-of-Earth"
  },

  {
    description: "Interstellar Packges | Natura | 2022 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Natura/5_NATURA.png",
    altText: "Interstellar Packges-Natura"
  },

  {
    description: "Interstellar Packges | Outer Corners | 2022 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Outer-Corners/6_OUTER-CORNERS.png",
    altText: "Interstellar Packges-Outer-Corners"
  },

  {
    description: "Interstellar Packges | Nonagon | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Nonagon/7_NONAGON.png",
    altText: "Interstellar Packges-Nonagon"
  },

  {
    description: "Interstellar Packges | Ambient Garden One | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Ambient-Garden-One/8_AMBIENTGARDENONE.png",
    altText: "Interstellar Packges-Ambient-Garden-One"
  },

  {
    description: "Interstellar Packges | Music for Seven Structures | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Music-For-Seven-Structures/9_7STRUCTURES.png",
    altText: "Interstellar Packges-Music-for-Seven-Structures"
  },

  {
    description: "Interstellar Packges | Inner Moments of Light | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Inner-Moment-of-Light/10_INNER-MOMENTS.png",
    altText: "Interstellar Packges-Inner-Moments-of-Light"
  },

];


document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.querySelector('.project-grid');
  const projectNav = document.querySelector('.project-nav');

  // Generate project items
  projectsData.forEach((project, index) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.innerHTML = `
      <div class="description">${project.description}</div>
      <div class="imageCont">
        <img src="${project.imageUrl}" alt="${project.altText}">
      </div>
    `;
    projectGrid.appendChild(projectItem);

    // Create navigation dot
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    dot.addEventListener('click', () => scrollToProject(index));
    projectNav.appendChild(dot);
  });

  // Move these declarations here, after the items have been created
  const projects = document.querySelectorAll('.project-item');
  const navDots = document.querySelectorAll('.nav-dot');

  function scrollToProject(index) {
    const projectItem = projects[index];
    projectGrid.scrollTo({
      left: projectItem.offsetLeft - projectGrid.offsetLeft,
      behavior: 'smooth'
    });
  }

  // Update active dot on scroll
  projectGrid.addEventListener('scroll', () => {
    const index = Math.round(projectGrid.scrollLeft / projectGrid.offsetWidth);
    navDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });

  // Simple swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  projectGrid.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  projectGrid.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      const nextIndex = Math.min(Math.round(projectGrid.scrollLeft / projectGrid.offsetWidth) + 1, projects.length - 1);
      scrollToProject(nextIndex);
    }
    if (touchEndX - touchStartX > 50) {
      // Swipe right
      const prevIndex = Math.max(Math.round(projectGrid.scrollLeft / projectGrid.offsetWidth) - 1, 0);
      scrollToProject(prevIndex);
    }
  }

  // Ensure the scroll starts at the beginning
  projectGrid.scrollLeft = 0;
  // Activate the first dot
  navDots[0].classList.add('active');
});