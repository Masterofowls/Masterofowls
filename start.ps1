#!/usr/bin/env pwsh
# Quick Start Script for Portfolio Website
# Run this script to start the development server

Write-Host "🚀 Starting Portfolio Website..." -ForegroundColor Cyan
Write-Host ""

# Check if Bun is installed
if (!(Get-Command bun -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Bun is not installed!" -ForegroundColor Red
    Write-Host "   Please install Bun from https://bun.sh" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   Windows installation command:" -ForegroundColor Yellow
    Write-Host "   powershell -c 'irm bun.sh/install.ps1 | iex'" -ForegroundColor White
    exit 1
}

Write-Host "✓ Bun is installed" -ForegroundColor Green

# Check if dependencies are installed
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    bun install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✓ Dependencies are already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "🌐 Starting development server..." -ForegroundColor Cyan
Write-Host "   Open http://localhost:3000 in your browser" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

# Start the development server
bun run dev
