pipeline {
    agent any
    environment {
        DOTNET_VERSION = '8.0'
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
        DOCKER_IMAGE_NAME = 'frontend-image' // Cambia por el nombre de tu imagen
    }
    stages {
        stage('Restore NuGet Packages') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        bat "dotnet clean"
                        bat "dotnet restore"
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        bat "dotnet build --configuration Release"
                    }
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        bat "test.bat"
                        bat "trx2junit C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\TareasAPI\\TestResult\\result.trx"
                    }
                }
            }
        }

        stage('Run Web Api') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\TareasAPI') {
                    script {
                        bat "start dotnet run"
                    }
                }
            }
        }

        stage('Build Docker Image for Frontend') {
            steps {
                dir('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\SistemitaTareas') {
                    script {
                        // Construir la imagen Docker
                        bat "docker build -t ${DOCKER_IMAGE_NAME} ."
                    }
                }
            }
        }

        stage('Run Frontend in Docker') {
            steps {
                script {
                    // Ejecutar la imagen Docker del frontend
                    bat "docker run -d -p 4200:80 ${DOCKER_IMAGE_NAME}"
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                dir('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\SistemitaTareas') {
                    script {
                        bat "npx cypress install"
                        bat "npx cypress run --config baseUrl=http://localhost:4200"
                    }
                }
            }
        }

        stage('Verify Test Results') {
            steps {
                script {
                    bat 'dir C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\TareasAPI\\TestResult\\'
                }
            }
        }
    }
}
