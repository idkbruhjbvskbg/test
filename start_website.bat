@echo off
setlocal enabledelayedexpansion
title Vivyn Bhavani Raaman - Portfolio Website Server

echo ======================================================================
echo    Starting Vivyn Bhavani Raaman Portfolio Website
echo ======================================================================
echo.

:: 1. Navigate to the project directory where this bat file is located
cd /d "%~dp0"

:: 2. Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js was not found in your system PATH.
    echo Please install Node.js from https://nodejs.org/ and rerun this script.
    echo.
    pause
    exit /b 1
)

:: 3. Check and install dependencies if node_modules is missing
if not exist "node_modules" (
    echo [INFO] node_modules folder not found. Installing dependencies...
    where pnpm >nul 2>nul
    if !errorlevel! equ 0 (
        echo [INFO] Running pnpm install...
        call pnpm install
    ) else (
        echo [INFO] Running npm install...
        call npm install
    )
    if !errorlevel! neq 0 (
        echo.
        echo [ERROR] Dependency installation failed.
        pause
        exit /b 1
    )
    echo [INFO] Dependencies installed successfully.
    echo.
)

:: 4. Ensure Prisma Client is generated
if not exist "node_modules\@prisma\client\index.js" (
    echo [INFO] Generating Prisma client...
    call npx prisma generate
)

:: 5. Launch default browser to http://localhost:3000 after 3 seconds
echo [INFO] Launching your web browser to http://localhost:3000 ...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

:: 6. Start the local Next.js + Socket.IO server
echo [INFO] Starting web server on http://localhost:3000 ...
echo [INFO] Keep this window open while browsing the website.
echo [INFO] Press Ctrl+C in this terminal when you want to stop the server.
echo.
echo ----------------------------------------------------------------------

call npx tsx server.ts

if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Server stopped with exit code %errorlevel%.
    pause
)
