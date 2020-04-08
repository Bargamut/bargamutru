pipeline {
  agent {
		label 'master'
	}

  stages {
    stage('Build Docker image') {
			when {
				branch 'master'
			}
			steps {
      	sh 'scripts/build-container.sh'
			}
    }

    stage('Delivery') {
			when {
				branch 'master'
			}
      steps {
        sh 'scripts/delivery.sh'
      }
    }

		stage('Clean Docker images') {
			when {
				branch 'master'
			}
			steps {
				sh 'scripts/clean-images.sh'
			}
		}
  }
}