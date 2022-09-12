import {ThemeContext} from './ThemeContext'
import {useContext} from 'react'

function Paragraph(){
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Changes color and background color of paragraphs to match then applies them to the current paragraph
        </p>
    )
}

export default Paragraph;