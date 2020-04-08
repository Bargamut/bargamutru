pipeline {
  agent {
		label 'master'
	}
	parameters { 
		choice(name: 'NODE_VERSION', choices: ['Node.js 12.11.0', 'NodeJS 13.7.0'], description: '') 
	}

	tools {
		nodejs params.NODE_VERSION
	}

  stages {
		stage('Tests') {
			stages {
				stage("Start tests") {
					steps{
							echo "====++++executing Start tests++++===="
							sh 'echo "$PATH"'
							sh 'echo "$HOME"'
							sh 'node --version'
							sh 'yarn test'
					}
					post{
							always{
									echo "====++++always++++===="
							}
							success{
									echo "====++++Start tests executed successfully++++===="
									sh 'npm run coverage'
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