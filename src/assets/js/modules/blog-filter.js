const initBlogFilter = () => {
  const filterContainer = document.querySelector(".blog-filters");
  const postsList = document.getElementById("blog-posts-list");

  if (!filterContainer || !postsList) {
    return;
  }

  const filterButtons = filterContainer.querySelectorAll(".filter-button");
  const postItems = postsList.querySelectorAll(".blog-post-item");
  const noResultsContainer = postsList.parentNode;

  if (filterButtons.length === 0 || postItems.length === 0) {
    return;
  }

  const filterPosts = tag => {
    let hasVisibleItems = false;
    postItems.forEach(item => {
      const itemTags = item.dataset.tags
        ? item.dataset.tags.split(",").map(t => t.trim())
        : [];
      if (tag === "all" || itemTags.includes(tag)) {
        item.style.display = "";
        hasVisibleItems = true;
      } else {
        item.style.display = "none";
      }
    });

    let noResultsMessage = noResultsContainer.querySelector(
      ".no-results-message"
    );
    if (!hasVisibleItems) {
      if (!noResultsMessage) {
        const messageHTML =
          '<p class="no-results-message section__subtitle">No posts found for this tag.</p>';
        postsList.insertAdjacentHTML("afterend", messageHTML);
      }
    } else {
      if (noResultsMessage) {
        noResultsMessage.remove();
      }
    }
  };

  filterButtons.forEach(button => {
    button.addEventListener("click", event => {
      const selectedTag = button.dataset.tag;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      let noResultsMessage = noResultsContainer.querySelector(
        ".no-results-message"
      );
      if (noResultsMessage) {
        noResultsMessage.remove();
      }

      filterPosts(selectedTag);
    });
  });

  const initialActiveButton = filterContainer.querySelector(
    ".filter-button.active"
  );
  const initialTag = initialActiveButton
    ? initialActiveButton.dataset.tag
    : "all";
  filterPosts(initialTag);
};

export default initBlogFilter;
