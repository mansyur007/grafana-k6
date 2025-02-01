pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
            }
        }
        stage('Run Tests with k6') {
            steps {
                sh 'echo "Running k6 tests..."'
                sh 'docker run --rm -v "$WORKSPACE":/scripts -w /scripts grafana/k6 run script.js'
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