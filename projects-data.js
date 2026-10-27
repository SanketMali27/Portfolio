const PROJECTS = [
    {
        "id": "autonomous-research-analytics-agent",
        "title": "Autonomous Research & Analytics Agent",
        "tagline": "LangGraph-orchestrated research, RAG, and data analysis",
        "shortDesc": "An autonomous AI agent that combines document RAG, web research, Python data analysis, and conversational memory in one workflow.",
        "longDesc": "Built an autonomous research and analytics agent orchestrated with LangGraph. It supports hybrid document retrieval, web search, Python-based data analysis, query rewriting, retrieval grading, answer critique, persistent conversation memory, and AI observability and safety workflows.",
        "status": "Completed",
        "accent": "indigo",
        "tags": [
            "LangGraph",
            "FastAPI",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Qdrant",
            "Groq",
            "LangSmith",
            "RAG",
            "Agentic AI"
        ],
        "highlights": [
            {
                "icon": "fas fa-project-diagram",
                "label": "Agent Orchestration"
            },
            {
                "icon": "fas fa-database",
                "label": "Hybrid RAG"
            },
            {
                "icon": "fas fa-shield-alt",
                "label": "Guardrails & Evals"
            }
        ],
        "github": "#",
        "demo": "#"
    },
    {
        "id": "cloudshare",
        "title": "CloudShare",
        "tagline": "JWT-secured cloud file sharing deployed on AWS",
        "shortDesc": "A full-stack file-sharing app with secure authentication, signed S3 downloads, expiring redeem codes, and QR-code sharing.",
        "longDesc": "Built a full-stack file-sharing application using React, Node.js, Express, MongoDB, AWS S3, and EC2. Implemented access and refresh token authentication, per-user file metadata, signed URL downloads, six-character redeem codes with configurable expiry and download limits, QR-code sharing, and public share pages. Deployed on EC2 with PM2 and Nginx.",
        "status": "Completed",
        "accent": "teal",
        "tags": [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS S3",
            "AWS EC2",
            "JWT",
            "Nginx",
            "PM2"
        ],
        "highlights": [
            {
                "icon": "fas fa-lock",
                "label": "JWT Authentication"
            },
            {
                "icon": "fas fa-cloud",
                "label": "AWS S3 Storage"
            },
            {
                "icon": "fas fa-qrcode",
                "label": "QR Sharing"
            }
        ],
        "github": "#",
        "demo": "#"
    },
    {
        "id": "documind-ai",
        "title": "DocuMind AI: Document Classification",
        "tagline": "CNN-based document image classification with PyTorch",
        "shortDesc": "A PyTorch pipeline that classifies documents as invoices, scientific publications, or resumes.",
        "longDesc": "Built a document image classification pipeline using Hugging Face Datasets and a custom PyTorch Dataset/DataLoader. The pipeline resizes images, converts them to tensors, trains a CNN with convolution, ReLU, max-pooling, CrossEntropyLoss, and Adam, and uses train/validation splits, accuracy evaluation, and best-model checkpointing for inference on unseen documents.",
        "status": "Completed",
        "accent": "pink",
        "tags": [
            "Python",
            "PyTorch",
            "Hugging Face",
            "CNN",
            "Computer Vision"
        ],
        "highlights": [
            {
                "icon": "fas fa-file-alt",
                "label": "3 Document Classes"
            },
            {
                "icon": "fas fa-brain",
                "label": "CNN Model"
            },
            {
                "icon": "fas fa-chart-line",
                "label": "Model Evaluation"
            }
        ],
        "github": "#",
        "demo": "#"
    },
    {
        "id": "ml-model-comparison",
        "title": "ML Model Comparison System",
        "tagline": "Compare five classifiers with a consistent evaluation pipeline",
        "shortDesc": "A scikit-learn workflow that trains and compares five classifiers on a heart disease dataset and selects the best model by F1 score.",
        "longDesc": "Built an end-to-end machine learning pipeline with missing-value handling, StandardScaler, train-test splitting, and consistent preprocessing. Compared Logistic Regression, Random Forest, SVM, KNN, and Decision Tree using accuracy, precision, recall, and F1 score; exported results to CSV and visualized them with Matplotlib.",
        "status": "Completed",
        "accent": "indigo",
        "tags": [
            "Python",
            "scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Machine Learning"
        ],
        "highlights": [
            {
                "icon": "fas fa-vial",
                "label": "5 Classifiers"
            },
            {
                "icon": "fas fa-chart-bar",
                "label": "Metric Comparison"
            },
            {
                "icon": "fas fa-file-csv",
                "label": "CSV Results"
            }
        ],
        "github": "#",
        "demo": "#"
    },
    {
        "id": "foodbridge",
        "title": "FoodBridge — Food Waste Management System",
        "tagline": "Redistributing surplus food to reduce waste",
        "shortDesc": "A MERN platform connecting restaurants with NGOs, animal farms, and industries to route surplus food safely.",
        "longDesc": "Uses a rule-based food safety scoring model, role-based dashboards, Socket.IO notifications, geolocation-based matching, scheduled downgrade logic, and analytics to help reduce food waste.",
        "status": "Completed",
        "accent": "teal",
        "tags": [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
            "Tailwind"
        ],
        "highlights": [
            {
                "icon": "fas fa-recycle",
                "label": "Waste Reduction"
            },
            {
                "icon": "fas fa-bell",
                "label": "Real-time Updates"
            },
            {
                "icon": "fas fa-chart-line",
                "label": "Analytics"
            }
        ],
        "github": "https://github.com/SanketMali27/capstone-Proj",
        "demo": "#"
    },
    {
        "id": "personal-ai-advisor",
        "title": "Personal AI Advisor — Multi-Agent RAG System",
        "tagline": "Domain-specific AI advisors with retrieval-augmented generation",
        "shortDesc": "A multi-agent AI application offering specialized assistants across medical, finance, education, and legal domains.",
        "longDesc": "Users can upload documents and interact with specialized agents backed by contextual retrieval pipelines and Qdrant. Includes authentication, chat history, document embeddings, and AI responses powered by Groq.",
        "status": "Completed",
        "accent": "indigo",
        "tags": [
            "React",
            "Node.js",
            "MongoDB",
            "RAG",
            "Qdrant",
            "Groq API"
        ],
        "highlights": [
            {
                "icon": "fas fa-brain",
                "label": "Multi-Agent AI"
            },
            {
                "icon": "fas fa-database",
                "label": "Vector Search"
            },
            {
                "icon": "fas fa-comments",
                "label": "Context-Aware Chat"
            }
        ],
        "github": "https://github.com/SanketMali27/personal-ai-advisor",
        "demo": "#"
    },

];
