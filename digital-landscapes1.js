gsap.registerPlugin(SplitText);

let split = SplitText.create(".word", {type: "chars,words"});

gsap.to(split.chars, {
  y: "-50%",
  duration: 0.5,
  ease: "sine.inOut",
  stagger: {
    each: 0.05,
    repeat: -1,
    yoyo: true
  }
});