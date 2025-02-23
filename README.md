## 🚀 k6 Performance Testing with Jenkins & Grafana Cloud  

### 📌 Overview  
This project demonstrates **automated performance testing** using **k6**, integrated with **Jenkins** and **Grafana Cloud** for real-time monitoring and reporting. The goal is to streamline **load, stress, and spike testing** in a CI/CD pipeline.  

### 📹 Watch the Demo Video  
Check out the full demonstration on LinkedIn:  
[![Watch on LinkedIn](https://img.shields.io/badge/Watch%20on-LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:ugcPost:7294289585142935552/)


### 🏷️ Project Features  
✅ **Performance Testing with k6** – Simulate realistic load scenarios for APIs and web applications.  
✅ **Automated Execution with Jenkins** – Run tests automatically on code changes.  
✅ **Live Monitoring on Grafana Cloud** – Store and visualize test results in real time.  
✅ **Git Integration** – Store and manage k6 test scripts in a version-controlled repository.  

### 🔧 Tech Stack  
- [k6](https://k6.io/) – Open-source load testing tool  
- [Jenkins](https://www.jenkins.io/) – CI/CD automation  
- [Grafana Cloud](https://grafana.com/) – Metrics visualization  
- Git & GitHub – Version control

### 🚀 Getting Started  

#### 1⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/k6-performance-testing.git
cd k6-performance-testing
```

#### 2⃣ Install k6  
Follow the official k6 [installation guide](https://k6.io/docs/getting-started/installation/).  

#### 3⃣ Run a Basic Load Test  
```sh
k6 run scripts/k6-test-api.js
```

#### 4⃣ Automate with Jenkins  
- Configure **Jenkins Pipeline** using `Jenkinsfile`.  
- Set up **triggers** to run tests on code changes.  
- View results in **Grafana Cloud Dashboard**.  

### 📊 Grafana Cloud Integration  
To send test results to Grafana Cloud:  
1. Sign up for a **Grafana Cloud** account.  
2. Configure k6 to push metrics using:  
   ```sh
   run /scripts/k6-test-api.js -o cloud
   ```  


