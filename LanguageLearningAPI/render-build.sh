#!/usr/bin/env bash

# Установка .NET SDK
wget https://dotnet.microsoft.com/download/dotnet/8.0 -O dotnet-install.sh
bash dotnet-install.sh


# Добавление .NET в PATH
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
source ~/.bashrc

# Сборка и публикация проекта
dotnet publish -c Release -o out

