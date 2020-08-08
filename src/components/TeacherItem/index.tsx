import React from 'react';

import whatIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt=""></img>
                <div>
                    <strong>{}</strong>
                    <span></span>
                </div>
            </header>
            <p>{}</p>
            <footer>
                <p> Preço/Hora
                    <strong>{}</strong>
                </p>
                <button type="button">
                    <img src={whatIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;