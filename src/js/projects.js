export default function Request() {
  const wrapper = document.querySelector(".projects__wrapper");

  fetch("../public/projects.json")
    .then(function (data) {
      return data.json();
    })
    .then((data) => {
      const project = data;

      for (let i = 0; i < project.length; i++) {
        const aos__wrapper = document.createElement("div");
        const projects__wrapper__item = document.createElement("div");
        const photo = document.createElement("img");
        const photoAlt = document.createAttribute("alt");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const toolsTitle = document.createElement("h3");
        const toolsUl = document.createElement("ul");

        projects__wrapper__item.classList.add("projects__wrapper__item");

        // ---- AOS FADE IN TRANSITION ---- //
        const dataAos = document.createAttribute("data-aos");
        const dataDuration = document.createAttribute("data-aos-duration");
        const dataDelay = document.createAttribute("data-aos-delay");
        const dataOnce = document.createAttribute("data-aos-once");

        dataAos.value = "fade-up";
        dataDuration.value = "1000";
        dataDelay.value = "500" * (i / 5);
        dataOnce.value = "true";

        aos__wrapper.setAttributeNode(dataAos);
        aos__wrapper.setAttributeNode(dataDuration);
        aos__wrapper.setAttributeNode(dataDelay);
        aos__wrapper.setAttributeNode(dataOnce);
        // -------------------------------- //

        photo.src = project[i].photo;
        name.textContent = project[i].name;
        photoAlt.value = project[i].name + " photo";
        description.textContent = project[i].description;
        toolsTitle.textContent = "Tools used on this project:";

        const tools = project[i].tools;
        for (var j = 0; j < tools.length; j++) {
          const listItem = document.createElement("li");
          listItem.textContent = "+ " + tools[j];
          toolsUl.appendChild(listItem);
        }

        projects__wrapper__item.appendChild(photo);
        photo.setAttributeNode(photoAlt);
        projects__wrapper__item.appendChild(name);
        projects__wrapper__item.appendChild(description);
        projects__wrapper__item.appendChild(toolsTitle);
        projects__wrapper__item.appendChild(toolsUl);
        aos__wrapper.appendChild(projects__wrapper__item);

        wrapper.appendChild(aos__wrapper);
      }
    });
}
