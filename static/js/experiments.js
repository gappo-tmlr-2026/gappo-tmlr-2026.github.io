// Public content registry for the Unitree G1 rollout galleries.
// The gallery key maps each clip to its labeled section in index.html.
window.GAPPO_EXPERIMENTS = Object.freeze([
  Object.freeze({
    id: "g1-gappo-flat",
    gallery: "flat",
    title: "GAPPO",
    terrain: "G1 · Flat",
    status: "ready",
    caption: "Thirty-second flat-terrain rollout of the verified, trust-gated pathwise policy.",
    videoSrc: "./static/videos/g1/gappo_flat.mp4",
    posterSrc: "./static/images/g1/gappo_flat.jpg",
    alt: "Unitree G1 executing the GAPPO policy on flat terrain."
  }),
  Object.freeze({
    id: "g1-ppo-flat",
    gallery: "flat",
    title: "PPO",
    terrain: "G1 · Flat",
    status: "ready",
    caption: "Thirty-second flat-terrain rollout of the standard PPO reference policy.",
    videoSrc: "./static/videos/g1/ppo_flat.mp4",
    posterSrc: "./static/images/g1/ppo_flat.jpg",
    alt: "Unitree G1 executing the PPO policy on flat terrain."
  }),
  Object.freeze({
    id: "g1-reppo-flat",
    gallery: "flat",
    title: "REPPO",
    terrain: "G1 · Flat",
    status: "ready",
    caption: "Thirty-second flat-terrain rollout of the entropy-controlled pathwise baseline.",
    videoSrc: "./static/videos/g1/reppo_flat.mp4",
    posterSrc: "./static/images/g1/reppo_flat.jpg",
    alt: "Unitree G1 executing the REPPO policy on flat terrain."
  }),
  Object.freeze({
    id: "g1-gappo-rough-final",
    gallery: "rough",
    title: "GAPPO",
    terrain: "G1 · Rough",
    status: "ready",
    caption: "Thirty-second rollout across the rough-terrain evaluation field.",
    videoSrc: "./static/videos/g1/gappo_rough_final.mp4",
    posterSrc: "./static/images/g1/gappo_rough_final.jpg",
    alt: "Unitree G1 executing the GAPPO policy across rough terrain."
  }),
  Object.freeze({
    id: "g1-ppo-rough-final",
    gallery: "rough",
    title: "PPO",
    terrain: "G1 · Rough",
    status: "ready",
    caption: "Thirty-second PPO rollout under the same rough-terrain setting.",
    videoSrc: "./static/videos/g1/ppo_rough_final.mp4",
    posterSrc: "./static/images/g1/ppo_rough_final.jpg",
    alt: "Unitree G1 executing the PPO policy across rough terrain."
  }),
  Object.freeze({
    id: "g1-reppo-rough-final",
    gallery: "rough",
    title: "REPPO",
    terrain: "G1 · Rough",
    status: "ready",
    caption: "Thirty-second REPPO rollout under the same rough-terrain setting.",
    videoSrc: "./static/videos/g1/reppo_rough_final.mp4",
    posterSrc: "./static/images/g1/reppo_rough_final.jpg",
    alt: "Unitree G1 executing the REPPO policy across rough terrain."
  }),
  Object.freeze({
    id: "g1-gappo-rough-iter2500",
    gallery: "mid-training",
    title: "GAPPO · iteration 2500",
    terrain: "G1 · Rough",
    status: "ready",
    caption: "Mid-training rough-terrain behavior at iteration 2500.",
    videoSrc: "./static/videos/g1/gappo_rough_iter2500.mp4",
    posterSrc: "./static/images/g1/gappo_rough_iter2500.jpg",
    alt: "Unitree G1 GAPPO rough-terrain rollout at training iteration 2500."
  }),
  Object.freeze({
    id: "g1-ppo-rough-iter2500",
    gallery: "mid-training",
    title: "PPO · iteration 2500",
    terrain: "G1 · Rough",
    status: "ready",
    caption: "Matched PPO rough-terrain behavior at iteration 2500.",
    videoSrc: "./static/videos/g1/ppo_rough_iter2500.mp4",
    posterSrc: "./static/images/g1/ppo_rough_iter2500.jpg",
    alt: "Unitree G1 PPO rough-terrain rollout at training iteration 2500."
  }),
  Object.freeze({
    id: "g1-gappo-flat-demo",
    gallery: "demos",
    title: "Flat-terrain demonstration",
    terrain: "GAPPO · Flat",
    status: "ready",
    caption: "Additional deterministic GAPPO demonstration on the flat task.",
    videoSrc: "./static/videos/g1/gappo_flat_demo.mp4",
    posterSrc: "./static/images/g1/gappo_flat_demo.jpg",
    alt: "Additional Unitree G1 GAPPO demonstration on flat terrain."
  }),
  Object.freeze({
    id: "g1-gappo-rough-demo",
    gallery: "demos",
    title: "Rough-terrain demonstration",
    terrain: "GAPPO · Rough",
    status: "ready",
    caption: "Additional deterministic GAPPO demonstration on rough terrain.",
    videoSrc: "./static/videos/g1/gappo_rough_demo.mp4",
    posterSrc: "./static/images/g1/gappo_rough_demo.jpg",
    alt: "Additional Unitree G1 GAPPO demonstration on rough terrain."
  })
]);
