Getting Started With WanSik Application
===================================

## Installation
-Set up your project.

        git clone git@github.com:zhangtienyong/wansik.git
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
        git commit -m "Your message will let teammates know what to do."

-Git push file first time

        git push --set-upstream origin <branch name>

-Git push file second time and more

        git push

## Happy Coding friends