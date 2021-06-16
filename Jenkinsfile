pipeline {
    agent any
    
     environment { 
        registry = "shashimls276/vaccination" 
        registryCredential = 'dockerhub_id' 
        dockerImage = ''
        PROJECT_ID = 'geometric-vim-314208'
        CLUSTER_NAME = 'ci-cd-cluster'
        LOCATION = 'asia-south1-a'
        CREDENTIALS_ID = 'gke' 
    }

    tools {
        jdk 'JAVA_HOME'
    }

    stages {
        
        stage ('Initialize') {
            steps {
                sh '''
                    echo "PATH = '/usr/lib/jvm/java-8-openjdk-amd64'"
                    echo "JAVA_HOME = /usr/lib/jvm/java-8-openjdk-amd64"
                    
                '''
            }
        }
        
        stage('Code Checkout') {
            steps {
                git 'https://github.com/shashimls276/vaccination-alert-ui.git'
            }
        }
        
         stage('Code Build') {
            steps {
                sh "mvn clean install"
            }
        }
        
    }
}
