@echo off
TITLE Bienvenid@ %USERNAME%
MODE con:cols=80 lines=30

:: Menu
:inicio
SET var=0
cls
echo ------------------------------------------
echo. Fecha: %DATE% Hora: %TIME%
echo ------------------------------------------
echo.
echo. 1 - Abrir Consola 
echo.
echo. 2 - Run Dev   : 3000 vite
echo.
echo. 3 - Run Build
echo.
echo. 4 - Run Serve : 5000 vite
echo.
echo. 0 - Salir ...
echo.
echo ------------------------------------------
echo.

SET /p var=- - - Seleccione una Opcion : 
echo.

if "%var%"=="1" goto opt1
if "%var%"=="2" goto opt2
if "%var%"=="3" goto opt3
if "%var%"=="4" goto opt4
if "%var%"=="0" goto salir

echo.
echo.... la Opcion seleccionada no es valida ...
echo.

pause
goto:inicio

:: Opcion - 1 - Abrir Consola
:opt1

:: start
start cmd

pause
:: Regresar
goto:inicio

:: Opcion - 2 - Run Dev   : 3000 vite
:opt2

:: start
start http://127.0.0.1:3000
:: start
start npm run dev

pause
:: Regresar
goto:inicio

:: Opcion - 3 - Run Build
:opt3

:: start
start npm run build

pause
:: Regresar
goto:inicio

:: Opcion - 4 - Run Serve : 5000 vite
:opt4

:: start
start http://127.0.0.1:5000
:: start
start npm run serve

pause
:: Regresar
goto:inicio

:: Opcion - 0 - Salir...
:salir
@cls&exit