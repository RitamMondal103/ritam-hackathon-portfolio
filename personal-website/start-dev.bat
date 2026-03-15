@echo off
echo Starting Hackathon Projects Development Environment...
echo.

echo Installing backend dependencies...
cd backend
"C:\Program Files\nodejs\npm.cmd" install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd ../frontend
"C:\Program Files\nodejs\npm.cmd" install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Starting backend server...
cd ../backend
start "Backend Server" cmd /k "C:\Program Files\nodejs\node.exe" server.js

echo.
echo Starting frontend server...
cd ../frontend
start "Frontend Server" cmd /k "C:\Program Files\nodejs\npx.cmd" react-scripts start"

echo.
echo Development servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause
