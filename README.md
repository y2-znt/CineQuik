# 🎬 CineQuik – Your Ultimate Movie Explorer

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcinequik.vercel.app&style=flat-square)](https://cinequik.vercel.app/)

**A modern and immersive movie discovery platform powered by TMDB API**

[Live Demo](https://cinequik.vercel.app) •
[Features](#-features) •
[Getting Started](#-getting-started) •
[Tech Stack](#-tech-stack) •
[Implementation](#-key-features-implementation) •
[Contributing](#-contributing) •
[Support](#-support)

</div>

<img width="1418" alt="image" src="https://github.com/user-attachments/assets/8b5d9114-0e1f-406f-9978-84a1a09da566" />

## 🌟 Features

- **🔍 Intuitive Search**: Instantly find any movie from the TMDB database
- **🔥 Curated Lists**: Explore “Popular” and “Top-Rated” movie selections
- **📄 Detailed Info**: See runtime, ratings, release dates, trailers, similar movies & more
- **📽 Watch Options**: Direct links to official providers when available
- **⚡ Fast Performance**: Vite-powered builds with lazy loading and code splitting
- **💅 Modern UI**: Sleek, responsive layout with smooth transitions

---

## 🛠️ Tech Stack

### Core

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State & Caching**: TanStack Query (React Query)

### Libraries & Tools

- **HTTP Client**: Axios
- **UI/UX Enhancements**:
  - Swiper.js (Carousels)
  - React-Youtube
  - Motion (Framer Motion-compatible)
- **API**: [TMDB – The Movie Database](https://www.themoviedb.org/)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v14+)
- npm or yarn
- TMDB API key (free)

### 🔧 Installation

1. Clone the repo

```bash
git clone https://github.com/Yoni-Deserbaix/CineQuik.git
```

2. Move into the project folder

```bash
cd CineQuik
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Create a `.env` file at the root of the project and add your TMDB API key:

```bash
VITE_API_KEY=your_api_key_here
```

5. Run in dev mode

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:5173 - You're ready to explore! 🎉

---

## 💡 Key Features Implementation

### 🔄 Data Fetching & Caching

- Cached queries with stale-time strategies
- Real-time search with debounced inputs
- Error handling & loading skeletons per section

### 🎯 UX & UI

- Mobile-first responsive design
- Custom skeletons, animations and page transitions
- Lazy loaded components for fast initial load

---

## 🤝 Contributing

We welcome contributions! 🧠✨  
You can improve features, fix bugs or suggest ideas.

[![contributors](https://contrib.rocks/image?repo=Yoni-Deserbaix/CineQuik)](https://github.com/Yoni-Deserbaix/CineQuik/graphs/contributors)

### Contribution Guide

1. Fork the repo
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to your fork (`git push origin feature/AmazingFeature`)
5. Submit a pull request 🧃

---

## 📝 Support

- 📮 Found a bug? [Open an issue](https://github.com/Yoni-Deserbaix/CineQuik/issues/new)
- 💡 Have a feature idea? [Request it here](https://github.com/Yoni-Deserbaix/CineQuik/issues/new)

---

## 🎨 Credits

- 🎬 [TMDB API](https://www.themoviedb.org/) – the backbone of the movie data
- 💡 Inspired by multiple open-source movie discovery apps

---

<div align="center">

Made with ❤️ by [y2-znt](https://github.com/y2-znt)

</div>
