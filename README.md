# Team Management App

A modern web application built with Ember.js for managing teams and their members. Features include:

- Team creation/editing
- Member management within teams
- Interactive UI with form validation
- Real-time updates
- Responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm v9+
- Ember CLI v5.3+
- Git

```bash
# Clone repository
git clone https://github.com/harliandi/ember_loopback.git
cd ember_loopback

# Install dependencies
npm install

# Start development server
ember serve
```
## Production Deployment 🚀
Netlify Deployment
1. Prepare Production Build

```bash
ember build --environment=production
```
2. Install Netlify CLI
```bash
npm install -g netlify-cli
```

3. Deploy to Netlify

```bash
netlify login
netlify deploy --prod
```
- Select "Create & configure a new site"
- Set publish directory to dist
- Build command: ``ember build --environment=production``


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
