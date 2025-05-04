import initMenu from "./modules/menu.js";
import initSkills from "./modules/skills.js";
import initQualification from "./modules/qualification.js";
import initServices from "./modules/services.js";
import initScroll from "./modules/scroll.js";
import initTheme from "./modules/theme.js";
import initBlogFilter from "./modules/blog-filter.js";

document.addEventListener("DOMContentLoaded", () => {
  //console.log("DOMContentLoaded event fired");

  const runInit = (name, initFunc) => {
    //console.log(`Attempting to run ${name}...`);
    try {
      initFunc();
      //console.log(`${name} executed successfully.`);
    } catch (error) {
      //console.error(`Error executing ${name}:`, error);
    }
  };

  runInit("initTheme", initTheme);
  runInit("initMenu", initMenu);
  runInit("initScroll", initScroll);
  runInit("initSkills", initSkills);
  runInit("initQualification", initQualification);
  runInit("initServices", initServices);
  runInit("initBlogFilter", initBlogFilter);

  //console.log("All initializations attempted.");
});
