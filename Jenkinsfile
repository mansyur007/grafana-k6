pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mansyur007/grafana-k6.git'
            }
        }
        stage('Install k6') {
            steps {
                sh '''
                    echo "Installing k6..."
                    sudo apt-get update
                    sudo apt-get install -y ca-certificates gnupg
                    sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
                    echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
                    sudo apt-get update
                    sudo apt-get install -y k6
                '''
            }
        }
        stage('Run Tests with k6') {
            steps {
                sh 'echo "Running k6 tests..."'
                sh 'k6 run script.js'
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