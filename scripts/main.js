// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// $("a").click(function(e) {
//   $("a").removeClass('highlight');
//   $(this).addClass('highlight');
//   e.stopPropagation();
// });
var menu = document.getElementById("menu");
var lis = menu.getElementsByTagName("p");

for (var i = 0; i < lis.length; i++) {
  var li = lis[i];
  li.addEventListener("mouseover", function() {
    this.getElementsByTagName("a")[0].style.color = "#ff4594";
  });
  li.addEventListener("mouseout", function() {
    this.getElementsByTagName("a")[0].style.color = "#000000";
  });
}
