#!/usr/bin/env bash

# Установка .NET SDK
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel LTS

# Добавление .NET SDK в PATH
export PATH="$HOME/.dotnet:$PATH"

# Сборка проекта
dotnet publish -c Release -o out
