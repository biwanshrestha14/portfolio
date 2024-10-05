
var typed = new Typed(".animate-text",{
    strings : ["Programmer", "Designer", "Web Developer"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true
  })
  function insta() {
    // Open Google in a new tab/window
    window.open("https://www.instagram.com/seekingwisdom.biwan/", "_blank");
}
  function linkedin() {
    // Open Google in a new tab/window
    window.open("https://www.linkedin.com/in/biwan-shrestha-0571142a1/", "_blank");
}
  function github() {
    // Open Google in a new tab/window
    window.open("https://github.com/biwanshrestha14", "_blank");
}
  function facebook() {
    // Open Google in a new tab/window
    window.open("https://www.facebook.com/biwan.shrestha.50/", "_blank");
}
document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").style.left = "0%";
  document.querySelector('.menu').style.display='none';
})
document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".sidebar").style.left = "-120%";
  document.querySelector('.menu').style.display='block';
})

var tl=gsap.timeline();
tl.fromTo('.nav',{y:-20,opacity:0},{y:0,opacity:1,duration:1})
tl.fromTo('#home',{scale:0.25,opacity:0},{scale:1,opacity:1,duration:0.2})
// gsap.fromTo('.profile',{y:100,opacity:0},{y:0,opacity:1,duration:1})
tl.from('.resume',{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:'.resume',
      start:'top 80%',
      end:'top 20%',
      // markers:true,
      scrub:2
    }
  }
)
tl.from('.edu',{
  delay:0.4,
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:'.edu',
      start:'top 90%',
      end:'top 50%',
      // markers:true,
      scrub:2
    },
    stagger:0.2
  }
)
gsap.from('.box',{
    y:50,
    opacity:0,
    scrollTrigger:{
      trigger:'.box',
      start:'top 90%',
      end:'top 70%',
      // markers:true,
      scrub:2
    },
    stagger:0.5,
  })
gsap.from('.lol',{
    x:1000,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
      trigger:'.lol',
      start:'top 50%',
      end:'top 70%',
      // markers:true,
      scrub:2
    },
  })


