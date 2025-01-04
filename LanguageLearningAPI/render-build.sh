#!/usr/bin/env bash

# Установка .NET SDK
curl -sSL https://aka.ms/getdotnet | bash


# Добавление .NET в PATH
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
source ~/.bashrc

# Сборка и публикация проекта
dotnet publish -c Release -o out

