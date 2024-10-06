export default function Request() {
	const $wrapper = document.querySelector(".projects__wrapper");

	fetch("../public/projects.json")
		.then(function (data) {
			return data.json();
		})
		.then((data) => {
			const project = data;

			for (let i = 0; i < project.length; i++) {
				const $aosWrapper = document.createElement("div");
				const $projectsWrapperItem = document.createElement("div");
				const $textContentWrapper = document.createElement("article");
				const $photo = document.createElement("img");
				const $photoAlt = document.createAttribute("alt");
				const $name = document.createElement("h2");
				const $description = document.createElement("p");
				const $toolsTitle = document.createElement("h3");
				const $toolsUl = document.createElement("ul");
				const $link = document.createElement("a");
				const $divider = document.createElement("hr");

				$projectsWrapperItem.classList.add("projects__wrapper__item");
				$textContentWrapper.classList.add(
					"projects__wrapper__item__text"
				);

				// ---- AOS FADE IN TRANSITION ---- //
				const $dataAos = document.createAttribute("data-aos");
				const $dataDuration =
					document.createAttribute("data-aos-duration");
				const $dataDelay = document.createAttribute("data-aos-delay");
				const $dataOnce = document.createAttribute("data-aos-once");

				$dataAos.value = "fade-up";
				$dataDuration.value = "500";
				$dataDelay.value = "250";
				$dataOnce.value = "true";

				$aosWrapper.setAttributeNode($dataAos);
				$aosWrapper.setAttributeNode($dataDuration);
				$aosWrapper.setAttributeNode($dataDelay);
				$aosWrapper.setAttributeNode($dataOnce);
				// -------------------------------- //

				$photo.src = project[i].photo;
				$name.innerHTML = project[i].name;
				$photoAlt.value = project[i].name + " photo";
				$description.innerHTML = project[i].description;
				$toolsTitle.innerHTML = "Tools used in this project:";
				$link.innerHTML = `Check it out <span class="material-symbols-outlined icon">arrow_forward_ios</span>`;
				$link.href = project[i].link;
				$link.target = "_blank";

				const tools = project[i].tools;

				for (let j = 0; j < tools.length; j++) {
					const listItem = document.createElement("li");
					listItem.textContent = "+ " + tools[j];
					$toolsUl.appendChild(listItem);
				}

				$textContentWrapper.appendChild($name);
				$textContentWrapper.appendChild($description);
				$textContentWrapper.appendChild($toolsTitle);
				$textContentWrapper.appendChild($toolsUl);
				$textContentWrapper.appendChild($link);
				$projectsWrapperItem.appendChild($textContentWrapper);
				$projectsWrapperItem.appendChild($photo);
				$photo.setAttributeNode($photoAlt);
				$aosWrapper.appendChild($projectsWrapperItem);

				if (i + 1 < project.length) {
					$aosWrapper.appendChild($divider);
				}

				$wrapper.appendChild($aosWrapper);
			}
		});
}
