import React, { useEffect, useState } from 'react';

const WordList = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("https://languagelearningapp-a32m.onrender.com/api/words") // Замените  на ваш реальный бэкэнд URL
            .then((response) => response.json())
            .then((data) => setWords(data))
            .catch((error) => console.error("Error fetching words:", error));
    }, []);

    return (
        <div>
            <h2>Word List</h2>
            <ul>
                {words.map((word) => (
                    <li key={word.id}>
                        {word.russian} - {word.norwegian}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WordList;
