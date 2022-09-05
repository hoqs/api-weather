pipeline{
    agent {
        docker{
            image 'node:8'
            args '-p 9999:3030'
        }
    }
    stages{
        stage('Build'){
            steps{
            sh 'npm install'
            }
        }       
    }
}



