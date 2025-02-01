pipeline {
    agent any  // Gunakan agent apa pun yang tersedia di Jenkins
    stages {
        stage('Checkout') {
            steps {
                // Klon repository GitHub
                git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependensi (jika diperlukan)
                sh 'echo "Installing dependencies..."'
                sh 'npm install'  // Contoh untuk proyek Node.js
            }
        }
        stage('Run Tests with k6') {
            steps {
                // Jalankan tes menggunakan k6
                sh 'echo "Running k6 tests..."'
                sh 'k6 run k6-test-api.js'  // Ganti dengan skrip k6 Anda
            }
        }
        stage('Deploy') {
            steps {
                // Langkah deploy (opsional)
                sh 'echo "Deploying application..."'
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