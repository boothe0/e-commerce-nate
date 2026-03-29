let timer = null;

let tab_venders = [
  document.getElementsByClassName("tab1")[0],
  document.getElementsByClassName("tab2")[0],
  document.getElementsByClassName("tab3")[0],
  document.getElementsByClassName("tab4")[0],
];

function createSpiral() {
  spiral = document.getElementsByClassName("spiral")[0];
  let top = 0;
  let counter = 0;
  while (top < window.innerHeight) {
    spiral.insertAdjacentHTML(
      "beforeend",
      `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="77"
        viewBox="0 0 36 77"
        fill="none"
        style="position: absolute; top: 0; left: 5px"
      >
        <path
          d="M31 71.5586C28.6926 71.1507 26.4265 70.4631 24.248 69.498C20.5103 67.8423 17.0916 65.405 14.1963 62.3086C11.3004 59.2116 8.98716 55.5168 7.40331 51.4277C5.81934 47.3381 4.99999 42.9441 4.99999 38.5C5 34.0558 5.81934 29.6619 7.40332 25.5723C8.98716 21.4831 11.3004 17.7884 14.1963 14.6914C17.0916 11.595 20.5103 9.15774 24.248 7.50195C26.4265 6.53694 28.6926 5.84928 31 5.44141L31 71.5586Z"
          stroke="black"
          stroke-width="10"
        />
      </svg>
    `,
    );
    spiral.children[counter].style.setProperty("top", top + "px");
    top += 77;
    counter++;
  }
}

// Create the spiral on page resize
window.addEventListener("resize", () => {
  spiral.innerHTML = `<div class="tab"></div>`;
  createSpiral();
});

createSpiral();

/*

Tab animations 

*/

function removeHoverText(vender_number) {
  let vender_name =
    document.getElementsByClassName("vendor-name")[vender_number];
  vender_name.style.setProperty("display", "none");
}

tab_venders.forEach((tab, index) => {
  tab.addEventListener("mouseenter", () => {
    console.log("hovered");
    timer = setTimeout(() => {
      let vender_name = document.getElementsByClassName("vendor-name")[index];
      vender_name.style.setProperty("display", "block");
    }, 300);
  });
});

tab_venders.forEach((tab, index) => {
  tab.addEventListener("mouseleave", () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    removeHoverText(index);
  });
});
