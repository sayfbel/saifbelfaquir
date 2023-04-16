
  //scroll logo color
  const logo = document.getElementById('LOGO');
  const head = document.getElementById('headre');
  window.onscroll = function() {
    let value = scrollY;
    if(value >= 98){
        head.style.backgroundColor = '#fff'; 
        logo.style.color = '#e09018';
    }
    else{
        logo.style.color = '#fff';
        head.style.backgroundColor = 'transparent';
    }
}
//burger
const burger = document.getElementById('burger');
const div = document.getElementById('navmobile');
burger.addEventListener('change', function() {
    if(this.checked){
        div.style.display = 'block';
        head.style.backgroundColor = '#fff'; 
        logo.style.color = '#e09018';
    }
    else{
        div.style.display = 'none';
    }
  });
function search_meals() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('meals');
  
    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "list-item";
      }
    }
  
    // Check if enter key is pressed (keyCode 13)
    if (event.keyCode === 13) {
      window.location.href = "#MENU";
    }
  }
  // Get menu categories and info categories
const menuCategoriesPIZZA = document.querySelectorAll('.PIZZA');
const infoCategoriesPIZZA = document.querySelectorAll('.info-categoris');
const menuinfoCategoriesPIZZA = document.querySelectorAll('.info-pizza');

// Add event listeners for hovering over menu categories
menuCategoriesPIZZA.forEach((menuCategoryPIZZA, index) => {
  menuCategoryPIZZA.addEventListener('mouseenter', () => {
    // Hide all info categories
    infoCategoriesPIZZA.forEach(infoCategoryPIZZA => {
      infoCategoryPIZZA.style.display = 'none';
    });
    menuinfoCategoriesPIZZA.forEach(menuinfoCategoryPIZZA => {
      menuinfoCategoryPIZZA.style.display = 'none';
    });
    // Show corresponding info category for hovered menu category
    infoCategoriesPIZZA[index].style.display = 'block';
    menuinfoCategoriesPIZZA[index].style.display = 'block';
  });

  menuCategoryPIZZA.addEventListener('mouseleave', () => {
    // Hide all info categories when mouse leaves menu category
    infoCategoriesPIZZA.forEach(infoCategoryPIZZA => {
      infoCategoryPIZZA.style.display = 'none';
    });
    menuinfoCategoriesPIZZA.forEach(menuinfoCategoryPIZZA => {
      menuinfoCategoryPIZZA.style.display = 'none';
    });
  });
});
  // Get menu categories and info categories
  const menuCategoriesBURGERS = document.querySelectorAll('.BURGERS');
  const infoCategoriesBURGERS = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesBURGERS = document.querySelectorAll('.info-BURGERS');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesBURGERS.forEach((menuCategoryBURGERS, index) => {
    menuCategoryBURGERS.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesBURGERS.forEach(infoCategoryBURGERS => {
        infoCategoryBURGERS.style.display = 'none';
      });
      menuinfoCategoriesBURGERS.forEach(menuinfoCategoryBURGERS => {
        menuinfoCategoryBURGERS.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesBURGERS[index].style.display = 'block';
      menuinfoCategoriesBURGERS[index].style.display = 'block';
    });
  
    menuCategoryBURGERS.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesBURGERS.forEach(infoCategoryBURGERS => {
        infoCategoryBURGERS.style.display = 'none';
      });
      menuinfoCategoriesBURGERS.forEach(menuinfoCategoryBURGERS => {
        menuinfoCategoryBURGERS.style.display = 'none';
      });
    });
  });
  // Get menu categories and info categories
  const menuCategoriesSALADES = document.querySelectorAll('.SALADES');
  const infoCategoriesSALADES = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesSALADES = document.querySelectorAll('.info-SALADES');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesSALADES.forEach((menuCategorySALADES, index) => {
    menuCategorySALADES.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesSALADES.forEach(infoCategorySALADES => {
        infoCategorySALADES.style.display = 'none';
      });
      menuinfoCategoriesSALADES.forEach(menuinfoCategorySALADES => {
        menuinfoCategorySALADES.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesSALADES[index].style.display = 'block';
      menuinfoCategoriesSALADES[index].style.display = 'block';
    });
  
    menuCategorySALADES.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesSALADES.forEach(infoCategorySALADES => {
        infoCategorySALADES.style.display = 'none';
      });
      menuinfoCategoriesSALADES.forEach(menuinfoCategorySALADES => {
        menuinfoCategorySALADES.style.display = 'none';
      });
    });
  });
  //SANDWICHS
  const menuCategoriesSANDWICHS = document.querySelectorAll('.SANDWICHS');
  const infoCategoriesSANDWICHS = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesSANDWICHS = document.querySelectorAll('.info-SANDWICHS');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesSANDWICHS.forEach((menuCategorySANDWICHS, index) => {
    menuCategorySANDWICHS.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesSANDWICHS.forEach(infoCategorySANDWICHS => {
        infoCategorySANDWICHS.style.display = 'none';
      });
      menuinfoCategoriesSANDWICHS.forEach(menuinfoCategorySANDWICHS => {
        menuinfoCategorySANDWICHS.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesSANDWICHS[index].style.display = 'block';
      menuinfoCategoriesSANDWICHS[index].style.display = 'block';
    });
  
    menuCategorySANDWICHS.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesSANDWICHS.forEach(infoCategorySANDWICHS => {
        infoCategorySANDWICHS.style.display = 'none';
      });
      menuinfoCategoriesSANDWICHS.forEach(menuinfoCategorySANDWICHS => {
        menuinfoCategorySANDWICHS.style.display = 'none';
      });
    });
  });
  //PASTA
  const menuCategoriesPASTA = document.querySelectorAll('.PASTA');
  const infoCategoriesPASTA = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesPASTA = document.querySelectorAll('.info-PASTA');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesPASTA.forEach((menuCategoryPASTA, index) => {
    menuCategoryPASTA.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesPASTA.forEach(infoCategoryPASTA => {
        infoCategoryPASTA.style.display = 'none';
      });
      menuinfoCategoriesPASTA.forEach(menuinfoCategoryPASTA => {
        menuinfoCategoryPASTA.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesPASTA[index].style.display = 'block';
      menuinfoCategoriesPASTA[index].style.display = 'block';
    });
  
    menuCategoryPASTA.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesPASTA.forEach(infoCategoryPASTA => {
        infoCategoryPASTA.style.display = 'none';
      });
      menuinfoCategoriesPASTA.forEach(menuinfoCategoryPASTA => {
        menuinfoCategoryPASTA.style.display = 'none';
      });
    });
  });
  //CREPES
  const menuCategoriesCREPES = document.querySelectorAll('.CREPES');
  const infoCategoriesCREPES = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesCREPES = document.querySelectorAll('.info-CREPES');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesCREPES.forEach((menuCategoryCREPES, index) => {
    menuCategoryCREPES.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesCREPES.forEach(infoCategoryCREPES => {
        infoCategoryCREPES.style.display = 'none';
      });
      menuinfoCategoriesCREPES.forEach(menuinfoCategoryCREPES => {
        menuinfoCategoryCREPES.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesCREPES[index].style.display = 'block';
      menuinfoCategoriesCREPES[index].style.display = 'block';
    });
  
    menuCategoryCREPES.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesCREPES.forEach(infoCategoryCREPES => {
        infoCategoryCREPES.style.display = 'none';
      });
      menuinfoCategoriesCREPES.forEach(menuinfoCategoryCREPES => {
        menuinfoCategoryCREPES.style.display = 'none';
      });
    });
  });
  //PLATS
  const menuCategoriesPLATS = document.querySelectorAll('.PLATS');
  const infoCategoriesPLATS = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesPLATS = document.querySelectorAll('.info-PLATS');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesPLATS.forEach((menuCategoryPLATS, index) => {
    menuCategoryPLATS.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesPLATS.forEach(infoCategoryPLATS => {
        infoCategoryPLATS.style.display = 'none';
      });
      menuinfoCategoriesPLATS.forEach(menuinfoCategoryPLATS => {
        menuinfoCategoryPLATS.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesPLATS[index].style.display = 'block';
      menuinfoCategoriesPLATS[index].style.display = 'block';
    });
  
    menuCategoryPLATS.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesPLATS.forEach(infoCategoryPLATS => {
        infoCategoryPLATS.style.display = 'none';
      });
      menuinfoCategoriesPLATS.forEach(menuinfoCategoryPLATS => {
        menuinfoCategoryPLATS.style.display = 'none';
      });
    });
  });
  //DRINKS
  const menuCategoriesDRINKS = document.querySelectorAll('.DRINKS');
  const infoCategoriesDRINKS = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesDRINKS = document.querySelectorAll('.info-DRINKS');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesDRINKS.forEach((menuCategoryDRINKS, index) => {
    menuCategoryDRINKS.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesDRINKS.forEach(infoCategoryDRINKS => {
        infoCategoryDRINKS.style.display = 'none';
      });
      menuinfoCategoriesDRINKS.forEach(menuinfoCategoryDRINKS => {
        menuinfoCategoryDRINKS.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesDRINKS[index].style.display = 'block';
      menuinfoCategoriesDRINKS[index].style.display = 'block';
    });
  
    menuCategoryDRINKS.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesDRINKS.forEach(infoCategoryDRINKS => {
        infoCategoryDRINKS.style.display = 'none';
      });
      menuinfoCategoriesDRINKS.forEach(menuinfoCategoryDRINKS => {
        menuinfoCategoryDRINKS.style.display = 'none';
      });
    });
  });
  //SWEETS
  const menuCategoriesSWEETS = document.querySelectorAll('.SWEETS');
  const infoCategoriesSWEETS = document.querySelectorAll('.info-categoris');
  const menuinfoCategoriesSWEETS = document.querySelectorAll('.info-SWEETS');
  
  // Add event listeners for hovering over menu categories
  menuCategoriesSWEETS.forEach((menuCategorySWEETS, index) => {
    menuCategorySWEETS.addEventListener('mouseenter', () => {
      // Hide all info categories
      infoCategoriesSWEETS.forEach(infoCategorySWEETS => {
        infoCategorySWEETS.style.display = 'none';
      });
      menuinfoCategoriesSWEETS.forEach(menuinfoCategorySWEETS => {
        menuinfoCategorySWEETS.style.display = 'none';
      });
      // Show corresponding info category for hovered menu category
      infoCategoriesSWEETS[index].style.display = 'block';
      menuinfoCategoriesSWEETS[index].style.display = 'block';
    });
  
    menuCategorySWEETS.addEventListener('mouseleave', () => {
      // Hide all info categories when mouse leaves menu category
      infoCategoriesSWEETS.forEach(infoCategorySWEETS => {
        infoCategorySWEETS.style.display = 'none';
      });
      menuinfoCategoriesSWEETS.forEach(menuinfoCategorySWEETS => {
        menuinfoCategorySWEETS.style.display = 'none';
      });
    });
  });