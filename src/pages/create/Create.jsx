import React, { useState } from 'react';

import './Create.css';

function Create() {
    const [title, setTitle] = useState('');
    const [explanation, setExplanation] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !explanation || !preparation || !image || !url) {
            alert('Please fill in all fields'); // Eksik alan kontrolü
            return;
        }

        const newRecipe = { title, explanation, preparation, image, url };
        console.log(newRecipe);

        setTitle('');
        setExplanation('');
        setPreparation('');
        setImage('');
        setUrl('');
    };

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="explanation" className="form-label">Explanation</label>
                        <textarea className="form-control" name='explanation' id="explanation" rows="3" value={explanation} onChange={(e) => setExplanation(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="preparation" className="form-label">Preparation</label>
                        <textarea className="form-control" name='preparation' id="preparation" rows="3" value={preparation} onChange={(e) => setPreparation(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="text" className="form-control" name='image' id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="url" className="form-label">Url</label>
                        <input type="text" className="form-control" name='url' id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>

                    <button type='submit' className='btn btn-warning'>
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
