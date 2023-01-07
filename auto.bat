echo building...
call yarn build
git add .
@REM @echo off
@REM set /p msg=commit message:
@REM @echo on
git commit -m update 
git pull origin master 
git push origin master