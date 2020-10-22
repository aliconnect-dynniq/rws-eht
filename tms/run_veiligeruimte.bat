@echo off
:node
cls
node index --config.http.port=9003 --config.aim.aud=3448616 --info.title="VeiligeRuimte H" --debug=1
pause
goto:node
