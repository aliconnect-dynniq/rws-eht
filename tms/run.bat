@echo off
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

rem start node control --config.aim.aud=3448914 --info.title="A2M Tunnel"

rem start node control --config.aim.aud=3443779 --info.title="A2M Verkeersbuis HRe"
rem start node control --config.aim.aud=3448421 --info.title="A2M Verkeersbuis HLi"
rem start node control --config.aim.aud=3448616 --info.title="A2M VeiligeRuimte H"

rem start node control --config.aim.aud=3448656 --info.title="A2M Verkeersbuis PRe"
rem start node control --config.aim.aud=3448759 --info.title="A2M Verkeersbuis PLi"
rem start node control --config.aim.aud=3448873 --info.title="A2M VeiligeRuimte P"

rem start node control --config.aim.aud=3448537 --info.title="A2M Dienstgebouw 1"
rem start node control --config.aim.aud=3448575 --info.title="A2M Dienstgebouw 2"

rem START "" %BROWSER% --app="http://rws.localhost/a2m/webroot/" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache

:node
cls
node index
pause
goto:node
