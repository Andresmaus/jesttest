pipeline {
  agent any

  stages {
    stage('Instalando Dependencias') {
      steps {
        sh 'npm install --save-dev jest'
        sh 'npm install'
      }
    }
    stage('Run test') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: '**/junit-*.xml'
    }
  }
}
