pipeline {
  agent {
		label 'master'
	}

  stages {
    stage('Build Docker image') {
			steps {
      	sh '''docker build \
-t bargamut/bargamut-site:latest \
-t bargamut/bargamut-site:build-$BUILD_ID \
.
'''
			}
    }

    stage('Deliver') {
      steps {
        input 'Do you want to deliver?'
        sh 'echo "Done!"'
      }
    }

  }
  environment {
    HOME = '.'
  }
}