# NY Times Most Popular Articles

A React application that displays the most popular articles from The New York Times API. The application allows users to view articles from different time periods (1, 7, or 30 days) and read detailed information about each article.

## Features

- View the most popular NY Times articles from different time periods
- Responsive design for all screen sizes
- Article details with metadata and links to original sources
- Skeleton loading states for improved user experience
- Error handling and empty state displays

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Styling:** Tailwind CSS with shadcn/ui components
- **Routing:** React Router
- **Testing:** Vitest, React Testing Library, Cypress
- **Code Quality:** ESLint, TypeScript

## Prerequisites

- Node.js (v18 or newer)
- npm or yarn

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/nytimes-most-popular.git
   cd nytimes-most-popular
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to analyze and find problems in the code
- `npm run test` - Run unit tests with Vitest
- `npm run test:coverage` - Run tests with coverage report
- `npm run cypress` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests in headless mode

## Testing

### Unit Tests

This project uses Vitest and React Testing Library for unit testing. To run the tests:

```sh
npm run test
```

To run tests with coverage report:

```sh
npm run test:coverage
```

The coverage report will be generated in the `coverage` directory.

### E2E Tests

End-to-end tests are implemented using Cypress. To open the Cypress test runner:

```sh
npm run cypress
```

To run the Cypress tests in headless mode:

```sh
npm run cypress:run
```

## Project Structure

- `/src` - Application source code
  - `/components` - React components
  - `/pages` - Page components
  - `/services` - API service functions
  - `/store` - State management with Zustand
  - `/lib` - Utility functions and helpers
- `/cypress` - Cypress E2E tests

## Code Quality and Best Practices

- **TypeScript** is used throughout the application for type safety
- **ESLint** enforces code quality and consistency
- **React Query** handles data fetching, caching, and synchronization
- **Zustand** provides lightweight state management
- **Object-oriented principles** are applied in React component design
- **Container/Presentational pattern** separates UI from business logic

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The New York Times API for providing the article data
- [shadcn/ui](https://ui.shadcn.com/) for the accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the UI library
- [Vite](https://vitejs.dev/) for the fast build tool
