/*
The Next.js Image component, next/image, is an extension of the HTML <img> element, evolved for the modern web.
It includes a variety of built-in performance optimizations to help you achieve good Core Web Vitals.
These scores are an important measurement of user experience on your website, and are factored into Google's search rankings.

Some of the optimizations built into the Image component include:

* Improved Performance: Always serve correctly sized image for each device, using modern image formats.
* Visual Stability: Prevent Cumulative Layout Shift automatically.
* Faster Page Loads: Images are only loaded when they enter the viewport, with optional blur-up placeholders
* Asset Flexibility: On-demand image resizing, even for images stored on remote servers

 */

import React from 'react';

export default () => <div>
  <img src={"/humus.jpg"} />
</div>
