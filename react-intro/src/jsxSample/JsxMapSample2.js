import { categories } from "../data/categories"

const JsxMapSample2 = () => {
    return (
        <>
            <ul>
                {categories.map((category, key) => <li key={category.id}>{category.name}</li>)}
            </ul>
        </>
    )
}

export default JsxMapSample2