import { useState } from 'react';
import './APIForm.css';

const KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const APIForm = () => {
    const [imageData, setImageData] = useState(null);

    const fetchCatImage = async () => {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=' + KEY + '&has_breeds=true');
            const data = await response.json();
            setImageData(data[0]);
    };

    const [attributeList, setAttributeList] = useState([]);

    const handleAddAttribute = (attribute) => {
        setAttributeList([...attributeList, attribute]);
    };

    const handleDeleteAttribute = (index) => {
        const updatedList = [...attributeList];
        updatedList.splice(index, 1);
        setAttributeList(updatedList);
    };

    return (
        <div className='form'>
            <button onClick={fetchCatImage}>Show Kitty Pic</button>
            <br />
            <br />
            {imageData && (
                <div>
                    <div>
                        <button onClick={() => handleAddAttribute(imageData.breeds[0].name)}>Breed: {imageData.breeds[0].name}</button>
                        <button onClick={() => handleAddAttribute(imageData.breeds[0].life_span)}>Life Span: {imageData.breeds[0].life_span}</button>
                        <button onClick={() => handleAddAttribute(imageData.breeds[0].origin)}>Origin: {imageData.breeds[0].origin}</button>
                    </div>
                    <br></br>
                    <img src={imageData.url} alt="Kitty Pic" style={{ width: '400px', height: '300px' }} />
                </div>
            )}
            <br />
            <ul className='ban'>
                {attributeList.map((attribute, index) => (
                    <button className='ban-button' key={index} onClick={() => handleDeleteAttribute(index)}>{attribute}</button>
                ))}
            </ul>
        </div>
    );
};

export default APIForm;
