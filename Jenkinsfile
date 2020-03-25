pipeline {
  agent {
		label 'master'
	}

  stages {
    stage('Build Docker image') {
			steps {
      	sh 'scripts/build-container.sh'
			}
    }

    stage('Delivery') {
      steps {
        input 'Do you want to delivery?'
        sh 'scripts/delivery.sh'
      }
    }

		stage('Clean') {
			steps {
				sh 'scripts/delivery.sh'
			}
		}
  }
}