import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("search", text);
        setSearchParams(newSearchParams);
    };

    const handleChange = (e) => {
        const text = e.target.value;

        searchParams.set("sort", text);
        searchParams(searchParams);
    }

    return (
        <div className="d-flex justify-content-between align-items-center my-4 gap-3">
            <div>
                <select className="form-select" onChange={handleChange}>
                    <option value="">sırala</option>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                </select>
            </div>

            <form className="d-flex gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="kitap ismi gir..."
                    defaultValue={searchParams.get('search')}
                />
                <button className="btn btn-primary">Ara</button>
            </form>
        </div>
    );
};

export default Filter;