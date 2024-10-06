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
				$dataDuration.value = "1000";
				$dataDelay.value = "700";
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
				$link.innerHTML = project[i].link;

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
				$projectsWrapperItem.appendChild($textContentWrapper);
				$projectsWrapperItem.appendChild($photo);
				$photo.setAttributeNode($photoAlt);
				$aosWrapper.appendChild($projectsWrapperItem);

				if (i + 1 < project.length) {
					$aosWrapper.appendChild($divider);
				}

				$wrapper.appendChild($aosWrapper);

				// $aosWrapper.addEventListener("click", () => {
				//   addModal(
				//     $name.innerHTML,
				//     $description.innerHTML,
				//     $photo.src,
				//     $toolsUl.innerHTML,
				//     $link.innerHTML
				//   );
				// });
			}
		});
}

// function addModal(name, description, photo, tools, link) {
//   const $modal = document.querySelector(".projects__modal");
//   const $modalContent = document.querySelector(".projects__modal__content");
//   const $modalName = document.createElement("h1");
//   const $modalPhoto = document.createElement("img");
//   const $modalDescription = document.createElement("p");
//   const $modalTools = document.createElement("ul");
//   const $modalLink = document.createElement("a");
//   const $pageBlur = document.querySelectorAll(".blur__bg");
//   const $body = document.querySelector("body");

//   $modalName.classList.add("title");

//   $modalName.innerHTML = name;
//   $modalPhoto.src = photo;
//   $modalDescription.innerHTML = description;
//   $modalTools.innerHTML = tools;
//   $modalLink.innerHTML = link;
//   $modalLink.href = link;
//   $modalLink.target = "_blank";

//   $modalContent.appendChild($modalName);
//   $modalContent.appendChild($modalPhoto);
//   $modalContent.appendChild($modalDescription);
//   $modalContent.appendChild($modalTools);
//   $modalContent.appendChild($modalLink);

//   $modal.style.display = "flex";

//   $body.style.overflow = "hidden";

//   for (let i = 0; i < $pageBlur.length; i++) {
//     $pageBlur[i].style.filter = "blur(5px)";
//   }
// }
