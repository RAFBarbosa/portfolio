export default function Request() {
  const wrapper = document.querySelector(".projects__wrapper");

  fetch("../public/projects.json")
    .then(function (data) {
      return data.json();
    })
    .then((data) => {
      const project = data;

      for (let i = 0; i < project.length; i++) {
        const projects__wrapper__item = document.createElement("article");
        const photo = document.createElement("img");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const toolsTitle = document.createElement("h3");
        const toolsUl = document.createElement("ul");

        // ---- FADE IN TRANSITION ---- //
        const dataAos = document.createAttribute("data-aos");
        const dataDuration = document.createAttribute("data-aos-duration");
        const dataDelay = document.createAttribute("data-aos-delay");

        dataAos.value = ("fade-up");
        dataDuration.value = ("1000");
        dataDelay.value = ("500" * (i/5));

        projects__wrapper__item.setAttributeNode(dataAos);
        projects__wrapper__item.setAttributeNode(dataDuration);
        projects__wrapper__item.setAttributeNode(dataDelay);
        // ---------------------------- //

        photo.src = project[i].photo;
        name.textContent = project[i].name;
        description.textContent = project[i].description;
        toolsTitle.textContent = "Tools used on this project:";

        const tools = project[i].tools;
        for (var j = 0; j < tools.length; j++) {
          const listItem = document.createElement("li");
          listItem.textContent = "+ " + tools[j];
          toolsUl.appendChild(listItem);
        }

        projects__wrapper__item.appendChild(photo);
        projects__wrapper__item.appendChild(name);
        projects__wrapper__item.appendChild(description);
        projects__wrapper__item.appendChild(toolsTitle);
        projects__wrapper__item.appendChild(toolsUl);

        wrapper.appendChild(projects__wrapper__item);
      }
    });
}