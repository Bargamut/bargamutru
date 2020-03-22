pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh '''
					npm cache clean --force
					npm install
				'''
      }
    }

    stage('Build') {
      steps {
        sh 'npm build --production'
      }
    }
  }
  environment {
    HOME = '.'
  }
}