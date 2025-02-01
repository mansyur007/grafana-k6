pipeline {
    agent any
    tools {
        nodejs 'NodeJS 18'  // Sesuaikan dengan nama Node.js di Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'echo "Installing dependencies..."'
                sh 'npm install'
            }
        }
        stage('Run Tests with k6') {
            steps {
                sh 'echo "Running k6 tests..."'
                sh 'k6 run script.js'  // Ganti dengan skrip k6 Anda
            }
        }
    }
    post {
        success {
            echo 'Pipeline berhasil!'
        }
        failure {
            echo 'Pipeline gagal!'
        }
    }
}