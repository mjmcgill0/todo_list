import React, {useState} from 'react';

const List = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const add = (e) => {
        e.preventDefault();
        if(input === '') return;

        setList([...list, {
            text: input,
            complete: false
        }]);
        setInput('');
    }
    const remove = (index) => {
        setList(list.filter((object, i) => i !== index));
    }
    const toggle = (index) => {
        const object = {
            ...list[index]
        };
        object.complete = !object.complete;
        setList([
            ...list.slice(0, index), object].concat(list.slice(index+1)));
    }

    return (
        <div>
            {list.map((object, i) => (
                <div key = {i}>
                    <p style={{textDecoration: object.complete && 'line-through'}}>{object.text}</p>
                    <input type='checkbox' checked={object.complete} onClick={() => toggle(i)} readOnly />
                    <button onClick={() => remove(i)}>Delete</button>
                </div>
            ))}

            <form onSubmit = {add}>
                <input onChange = {e => setInput(e.target.value)} value = {input} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default List;