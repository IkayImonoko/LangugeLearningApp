#!/usr/bin/env bash

# Установка .NET SDK
curl -sSL https://dotnet.microsoft.com/download/dotnet/8.0/installer/linux-x64 -o dotnet-sdk.tar.gz
tar -xzf dotnet-sdk.tar.gz


# Добавление .NET в PATH
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
source ~/.bashrc

# Сборка и публикация проекта
dotnet publish -c Release -o out

