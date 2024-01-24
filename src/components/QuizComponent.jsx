import './QuizComponent.css'

export default function QuizComponent() {
    return (
        <>
            <div className='main-quiz-container'>
                <h1>Question</h1>
                <p>1 of 15</p>
                <h4>Which is the only mammal that can jump?</h4>
                <div className='options'>
                    <button>Dog</button>
                    <button>Elephant</button>
                    <button>Goat</button>
                    <button>Lion</button>
                </div>
                <div className='buttons'>
                    <button className='previous'>Previous</button>
                    <button className='next'>Next</button>
                    <button className='quit'>Quit</button>
                </div>
            </div>
        </>
    )
}