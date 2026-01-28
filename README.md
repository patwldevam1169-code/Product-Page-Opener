# Abhayam Transchem Website

This is a modern React application built with Vite and Tailwind CSS. Unlike traditional static HTML websites, this project requires a JavaScript runtime (Node.js) to build and run.

## 🚀 How to Run Locally

### Prerequisites
You need to have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Steps

1. **Unzip the project** to a folder on your computer.
2. **Open a terminal** (Command Prompt or PowerShell on Windows, Terminal on Mac/Linux) and navigate to the project folder:
   ```bash
   cd path/to/unzipped-folder
   ```
3. **Install dependencies** (this downloads the necessary libraries like React):
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev:client
   ```
5. Open your browser and go to `http://localhost:5000` to see the site.

## 📦 Building for Production

If you want to deploy this to a web host (like Netlify, Vercel, or GitHub Pages), you need to build the static files:

```bash
npm run build
```

This will create a `dist` folder containing the optimized HTML, CSS, and JavaScript files ready for deployment.
