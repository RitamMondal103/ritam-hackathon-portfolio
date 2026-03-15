@echo off
echo ========================================
echo 🚀 Ritam's Hackathon Portfolio Deployment
echo ========================================
echo.
echo This script will deploy your website to GitHub Pages
echo making it accessible from anywhere in the world!
echo.
echo Press any key to continue or Ctrl+C to cancel...
pause > nul

echo.
echo 🔧 Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first:
    echo    https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git is installed!
echo.
echo 📁 Navigating to project directory...
cd /d "%~dp0"

echo.
echo 🔄 Initializing Git repository...
if not exist .git (
    git init
    echo ✅ Git repository initialized!
) else (
    echo ✅ Git repository already exists!
)

echo.
echo 📝 Adding all files to Git...
git add .

echo.
echo 💾 Committing changes...
git commit -m "Auto-deploy: %date% %time% - Ritam's Hackathon Portfolio"

echo.
echo 🌐 Checking if remote repository is configured...
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ⚠️  No remote repository found!
    echo.
    echo Please follow these steps:
    echo 1. Go to https://github.com/new
    echo 2. Create a repository named: ritam-hackathon-portfolio
    echo 3. Copy the repository URL
    echo 4. Run this script again
    echo.
    echo Repository URL format: https://github.com/YOUR_USERNAME/ritam-hackathon-portfolio.git
    echo.
    set /p repo_url="Enter your GitHub repository URL: "
    if defined repo_url (
        git remote add origin "%repo_url%"
        echo ✅ Remote repository added!
    ) else (
        echo ❌ No repository URL provided. Please try again.
        pause
        exit /b 1
    )
)

echo.
echo 📤 Pushing to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ Push failed! Possible reasons:
    echo    - Repository doesn't exist
    echo    - Authentication required
    echo    - Network issues
    echo.
    echo Please check your GitHub repository and try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo 🎉 DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo 🌐 Your website is now live at:
echo    https://YOUR_USERNAME.github.io/ritam-hackathon-portfolio
echo.
echo 📧 Next steps:
echo 1. Go to your GitHub repository
echo 2. Click Settings → Pages
echo 3. Select "Deploy from a branch"
echo 4. Choose "main" branch and "/ (root)"
echo 5. Click Save
echo.
echo 🚀 Your website will be accessible from anywhere!
echo.
echo Press any key to open your repository...
pause > nul

start https://github.com/YOUR_USERNAME/ritam-hackathon-portfolio

echo.
echo ✨ Thank you for using Ritam's Auto-Deployment Script!
echo ========================================
pause
