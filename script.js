// Array of project data
const projectsData = [
  {
    description: "Interstellar Packages | Charoltta | 2005/2010",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Charlotta/1_CHARLOTTA.png",
    altText: "Interstellar Packages-Charlotta"
  },

  {
    description: "Interstellar Packages | Objects & Particles | 2006/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Objects-and-Particles/2_OBJECTS-PARTICLES.png",
    altText: "Interstellar Packages-Objects-and-Particles"
  },

  {
    description: "Interstellar Packages | Glass City of Us | 2005/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Glass-City-of-Us/3_GLASS-CITY-OF-US.png",
    altText: "Interstellar Packages-Glass-CIty-of-Us"
  },

  {
    description: "Interstellar Packages | New Domes of Earth | 2005/2010 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/New-Domes-of-Earth/4_NEW-DOMES.png",
    altText: "Interstellar Packages-New-Domes-of-Earth"
  },

  {
    description: "Interstellar Packages | Natura | 2022 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Natura/5_NATURA.png",
    altText: "Interstellar Packages-Natura"
  },

  {
    description: "Interstellar Packages | Outer Corners | 2022 ",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Outer-Corners/6_OUTER-CORNERS.png",
    altText: "Interstellar Packages-Outer-Corners"
  },

  {
    description: "Interstellar Packages | Nonagon | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Nonagon/7_NONAGON.png",
    altText: "Interstellar Packages-Nonagon"
  },

  {
    description: "Interstellar Packages | Ambient Garden One | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Ambient-Garden-One/8_AMBIENTGARDENONE.png",
    altText: "Interstellar Packages-Ambient-Garden-One"
  },

  {
    description: "Interstellar Packages | Music for Seven Structures | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Music-For-Seven-Structures/9_7STRUCTURES.png",
    altText: "Interstellar Packages-Music-for-Seven-Structures"
  },

  {
    description: "Interstellar Packages | Inner Moments of Light | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Inner-Moment-of-Light/10_INNER-MOMENTS.png",
    altText: "Interstellar Packages-Inner-Moments-of-Light"
  },

  {
    description: "Interstellar Packages | Nocturnes & Reveries | 2022",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Nocturnes-and-Reveries/11_NOCTURNES-REVERIES.png",
    altText: "Interstellar Packages-Nocturnes-and-Reveries"
  },

  {
    description: "Interstellar Packages | Prefabrication | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Prefabrication/12_PREFABRICATION.png",
    altText: "Interstellar Packages-Prefabrication"
  },

  {
    description: "Interstellar Packages | Vagary | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Vagary/13_VAGARY.png",
    altText: "Interstellar Packages-Vagary"
  },

  {
    description: "Interstellar Packges | Amsterdam Concreet | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Amsterdam-Concreet/14_AMSTERDAM-CONCREET.png",
    altText: "Interstellar Packages-Amsterdam-Concreet"
  },

  {
    description: "Interstellar Packages | Watercolours for Friends | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Watercolours-for-Friends/15_WATERCOLOURS.png",
    altText: "Interstellar Packages-Watercolours for Friends"
  },

  {
    description: "Interstellar Packages | Postcards from Old Sounds | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Postcards-From-Old-Sounds/16_POSTACARDS-OLD-SOUNDS.png",
    altText: "Interstellar Packages-Postcards from Old Sounds"
  },

  {
    description: "Interstellar Packages | Sakura | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Sakura/17_SAKURA.png",
    altText: "Interstellar Packages-Sakura"
  },

  {
    description: "Interstellar Packages | Poem for a Homewolrd | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Poem-For-A-Homeworld/18_POEM-HOMEWORLD.png",
    altText: "Interstellar Packages-Poem-for-a-Homewolrd"
  },

  {
    description: "Interstellar Packages | Rhombus | 2023",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Rhombus/19_RHOMBUS.png",
    altText: "Interstellar Packages-Rhombus"
  },

  {
    description: "Interstellar Packages | Vignettes of Clouds | 2024",
    imageUrl: "https://storage.googleapis.com/ip-public-bucket1/Vignettes-of-Clouds/20_Vignettes-of-Clouds.png",
    altText: "Interstellar Packages-Vignettes-of-Clouds"
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
    const currentIndex = Math.round(adjustedScrollLeft / projectItemWidth) - 1;
    console.log(`Current index calculated: ${currentIndex}, scrollLeft: ${projectGrid.scrollLeft}, adjustedScrollLeft: ${adjustedScrollLeft}, projectItemWidth: ${projectItemWidth}`);
    return Math.max(0, currentIndex); // Ensure the index does not go below 0
  }

  projectGrid.addEventListener('scroll', () => {
    const index = getCurrentIndex();
    console.log(`Scroll event: new index is ${index}`);
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












