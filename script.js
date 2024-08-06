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

  {
    description: "Interstellar Packges | Nocturnes & Reveries | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Nocturnes-and-Reveries/11_NOCTURNES-REVERIES.png",
    altText: "Interstellar Packges-Nocturnes-and-Reveries"
  },

  {
    description: "Interstellar Packges | Prefabrication | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Prefabrication/12_PREFABRICATION.png",
    altText: "Interstellar Packges-Prefabrication"
  },

  {
    description: "Interstellar Packges | Vagary | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Vagary/13_VAGARY.png",
    altText: "Interstellar Packges-Vagary"
  },

  {
    description: "Interstellar Packges | Amsterdam Concreet | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Amsterdam-Concreet/14_AMSTERDAM-CONCREET.png",
    altText: "Interstellar Packges-Amsterdam-Concreet"
  },

  {
    description: "Interstellar Packges | Watercolours for Friends | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Watercolours-for-Friends/15_WATERCOLOURS.png",
    altText: "Interstellar Packges-Watercolours for Friends"
  },

  {
    description: "Interstellar Packges | Postcards from Old Sounds | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Postcards-From-Old-Sounds/16_POSTACARDS-OLD-SOUNDS.png",
    altText: "Interstellar Packges-Postcards from Old Sounds"
  },

  {
    description: "Interstellar Packges | Sakura | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Sakura/17_SAKURA.png",
    altText: "Interstellar Packges-Sakura"
  },

  {
    description: "Interstellar Packges | Poem for a Homewolrd | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Poem-For-A-Homeworld/18_POEM-HOMEWORLD.png",
    altText: "Interstellar Packges-Poem-for-a-Homewolrd"
  },

  {
    description: "Interstellar Packges | Rhombus | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Rhombus/19_RHOMBUS.png",
    altText: "Interstellar Packges-Rhombus"
  },

  {
    description: "Interstellar Packges | Vignettes of Clouds | 2024",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Vignettes-of-Clouds/20_Vignettes-of-Clouds.png",
    altText: "Interstellar Packges-Vignettes-of-Clouds"
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
    dot.addEventListener('click', () => {
      console.log(`Nav dot clicked: ${index}`);
      scrollToProject(index);
    });
    projectNav.appendChild(dot);
  });

  const projects = document.querySelectorAll('.project-item');
  const navDots = document.querySelectorAll('.nav-dot');

  function scrollToProject(index) {
    const projectItem = projects[index];
    const centerPosition = projectItem.offsetLeft - (projectGrid.offsetWidth / 2) + (projectItem.offsetWidth / 2);
    console.log(`Scrolling to project index: ${index}, centerPosition: ${centerPosition}`);
    projectGrid.scrollTo({
      left: centerPosition,
      behavior: 'smooth'
    });
    updateActiveDot(index);
  }

  function updateActiveDot(index) {
    console.log(`Updating active dot to index: ${index}`);
    navDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function getCurrentIndex() {
    const projectItemWidth = projects[0].offsetWidth;
    const adjustedScrollLeft = projectGrid.scrollLeft + (projectGrid.offsetWidth / 2);
    const currentIndex = Math.round(adjustedScrollLeft / projectItemWidth);
    console.log(`Current index calculated: ${currentIndex}, scrollLeft: ${projectGrid.scrollLeft}, adjustedScrollLeft: ${adjustedScrollLeft}, projectItemWidth: ${projectItemWidth}`);
    return currentIndex;
  }

  projectGrid.addEventListener('scroll', () => {
    const index = getCurrentIndex();
    updateActiveDot(index);
  });

  let touchStartX = 0;
  let touchEndX = 0;

  projectGrid.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    console.log(`Touch start: ${touchStartX}`);
  }, false);

  projectGrid.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    console.log(`Touch end: ${touchEndX}`);
    handleSwipe();
  }, false);

  function handleSwipe() {
    const threshold = 50;
    const currentIndex = getCurrentIndex();
    console.log(`Handling swipe: touchStartX: ${touchStartX}, touchEndX: ${touchEndX}, currentIndex: ${currentIndex}`);

    if (touchStartX - touchEndX > threshold) {
      const nextIndex = Math.min(currentIndex + 1, projects.length - 1);
      console.log(`Swiped left: nextIndex: ${nextIndex}`);
      scrollToProject(nextIndex);
    } else if (touchEndX - touchStartX > threshold) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      console.log(`Swiped right: prevIndex: ${prevIndex}`);
      scrollToProject(prevIndex);
    }
  }

  projectGrid.addEventListener('click', e => {
    const rect = projectGrid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const currentIndex = getCurrentIndex();
    console.log(`Click event: x: ${x}, currentIndex: ${currentIndex}`);

    if (x < rect.width * 0.1) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      console.log(`Tap left area: prevIndex: ${prevIndex}`);
      scrollToProject(prevIndex);
    } else if (x > rect.width * 0.9) {
      const nextIndex = Math.min(currentIndex + 1, projects.length - 1);
      console.log(`Tap right area: nextIndex: ${nextIndex}`);
      scrollToProject(nextIndex);
    }
  });

  // Ensure initial state
  function initialize() {
    // Scroll to the first project and activate the first dot
    scrollToProject(0);
    updateActiveDot(0);
  }

  initialize();
});









