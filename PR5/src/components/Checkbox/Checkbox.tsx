import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckboxState } from 'E:/STUDY/6 SEM/RKSP/PR5/src/selectors'
import { checkboxClick } from 'E:/STUDY/6 SEM/RKSP/PR5/src/actions'

const Checkbox: React.FC<{ name: string; label: string }> = ({ name, label }) => {
    const dispatch = useDispatch()
    const checked = useSelector(getCheckboxState(name))

    const handleClick = React.useCallback(() => {
        dispatch(checkboxClick(name))
    }, [dispatch, name])

    return (
        <div>
            <input id={name} type="checkbox" checked={checked} onChange={handleClick} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Checkbox