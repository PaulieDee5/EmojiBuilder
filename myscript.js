  // source:https://www.kirupa.com/html5/drag.htm  

    var container = document.querySelector("#container");
    var activeItem = null;

    var active = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {

      if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart") {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            console.log("doing something!");
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }




// var dragItem = document.querySelector("#yellowCircle");
// var dragItem = document.querySelector("#pinkCircle");
// var dragItem = document.querySelector("#blueCircle");
// var container = document.querySelector("#container");


//     var active = false;
//     var currentX;
//     var currentY;
//     var initialX;
//     var initialY;
//     var xOffset = 0;
//     var yOffset = 0;

//     container.addEventListener("touchstart", dragStart, false);
//     container.addEventListener("touchend", dragEnd, false);
//     container.addEventListener("touchmove", drag, false);

//     container.addEventListener("mousedown", dragStart, false);
//     container.addEventListener("mouseup", dragEnd, false);
//     container.addEventListener("mousemove", drag, false);

//     function dragStart(e) {
//       if (e.type === "touchstart") {
//         initialX = e.touches[0].clientX - xOffset;
//         initialY = e.touches[0].clientY - yOffset;
//       } else {
//         initialX = e.clientX - xOffset;
//         initialY = e.clientY - yOffset;
//       }

//       if (e.target === dragItem) {
//         active = true;
//       }
//     }

//     function dragEnd(e) {
//       initialX = currentX;
//       initialY = currentY;

//       active = false;
//     }

//     function drag(e) {
//       if (active) {
      
//         e.preventDefault();
      
//         if (e.type === "touchmove") {
//           currentX = e.touches[0].clientX - initialX;
//           currentY = e.touches[0].clientY - initialY;
//         } else {
//           currentX = e.clientX - initialX;
//           currentY = e.clientY - initialY;
//         }

//         xOffset = currentX;
//         yOffset = currentY;

//         setTranslate(currentX, currentY, dragItem);
//       }
//     }

//     function setTranslate(xPos, yPos, el) {
//       el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
//     }