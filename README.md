# Property Landing Page - MERN Stack

A full-stack web application to list, view, and add real estate properties using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Admins can add new properties. Users can browse listings, view details, and contact via a form.

---

## Features

-  Landing page with Home, About & Contact
-  List of properties with:
  - Image
  - Title
  - Price
  - Location
  - Description
-  Add New Property (Admin only)
-  Property Details page
-  Contact Form (stored in backend or simulated email)
-  Responsive UI with Tailwind CSS

---

##  Tech Stack

| Frontend       | Backend       | Database     |
|----------------|---------------|--------------|
| React.js       | Node.js       | MongoDB      |
| Axios          | Express.js    | Mongoose     |
| React Router   | Dotenv        |              |
| Tailwind CSS   | Cors          |              |

---

## Project Structure

```bash
Property-Landing-page/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
├── server/ # Express Backend
│ ├── config/
│ ├── models/
│ ├── routes/
│ ├── seeds/
│ ├── server.js
│ ├── .env
│ └── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

---

### Installation

1. **Clone the repo**
```bash
git clone https://github.com/your-username/Property-Landing-page.git
cd Property-Landing-page
```

2. **Install server dependencies**
```bash
cd server
npm install
```

4. **Install client dependencies**
```bash
cd ../client
npm install
```

4. **Environment Variables**
   In the server folder, create a .env file:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/propertydb
ADMIN_PASSWORD=secret123
```

5. **Seed Dummy Data**
```bash
cd server
node seeds/seedData.js
```
