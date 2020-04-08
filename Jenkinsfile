pipeline {
  agent {
		label 'master'
	}

  stages {
		stage('Tests') {
			stages {
				stage("Start tests") {
						steps{
								echo "====++++executing Start tests++++===="
						}
						post{
								always{
										echo "====++++always++++===="
								}
								success{
										echo "====++++Start tests executed successfully++++===="
								}
								failure{
										echo "====++++Start tests execution failed++++===="
								}
						}
				}
			}
		}
    stage('Build & deploy') {
			when {
				branch 'master'
			}
			stages {
				stage('Build Docker container') {
					steps {
						sh 'scripts/build-container.sh'
					}
				}

				stage('Delivery') {
					steps {
						sh 'scripts/delivery.sh'
					}
				}

				stage('Clean Docker images') {
					steps {
						sh 'scripts/clean-images.sh'
					}
				}
			}
    }
  }
}