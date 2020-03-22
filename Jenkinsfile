pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''npm cache clean --force
npm install'''
      }
    }

  }
}