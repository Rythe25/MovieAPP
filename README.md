# 🎬 Movie App

A React Native movie application that allows users to explore trending movies, search for films, and view detailed information including cast and reviews.
The application integrates **authentication features** and retrieves movie data using the **TMDB API**.

---

# 📱 Features

## 🔐 Authentication

* User Registration
* User Login
* Logout
* Email Verification (verification code sent via email)
* Reset Password
* Update Email
* Update First Name & Last Name

## 🎬 Movie Application

* View **Trending Movies**
* View **Popular Movies**
* View **Now Playing**
* View **Top Rated Movies**
* View **Upcoming Movies**
* **Search** for movies
* View **Movie Details**
* View **Movie Cast**
* View **Movie Reviews**

---

# 🛠 Tech Stack

* React Native
* Expo
* TypeScript
* Axios
* React Navigation
* TMDB API

---

# 📦 Requirements

Before running this project, ensure you have the following installed:

* **Node.js** (v18+ recommended)
* **npm**
* **Expo CLI**

You will also need a **TMDB API key**.

Get your API key from:
https://www.themoviedb.org/settings/api

Source: TMDB Developer Documentation

---

# 🚀 Installation

Follow the steps below to set up the project locally.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/MovieAPP.git
```

---

## 2️⃣ Navigate into the Project Directory

```bash
cd MovieAPP
```

---

## 3️⃣ Pull the Latest Changes

```bash
git pull
```

---

## 4️⃣ Install Dependencies

```bash
npm install
```

---

# ⚙️ Environment Configuration

This project uses **environment variables** for API keys and backend URLs.

---

## 1️⃣ Create a `.env` File

In the root of the project, create a `.env` file.

```bash
touch .env
```

---

## 2️⃣ Copy Variables from `.env.example`

Open `.env.example` and copy all variables into your `.env` file.

---

## 3️⃣ Fill in Your Configuration

Example `.env` file:

```env
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_AUTH_API_URL=https://your-auth-api-url
EXPO_PUBLIC_MOVIE_API_URL=https://your-movie-api-url
```

---

# 📄 Example `.env.example`

```env
# TMDB API Key
# Used to fetch movie data such as trending, popular, and movie details
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

# Authentication API URL
# Backend endpoint for authentication features such as login, register, verify email, and password reset
EXPO_PUBLIC_AUTH_API_URL=https://your-auth-api-url

# Movie Service API URL
# Backend endpoint for movie-related requests if applicable
EXPO_PUBLIC_MOVIE_API_URL=https://your-movie-api-url
```

---

# ▶️ Running the Application

Start the development server:

```bash
npm start
```

or

```bash
npx expo start
```

---

# 📁 Project Structure

```
src
├── components      # Reusable UI components
├── navigation      # Navigation configuration
├── network         # API clients and service functions
├── screens         # Application screens
```

---

# 📚 API Sources

Movie data is provided by:

**The Movie Database (TMDB)**
https://developer.themoviedb.org/docs

---

# ⚠️ Important

Do **NOT** commit your `.env` file to GitHub.

Ensure `.env` is included in your `.gitignore` file.

---

# 📄 License

This project is created for educational and demonstration purposes.
