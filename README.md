# InteraktiveList
-This project provides a user interface where users can select destinations from a list, and the selected items are visually updated by moving them to the top of the list.

-In this project, we have an HTML page with a list of destinations that users can interact with and a CSS stylesheet that determine how the elements on the page look, such as colors, fonts, and spacing and style (Flat-Design, Glassmorphism).  

-The JavaScript code is included as an external JavaScript file. Here I added a 'replaceInnerWithListSection' Function, This function is called when "the show the cities" button is clicked. It replaces the content in the "innerSection" with the "listSection"and it selects those elements with the IDs "innerSection" and "listSection" using 'document.getElementById'. I added the 'updateSelectedItems' Function so that when a checkbox is clicked, it updates the list of selected items by moving the selected item to the top of the list. It selects the parent of the "item-content" with the ID "listSection", using checkbox.parentNode.parentNode then it moves the "item-content" to the top of the list by using the prepend() method.
