---
layout: layouts/single.njk
title: Setting Up a Mac for Development
description: Here’s a streamlined guide for getting your MacBook ready for development.
tags: ["post", "Software"]
date: "2025-02-18"
---

## Installing iTerm2

Download iTerm2 from its official page: [iTerm2](https://iterm2.com/downloads.html).

Once downloaded, move the application to the "Applications" folder to complete the installation.

---

## Installing Visual Studio Code

Download VSCode from: [VSCode](https://code.visualstudio.com/).

Recommended Extensions

🔹 **Material Theme**

🔹 **Material Icon Theme**

🔹 **Prettier** (for automatic code formatting)

To enable automatic formatting in VSCode:

1️⃣ Open settings with **_Cmd + ,_**

2️⃣ Search for **"Format on Save"** and enable it.

### Enabling the **_code_** Command

To open files or folders from the terminal using **code**:

1️⃣ Open the terminal.

2️⃣ Press **_Cmd + Shift + P_** in VSCode.

3️⃣ Type **_"Install 'code' command in PATH"_** and execute it.

---

## Installing Command Line Tools

Run in the terminal:

```bash
xcode-select --install
```

If they are already installed, you will receive a message indicating so.

---

## Installing Homebrew

Install Homebrew by running:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If Homebrew is not in your PATH, run:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/[username]/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Verify the setup with:

```bash
cat ~/.zprofile
```

---

## Installing Oh My Zsh

Install Oh My Zsh with:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Installing PowerLevel10K Theme

```bash
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Edit the configuration file:

```bash
nano ~/.zshrc
```

Change the line:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Apply changes:

```bash
source ~/.zshrc
```

### Switching Between Bash and Zsh

To check the current shell:

```bash
echo $0
echo $SHELL
```

To switch from Bash to Zsh:

```bash
chsh -s /bin/zsh
```

To switch from Zsh to Bash:

```bash
chsh -s /bin/bash
```

On newer macOS versions, the default shell is Zsh.

---

## Installing Node.js Environment

Install NVM with:

```bash
brew install nvm
```

Configure NVM by editing the ~/.zshrc file and adding:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion"
```

Save the changes and reload the shell:

```bash
source ~/.zshrc
```

List hidden files to verify:

```bash
ls -a
```

### Installing Node.js

To install a specific version of Node.js:

```bash
nvm install [version]
```

Check the LTS version on the official [Node.js](https://nodejs.org/en/download) website and choose the recommended version for production.

**With these steps, your Mac will be fully set up for software development. Happy coding! 🙌**
