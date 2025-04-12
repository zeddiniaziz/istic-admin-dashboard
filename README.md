
# University Admin Panel

A clean, beginner-friendly Angular 19 CRUD application for managing university students and professors.

## Features

- Dashboard with statistics and quick access to records
- Student management (list, view, add, edit, delete)
- Professor management (list, view, add, edit, delete)
- Responsive design that works on all devices

## Project Setup

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally

### Installation

```cmd
REM Install Angular CLI globally if not already installed
npm install -g @angular/cli

REM Clone the repository (or download the zip file)
git clone <repository-url>
cd university-admin

REM Install dependencies
npm install

REM Start the development server
ng serve
```

### Angular CLI Commands (Windows CMD)

```cmd
REM Generate a new component
ng generate component components/new-component

REM Generate a new service
ng generate service services/new-service

REM Build the application for production
ng build --configuration=production

REM Run unit tests
ng test
```

## Architecture

The application follows a clean, modular Angular architecture:

- **Components**: UI elements organized by feature
- **Services**: Handle data operations and business logic
- **Models**: Define data structures
- **Lazy Loading**: Routes are lazy-loaded for better performance

## Design

The application uses:
- Tailwind CSS for styling
- A clean, minimal UI focused on usability
- Mobile-responsive design
