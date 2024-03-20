import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

const NewProject = ({ onAdd }) => {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const handleSave = (e) => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle.trim() === "" || enteredDescription.trim() == "" || enteredDueDate.trim() == "") {
            // <Modal />
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="close">
                <h2>Invalid Input</h2>
                <p>Oops ..loks like you forgot to enter the value</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
                    <li><button className='px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950'
                        onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input label="Title" ref={title} type="text" />
                    <Input label="Description" textarea ref={description} />
                    <Input label="Due Date" ref={dueDate} type="date" />
                </div>
            </div></>
    )
}

export default NewProject
