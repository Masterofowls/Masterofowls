# Profile Setup Guide

This profile uses several automated features that require configuration.

## 🔧 Required Setup Steps

### 1. WakaTime Stats Integration

To enable real-time coding statistics:

1. Sign up at [WakaTime](https://wakatime.com)
2. Install the WakaTime plugin in your IDE (VS Code, JetBrains, etc.)
3. Get your API key from [WakaTime Settings](https://wakatime.com/settings/api-key)
4. Add it as a repository secret:
   - Go to your repository Settings → Secrets and variables → Actions
   - Create a new secret named `WAKATIME_API_KEY`
   - Paste your WakaTime API key

### 2. GitHub Actions Permissions

Ensure GitHub Actions has write permissions:

1. Go to repository Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click Save

### 3. Auto-Translation

The translation workflow will automatically run when you push changes to README.md on the main branch. It creates translated versions in multiple languages:

- `README.en.md` - English
- `README.es.md` - Spanish
- `README.de.md` - German
- `README.fr.md` - French
- `README.zh-CN.md` - Chinese (Simplified)
- `README.ja.md` - Japanese

### 4. Contribution Snake Animation

The snake animation is automatically generated every 6 hours and shows your contribution graph as an animated snake. It will be stored in the `output/` directory.

## 🎨 Customization

### Color Scheme

The profile uses a cyan color scheme (`#00D9FF`). To change it, search and replace `00D9FF` in README.md with your preferred color code.

### Personal Information

Update the following in README.md:
- Name
- Contact information
- Project descriptions
- Skills and technologies
- Education details

## 🚀 Manual Workflow Triggers

You can manually trigger workflows from the Actions tab:

1. Go to the Actions tab in your repository
2. Select the workflow you want to run
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## 📊 Stats Services Used

- **GitHub Stats**: [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- **GitHub Streak**: [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- **Activity Graph**: [github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph)
- **Trophies**: [github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy)
- **Typing SVG**: [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg)
- **WakaTime**: [waka-readme-stats](https://github.com/anmol098/waka-readme-stats)
- **Snake Animation**: [snk](https://github.com/Platane/snk)

## 🔄 Update Frequency

- **WakaTime Stats**: Daily at 00:00 UTC
- **Profile Stats & Snake**: Every 6 hours
- **Translations**: On every push to main branch that modifies README.md

## 🐛 Troubleshooting

If workflows fail:

1. Check the Actions tab for error messages
2. Verify all secrets are properly configured
3. Ensure GitHub Actions has write permissions
4. Check that you haven't hit GitHub API rate limits

## 📝 Notes

- The snake animation requires at least some contribution history to generate
- WakaTime stats require the WakaTime plugin to be actively tracking your coding time
- Translation quality may vary and can be manually improved
- Profile views counter updates automatically
