const getStoredBook = () => {

    const storedBook = localStorage.getItem('readlist');

    if(storedBook){
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;
    }
    else {
        return [];
    }
}

const addtoDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)){
        alert('Already added to readlist');
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data)

    }
}
export {getStoredBook,addtoDB};