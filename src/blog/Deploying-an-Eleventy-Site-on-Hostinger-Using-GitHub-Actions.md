---
layout: layouts/single.njk
title: Deploying an Eleventy Site on Hostinger Using GitHub Actions
description: If you have developed a static website using Eleventy (11ty) and want to automate its deployment on Hostinger, you can use GitHub Actions to efficiently perform this task without manual intervention.
tags: ["post", "Software"]
date: "2025-02-18"
---

If you have developed a static website using [Eleventy \(11ty\)](https://www.11ty.dev/) and want to automate its deployment on [Hostinger](https://www.hostinger.com/), you can use **GitHub Actions** to efficiently perform this task without manual intervention.

👇 Below is a step-by-step guide:

## 1.Set Up Your Project on GitHub

Before configuring the workflow, ensure your code is stored in a **GitHub** repository and that you have included a .gitignore file with at least the Eleventy output folder **(\_site/)**.

---

## 2.Create a Workflow in GitHub Actions

Inside your repository, create the following structure:

```yml
.github/workflows/deploy.yml
```

Then, in deploy.yml, add the following code to configure the workflow:

```yml
name: Build and Deploy

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install

      - name: Build site with Eleventy
        run: npm run build

      - name: Deploy site via FTP to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with: {% verbatim %}
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: _site/ # By default is  _site/
          server-dir: / # Your hostinger server dir
          {% endverbatim %}
```

---

## 3.Configure FTP in Hostinger

Before deploying, you need to configure FTP access in Hostinger:

1️⃣ Log in to your **Hostinger** account.

2️⃣ Navigate to **Hosting** and select your website.

3️⃣ Go to **Files** > **FTP Accounts**.

4️⃣ Locate your FTP credentials or create a new FTP account:

▸ **FTP Host**: This is your FTP server address (e.g., ftp.yourdomain.com).

▸ **FTP Username**: Provided by Hostinger.

▸ **FTP Password**: Either use the one you set up or reset it if needed.

5️⃣ Ensure that your FTP account has permission to access the root or specific directory where you want to deploy your Eleventy site.

6️⃣ In some cases, you may need to **enable SSH access** in your Hostinger account to allow proper FTP functionality.

To do this:

Go to **Hosting** > **SSH Access**.

Enable SSH and note the credentials provided.

If required, configure an SSH key to enhance security.

---

## 4.Configure Secrets in GitHub

To allow GitHub Actions to connect to Hostinger via **FTP**, you need to securely store access credentials in **GitHub Secrets**:

1️⃣ Go to your repository on **GitHub**.

2️⃣ Navigate to **Settings** > **Secrets and variables** > **Actions**.

3️⃣ Add the following secrets:

▸ **FTP_SERVER**: The Hostinger FTP server address (e.g., ftp.yourdomain.com).

▸ **FTP_USERNAME**: Your FTP username.

▸ **FTP_PASSWORD**: Your FTP password.

![Github Actions](/assets/img/Github-actions.png)

---

## 5.Test the Deployment

Each time you **push** to the master branch, GitHub Actions will automatically execute the workflow, generate the static files with Eleventy, and upload them to Hostinger via FTP.

To verify that the deployment was successful:

✔️ Check the **Actions** section in your GitHub repository.

✔️ Access your configured domain or subdomain on Hostinger.

---

## Conclusion

With this setup, you can automate the deployment of your Eleventy site on Hostinger using GitHub Actions.

This ensures that every change in master is automatically reflected in the production version of your site without the need for manual FTP uploads.

You can check my [repo](https://github.com/saul-corona/saulcorona-com-v3/tree/master) to get a better idea.
