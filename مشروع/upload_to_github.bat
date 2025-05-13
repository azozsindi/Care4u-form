@echo off
echo ================================================================
echo               تعليمات رفع المشروع على GitHub
echo ================================================================
echo.
echo للرفع على GitHub، يجب اتباع الخطوات التالية:
echo.
echo 1. قم بتحميل وتثبيت Git من الرابط:
echo    https://git-scm.com/downloads
echo.
echo 2. قم بإنشاء حساب على GitHub إذا لم يكن لديك واحد من الرابط:
echo    https://github.com/signup
echo.
echo 3. بعد تثبيت Git، اتبع الخطوات التالية في نافذة Command Prompt جديدة:
echo.
echo    cd %cd%
echo    git init
echo    git add .
echo    git commit -m "النسخة الأولى من تطبيق Care4u KSA"
echo.
echo 4. قم بإنشاء مستودع جديد على GitHub
echo    https://github.com/new
echo.
echo 5. ثم قم بكتابة الأوامر التالية مع تبديل USERNAME و REPOSITORY_NAME باسم المستخدم واسم المستودع الخاص بك:
echo.
echo    git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ================================================================
echo.
echo للمتابعة، اضغط أي مفتاح...
pause > nul
start https://git-scm.com/downloads 