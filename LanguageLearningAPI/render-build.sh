#!/usr/bin/env bash

curl -sSL https://dotnet.microsoft.com/download/dotnet/thank-you/sdk-8.0.404-linux-x64-installer | bash
export PATH=$PATH:/root/.dotnet

# Сборка и публикация проекта
dotnet publish -c Release -o out

