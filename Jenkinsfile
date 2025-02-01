pipeline {
    agent any
    tools {
        nodejs 'nodejs'  // Sesuaikan dengan nama Node.js di Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
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