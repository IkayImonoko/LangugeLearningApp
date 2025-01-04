# Используем официальный .NET SDK образ
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY LanguageLearningAPI/*.csproj ./LanguageLearningAPI/

# Восстанавливаем зависимости
RUN dotnet restore ./LanguageLearningAPI/LanguageLearningAPI.csproj

# Копируем оставшиеся файлы проекта
COPY LanguageLearningAPI/. ./LanguageLearningAPI/

# Переходим в папку проекта
WORKDIR /app/LanguageLearningAPI

# Сборка приложения в режиме Release
RUN dotnet publish -c Release -o /out

# Используем минимальный образ для запуска
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранное приложение
COPY --from=build /out .

# Выполняем миграции перед запуском
#RUN dotnet ef database update --no-build


# Указываем команду для запуска приложения
ENTRYPOINT ["dotnet", "LanguageLearningAPI.dll"]
