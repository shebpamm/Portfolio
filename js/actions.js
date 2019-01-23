var opened = false;

//When a grid element is clicked
var projectClick = function(e) {
    //Get which element was pressed
    e = e || window.event;
    var target = e.target || e.srcElement;
    var box = getClosest(e.target, ".box");
    box.classList.toggle("current")
    if (opened) {
        opened = false;
        document.body.style.overflow = "auto";
    } else {
        opened = true;
        document.body.style.overflow = "hidden";
    }

}

//Bind click to all Grid elements
var classname = document.getElementsByClassName("box");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', projectClick, false);
}

var getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};
