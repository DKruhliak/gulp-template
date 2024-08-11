//Приклад структури HTML
//<div data-tab-container>
//  <div>
//    <button data-tab-button id="tab-1" aria-selected="true" role="tab">Tab 1</button>
//    <button data-tab-button id="tab-2" aria-selected="false" role="tab">Tab 2</button>
//  </div>
//  <div>
//   <div data-tab-content class="tab-content" aria-labelledby="tab-1" role="tabpanel">
//      Content for Tab 1
//   </div>
//   <div data-tab-content class="tab-content" aria-labelledby="tab-2" role="tabpanel">
//      Content for Tab 2
//   </div>
// </div>
//</div>;

const tabContainer = document.querySelector("[ data-tab-container ]");
const tabButtons = Array.from(tabContainer.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(
  tabContainer.querySelectorAll('[role="tabpanel"]')
);

export function initTabContainers() {
  const IdSelectedTab = tabButtons
    .find((panel) => panel.getAttribute("aria-selected") === "true")
    .getAttribute("id");

  tabPanels.forEach((panel) => {
    if (panel.getAttribute("aria-labelledby") === IdSelectedTab) {
      panel.classList.add("_tab-active");
    } else {
      panel.classList.remove("_tab-active");
    }
  });
}

initTabContainers();

function handleTabClick(event) {
  // Ховаємо всі елементи tab panels (вміст табів)
  tabPanels.forEach((panel) => {
    panel.classList.remove("_tab-active");
  });
  // Встановлюємо стан selected для всіх табів рівним false
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  // Для "клікнутого" таба встановлюємо значення selected рівне true
  event.currentTarget.setAttribute("aria-selected", true);

  // Знаходимо tabPanel для "клікнутого" таба і відображаємо
  const { id } = event.currentTarget;

  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.classList.add("_tab-active");
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
