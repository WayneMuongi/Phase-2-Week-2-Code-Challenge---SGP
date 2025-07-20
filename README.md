# Smart Goal Planner

A dynamic React app for planning, tracking, and managing your personal goals. Built with Vite for fast development and a modern UI.

## Features

- Add, edit, and delete smart goals
- Visual progress tracking for each goal
- Overview dashboard for all goals
- Responsive, glassmorphism-inspired UI
- Fast and easy setup with Vite

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/vite-challenge.git
cd vite-challenge
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend API

This app expects a REST API for goals at `http://localhost:3000/goals`.  
You can use [json-server](https://github.com/typicode/json-server) for quick prototyping:

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

Create a `db.json` file with:

```json
{
  "goals": []
}
```

## Project Structure

```
src/
  ├── components/
  │   ├── GoalForm.jsx
  │   ├── GoalList.jsx
  │   └── Overview.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## Customization

- Update styles in `src/index.css` for your own look
- Extend components for more features (categories, deadlines, etc.)

## License
This a code challenge done for educational purposes under the instruction of Moringa school.


## Author
Wayne Muongi