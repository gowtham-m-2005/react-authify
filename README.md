# Authify React Frontend

A modern React application that provides a user-friendly interface for authentication, registration, and password management with seamless integration with the Spring Boot backend.

## 🚀 Features

- **User Authentication** - Secure login with JWT cookie management
- **User Registration** - Email-based registration with verification
- **Password Reset** - OTP-based password recovery system
- **Email Verification** - OTP verification for account activation
- **Responsive Design** - Bootstrap 5 based responsive UI
- **Toast Notifications** - User-friendly feedback system
- **Route Protection** - Protected routes and navigation guards
- **State Management** - React Context for global state

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - UI framework and styling
- **Axios** - HTTP client for API calls
- **React Toastify** - Notification system
- **Vite** - Fast development build tool

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Authify Spring Boot backend running on `http://localhost:8080`

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/your-username/react-authify.git
cd react-authify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in project root:

```env
VITE_BACKEND_URL=http://localhost:8080/api/v1.0
```

### 4. Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173`

## 📚 Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
├── components/             # Reusable UI components
│   ├── Header.jsx          # Page header with user greeting
│   └── Menubar.jsx         # Navigation bar with user menu
├── context/               # React Context for state management
│   └── AppContext.jsx       # Global authentication state
├── pages/                 # Page components
│   ├── Home.jsx            # Dashboard/home page
│   ├── Login.jsx           # Authentication page
│   ├── EmailVerify.jsx     # Email verification page
│   └── ResetPassword.jsx   # Password reset page
├── util/                  # Utility files
│   └── Constants.js        # Backend URL configuration
├── App.jsx                # Main application component with routing
├── main.jsx               # Application entry point
└── index.html             # HTML template
```

## 🔧 Configuration

### Constants Configuration

Backend URL configuration in `src/util/Constants.js`:

```javascript
export const AppConstants = {
    BACKEND_URL: "http://localhost:8080/api/v1.0"
}
```

### Axios Configuration

Global axios configuration with credentials:

```javascript
import axios from "axios";

axios.defaults.withCredentials = true;
```

## 📱 Components Overview

### AppContext Provider

Global state management for authentication:

```javascript
const contextValue = {
    backendURL,
    isLoggedIn, setIsLoggedIn,
    userData, setUserData, 
    getUserData
}
```

### Authentication Flow

1. **Login** - User enters credentials → JWT cookie set → User data fetched
2. **Registration** - User registers → Email verification required
3. **Email Verification** - OTP entered → Account activated
4. **Password Reset** - Email OTP → New password set

## 🎨 UI Features

### Bootstrap Integration

- **Responsive Grid System** - Mobile-first design
- **Components** - Cards, forms, buttons, inputs
- **Utilities** - Spacing, colors, typography
- **Forms** - Input groups, validation styling

### Custom Styling

- **Gradient Backgrounds** - Modern gradient effects
- **Card Components** - Shadowed content containers
- **Interactive Elements** - Hover states and transitions

## 🔄 API Integration

### Authentication Endpoints

```javascript
// Login
await axios.post(`${backendURL}/login`, {email, password})

// Get Profile
await axios.get(`${backendURL}/profile`)

// Send OTP
await axios.post(`${backendURL}/send-otp`)

// Verify OTP
await axios.post(`${backendURL}/verify-otp`, {otp})

// Reset Password
await axios.post(`${backendURL}/reset-password`, {email, otp, newPassword})
```

## 🧪 Testing

### Development Testing

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

### Deployment Options

The build output in `dist/` folder can be deployed to:

- **Static Hosting** - Vercel, Netlify, GitHub Pages
- **CDN** - AWS S3 + CloudFront
- **Server** - Nginx, Apache with static file serving

## 🔐 Security Features

- **HTTP-Only Cookies** - Secure JWT token storage
- **CORS Configuration** - Backend communication
- **Input Validation** - Client-side form validation
- **Route Protection** - Navigation guards for authenticated routes

## 🎯 Key Features

### OTP Input System

- **Auto-focus Management** - Seamless OTP entry
- **Paste Support** - Clipboard integration
- **Keyboard Navigation** - Backspace handling
- **Digit Validation** - Numbers only input

### User Experience

- **Loading States** - Visual feedback during operations
- **Error Handling** - Graceful error management
- **Toast Notifications** - Non-intrusive user feedback
- **Responsive Design** - Mobile and desktop optimized

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
