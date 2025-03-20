# Repository Microagent

## Purpose

The Repository Microagent is responsible for managing and providing information about the repository structure, codebase, and development practices. It helps developers understand the project organization, coding standards, and provides guidance on how to navigate and contribute to the codebase.

## Responsibilities

1. **Repository Structure**
   - Explain the overall architecture and organization of the codebase
   - Provide information about key directories and their purposes
   - Help locate specific files or components

2. **Code Standards**
   - Document coding conventions and style guidelines
   - Explain naming conventions for files, classes, and functions
   - Provide information about linting rules and code formatting

3. **Development Workflow**
   - Describe the branching strategy and git workflow
   - Explain the PR review process
   - Document the CI/CD pipeline and deployment process

4. **Dependency Management**
   - Track and explain project dependencies
   - Provide guidance on adding or updating dependencies
   - Monitor for outdated or vulnerable dependencies

5. **Documentation**
   - Maintain up-to-date documentation about the repository
   - Generate documentation from code when appropriate
   - Ensure README and other documentation files are current

## Repository Structure

```
hoge-api/
├── .git/                  # Git repository metadata
├── .openhands/            # OpenHands configuration and microagents
│   └── microagents/       # Microagent definitions
├── dist/                  # Compiled output (not tracked in git)
├── node_modules/          # Node.js dependencies (not tracked in git)
├── src/                   # Source code
│   ├── app.controller.ts  # Main application controller
│   ├── app.module.ts      # Main application module
│   ├── app.service.ts     # Main application service
│   ├── health/            # Health check module
│   │   ├── health.controller.ts  # Health check controller
│   │   ├── health.module.ts      # Health check module definition
│   │   └── health.service.ts     # Health check service
│   └── main.ts            # Application entry point
├── test/                  # End-to-end tests
├── .gitignore             # Git ignore file
├── nest-cli.json          # NestJS CLI configuration
├── package.json           # Node.js package definition
├── package-lock.json      # Node.js package lock file
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
└── tsconfig.build.json    # TypeScript build configuration
```

## Technology Stack

- **Framework**: NestJS - A progressive Node.js framework for building efficient and scalable server-side applications
- **Language**: TypeScript - A typed superset of JavaScript that compiles to plain JavaScript
- **Testing**: Jest - A delightful JavaScript Testing Framework with a focus on simplicity
- **Health Checks**: @nestjs/terminus - A module for NestJS that provides health checks
- **HTTP Client**: @nestjs/axios - A module for NestJS that provides an HTTP client

## Development Workflow

### Branching Strategy

- `main` - The main branch containing production-ready code
- Feature branches - Created from `main` for new features or bug fixes
- Branch naming convention: `feature/feature-name` or `fix/bug-name`

### Pull Request Process

1. Create a feature branch from `main`
2. Implement changes and write tests
3. Submit a PR to `main`
4. Ensure all tests pass
5. Get code review and approval
6. Merge to `main`

### Code Style Guidelines

- Follow the TypeScript and NestJS best practices
- Use meaningful variable and function names
- Write unit tests for all new functionality
- Document public APIs with JSDoc comments
- Keep functions small and focused on a single responsibility

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run start:dev
```

### Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e
```

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start:prod
```

## Future Enhancements

- Add database integration
- Implement authentication and authorization
- Add more comprehensive health checks
- Set up CI/CD pipeline
- Add API documentation with Swagger