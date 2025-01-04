# Use .NET SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy project files and restore dependencies
COPY *.sln .
COPY api/*.csproj ./api/
RUN dotnet restore

# Copy the rest of the files and build the app
COPY . .
WORKDIR /app/api
RUN dotnet publish -c Release -o out

# Use ASP.NET Core runtime for the final image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/api/out .
EXPOSE 5000
ENTRYPOINT ["dotnet", "LanguageLearningAPI.dll"]
