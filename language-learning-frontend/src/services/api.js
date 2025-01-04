const API_URL = "https://languagelearningapp-a32m.onrender.com/api";

export const fetchWords = async () => {
    const response = await fetch(`${API_URL}/words`);
    if (!response.ok) {
        throw new Error("Failed to fetch words");
    }
    return response.json();
};

export const addWordToUser = async (userId, wordId) => {
    const response = await fetch(`${API_URL}/user-words`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, wordId }),
    });

    if (!response.ok) {
        throw new Error("Failed to add word to user");
    }
    return response.json();
};
