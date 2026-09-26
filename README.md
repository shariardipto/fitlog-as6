# 💪 FitLog

FitLog is a responsive workout library and workout planning application built with Next.js.

Users can browse workouts, view workout details, add exercises to today's plan, save workouts for later, track workout metrics, mark exercises as completed, and manage their workout routine from one place.

---

## 🔗 Live Website

**Live Link:**  
(https://fitlog-as6.netlify.app/)

---

## 🚀 Features

- Browse a complete workout library with workout images, categories, equipment, duration, calories, and ratings
- View individual workout information using dynamic routes
- Add workouts to **Today's Plan**
- Save workouts for later
- Live **Plan** and **Saved** counters in the navbar
- Track total exercises, workout minutes, and calories
- Switch between **Today's Plan** and **Saved** workouts
- Mark planned workouts as completed
- Remove workouts from the plan or saved list
- Sort workouts by **Duration, Calories, or Rating**
- Toast notifications for workout actions
- Custom loading state while workout data is loading
- Custom 404 page for invalid routes
- Responsive design for mobile, tablet, and desktop
- Workout data persistence using localStorage
- Maximum 5 workouts supported in Today's Plan

---

## 🛠️ Technologies Used

- Next.js
- React
- Next.js App Router
- Tailwind CSS
- Context API
- JavaScript
- Lucide React
- Sonner
- localStorage
- REST API

---

# 🌐 API Integration

FitLog uses an external REST API to load workout information dynamically.

## API Responsibilities

The API is used for two main purposes:

### 1. Fetch All Workout Data

The homepage retrieves the complete workout collection from:

### All Workouts

```text
https://api.api-store.workers.dev/api/fitlog