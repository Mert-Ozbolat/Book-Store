import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";


const Products = () => {

    const [searchParamas] = useSearchParams()
    const [books, setBook] = useState([]);

    useEffect(() => {
        const params = {
            q: searchParamas.get("search"),
            _sort: "title",
            _order: searchParamas.get('sort') === "z-a" ?
                "desc" : "asc",
        }
        axios.get("http://localhost:3000/books", { params })
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