import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";


const Products = () => {

    const [books, setBook] = useState([]);

    useEffect(() => {
        const params = {
            q: "",
        }
        axios.get("http://localhost:3000/books")
            .then((res) => setBook(res.data));
    }, []);

    return (
        <>
            <div className="container my-5">
                <h3>{books.length} Kitap Bulundu</h3>

                <Filter />

                <div className="cards-container">
                    {books.map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;