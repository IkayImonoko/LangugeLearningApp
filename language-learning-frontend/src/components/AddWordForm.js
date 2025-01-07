import React, { useState } from 'react';
import { addWord } from '../services/api';

function AddWordForm() {
   const [formData, setFormData] = useState({
       russian: '',
       norwegian: '',
     }); 

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleAdd = async (event) => {
        setError('');
        setSuccess('');
        try{
        await addWord(formData.russian, formData.norwegian);
        } catch (err) {
            // Обрабатываем ошибки
            setError('Failed to add word. Please try again.');
        }
        };

    return (
        <form>
        <div>
        <label htmlFor="russian">Russian:</label>
            <input
            type="text"
            id="russian"
            name="russian"
            value={formData.russian}
            onChange={handleChange}
            required
            />
        </div>

        <div>
        <label htmlFor="norwegian">Norwegian:</label>
            <input
            type="text"
            id="norwegian"
            name="norwegian"
            value={formData.norwegian}
            onChange={handleChange}
            required
            />
        </div>
        <button onClick={handleAdd} >Add word</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
    );
}

export default AddWordForm;