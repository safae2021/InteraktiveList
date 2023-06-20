function replaceInnerWithListSection() {
   var innerSection = document.getElementById("innerSection");
   var cardSection = document.getElementById("listSection");
   innerSection.style.display = "none";
   cardSection.style.display = "block";
}

function updateSelectedItems(checkbox) {
   if (checkbox.checked) {
     checkbox.parentNode.parentNode.prepend(checkbox.parentNode);
   }
 }
 
 
 


 