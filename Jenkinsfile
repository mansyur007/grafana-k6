pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mansyur007/grafana-k6.git'
            }
        }

        stage('Run k6 Performance Test') {
            steps {
                script {
                    sh 'docker run --rm -v $(pwd):/scripts grafana/k6 run k6-test-api.js'
                }
            }
        }
    }
}
