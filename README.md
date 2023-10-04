Getting Started With WanSik Application
===================================

## Installation
-Set up your project.

        git clone git@github.com:zhangtienyong/wansik.git"
        cd wansik

## Create feature branch for working with your own code to avoid conflict code with teammates.
-Git saves our main code of milestones checkpoint.

        git branch <branch-name>
        git checkout <branch-name>

-If that last command fails

        git checkout -b <branch-name>
        npm install

## When you finish your task, you cannot commit directly to the main.
-Git add file and commit to your branch-name

        git add .
        git commit "Your message will let teammates know what to do."
        git push –u origin <branch name>
