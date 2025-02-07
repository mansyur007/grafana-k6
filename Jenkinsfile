pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = credentials('jenkins-github')
    }

    

    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
                }
            }
        }

        stage('Run k6 Performance Test') {
            steps {
                script {
                    sh 'docker run --rm -v $PWD:/scripts grafana/k6 run /scripts/k6-test-api.js'
                }
            }
        }
    }
}
