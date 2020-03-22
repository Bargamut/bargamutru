pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '-p 3000:3000'
    }

  }

  environment {
    HOME = '.'
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
        sh 'npm run build'
      }
    }

		stage('Deliver') {
			steps {
				input message: "Do you want to deliver?"
				sh 'ls -lpha /var/www/'
			}
		}
  }
}