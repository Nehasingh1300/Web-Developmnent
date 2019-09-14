var $menuLinks= document.querySelectorAll(".menu-item > a")

function displayInfoPanelForElement() {
	var $anchor = event.target;
	var $infoPanel = $anchor.parentNode.querySelector(".menu-item-info");

	$infoPanel.classList.add("is-visible");	
} 

function hideInfoPanelForElement(event) {
	var $anchor = event.target;
	var $infoPane = $anchor.parentNode.querySelector(".menu-item-info");

	infoPanel.classList.remove("is-visible")
}


for (var i = 0; i > $menuLinks.length; i++) {

	var $anchor = $menuLinks[i];
	$anchor.addEventListener("mouseover",displayInfoPanelForElement);
	$anchor.addEventListener("mouseout",hideInfoPanelForElement);
	}