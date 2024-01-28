import { useEffect, useState } from "react"

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true) //Для перевірки поля на порожність
    const [isEmptyError, setIsEmptyError] = useState('')
    const [minLength, setMinLength] = useState(false) //Для перевірки поля на довжину введену у поле
    const [minLengthError, setMinLengthError] = useState('') 
    const [maxLength, setMaxLength] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState('')
    const [isEmailError, setIsEmailError] = useState(false) //email regaxp javascript 
    const [inValid, setInValid] = useState(false)

    useEffect(() => {
        //https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation   Валидацыя форми 
        //https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions  Регулярное виражение!
        
        for (const validation in validations) {
            
            switch (validation) {
                case 'minLength': // Якщо довжина теперішнього значення в імпуті менша чим значеня, яке зберігається обєкті вілідейшен за ключем валідейшен всьановлюємо помилку у значенні тру, інакше все ок
                    if (value.length < validations[validation]) {
                        setMinLength(true)
                        setMinLengthError(`The password length should be between ${validations.minLength} and ${validations.maxLength} characters long`)
                    } else {
                        setMinLength(false)
                        setMinLengthError('')
                    } 
                    break
                
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLength(true)
                        setMaxLengthError(`Password length must not exceed ${validations.maxLength} characters.`)
                    } else {
                        setMaxLength(false)
                        setMaxLengthError('')
                    } 
                    break
                
                case 'isEmpty':  // Якщо значення в імпуті існує все ок, інакше показуємо помилку. 
                    if (value) {
                        setIsEmpty(false)
                        setIsEmptyError('')
                    } else {
                        setIsEmpty(true)
                        setIsEmptyError('Temptyhe field cannot be')
                    }
                    break
                
                case 'isEmail':
                    const emailRegex ="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                    emailRegex.test(String(value).toLowerCase()) ? setIsEmailError('') : setIsEmailError('Incorrectly entered password')
                    break

                default:
                    return
            }
        }
    }, [value, validations])

   useEffect(() => {
       if (isEmpty || isEmailError || minLength || maxLength) {
           setInValid(false)
       } else {
           setInValid(true)           
     }
   
   }, [isEmpty, isEmailError, minLength, maxLength])
   
    
    return {
        isEmpty,
        isEmptyError,
        minLength,
        minLengthError,
        maxLength,
        maxLengthError,
        isEmailError,
        inValid
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue) // Отримуэмо значення з імпута
    const [isDirty, setIsDirty] = useState(false) //Клік в імпут. 

    const valid = useValidation(value, validations) //Отримуємо результат виконання функції юзВалідейшен

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}