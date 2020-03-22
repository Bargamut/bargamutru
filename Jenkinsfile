pipeline {
  agent {
    docker {
      image 'node:13.10.1-alpine'
      args '''
-v /var/www/bargamut.ru/www:$WORKSPACE/2deliver
-v /etc/passwd:/etc/passwd
-v /etc/group:/etc/group
--user="www-data:www-data"
'''
    }

  }
  stages {
    stage('Install') {
      steps {
        sh '''npm cache clean --force
npm install'''
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deliver') {
      steps {
				sh '''ls -lpha
ls -lpha public/
ls -lpha 2deliver/'''
        input 'Do you want to deliver?'
				sh 'cp -R public/* 2deliver/'
				sh 'ls -lpha 2deliver/'
        input 'Do you want to deliver?'
        sh 'echo "Done!"'
      }
    }

  }
  environment {
    HOME = '.'
  }
}