const API_URL = "http://188.225.34.175:5039/api";

export const fetchWords = async () => {
    const response = await fetch(`${API_URL}/words`);
    if (!response.ok) {
        throw new Error("Failed to fetch words");
    }
    return response.json();
};

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const registreUser = async (username, email, password) => {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"username":username, "email":email, "passwordhash":password}),
    });
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
        throw new Error(`Failed to delete user with ID: ${userId}`);
      }
};

export const addWordToUser = async (userId, wordId) => {
    const response = await fetch(`${API_URL}/userwords`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, wordId }),
    });

    if (!response.ok) {
        throw new Error("Failed to add word to user");
    }
    return response.json();
};

export const addWord = async (russian, norwegian) => {
    const response = await fetch(`${API_URL}/words`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ russian, norwegian }),
    })
};

export const deleteWord = async (wordId) => {
    const response = await fetch(`${API_URL}/words/${wordId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
        throw new Error(`Failed to delete word with ID: ${wordId}`);
      }
};
