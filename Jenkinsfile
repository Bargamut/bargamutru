pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '''-u jenkins:jenkins
-p 3000:3000'''
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}