---
title: Ansible
description: Что такое Ansible
layout: category-layout
time: 27 февраля 2025
---

# Ansible

<time>{{time}}</time>

---

Ansible — это инструмент автоматизации с открытым исходным кодом, который используется для управления конфигурацией, развёртывания приложений и автоматизации задач. Он упрощает процесс управления инфраструктурой и её оркестрации за счёт использования декларативного языка для определения желаемых состояний и конфигураций. Ansible работает с помощью файлов YAML, называемых плейбуками, которые описывают задачи, выполняемые в удалённых системах. Он использует бессерверную архитектуру, то есть выполняет задачи на целевых компьютерах с помощью SSH или других удалённых протоколов без необходимости установки дополнительного программного обеспечения. Ansible широко используется для автоматизации повторяющихся задач, обеспечения согласованности и управления крупномасштабными развёртываниями в различных средах.

## Container Registies

- [Dockerhub](/docs/devops/docker/docker-compose-file)
- [Github container registry](/docs/devops/docker/docker-compose-file)

## 1. Core Concepts (20%)

- Control node
- Managed nodes
- Inventory
- Playbooks, Modules, Roles
- Installation and Configuration:

Installing Ansible on different OS
Setting up Ansible configuration files (ansible.cfg)
Basic Inventory setup (INI, YAML format)

## 2. Key Components (20%)

Inventory Management:
Static inventory: defining hosts and groups
Dynamic inventory: using plugins and external scripts for auto-discovery
Ad-Hoc Commands:

Running quick commands without playbooks (ansible -m)
Playbooks and YAML:

Writing and understanding Ansible playbooks
Playbook structure (tasks, handlers, variables, loops, conditionals)
Modules:

Core modules: shell, command, copy, file, yum/apt, service
Using facts and the setup module to gather system information

## 03 Automation with Playbooks

- Defining variables in playbooks and roles
- Using ansible_facts for dynamic data in playbooks
- Loops and Conditional Execution:
- Conditional tasks using when
- Using Jinja2 templates for dynamic configuration files (.j2 files)
- Triggers for executing tasks only when certain conditions are met

## 04 Roles and Best Practices

- Role Structure:
- Organizing playbooks with roles for reusability and modularity
- Role directory structure (tasks/, vars/, templates/, etc.)
- Ansible Galaxy:
- Using and downloading roles from Ansible Galaxy
- Creating and sharing your own roles
- Ansible Vault:
- Encrypting sensitive data in playbooks and roles

## 5. Advanced Techniques

- Error Handling and Debugging:

Debugging tasks (debug, assert)
Error handling with ignore_errors and failed_when
Task Delegation:

Running tasks on different hosts (delegate_to, local_action)
Dynamic Inventory Plugins:

Using AWS, Azure, or custom plugins for dynamic inventory
Custom Modules:

Writing basic custom Ansible modules in Python or other languages

## 6. Integration and Advanced Features (10%)

- Ansible Tower/AWX:

- Using Ansible Tower or AWX for enterprise-level orchestration
- Job templates and workflows
- CI/CD Integration:

- Integrating Ansible with Jenkins, GitLab CI, or other CI/CD pipelines
- Ansible with Docker/Kubernetes:

- Managing Docker containers and Kubernetes clusters with Ansible
- Performance Optimization:

- Running Ansible at scale (forks, parallel execution, async tasks)

### 07 Примеры использования в реальных задачах

- [Установка Node.js](/docs/devops/ansible/nodejs)
- System Administration:
- Automating patching, user management, and system configuration.
- Network Automation:
- Using Ansible for managing network devices (routers, switches).
- Cloud Provisioning:
- Deploying infrastructure on AWS, Azure, or GCP with Ansible.
- Automating the deployment of applications (e.g., LAMP/LEMP stacks, Java apps).
