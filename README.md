# Agri AI - Plant Disease Diagnostic System

Agri AI is a full-stack application for diagnosing plant diseases using artificial intelligence. The system allows users to upload images of plants and receive AI-powered analysis for disease detection and treatment recommendations.

## 🚀 Features

- **AI-Powered Analysis**: Upload plant images for automatic disease detection
- **Comprehensive Dashboard**: View analysis history and results
- **Treatment Recommendations**: Get detailed treatment plans for identified diseases
- **Modern Web Interface**: Clean, responsive UI built with Angular and Tailwind CSS
- **RESTful API**: FastAPI backend with proper architecture patterns
- **Docker Support**: Easy deployment with Docker Compose
- **PostgreSQL Database**: Persistent storage for analysis history

## 🏗️ Architecture

The project follows a clean architecture pattern with clear separation of concerns:

### Backend (FastAPI)
- **Domain Layer**: Core business logic and entities
- **Application Layer**: Use cases and services
- **Infrastructure Layer**: Database repositories, ML models, and external services
- **API Layer**: REST endpoints and DTOs

### Frontend (Angular)
- **Presentation Layer**: Components and views
- **Application Layer**: Services and DTOs
- **Domain Layer**: Entities and use cases
- **Infrastructure Layer**: API services

## 📁 Project Structure

```
agri-ai/
├── back/                    # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes and DTOs
│   │   ├── application/    # Use cases and services
│   │   ├── domain/         # Business logic and entities
│   │   └── infrastructure/ # Database and ML implementations
│   ├── data/               # Data files
│   ├── models/             # ML models
│   ├── uploads/            # Uploaded images
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env
├── front/                  # Angular frontend
│   └── agri-ai-front/
│       ├── src/app/
│       │   ├── presentation/ # UI components
│       │   ├── application/  # Services and DTOs
│       │   ├── domain/       # Entities and use cases
│       │   └── infrastructure/ # API services
│       ├── Dockerfile
│       ├── package.json
│       └── tailwind.config.js
├── docker-compose.yml      # Multi-container setup
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## 🛠️ Prerequisites

- Docker and Docker Compose
- Python 3.9+ (for local backend development)
- Node.js 18+ and npm (for local frontend development)

## 🚀 Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone https://github.com/ratife/agri-ai.git
   cd agri-ai
   ```

2. **Start the application**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Frontend: http://localhost:3000 (currently commented in docker-compose)
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

4. **Stop the application**
   ```bash
   docker-compose down
   ```

## 🔧 Development Setup

### Backend Development

1. **Navigate to backend directory**
   ```bash
   cd back
   ```

2. **Create virtual environment and install dependencies**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env  # Create your own .env file
   ```

4. **Run the backend server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend Development

1. **Navigate to frontend directory**
   ```bash
   cd front/agri-ai-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Access the frontend**
   - Open http://localhost:4200 in your browser

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/analyze` | Analyze a plant image |
| GET | `/api/history` | Get analysis history |
| GET | `/api/plants` | Get available plant types |
| GET | `/api/diseases` | Get disease information |

## 🤖 Machine Learning

The system includes a machine learning component for image classification:

- **Image Classifier**: Uses deep learning models to identify plant diseases
- **Confidence Scoring**: Provides confidence levels for predictions
- **Model Management**: Supports multiple model versions and updates

## 🧪 Testing

### Backend Tests
```bash
cd back
pytest
```

### Frontend Tests
```bash
cd front/agri-ai-front
npm test
```

## 📝 Environment Variables

### Backend (.env)
```env
POSTGRES_USER=agriai
POSTGRES_PASSWORD=agriai123
POSTGRES_DB=agriai
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

## 🐳 Docker Configuration

The project includes Docker configurations for both services:

- **Backend**: Python 3.9 with FastAPI
- **Frontend**: Node.js with Angular
- **Database**: PostgreSQL 14

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- FastAPI for the excellent backend framework
- Angular for the robust frontend framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and maintainers

---

**Note**: This is a development project. The AI models are currently in dummy/development mode and will be replaced with trained models in production.
