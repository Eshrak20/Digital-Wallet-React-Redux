# 💳 Digital Wallet Management System - Frontend

> A modern, responsive, and user-friendly frontend application for managing digital wallet operations. Built with React, TypeScript, and a powerful stack of UI libraries.

This is the frontend client for the [Digital Wallet Backend API](https://github.com/your-username/backend-digital-wallet).

---

## 📌 Quick Links

- **🎥 Overview Video Upcoming , Keep eyes on my youTube:** [Watch on YouTube](https://www.youtube.com/@EshrakG-xy)
- **🌐 Live Demo (Frontend):** [[Netlify Link Here](https://digital-wallet-react-redux.netlify.app/)]
- **🧠 Backend ER Diagram:** [View Diagram](https://drive.google.com/file/d/1QCTlaziJvm-ju8ES27C4qvEUh6Xemuyz/view)
- **⚙️ Backend API:** [Repository & Docs](https://github.com/your-username/backend-digital-wallet)

---

## ✨ Features

- **👥 Role-Based Dashboard:** Tailored experiences for Users, Agents, and Admins.
- **💼 Wallet Management:** View balance, add funds, withdraw, and transfer money.
- **📊 Transaction History:** Interactive charts and data tables for all financial activities.
- **🎨 Modern UI:** Built with shadcn/ui (Radix + Tailwind CSS) for a beautiful, accessible experience.
- **🎭 Smooth Animations:** Powered by Framer Motion for engaging user interactions.
- **🌓 Dark/Light Mode:** Full theme support using `next-themes`.
- **🔒 State Management:** Robust state handling with Redux Toolkit.
- **📝 Form Management:** Complex forms made easy with React Hook Form and Zod validation.
- **🍪 Authentication:** JWT-based auth with secure cookie storage.

---

## 🛠️ Tech Stack

- **⚛️ Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **🚀 Build Tool:** [Vite](https://vitejs.dev/)
- **🎨 Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **🛡️ State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- **📊 Charts:** [Chart.js](https://www.chartjs.org/) + [React ChartJS 2](https://react-chartjs-2.js.org/)
- **📝 Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) Validation
- **🔄 Routing:** [React Router DOM](https://reactrouter.com/)
- **⌨️ UI Primitives:** [Radix UI](https://www.radix-ui.com/) Components
- **✨ Animations:** [Framer Motion](https://www.framer.com/motion/)
- **🌓 Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **📢 Notifications:** [Sonner](https://sonner.emilkowal.ski/) (Toasts)
- **🛠️ Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react` icons

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- The [Backend API](https://github.com/your-username/backend-digital-wallet) should be running.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/digital-wallet-frontend.git
    cd digital-wallet-frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory based on `.env.example` and configure your backend API URL:
    ```env
    VITE_API_BASE_URL=http://localhost:5000/api
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
5.  **Open your browser** and navigate to `http://localhost:5173`

---

## 📦 Available Scripts

| Command               | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| `npm run dev`         | Starts the development server on `http://localhost:5173`              |
| `npm run build`       | Builds the app for production to the `dist` folder                    |
| `npm run preview`     | Previews the production build locally                                 |
| `npm run lint`        | Runs ESLint to analyze code for potential errors                      |
| `npm run tailwind:init` | Initializes Tailwind CSS configuration (if not already set up)        |

---

## 🏗️ Project Structure

---

## 🔌 API Integration

This frontend is designed to work seamlessly with the corresponding backend API. Key integrated endpoints include:

- **Auth:** Login, Logout, Session Management
- **User:** Registration (via Admin), Profile Management, View Users/Agents
- **Wallet:** Check Balance, Add Funds (Agent), Withdraw, Transfer
- **Transactions:** View Personal and System-wide Transaction History
- **Commissions:** View Earnings (Agent) and Reports (Admin)

Ensure the backend is running and the `VITE_API_BASE_URL` environment variable is correctly set.

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library.
- [Vite](https://vitejs.dev/) for the fast build tooling.
- The creators of all the amazing open-source libraries used in this project.