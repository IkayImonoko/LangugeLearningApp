#!/usr/bin/env bash

# Установка .NET SDK
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel LTS


# Добавление .NET в PATH
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
source ~/.bashrc

# Сборка и публикация проекта
dotnet publish -c Release -o out

