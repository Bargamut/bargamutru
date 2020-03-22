pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '-v /var/www/bargamut.ru/www:/public'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh '''npm cache clean --force
npm install
				'''
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deliver') {
      steps {
				sh 'ls -lpha'
				sh 'ls -lpha ../'
				sh 'ls -lpha public/'
        input 'Do you want to deliver?'
        sh 'echo "Done!"'
      }
    }

  }
  environment {
    HOME = '.'
  }
}