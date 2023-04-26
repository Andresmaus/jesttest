pipeline {
  agent node ("Principal")

  stages {
    stage('Instalando Dependencias') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
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
