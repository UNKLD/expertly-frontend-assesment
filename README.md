# Sport Stats App

A modern sports statistics web app built with **React**, **TypeScript**, and **Vite**, powered by [TheSportsDB API](https://www.thesportsdb.com/).

Explore live matches, and detailed match statistics with a clean, responsive interface featuring real-time like updates and comprehensive sports data.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### Prerequisites

- **Node.js**: Version 20.x or higher
- **npm**: Version 10.x or higher

### 1️⃣ Clone the repository

```shell
git clone https://github.com/UNKLD/expertly-frontend-assesment
cd expertly-frontend-assesment
```

### 2️⃣ Install dependencies

```shell
npm install
```

### 3️⃣ Environment Setup

Create a `.env` file in the root directory with the following:

```env
VITE_BASE_URL=https://www.thesportsdb.com/api/v1/json/123
```

### 4️⃣ Run the development server

```shell
npm run dev
```

### 5️⃣ Build for production

```shell
npm run build
```

---

## ✨ Features

- **Live Matches**: Real-time football match updates and scores
- **Match Fixtures**: Browse matches by date with interactive date picker
- **Match Details**: Comprehensive match information including lineups, events, and statistics
- **Filter Matches**: Simple and easy way to filter matches by sport, league, year and country
- **Responsive Design**: Modern UI with Tailwind CSS and Radix UI components

---

---

## 📱 Pages

- **Live** (`/`) - Real-time match updates
- **Matches** (`/matches`) - Browse fixtures by date
- **Match Detail** (`/match/:id`) - Detailed match information
- **Standings** (`/standings`) - League tables but currently not available
- **Teams** (`/teams`) - Team information but currently not available
- **Comparison** (`/comparison`) - Team/match comparisons but currently not available
- **Statistics** (`/statistics`) - Detailed statistics but currently not available
- **Venues** (`/venues`) - Stadium information but currently not available

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.5
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI and Shadcn Ui
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Icons**: Lucide React + Custom SVGs

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

> **Note**: This application uses the free tier of TheSportsDB API. Some features may have limitations based on API availability.

- **Live Matches**: Real-time football match updates and scores is only available on the paid plan. To simulate real-time updates, the / (root) page periodically (20seconds) refreshes the data, and the /matches and /match/:id page periodically (20seconds) refreshes the data if there is a live match and update the ui with the new data.

- **The League Filter**: The sports league Filter on the header doesn't have an icon because the TheSportsDB /all_leagues.php API doesn't provide an icon. and it only response soccer leagues.

---
