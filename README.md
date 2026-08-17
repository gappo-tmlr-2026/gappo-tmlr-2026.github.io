# GAPPO project page

Static GitHub Pages site for **Trust What You Can Verify: Gradient-Aware Pathwise Policy Optimization**.

## Local preview

From this directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## G1 rollout media

The result videos live in `static/videos/g1/` and are registered in `static/js/experiments.js`. The page groups them into flat- and rough-terrain comparisons, an iteration-2500 comparison, and additional GAPPO demonstrations. The featured rough-terrain overview is declared directly in `index.html`.

Videos use visibility-aware muted playback: only clips currently in view autoplay, and automatic playback is disabled when the browser requests reduced motion.

## Source and license

This project page is adapted from the [Nerfies project page](https://github.com/nerfies/nerfies.github.io), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
