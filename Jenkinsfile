pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = credentials('jenkins-github') //token id from jenkins
        K6_TOKEN = credentials('jenkins-k6') //token id from jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'staging', url: 'https://github.com/mansyur007/grafana-k6.git'
                }
            }
        }

        stage('Run k6 Performance Test - from dev') {
            steps {
                script {
                    sh '''
                    docker run --rm -v $PWD:/scripts -e K6_CLOUD_TOKEN=$K6_TOKEN grafana/k6 run /scripts/k6-test-api.js -o cloud
                    '''
                }
            }
        }
    }
}
