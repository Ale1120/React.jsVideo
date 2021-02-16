pipeline {
  agent any

  environment {
    ARTIFACT_ID = "react:${env.BUILD_NUMBER}"
  }

  stages {
    stage('Build') {
      steps {
        script {
            dockerImage = docker.build "${env.ARTIFACT_ID}"
        }
      }
    }
    stage('Run tests') {
      steps {
        sh "docker rm web"
        sh "docker run  -d --name web -p 3000:3000 ${dockerImage.id} "
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        script {
          docker.withRegistry("", "DockerHubCredentials") {
            dockerImage.push()
          }
        }
      }
    }
    stage('Schedule Staging Deployment') {
      when {
        branch 'master'
      }
      steps {
        build job: 'deploy-webapp-staging', parameters: [string(name: 'ARTIFACT_ID', value: "${env.ARTIFACT_ID}")], wait: false
      }
    }
  }
}
