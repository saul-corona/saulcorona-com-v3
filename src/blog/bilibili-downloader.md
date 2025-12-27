---
layout: layouts/single.njk
title: Bilibili Downloader
description: A Python script I built to easily download Bilibili videos using yt-dlp. Supports batch downloads, 1080p+ quality with browser auth, and more.
tags: ["post", "Software"]
date: "2025-12-27"
---

I recently built a Python script to download videos from Bilibili, and I wanted to share it with you!

## Why I Made This

Downloading videos from Bilibili can be tricky—especially if you want high quality (1080p+). So I created a wrapper around [yt-dlp](https://github.com/yt-dlp/yt-dlp) that handles all the annoying parts for you.

## Key Features

- **Best quality downloads** with automatic audio/video merging
- **Batch downloads** from command line or a URL file
- **1080p+ support** using your browser cookies for authentication
- **Robust error handling**—if one video fails, it keeps going

## Quick Start

```bash
# Install
pip install yt-dlp

# Download a video
python bilibili_loader.py "https://www.bilibili.tv/en/video/..."

# Download in 1080p+ (requires being logged in your browser)
python bilibili_loader.py "https://www.bilibili.tv/en/video/..." --browser chrome
```

## Get It

Check out the full documentation and source code on GitHub:

👉 [**Bilibili Downloader on GitHub**](https://github.com/saul-corona/bilibiliWrapper)

Give it a try and let me know what you think! 🎬
