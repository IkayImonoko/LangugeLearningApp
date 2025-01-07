import React, { useEffect, useState } from 'react';
import { fetchWords } from '../services/api';

const WordList = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetchWords()
        //fetch("http://188.225.34.175:5039/api/words") // Замените  на ваш реальный бэкэнд URL
            //.then((response) => response.json())
            .then((data) => setWords(data))
            .catch((error) => console.error("Error fetching words:", error));
    }, []);

    return (
        <div>
            <h2>Word List</h2>
            <div className="word-list-container">
            <ul className="word-list">
                {words.map((word) => (
                    <li key={word.id}>
                        {word.russian} - {word.norwegian}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default WordList;
