---
layout: layouts/single.njk
title: My Productivity Setup
description: Hey everyone! Today, I want to share my productivity setup on my iPhone. It’s designed to help me stay focused, minimize distractions, and make the most of my time. Here’s how I do it...
tags: ["post", "Software"]
date: "2025-05-04"
---

Hey everyone! Today, I want to share my productivity setup on my phone and computer.

It’s designed to help me stay focused, minimize distractions, and make the most of my time. Here’s how I do it:

## Grayscale Mode: Less Color, More Focus

I use the **Color Filter** feature on iPhone, activated through a custom shortcut. [Here’s the link to the shortcut](https://www.icloud.com/shortcuts/078a87e96db140459898224e89bd8161).

**What It Does:**

This shortcut instantly switches my iPhone screen to black and white.

**Why Grayscale Mode?**

- **Reduction of Distractions:** Without vibrant colors, apps are less enticing, helping to curb compulsive social media scrolling and unnecessary app usage.

- **Improved Focus:** By removing the attention-grabbing effect of bright colors, it’s easier to concentrate on the content I’m working on.

- **Eye Comfort:** Grayscale reduces visual stimuli and contrast, which is easier on the eyes, helping to alleviate digital eye strain and headaches.

## Grayscale Mode: for social media at desktop web browser

You can use my grayscale script with the [Tampermonkey plugin](https://www.tampermonkey.net/) to automatically apply a grayscale filter to social media sites.

First install the plugin then active developer mode.

Finaly just copy and paste the script the platform now looks in a grayscale.

```javascript
// ==UserScript==
// @name         Grayscale for Social Media
// @match        *://x.com/*
// @match        *://*.x.com/*
// @match        *://*.facebook.com/*
// @match        *://*.twitter.com/*
// @match        *://*.instagram.com/*
// @match        *://*.linkedin.com/*
// @match        *://*.youtube.com/*
// @match        *://*.web.whatsapp.com/*
// @match        *://*.substack.com/*
// @match        *://*.discord.com/*
// @grant        none
// ==/UserScript==

(function() {
  const applyGrayscale = () => {
    document.body.style.filter = "grayscale(100%)";
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyGrayscale);
  } else {
    applyGrayscale();
  }
})();
```
![Tampermonkey](/assets/img/Tampermonkey-plugin.png)

![Gray Scale Sample](/assets/img/gray-scale-sample.png)


## Work Mode: Maximum Focus During Office Hours

Through the **Automation** feature in the Shortcuts app, I’ve configured my phone to automatically enable Grayscale Mode when **Work Mode** is active. This is set from **Monday to Friday, 9:00 a.m. to 6:00 p.m.**

![Work Mode Config](/assets/img/work-mode-config.png)

**How It Works:**

- **Notifications Silenced:** Almost all notifications are turned off, except for essential work apps. (I generally keep notifications disabled, except for important apps like banking or family messaging.)

- **Minimalist Home Screen:** My main screen is customized to display only the apps I need for work, removing any distractions.

**Benefits of Work Mode:**

- **Fewer Distractions:** By silencing notifications, I avoid constant interruptions that break my focus and reduce productivity.

- **Better Time Management:** Without the temptation of alerts, I can manage my time more effectively, maintaining a healthier work-life balance.

- **Reduced Stress:** Turning off non-essential notifications helps lower stress and anxiety, allowing for better mental well-being.

![Work Mode Home screen](/assets/img/Iphone-home-screen-bw.png)


## No Social Media: Regaining Control of My Time

I used to spend over **4 hours per day** on Instagram, Facebook, Twitter, and I always had YouTube playing in the background. It was overwhelming and unproductive. Here’s how I changed that:

**What I Did:**

- **Deleted Social Media Apps** from my phone.

- Installed the [**Freedom App**](https://freedom.to/) (Iphone and Macbook), which blocks apps and websites. It functions like a VPN, effectively cutting off digital distractions on both my phone and computer.

![Freedom Dashboar](/assets/img/Freedom-Dashboard.png)

**The Results:**

- I now spend less than **30 minutes per day** on social media, mainly for responding to messages or occasionally posting. After that, I close the apps immediately.

- **Improved Sleep:** No more late-night scrolling.

- **Healthier Lifestyle:** More time for the gym, reading, movies, and anime.

- **Enhanced Focus:** Greater mental clarity and energy throughout the day.

## Final Thoughts: A Radical but Rewarding Change

I know this setup might seem extreme, but it has significantly improved my productivity, focus, and overall well-being. I feel happier and more energized with these changes.

If you’re curious about the impact of digital distractions and want to take control of your time, I highly recommend these books:

|                 **Book**                 |                                      **Description**                                       |
| :--------------------------------------: | :----------------------------------------------------------------------------------------: |
|         Deep Work by Cal Newport         |           Learn how to focus without distraction on cognitively demanding tasks.           |
|    Digital Minimalism by Cal Newport     |         Discover how to use technology more intentionally to live a focused life.          |
| The Anxious Generation by Jonathan Haidt | Analyzes the impact of social media on mental health, particularly in younger generations. |

I hope you find my productivity setup inspiring! If you have any questions or want to share your own tips, feel free to drop a message. Happy focusing! 🚀
