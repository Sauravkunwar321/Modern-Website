

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
    videos: ["./header.mp4", "./header2.mp4", "./header.mp4"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });

  gsap.to(".f-leftelem", {
    scrollTrigger:{
        trigger: "#f-images",
        pin: true, 
        pinSpacing: true,
        start: "top top",
        end:"bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
  })

// document.addEventListener("DOMContentLoaded", function(){



  let sections = document.querySelectorAll(".f-leftelem");
  
  Shery.imageEffect(".images", {
    style: 5,
    // config: {"onMouse": {"value": 1},
    
    slideStyle: (setScroll) => {
      sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
                setScroll(prog.progress+index);

            },
        });
      });
    },
  });


  
// });