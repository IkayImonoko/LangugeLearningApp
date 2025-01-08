import React, { useEffect, useState } from 'react';
import { fetchWords, deleteWord } from '../services/api';

const WordList = () => {
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);

    useEffect(() => {
        fetchWords()
        //fetch("http://188.225.34.175:5039/api/words") // Замените  на ваш реальный бэкэнд URL
            //.then((response) => response.json())
            .then((data) => setWords(data))
            .catch((error) => console.error("Error fetching words:", error));
    }, []);

    const handleCheckboxChange = (wordId) => {
        setSelectedWords((prevSelected) =>
          prevSelected.includes(wordId)
            ? prevSelected.filter((id) => id !== wordId) // Убираем ID, если он уже выбран
            : [...prevSelected, wordId] // Добавляем ID в список
        );
    };

    const handleDelete = async () => {
            try {
          // Вызываем API для удаления каждого выбранного пользователя
          await Promise.all(selectedWords.map((wordId) => deleteWord(wordId)));
    
          // Удаляем пользователей из списка локально
          setWords((prevWord) =>
            prevWord.filter((word) => !selectedWords.includes(word.id))
          );
    
          // Очищаем список выбранных пользователей
          setSelectedWords([]);
            } catch (error) {
          console.error("Error deleting users:", error);
            }
        };

    return (
        <div>
            <h2>Word List</h2>
                <button onClick={handleDelete} disabled={selectedWords.length === 0}>
                    Delete words
                </button>
            <div className="word-list-container">
            <ul className="word-list">
                {words.map((word) => (
                    <li key={word.id} style={{ marginBottom: "10px" }}>
                        <label>
                           < input type="checkbox"
                            checked={selectedWords.includes(word.id)}
                            onChange={() => handleCheckboxChange(word.id)}/> 
                        <span style={{ marginLeft: "10px" }}>
                        {word.russian} - {word.norwegian}
                        </span>
                        </label>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default WordList;
